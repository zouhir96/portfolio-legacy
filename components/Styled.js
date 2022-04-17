import styled, { keyframes } from "styled-components";

// sidebar
export const SocialMedias = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

export const PageTitle = styled.span`
  font-size: 2.188rem;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
  text-align: left;
  color: #06205d;
`;

export const PageContentContainer = styled.div`
  width: 100%;
  height: 98%;
`;

export const PageContentItem = styled.div`
  width: 100%;
  padding: 1rem;
  margin-top: 1%;
  border-radius: 12px;
  border: solid 1px #707070;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: rgba(24, 49, 108, 0.7);
`;

export const SubTitle = styled(Title)`
  font-size: 0.8rem;
`;

export const Date = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: rgba(24, 49, 108, 0.7);
`;

export const Description = styled.span`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: rgba(24, 49, 108, 0.7);
`;

export const Activity = styled.span`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: rgba(24, 49, 108, 0.7);
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BoxItem = styled.div`
  flex: 1 1 30%;
`;

export const HorizontalBox = styled(Box)`
  flex-direction: row;
`;

export const VerticalBox = styled(Box)`
  flex-direction: column;
`;

export const Line = styled.hr`
  background-color: rgba(112, 112, 112, 0.27);
`;

export const VerticalLine = styled(Line)`
  margin-left: 8px;
  margin-right: 8px;
  height: 100px;
`;

export const HorizontalLLine = styled(Line)`
  margin-top: 2px;
  margin-bottom: 2px;
  width: 100%;
`;

export const ProjectContainer = styled.div`
  margin-top: 1%;
  padding: 16px 22px 16px 22px;
  border-radius: 20px;
  background-color: #e2eafc;
`;

export const ProjectImagesContainer = styled.div`
  height: 100%;
  width: 80%;
  position: relative;
`;

const fade = keyframes`
  from {opacity: .4}
  to {opacity: 1}
`;

export const ProjectImageBox = styled.div`
  height: 100%;
  width: 100%;
  min-height:300px;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  animation-name: ${fade};
  animation-duration: 1.5s;
  border-radius: 7px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

export const ProjectImageBottomShadow = styled.div`
  height: 70%;
  margin-top: auto;
  display: flex;
  padding: 40px;
  flex-direction: column;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #313131);
  border-radius: 7px;
`;

export const ProjectName = styled.span`
  font-size: 18px;
  font-weight: 900;
  margin-top: auto;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

export const ProjectTitle = styled(SubTitle)`
  font-size: 16px;
  font-weight: 900;
`;

export const ProjectFeatures = styled(VerticalBox)`
  margin: 7px 0px 7px 10px;
`;
