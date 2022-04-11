import * as React from 'react';
import { experiences } from "../public/data/constants";
import {
  PageContainer,
  PageTitle,
  PageContentContainer,
} from "../components/Styled";
import Experience from "../components/Experience";

function Experiences({ exps }) {
  return (
    <PageContainer>
      <PageTitle>Experiences</PageTitle>
      <PageContentContainer>
        {exps.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </PageContentContainer>
    </PageContainer>
  );
}

export default Experiences;

export async function getStaticProps(context) {
  return {
    props: { exps: experiences }, // will be passed to the page component as props
  };
}

