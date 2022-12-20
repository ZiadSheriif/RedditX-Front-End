import SettingsComponent from "../SettingsComponent/SettingsComponent";
import { HeaderImages } from "./ProfileNsfw.styled";
import {useAuth} from "Features/Authentication/Contexts/Authentication";
import setToggledPrefs from "Features/settings/Services/SetToggledPrefs";
import useFetchFunction from "Hooks/useFetchFunction";
import { useState } from "react";
const ProfileNsfw = ({Nsfw}) => {
  const auth = useAuth();
  const [resAdult, errorAdult, loadingAdult, fetchData] = useFetchFunction();
  const [nsfw, setNsfw] = useState(false); 
  function NsfwHandle(e) {
    setNsfw((prev)=>!prev);
    console.log(e);
    let dataObject = {
      labelNsfw: e
    };
    setToggledPrefs(fetchData, dataObject, auth);
  }

  return (
    <>
      <HeaderImages>PROFILE CATEGORY</HeaderImages>
      <SettingsComponent
        headerText="NSFW"
        innerText="This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)"
        onToggle={NsfwHandle}
        state={nsfw}
      />
    </>
  );
};

export default ProfileNsfw;
