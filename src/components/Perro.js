import { Box, Button, Card, CardActions, CardContent, Grid, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { Component }  from 'react';

const Perro = ({perro,estilo=null, funcionCancelados = null, funcionAceptados = null,estadoBoton=null, cancelado= null}) => {
    return(
        
        <Card direction="row" spacing={2} container >
            <CardContent>
                
                <img
                    src={perro}
                    alt="DOG"
                    width="500" height="300" 
                />
            </CardContent>
            
            <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >
                {funcionCancelados && <Button  disabled={estadoBoton} onClick={() => funcionCancelados(perro)} loading={true} 
                variant="contained" color="error" sx={{ height: 40 }}>Rechazar </Button>}

                {funcionAceptados && <Button   disabled={estadoBoton} onClick={() => funcionAceptados(perro)} loading={true}  
                variant="contained" color="success" sx={{ height: 40 }} >Aceptar </Button>}
            
            </Box>
                
                {/* <Card> 
                    <Stack direction="row" justifyContent="left">
                        {funcionCancelados && <Button  disabled={estadoBoton} onClick={() => funcionCancelados(perro)} loading={true} >Rechazar </Button>}
                    </Stack>
                    <Stack direction="row" >
                        {funcionAceptados && <Button variant="contained" disabled={estadoBoton} onClick={() => funcionAceptados(perro)} loading={true} >Aceptar </Button>}  
                    </Stack>
                </Card>      */}

                

                
                
            
        </Card>
    );
}
export default Perro;