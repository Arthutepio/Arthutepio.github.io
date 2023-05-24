import '../Css/Home.css'
import NavBar from "../components/NavBar";
import { Container } from '@mui/material'
import Projects from "../components/Projects";
import Knowledge from "../components/Knowledge";
import Contact from "../components/Contact";
import About from '../components/About';

export default function Home() {
    return (
        <Container component="main">
            <NavBar />
            <About />
            <Projects />
            <Knowledge />
            <Contact />
        </Container>
    );

}