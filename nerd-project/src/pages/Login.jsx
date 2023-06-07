import React from 'react'
import { Avatar, Box, Card, CardContent, Container, TextField, Typography } from '@mui/material'
import Layout from '../components/Layout'

export default function Login() {
	return (
		<Layout>
			<form>
				<Container sx={{
					width: "100vw",
					minHeight: "100vh",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
				}}>

					<Card sx={{ width: "50%", minHeight: "80%" }}>
						<CardContent>
							<Box mb={10}>
								<Container sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
								}}>

									<Typography mb={1} variant='h3'>
										Login
									</Typography>
									<Avatar sx={{ background: '#cccccc' }}></Avatar>
								</Container>
							</Box>
							<Box>
								<TextField
									fullWidth
									placeholder='email'
									type={'email'}
									sx={{ marginTop: 2.5, marginBottom: 2.5 }}
									required
								/>

								<TextField
									fullWidth
									placeholder='senha'
									type={'password'}
									sx={{ marginTop: 2.5, marginBottom: 2.5 }}
									required
								/>
							</Box>
						</CardContent>
					</Card>

				</Container>
			</form>
		</Layout>
	)
}
