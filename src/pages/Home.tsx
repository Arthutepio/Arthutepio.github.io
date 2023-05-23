
import NavBar from "../components/NavBar";
import { Container } from '@mui/material'
import Projects from "../components/Projects";
import Knowledge from "../components/Knowledge";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <Container component="main">
            <NavBar />
            <Projects />
            <Knowledge />
            <Contact />
        </Container>
    );

}