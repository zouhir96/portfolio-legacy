import React from "react";
import Link from "next/link";
import { Button, Stack } from "@mui/material";
import Project from "../../components/Project";
import {
  PageContainer,
  PageTitle,
  PageContentContainer,
} from "../../components/Styled";
import { projects as StaticProjects } from "../../public/data/constants";

export default function Projects({project}) {
  return (
    <PageContainer>
      <PageTitle>Projects</PageTitle>
      <PageContentContainer>
        <Project project={project} />
      </PageContentContainer>
      <Thumbs projects={StaticProjects} currentProjectName={project.name} />
    </PageContainer>
  );
}

export async function getStaticProps({params}) {
  const project = StaticProjects.find((e) => e.name === params.name)
  return {
    props: { project }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const paths = StaticProjects.map((project) => ({
    params: { name: project.name },
  }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

const Thumbs = (props) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ width: "100%", justifyContent: "center", marginTop: 1 }}
    >
      {props.projects.map((project, index) => (
        <Link href={"/projects/" + project.name} key={index}>
          <Button
            variant={
              project.name === props.currentProjectName
                ? "contained"
                : "outlined"
            }
            disableElevation={project.name === props.currentProjectName}
          >
            {project.name}
          </Button>
        </Link>
      ))}
    </Stack>
  );
};
