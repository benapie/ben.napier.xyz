import { Page } from "components/Page";
import { Timeline } from "./Timeline";
import * as Styled from "./styles/ExperiencePage.styles";

export const ExperiencePage = () => (
  <Page id="xp">
    <Styled.ExperiencePage>
      <Timeline />
    </Styled.ExperiencePage>
  </Page>
);
