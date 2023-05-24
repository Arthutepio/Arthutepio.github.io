import { Container, Box } from '@mui/material'
import '../Css/App.css'

function Contact() {
    return (
        <Container className="full-screen-container" component="main" id="contact-container">
            <Box>
                <h1><span style={{ fontSize: '1.5em' }}>#</span> Precisa dos meus serviços?</h1>
            </Box>
        </Container>
    )
}

export default Contact