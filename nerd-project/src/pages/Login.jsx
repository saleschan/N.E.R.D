import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout";
import nerd from "../assets/img/nerd.png";
import fotin from "../assets/img/fotin.png";
import nerdLogo from "../assets/img/nerdLogo.png"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../global.css";

export default function Login() {
  return (
    <Layout>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box>
          <form>
            <Container
              sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card sx={{ width: "90%", minHeight: "80%" }}>
                <CardContent
                  sx={{
                    borderRadius: 2,
                    textAlign: "center",
                    pt: 3.75,
                    pd: 3.75,
                    pl: 2,
                    pr: 2,
                    background: "rgba(225, 225, 225, 0.133)",
                    border: "1px solid ",
                    backdropFilter: "blur(3px)",
                    boxShadow: "0 0 6px 0 rgba(29, 29, 29, 0.203)",
                  }}
                >
                  <Box mb={10}>
                    <Container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography mb={1} variant="h3" pt={3} >
                        <img src={nerdLogo} width={150} className="logo" />
                      </Typography>
                    </Container>
                  </Box>
                  <Box color={"white"}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ required: false }}
                      variant="standard"
                      label="Email"
                      type={"email"}
                      sx={{ mt: 2.5, mb: 2.5 }}
                      required
                    />

                    <TextField
                      fullWidth
                      variant="standard"
                      label="Pass"
                      type={"password"}
                      InputLabelProps={{ required: false }}
                      sx={{
                        mt: 2.5,
                        mb: 2.5,
                        color: "secondary.light",
                      }}
                      required
                    />
                  </Box>
                  <Button
                    sx={{
                      mt: 2.5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "primary.light",
                    }}
                    variant="contained"
                  >
                    Entrar
                  </Button>
                  <Typography mt={2.5}>
                    Não possui uma conta? Clique aqui
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </form>
        </Box>
        <Box>
          <Carousel
            className="slider"
            autoPlay
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
          >
              <Card>
                <img src={nerd}  width={'550px'} height={'375px'} />
              </Card>
              <Card>
                <img src={fotin} />
              </Card>
              <Card>
                <img src={nerd} />
              </Card>
              <Card>
                <img src={nerd} />
              </Card> 
              <Card>
                <img src={nerd} />
              </Card> 
          </Carousel>
        </Box>
      </Box>
    </Layout>
  );
}
