import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from '@mui/material'

type CardProps = {
  image: string
  name: string
  status: string
  species: string
}

export const CardComponent: React.FC<CardProps> = ({
  image,
  name,
  species,
  status,
}) => {
  return (
    <Card>
      <CardMedia component="img" height="194" image={image} alt="paella dish" />
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Especie: {species} </Typography>
        <Typography sx={{ mt: 1.5 }}>Estado: {status}</Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" size="small">
          Learn more
        </Button>
      </CardActions>
    </Card>
  )
}