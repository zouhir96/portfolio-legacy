import React from "react";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import {
  PageContentItem,
  HorizontalBox,
  VerticalBox,
  Title,
  SubTitle,
  Date,
  Activity,
} from "./Styled";

export default function Education({ education }) {
  return (
    <PageContentItem>
      <Grid container columnSpacing={10}>
        <Grid item xs={12} sm={1}>
          <Image src={education.image} height={80} width={80} layout="fixed" />
        </Grid>
        <Grid item xs={12} sm={11}>
          <VerticalBox>
            <Title>{education.school}</Title>
            <SubTitle>{`${education.degree}, ${education.field}`}</SubTitle>
            <HorizontalBox>
              <Date>{education.startDate} &ensp; - &ensp;</Date>
              <Date>{education.endDate}</Date>
            </HorizontalBox>
            <VerticalBox>
              {education.activities.map((act, index) => (
                <Activity key={index}>{act}</Activity>
              ))}
            </VerticalBox>
          </VerticalBox>
        </Grid>
      </Grid>
    </PageContentItem>
  );
}
