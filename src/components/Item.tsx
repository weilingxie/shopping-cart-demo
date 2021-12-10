import React from 'react'
import { Material } from '../types/MaterialTypes'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

interface ItemProps {
  item: Material
  addItemToCart: (item: Material) => void
}

const Item: React.FC<ItemProps> = ({ item, addItemToCart }) => {
  const { displayName, imageName } = item
  const handleClick = () => {
    addItemToCart(item)
  }

  return (
    <Grid item lg={4}>
      <Card sx={{ maxWidth: 380 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="150"
            image={`../img/${imageName}`}
            alt={displayName}
          />
          <CardContent sx={{ height: '45px' }}>
            <Typography gutterBottom variant="subtitle2" component="p">
              {displayName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton onClick={() => handleClick()}>
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )

  // return (
  //   <Grid item lg={3}>
  //     <Card sx={{ maxWidth: 345 }}>
  //       <CardHeader>
  //         <Typography>{displayName}</Typography>
  //       </CardHeader>
  //       <CardMedia
  //         component="img"
  //         height="194"
  //         image={`../img/${imageName}`}
  //         alt={displayName}
  //       />
  //       <CardActions disableSpacing>
  //         <IconButton aria-label="share">
  //           <AddShoppingCartIcon onClick={() => handleClick()} />
  //         </IconButton>
  //       </CardActions>
  //     </Card>
  //   </Grid>
  // )

  // return (
  //   <div className="item">
  //     <img src={`../img/${imageName}`} alt={displayName} />
  //     <div className="item-right-side">
  //       <h2>{displayName}</h2>
  //       <button onClick={() => handleClick()}>Add to Cart</button>
  //     </div>
  //   </div>
  // )
}

export default Item
