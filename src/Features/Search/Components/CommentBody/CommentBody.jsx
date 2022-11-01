import {
  BodyContent,
  BodyContentHeader,
  BodyContentHeaderLayout,
  BodyText,
  BodyTextStyle,
  BodyTextStylePlace,
  CommentImage,
  CommentUserName,
  Container,
  FirstText,
  FirstTextStyle,
  ImageAlign,
  InnerBody,
  InnerBodyLayout,
  Time,
  GoThread,
} from "./CommentBody.styled";
import CommentUserImage from "../../Assets/People_Image.jpg";
import PostFooter from "../PostFooter/PostFooter";
const CommentBody = () => {
  /**
   * Component that render the CommentBody.
   *
   * @Component
   * @returns {React.Component}
   */
  return (
    <Container>
      <FirstText>
        <a href="https://www.w3schools.com/">
          <FirstTextStyle>
            [WP] They tell you the warmachines aren't sentient, being kind to
            them does nothing. But at the same time, it seems funny to you that
            their "priority" targets often seems the be the ones currently
            shooting at you.
          </FirstTextStyle>
        </a>
      </FirstText>
      <InnerBody>
        <InnerBodyLayout>
          <ImageAlign>
            <a href="https://www.w3schools.com/">
              <div>
                <CommentImage src={CommentUserImage} alt="Comment User Image" />
              </div>
            </a>
          </ImageAlign>
          <BodyContent>
            <BodyContentHeader>
              <BodyContentHeaderLayout>
                <CommentUserName>
                  <div>
                    <a href="https://www.w3schools.com/">Robysto7</a>
                  </div>
                </CommentUserName>
                <span className="break">·</span>
                <Time>9 days ago</Time>
              </BodyContentHeaderLayout>
            </BodyContentHeader>
            <BodyText>
              <BodyTextStyle>
                <BodyTextStylePlace>
                  you ever had to train or work with someone who just has no
                  desire to know anything beyond what you’re telling them or the
                  why behind what they’re doing? Every instruction needs to be
                  laid out in painstaking detail? If an issue arises, there’s no
                  desire to understand why or attempt to fix it, they just error
                  out and stand there waiting for instruction? It’s like
                  programming a computer, but the computer is a human potato.
                </BodyTextStylePlace>
              </BodyTextStyle>
            </BodyText>
          </BodyContent>
        </InnerBodyLayout>
        <PostFooter />
      </InnerBody>
      <GoThread href="http://">Go to thread</GoThread>
    </Container>
  );
};

export default CommentBody;
