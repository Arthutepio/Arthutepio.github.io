import { Container, Typography, AppBar, Toolbar } from '@mui/material'
import '../Css/NavBar.css/'

function NavBar() {
    return (
        <Container component="main" >
            <AppBar position="fixed">
                <Toolbar style={{ justifyContent: 'space-evenly' }}>
                        <Typography component="a" variant="inherit" className="no-underline" href="#about-container">
                            # Sobre mim
                        </Typography>
                        <Typography component="a" variant="inherit" className="no-underline" href="#projects-container">
                            # Projetos
                        </Typography>
                        <Typography component="a" variant="inherit" className="no-underline" href="#knowledge-container">
                            # Conhecimentos
                        </Typography>
                        <Typography component="a" variant="inherit" className="no-underline" href="#contact-container">
                            # Contatos
                        </Typography>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default NavBar;