import { Page } from "components/Page";
import { Card } from "./Card";

import * as Styled from "./styles/ContactPage.styles";

import GitHubIcon from "../assets/github-icon.svg";
import GitHubLogo from "../assets/github-logo.svg";
import LinkedInIcon from "../assets/linkedin-icon.svg";
import LinkedInLogo from "../assets/linkedin-logo.svg";
import EmailIcon from "../assets/email-icon.svg";

export const ContactPage = () => (
  <Page id="contact">
    <Styled.ContactPage>
      <Styled.Cards>
        <Card
          headingSource={GitHubLogo}
          iconSource={GitHubIcon}
          link="https://github.com/benapie"
        />
        <Card
          headingSource={LinkedInLogo}
          iconSource={LinkedInIcon}
          link="https://www.linkedin.com/in/benapie/"
        />
        <Card
          headingText="Email"
          iconSource={EmailIcon}
          link="mailto:ben@napier.xyz"
        />
      </Styled.Cards>
    </Styled.ContactPage>
  </Page>
);
