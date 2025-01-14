// Import styled components
import { Container, Footer, CommunityCardContainer } from "./Sidebar.styled";

// Import components
import PostGuidelines from "Features/Post/Components/PostGuidelines/PostGuidelines";

// Import react router dom components
import { Link } from "react-router-dom";
import RulesWidget from "Features/Post/Components/RulesWidget/RulesWidget";
import CommunityCard from "Features/Post/Components/CommunityCard/CommunityCard";
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";

import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect } from "react";
import getCommunityInfo from "Features/Post/Services/getCommunityInfo";
import UserSideBar from "Features/Post/Components/UserSideBar/UserSideBar";
/**
 * Sidebar component (The sidebar in the create post page)
 *
 * @returns {React.Component} Sidebar component (The sidebar in the create post page)
 */
const Sidebar = () => {
  const { submitDestination, setSubmitDestination } = useSubmitDestination();
  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const auth = useAuth();
  useEffect(() => {
    submitDestination &&
      submitDestination._id &&
      getCommunityInfo(dataFetch, submitDestination._id, auth);
  }, [submitDestination]);
  return (
    <Container>
      {submitDestination && submitDestination.type === "subreddit" && (
        <div data-testid="community-data">
          {data && data.things && data.things[0] && !isLoading && (
            <CommunityCard communityInfo={data.things[0]} />
          )}
          {data && data.things && data.things[0] && !isLoading && (
            <RulesWidget
              rules={data.things[0].communityRules}
              communityId={data.things[0]._id}
            />
          )}
        </div>
      )}
      {submitDestination && submitDestination.type === "user" && (
        <UserSideBar />
      )}
      <PostGuidelines />

      <Footer data-testid="footer">
        Please be mindful of reddit's <Link to="/">content policy</Link> and
        practice good <Link to="/"> reddiquette</Link>.
      </Footer>
    </Container>
  );
};

export default Sidebar;
