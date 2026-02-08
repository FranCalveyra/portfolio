import React from 'react';
import { Code, Gamepad2, Heart, Lightbulb, Users, Github, Linkedin, MapPin, Globe, Smartphone } from 'lucide-react';
import MateIcon from '../components/icons/MateIcon';

/** About section: skill and fun-fact icons by name (from Firestore). */
export const aboutIconMap: Record<string, React.ElementType> = {
  Code,
  Lightbulb,
  Users,
  Heart,
  Mate: MateIcon,
  Gamepad2,
};

/** Contact section: social/location icons by name. */
export const contactIconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  MapPin,
};

/** Projects section: project type icons by name. */
export const projectIconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Gamepad2,
};
