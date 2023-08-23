import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container >
      
      <Typography variant="h2" gutterBottom>
          B L O G G O
        </Typography>
        <Typography variant="h3" gutterBottom>
          Página no encontrada
        </Typography>
        <Typography variant="body1" paragraph>
          Lo sentimos, la página que está buscando no existe.
        </Typography>
        <Button component={Link} to="/profile" variant="contained" color="primary">
          Volver a la página principal
        </Button>
      
    </Container>
  );
};

export default NotFound;