import {Meta, StoryObj} from "@storybook/react";
import {ProjectContainer} from "./index.tsx";

const meta: Meta<typeof ProjectContainer> ={
    title:'Atoms/ProjectContainer',
    component:ProjectContainer
    ,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ProjectContainer>

export const Default: Story = {
    render: () => <ProjectContainer projectTitle={"Project Title"} projectDescription={"This is a generic description for a project example"}
                                    projectImage={"https://via.placeholder.com/175x175"} projectLink={"https://github.com/FranCalveyra"}
                                    usedTechnologies={["python", "docker", "django", "mongodb", "react", "ts", "js", "nginx"]}/>
}