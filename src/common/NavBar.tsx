import {
	AppBar,
	Box,
	Toolbar,
	Container,
	Grid,
	Button,
	Typography,
	Stack
} from '@mui/material'
import React from 'react'

export const NavBar: React.FC<{}> = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Toolbar>
					<Container maxWidth="xl">
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Grid item>
								<Typography>Codrr</Typography>
							</Grid>
							<Grid item>
								<Stack direction="row" spacing={2}>
									<Button variant="outlined">Login</Button>
									<Button variant="contained">Registrer</Button>
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	)
}