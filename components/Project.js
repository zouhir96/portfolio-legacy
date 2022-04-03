import React from "react";
import { Container, Divider, Grid, Paper } from "@mui/material";
import {
  VerticalBox,
  SubTitle,
  Date,
  Activity,
  ProjectImagesContainer,
  ProjectImageBox,
  ProjectImageBottomShadow,
  ProjectName,
  ProjectContainer,
  ProjectTitle,
  ProjectFeatures,
} from "./Styled";

export default function Project({ project }) {
  return (
    <ProjectContainer>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <ProjectImagesSlider images={project.images} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProjectContent project={project} />
        </Grid>
      </Grid>
    </ProjectContainer>
  );
}

const ProjectImagesSlider = (props) => {
  const [activeImage, setActiveImage] = React.useState(0);
  const imagesCount = props.images.length;
  setTimeout(() => {
    if (activeImage + 1 > imagesCount - 1) {
      setActiveImage(0);
    } else {
      setActiveImage(activeImage + 1);
    }
  }, 3000);

  return (
    <ProjectImagesContainer>
      {props.images.map((img, index) => (
        <ProjectImage
          key={index}
          image={img}
          isActive={index === activeImage}
        />
      ))}
    </ProjectImagesContainer>
  );
};

const ProjectImage = (props) => {
  return (
    <ProjectImageBox isActive={props.isActive} img={props.image.src}>
      <ProjectImageBottomShadow>
        <ProjectName>{props.image.description}</ProjectName>
      </ProjectImageBottomShadow>
    </ProjectImageBox>
  );
};

const ProjectContent = (props) => {
  return (
    <VerticalBox>
      <ProjectTitle>
        Associated With: {props.project.associatedWith}
      </ProjectTitle>
      <Date>
        {props.project.startDate} &ensp; - &ensp; {props.project.endDate}
      </Date>
      <ProjectFeatures>
        {props.project.features.map((feat, index) => (
          <Activity key={index}>{feat}</Activity>
        ))}
      </ProjectFeatures>
      <SubTitle>Top Features:</SubTitle>
      <ProjectFeatures>
        {props.project.topFeautres.map((feat, index) => (
          <Activity key={index}>{feat}</Activity>
        ))}
      </ProjectFeatures>
      <SubTitle>Utils:</SubTitle>
      <ProjectUtils utils={props.project.utils} />
    </VerticalBox>
  );
};

const ProjectUtils = (props) => {
  return (
    <Grid container columnSpacing={2}>
      {props.utils.map((util, index) => (
        <Grid
          item
          key={index}
          xs={6}
          sm={4}
          sx={{ outline: "1px solid black", padding: 1 }}
        >
          <VerticalBox>
            <SubTitle>{util.type}</SubTitle>
            <Divider />
            <Activity>{util.items.join(", ")}</Activity>
          </VerticalBox>
        </Grid>
      ))}
    </Grid>
  );
};
