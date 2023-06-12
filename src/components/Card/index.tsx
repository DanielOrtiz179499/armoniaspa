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
import { useNavigate } from 'react-router-dom'

type CardProps = {
  image: string
  name: string
  status: string
  species: string
  id: number
}

export const CardComponent: React.FC<CardProps> = ({
  image,
  name,
  species,
  status,
  id,
}) => {
  let navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`/character/${id}`)}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  )
}
