import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera sx={{ mr: 2 }} />
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Hello everyone. This is a photo album made with React and
                Material UI. The development of synthetic acoustic technologies
                and the creation of sound art have led to a consideration of the
                possibilities of a sound-image made up of irreducible phonic
                substance beyond linguistic or musicological analysis.
              </Typography>
              <div>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      View my images
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Get image details
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image="https://source.unsplash.com/random"
                      title="Image Title"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. This section will describe the
                        content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
