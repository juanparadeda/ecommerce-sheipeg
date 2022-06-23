// React router imports
import { Link } from "react-router-dom"
// MUI imports
import { Typography } from "@mui/material";

const Brand = () => {
    return (
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                marginLeft: '15px'
              }}
            >
              Sheipeg
            </Typography>
          </Link >
    )
}

export default Brand;