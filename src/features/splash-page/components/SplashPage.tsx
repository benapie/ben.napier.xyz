import { Page } from "components/Page";
import { SplashScreen } from "./SplashScreen";
import * as Styled from "./styles/SplashPage.styles";

export const SplashPage = () => (
  <Page id="splash">
    <Styled.SplashPage>
      <SplashScreen />
    </Styled.SplashPage>
  </Page>
);
