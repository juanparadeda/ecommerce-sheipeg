// MUI imports
import { Box, Divider } from '@mui/material'
// Site components imports
import './footer.scss'

const Footer = () => {

    return (
        <Box className='footer' sx={{
            backgroundColor: 'secondary.dark',
            width: '100%',
            boxShadow: '0px -2px 4px -1px rgb(0 0 0 / 30%), 0px -4px 5px 0px rgb(0 0 0 / 20%), 0px -1px 10px 0px rgb(0 0 0 / 14%);'
        }}
        >
            <footer className='footerContainer'>
                <Box className='footerBox'>
                    <p>info@sheipeg.com</p>
                    <p>0800-666-6666</p>
                    <p>Defensa al Consumidor</p>
                    <p>Política de Privacidad</p>
                </Box>
                <Divider variant="middle" color='white' orientation="vertical" flexItem />
                <Box className='footerBox'>
                    <p>Instagram: @sheipeg</p>
                    <p>Linkedin: /sheipeg/in</p>
                    <p>Política de Devoluciones</p>
                    <p>Sé Parte del Equipo de Sheipeg</p>
                </Box>
            </footer>
        </Box>

    )
}

export default Footer