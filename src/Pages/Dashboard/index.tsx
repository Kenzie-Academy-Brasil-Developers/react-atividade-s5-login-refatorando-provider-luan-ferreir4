import { Logout } from "../../Components/Logout";
import { LogoutContainer } from "../../Styles/ComponentsStyles/LogoutContainer";
import { Page } from "../../Styles/PageLayout";

const Dashboard = () => {
  return (
    <Page>
      <LogoutContainer>
        <h4>Hello!</h4>
        <Logout />
      </LogoutContainer>
    </Page>
  );
};
export default Dashboard;
