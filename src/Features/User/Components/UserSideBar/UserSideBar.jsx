import ModeratorOf from "../ModeratorOf/ModeratorOf";
import UserSideCard from "../UserSideCard/UserSideCard";
import { Container, InnerContainer } from "./UserSideBar.styled";

/**
 * user side bar component
 * 
 * @returns {React.Component}
 */
const UserSideBar = () => {
  return (
    <Container>
      <InnerContainer>
        <UserSideCard />
        <ModeratorOf />
      </InnerContainer>
    </Container>
  );
};

export default UserSideBar;
