import { Button, Container } from '@mui/material'
import React from 'react'
import { HeaderComponent } from '../../../components'

export const HomePage: React.FC<{}> = () => {
  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Bienvenido"
        element={
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
    </Container>
  )
}
