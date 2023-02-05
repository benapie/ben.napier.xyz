import { Card } from "./Card";

import * as Styled from "./styles/ContactPage.styles";

import GitHubIcon from "../assets/github-icon.svg";
import GitHubLogo from "../assets/github-logo.svg";
import LinkedInIcon from "../assets/linkedin-icon.svg";
import LinkedInLogo from "../assets/linkedin-logo.svg";
import EmailIcon from "../assets/email-icon.svg";

export const ContactPage = () => (
  <Styled.ContactPage>
    <Styled.Cards>
      <Card headingSource={GitHubLogo} iconSource={GitHubIcon} />
      <Card headingSource={LinkedInLogo} iconSource={LinkedInIcon} />
      <Card headingText="Email" iconSource={EmailIcon} />
    </Styled.Cards>
  </Styled.ContactPage>
);
