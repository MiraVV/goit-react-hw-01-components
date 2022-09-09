import styled from "@emotion/styled";

export const ProfileCard = styled.div`
text-align: center;
 max-width: 250px;
 margin-left:auto;
 margin-right:auto;
 margin-top: 40px;
 margin-bottom:40px;
 background-color: #ffffff;
 border-radius: 4px;
 
 box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

export const Description = styled.div`
    padding-top: 32px;
    margin-left: auto;
    margin-right: auto;
`
export const ProfileImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: grey;

`;

export const ProfileName = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  color: black;
`;

export const ProfileNameInfo = styled.p`
color: grey;
`
export const ProfileTag = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: grey;
`;
export const Stats = styled.ul`
list-style-type: none;
display: flex;
width: 100%;
padding-left: 0;
background-color: #f0f0f0;

margin-bottom:0;
// border-radius: 0 4px;
`
export const StatsElement = styled.li`
display: inherit;
width: calc(100%/3);
padding-top: 16px;
padding-bottom: 16px;
color: #787878;
display: block;
border: solid 1px #e0e0e0;
`
export const StatsElementLabel = styled.span`
  margin-bottom: 5px;
  font-size: 14px;
  display: block;
`;

export const StatsElementQuantity = styled.span`
  font-weight: 700;
  color: black;
  display: block;
`;