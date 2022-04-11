import { Button, Container, Grid, Typography, Avatar } from "@mui/material";
import * as React from "react";
import { hero } from "../public/data/constants";

function Hero({ hero }) {
  return (
    <Container>
      <Grid container direction={{ xs: "column-reverse", md: "row" }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom component="div" mt={{xs: 2, md: 10 }}>
            Hi, I am {hero.name}
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            {hero.job}
          </Typography>
          <Typography variant="caption" gutterBottom component="div" mt={5}>
            {hero.summary}
          </Typography>
          <a href="/static/zouhir_rajdaoui.pdf" download>
            <Button variant="contained" color="error" sx={{ marginTop: {xs: 1, md: 2 } }}>
              Download Resume
            </Button>
          </a>
        </Grid>
        <Grid item xs={12} md={4}>
          <Avatar
            alt={hero.name}
            src={hero.image}
            sx={{
              marginTop: { xs: 0, md: 10 },
              marginLeft: "auto",
              marginRight: "auto",
              width: {xs: 100, md: 200 },
              height: {xs: 100, md: 200 },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      hero,
    },
  };
};
