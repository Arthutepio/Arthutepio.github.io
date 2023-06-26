import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/project/project-sections";

export default async function Project() {
    return (
        <>
            <ProjectDetails />
            <ProjectSections />
        </>
    )
}