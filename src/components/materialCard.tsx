import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Card, CardContent, CardMedia, ButtonGroup, Button } from '@material-ui/core';
import { Material } from '../types/Material';

interface MaterialCardProps {
    material: Material;
    handleOrderIncrement: any;
    handleOrderDecrement: any;
}

export const MaterialCard = (props: MaterialCardProps) => {
    const [count, setCount] = useState(0);

    return (
        <Grid item xs={3}>
            <Card>
                <CardMedia
                    component="img"
                    height="194"
                    image={`./img/${props.material.imageName}`}
                />
                <CardContent>

                    <Typography variant={"body1"}>
                        {props.material.displayName}
                    </Typography>
                    {/* Opportunity to further componentize this buttongroup as it has consistent behaviour and usage. */}
                    <ButtonGroup>
                        <Button onClick={() => { props.handleOrderIncrement(props.material.id); setCount(count + 1) }}>+</Button>
                        <Button >{count}</Button>
                        <Button disabled={count == 0} onClick={() => { props.handleOrderDecrement(props.material.id); setCount(count > 0 ? count - 1 : count) }}>-</Button>
                    </ButtonGroup>
                </CardContent>
            </Card>
        </Grid>
    )
}