import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import materials from './materials.json'
import { Box, Card, CardHeader, Grid } from '@material-ui/core';
import { MaterialCard } from './components/materialCard';
import { OrderSummary } from './components/orderSummary';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
}));

export default function MaterialList() {
  // Utilities
  const classes = useStyles();
  const localMats = materials.materials;

  // Page State
  const [orderSummary, setOrderSummary] = useState([]);

  const buildMaterialListComponents = () => {
    let components = [];

    localMats.forEach((x, index) => {
      components[index] = <MaterialCard
        material={localMats[index]}
        handleOrderIncrement={handleMaterialIncrement}
        handleOrderDecrement={handleMaterialDecrement}
      />
    })

    return components;
  }

  const handleMaterialIncrement = (materialId) => {
    // Create a local copy of the current summary, mutating state directly causes problems.
    let localSummary = Object.assign([], orderSummary);

    // Check if the requested material exists within the current order summary.
    let materialExistsInOrder = localSummary.find(x => x.id == materialId);

    // If it doesnt exist at all, create a new entry.
    if (materialExistsInOrder == undefined || materialExistsInOrder == false) {
      // Pull the full material object from the local master list.
      let thisMaterial = localMats.find(x => x.id == materialId);

      // Append the material to the order summary.
      // Consider converting this object to a typescript interface, which will require converting this file to TSX.
      localSummary.push(
        {
          id: thisMaterial.id,
          name: thisMaterial.displayName,
          count: 1
        }
      )
    } else {
      // Otherwise, we can reasonably assume it does exist and can add to an existing entry.
      let thisMaterialSummary = localSummary.find(x => x.id == materialId);

      thisMaterialSummary.count++;
    }

    setOrderSummary(localSummary);
  }

  // Controls the behavior when a specific product is reduced in quant.
  const handleMaterialDecrement = (materialId) => {
    // Create a local copy of the current summary, mutating state directly causes problems.
    let localSummary = Object.assign([], orderSummary);

    // Check if the requested material exists within the current order summary.
    let materialExistsInOrder = localSummary.find(x => x.id == materialId);

    // If the material exists, continue mutating it.
    if (materialExistsInOrder) {
      let thisMaterialSummary = localSummary.find(x => x.id == materialId);
      thisMaterialSummary.count--;

      // If this count reduction caused a 0 value, remove the entry from the summary entirely.
      if (thisMaterialSummary.count <= 0) {
        localSummary = localSummary.filter(x => x.id != materialId);
      }
    }

    setOrderSummary(localSummary);
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <OrderSummary summary={orderSummary}/>
      </Grid>
      {/* Note that containers should be contained inside Grid items, nesting containers directly may introduce unexpected behaviour. */}
      <Grid item>
        <Grid container spacing={2}>
          {buildMaterialListComponents()}
        </Grid>
      </Grid>
    </Grid>
  );
}
