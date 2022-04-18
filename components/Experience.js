import React from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import {
  PageContentItem,
  HorizontalBox,
  VerticalBox,
  Activity,
  Title,
  Date,
} from "./Styled";

function Experience({ experience }) {
  return (
    <PageContentItem>
      <Grid container columnSpacing={10}>
        <Grid item xs={12} sm={12} md={6}>
          <VerticalBox style={{ height: `100%` }}>
            <Title>{experience.title}</Title>
            <HorizontalBox>
              <Date style={{ WebkitMarginEnd: 20 }}>
                {experience.startDate}
              </Date>
              <Date>{experience.endDate}</Date>
            </HorizontalBox>
            <VerticalBox>
              {experience.activities.map((e, index) => (
                <Activity key={index}>{e}</Activity>
              ))}
            </VerticalBox>
          </VerticalBox>
        </Grid>
        <Divider sx={{ marginRight: -1, display:{xs:'none', md:'block'} }} orientation="vertical" flexItem />
        <Grid item xs={12} sm={12} md={6}>
          <Activity>{experience.description}</Activity>
        </Grid>
      </Grid>
    </PageContentItem>
  );
}

export default Experience;
