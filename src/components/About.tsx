import { Container, Box, Grid } from '@mui/material'
import '../Css/App.css'
import imagem from '../assets/Como-se-tornar-um-desenvolvedor-de-sistemas.jpg'

function About() {
    return (
        <Container className="full-screen-container" component="main" id="about-container">
            <Box>
                <Grid container spacing={5} mt={10}>
                    <Grid item xs={12} sm={6} border={1} >
                        <h1><span style={{ fontSize: '1.5em' }}>#</span> Olá</h1>
                        <h3>Meu nome é Arthur, sou desenvolvedor fullstack...</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} border={1}>
                        <img src={imagem} alt='imagem' style={{ maxWidth: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default About