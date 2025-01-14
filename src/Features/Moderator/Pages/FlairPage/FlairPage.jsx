// import { auth } from "Features/Authentication/Utils/Firebase";
import BuutonsBar from "Features/Moderator/Components/BuutonsBar/BuutonsBar";
// import Flair from "Features/Moderator/Components/Flair/Flair";
import MainInfo from "Features/Moderator/Components/MainInfo/MainInfo";
import fetchFlairs from "Features/Moderator/Services/fetchFlairs";
import useFetchFunction from "Hooks/useFetchFunction";
// import FlairList from "Features/Moderator/Layouts/FlairList/FlairList";
import { useEffect } from "react";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import NewFlair from "Features/Moderator/Components/NewFlair/NewFlair";
const { ContainerFlair } = require("./FlairPage.styled");
// Fetch Posts

/**
 * Component that contains the FlairPage
 *
 * @Component
 * @returns {React.Component}
 */
const FlairPage = () => {
  return (
    <ContainerFlair>
      <BuutonsBar />
      <MainInfo />
    </ContainerFlair>
  );
};

export default FlairPage;
