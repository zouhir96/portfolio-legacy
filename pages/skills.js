import React from "react";
import {
  PageContainer,
  PageTitle,
  PageContentContainer,
} from "../components/Styled";
import { skills as skillList } from "../public/data/constants";
import { CardMedia, CardContent, Grid, Card, Typography } from "@mui/material";

export default function skills({ skills }) {
  return (
    <PageContainer>
      <PageTitle>I am Skilled in:</PageTitle>
      <PageContentContainer>
        <Skills list={skills} />
      </PageContentContainer>
    </PageContainer>
  );
}

const Skills = ({ list }) => {
  return (
    <Grid
      sx={{ height: "70vh", overflow: "auto", marginTop: 1 }}
      container
      direction={"row"}
      spacing={1}
    >
      {list.map((skill, index) => (
        <Grid item key={index} xs={6} md={3}>
          <Card variant="outlined">
            <CardMedia
              sx={{ backgroundSize: '100%', objectFit:'fill' }}
              component="img"
              height="100"
              image={skill.icon}
              alt={skill.name}
            />
            <CardContent>
              <Typography variant="h6" color="primary">
                {skill.name}
              </Typography>
              <Typography variant="body1" color="primary">
                {skill.level}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export const getStaticProps = async (ctx) => {
  return {
    props: {
      skills: skillList,
    },
  };
};
