// import { OuterContainer } from "Features/Search/Layouts/CommentsPage/CommentsPage.styled";
// import HeadingContent from "../Components/HeadingContent/HeadingContent.jsx";
// import Posts from "../Layouts/Posts/Posts.jsx";
import { BodyContainer, Container, OuterContainer } from "./Explore.styled.js";
import { useState } from "react";
// import Communities from "../Layouts/Communities/Communities.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import HeadingContent from "Components/HeadingContent/HeadingContent.jsx";
import Posts from "Layouts/Posts/Posts.jsx";
import Communities from "Layouts/Communities/Communities.jsx";
import useFetchFunction from "Hooks/useFetchFunction.js";
import { useEffect } from "react";
import fetchCommunities from "Features/Search/Services/fetchCommunities.js";
import fetchSubbcomm from "Features/Search/Services/fetchSubbcomm.js";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useContext } from "react";
import CategoryContext from "Contexts/CategoryContext/Category-context.js";
import fetchPosts from "Features/Search/Services/fetchPosts.js";
const Explore = () => {
  const auth = useAuth();
  const [Active, setActive] = useState("Posts");
  let [CommunityList, errorCommunity, loadingCommunity, fetchCommunity] =
    useFetchFunction();
  let [
    CommunitiesSub2,
    errorSubCommunities,
    loadingSubCommunities,
    reloadSubCommunities,
  ] = useFetchFunction();
  const [PostList, error, loading, fetch] = useFetchFunction();
  console.log(PostList);

  const ctx = useContext(CategoryContext);
  const location = useLocation();
  const url = location.pathname;
  const top = url.split("/")[3];
  console.log(top);
  useEffect(() => {
    ctx.CategoryHandler(top);
    fetchCommunities(fetchCommunity, auth, top);
    fetchSubbcomm(reloadSubCommunities, auth);
    fetchPosts(fetch, auth, top);
  }, [top]); // Only re-run the effect if count changes
  return (
    <Container>
      <OuterContainer>
        <HeadingContent Active={Active} setActive={setActive} />
        <BodyContainer>
          <Routes>
            <Route
              path="posts/*"
              element={
                <Posts
                  CommunityList={CommunityList}
                  CommunitiesSub2={CommunitiesSub2}
                  PostList={PostList}
                />
              }
            />
            <Route
              path="Communities/*"
              element={
                <Communities
                  CommunityList={CommunityList}
                  CommunitiesSub2={CommunitiesSub2}
                />
              }
            />
          </Routes>
          {/* <Posts /> */}
          {/* <Communities /> */}
        </BodyContainer>
      </OuterContainer>
    </Container>
  );
};

export default Explore;