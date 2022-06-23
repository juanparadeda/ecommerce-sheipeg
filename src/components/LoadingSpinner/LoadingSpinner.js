// MUI imports
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// Site components imports
import './LoadingSpinner.scss';

const LoadingSpinner = ({display}) => {

    return (
        <Box className="loadingSpinner" sx={display}>
            <CircularProgress />
        </Box>
    )
}

export default LoadingSpinner;