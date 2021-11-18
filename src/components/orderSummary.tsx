import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Card, CardContent, CardMedia, ButtonGroup, Button, CardHeader, List, ListItemText, ListItem } from '@material-ui/core';
import { Material } from '../types/Material';

interface OrderItem {
    id: string,
    name: string,
    count: number
}

interface OrderSummaryProps {
    summary: OrderItem[]
}

const buildSummaryListItems = (summary: OrderItem[]) => {
    let components: any = [];

    if (summary.length > 0) {
        summary.forEach((x: OrderItem) => {
            components.push(
                <ListItem>
                    <Typography variant="overline">{`${x.count}x - ${x.name}`}</Typography>
                </ListItem>
            )
        })
    }

    return components;
}

export const OrderSummary = (props: OrderSummaryProps) => {
    const [count, setCount] = useState(0);

    return (
        <Card>
            <CardHeader
                title="Order Summary"
            />
            <CardContent>
                {buildSummaryListItems(props.summary)}
            </CardContent>
        </Card>
    )
}