import { Link } from "react-router-dom"
import { Button } from "@mui/material"
const DesktopNavButton = ({children, link}) =>{
    return(
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={link}>
        <Button
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {children}
        </Button>
      </Link>
    )
}

export default DesktopNavButton;