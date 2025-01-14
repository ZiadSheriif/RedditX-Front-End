import { BASE_URL } from "API/axios";
import {
  ComponentDiv,
  LeftDiv,
  RightDiv,
  HeaderDiv,
  ComponentHeader,
  ComponentContent,
  HeaderSpan,
  SeparateorSpan,
  DateSpan,
  DotsButton,
  ProfileImage,
  StyledPopup,
  HideButton,
} from "./NotificationItem.styled";
import ParseDateFromNow from "Features/Notifications/Utils/ParseDateFromNow";
import { useState } from "react";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import hideNotification from "Features/Notifications/Services/HideNotification";

/**
 * Component that contains the notification items of the Notifications page
 *
 * @Component
 * @param {number} id - Notification ID
 * @param {string} header - Notification Header
 * @param {string} content - Notification content
 * @param {Date} date - Notification Date
 * @param {string} img - Notification Image Path
 * @param {string} fileSrc - Notification Folder [Whether user or community]
 * @param {Function} reRender - Function to signal a re-render message to parent component
 * @returns {React.Component}
 */
const NotificationItem = ({ id, header, content, date, img, fileSrc, reRender }) => {
  const auth = useAuth();
  const [hideNotifRes, errorHideNotif, loadingHideNotif, fetchData] = useFetchFunction();
  function handleHide() {
    let dataObject = {
      notificationID: id,
    };
    hideNotification(fetchData, dataObject ,auth);
    reRender((prev)=>!prev);
  }

  return (
    <ComponentDiv
      to={"#"}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <LeftDiv>
        {img&&
        <ProfileImage 
          crossOrigin="anonynmous"
          src={`${BASE_URL}/${fileSrc}/files/${img}`} />}
      </LeftDiv>

      <RightDiv>
        <HeaderDiv>
          <HeaderSpan>
            <ComponentHeader>{header}</ComponentHeader>
            <SeparateorSpan> . </SeparateorSpan>
            <DateSpan>{ParseDateFromNow(date).toDateString()}</DateSpan>
          </HeaderSpan>

          <Popup trigger={<DotsButton> ...</DotsButton>} position="bottom 100%">
            <HideButton
              onClick={handleHide} 
              className="Hide"
            >
              Hide this notification</HideButton>
          </Popup>
        </HeaderDiv>
        <ComponentContent>{content}</ComponentContent>
      </RightDiv>
    </ComponentDiv>
  );
};

export default NotificationItem;
