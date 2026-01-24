import { ExperienceCard } from "@/components/ExperienceCard"
import { ProjectsCard } from "@/components/ProjectsCard"
import { ContactPanel } from "@/components/ContactPanel"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Background } from "@/components/Background"
import { MainCard } from "@/components/MainCard"
import { Navbar } from "@/components/Navbar"

export const Home = () => {
    return <div className="min-h-screen bg-background  text-foreground overflow-x-hidden">
            {/* Background Effects*/}
                <Background />
            {/* Navbar*/}
                <Navbar />
            {/* Main Content*/}
                <main>
                    <MainCard />
                    <ExperienceCard />
                    <ProjectsCard />
                </main>
            {/* Footer*/}
                <ContactPanel />
        </div>
}