import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, firebaseConfig } from "../lib/firebase";
import type { PortfolioData } from "../types/portfolio";

interface PortfolioContextValue {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPortfolio() {
      setError(null);
      if (!firebaseConfig.apiKey) {
        setError("Firebase is not configured.");
        setLoading(false);
        return;
      }
      try {
        const docRef = doc(db, "portfolio", "data");
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setData(snap.data() as PortfolioData);
        } else {
          setError("Portfolio document not found in Firestore.");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load portfolio"
        );
      } finally {
        setLoading(false);
      }
    }
    fetchPortfolio();
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePortfolio(): PortfolioContextValue {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return ctx;
}
