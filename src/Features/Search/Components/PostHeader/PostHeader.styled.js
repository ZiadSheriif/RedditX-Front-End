import styled from "styled-components";
export const PostHeaderStyle = styled.div`
  padding: 16px 16px 8px 16px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  & .break {
    font-size: 8px;
    line-height: 20px;
    margin: 0 4px;
    color: ${({ theme }) => theme.color.muted};

    /* & .posted-by .first {
      flex: 0 0 auto;
      margin-right: 3px;
      color: rgb(120, 124, 126);
    } */
    /* & .posted-by .user-name {
      flex: 0 0 auto;
    } */
    /* & .posted-by .user-name a {
      color: rgb(120, 124, 126);
      margin-right: 3px;
      text-decoration: none;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    } */
    /* & .posted-by .user-name a:hover {
      text-decoration: underline;
    } */
    /* & .posted-by .time-post {
      color: rgb(120, 124, 126);
      flex: 0 0 auto;
    } */
  }
`;
export const CommunityInfo = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  flex: 0 0 auto;
  .community-name:hover {
    text-decoration: underline;
  }

  .community-name {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-decoration: none;
    vertical-align: baseline;
    display: inline;
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
`;
export const CommunityImage = styled.img`
  border-radius: 100%;
  height: 20px;
  margin-right: 4px;
  /* vertical-align: middle; */
  width: 20px;
  max-width: 100%;
  display: block;
  border: 1px;
`;
export const PostedBy = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: inherit;
  .first {
    flex: 0 0 auto;
    margin-right: 3px;
    color: rgb(120, 124, 126);
  }
  /* .user-name {
    flex: 0 0 auto;
  }
  .user-name a {
    color: rgb(120, 124, 126);
    margin-right: 3px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  .user-name a:hover {
    text-decoration: underline;
  } */
  .time-post {
    color: rgb(120, 124, 126);
    flex: 0 0 auto;
  }
`;

export const UserName = styled.div`
  flex: 0 0 auto;
  a {
    color: rgb(120, 124, 126);
    margin-right: 3px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  a:hover {
    text-decoration: underline;
  }
`;
