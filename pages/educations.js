import React from 'react'
import Education from '../components/Education'
import {educations} from '../public/data/constants'
import {PageContainer, PageTitle, PageContentContainer} from '../components/Styled'

function Educations({edus}) {
    return (
        <PageContainer>
            <PageTitle>Educations</PageTitle>
            <PageContentContainer>
                {edus.map((edu, index) => <Education key={index + edu.school}  education = {edu}/>)}
            </PageContentContainer>
        </PageContainer>
    )
}

export default Educations

export async function getStaticProps(context) {
    return {
      props: { edus: educations }, // will be passed to the page component as props
    };
  }
