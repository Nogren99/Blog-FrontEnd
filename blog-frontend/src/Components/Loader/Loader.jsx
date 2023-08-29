import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';


const Loader = () => {
    return (

        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
        <CircularProgress
            color="neutral"
            determinate={false}
            size="lg"
        />
        </div>


    );
};

export default Loader;