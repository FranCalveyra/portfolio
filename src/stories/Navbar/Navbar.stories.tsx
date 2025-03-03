import {Meta, StoryObj} from "@storybook/react";
import Navbar from "./index.tsx";

const meta: Meta<typeof Navbar
> ={
    title:'Atoms/Navbar',
    component:Navbar
    ,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Navbar
>

export const Default: Story = {
    render: () => <Navbar/>
}