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
  HorizontalBox,
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

  const project = props.project;
  return (
    <VerticalBox>
      <ProjectTitle>
      {project.name},   Associated With: {project.associatedWith}
      </ProjectTitle>
      <Date>
        {project.startDate} &ensp; - &ensp; {project.endDate}
      </Date>
      <ProjectFeatures>
        {project.features.map((feat, index) => (
          <Activity key={index}>{feat}</Activity>
        ))}
      </ProjectFeatures>
      <SubTitle>Top Features:</SubTitle>
      <ProjectFeatures>
        {project.topFeautres.map((feat, index) => (
          <Activity key={index}>{feat}</Activity>
        ))}
      </ProjectFeatures>
      <SubTitle>Utils:</SubTitle>
      <ProjectUtils utils={project.utils} />
    </VerticalBox>
  );
};

const ProjectUtils = (props) => {
  return (
    <>
      {props.utils.map((util, index) => (
        <SubTitle key={index}>{util.type}: {util.items.join(", ")}</SubTitle>
      ))}
    </>
  );
};
