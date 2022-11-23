import CommentBody from "../CommentBody/CommentBody";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";
import { Container, Layout } from "./Comment.styled";

/**
 * Component that render the Comment component and Contains CommentBody ,CommentHeader, CommentFooter items.
 *
 * @Component
 * @param {object} comment - contain all the Comments
 * @returns {React.Component}
 */
const Comment = ({ comment }) => {
  // const commentBody = {
  //   id: comment._id,
  //   postFooter: {
  //     upVotes: comment.votesCount,
  //     Comments: "",
  //   },
  //   postHeader: {
  //     headerImage: "People_Image.jpg",
  //     communityName: "WallStreetRiches",
  //     userName: "t2_North-Situation4034",
  //     time: "5 days ago",
  //     flair: {
  //       flairText: "go",
  //       flairColor: "green",
  //       flairBackgroundColor: "red",
  //     },
  //   },
  //   commentBody: {
  //     postContent:
  //       "[WP] They tell you the warmachines aren't sentient, being kind to them does nothing. But at the same time, it seems funny to you that their targets often seems the be the ones currently shooting at you.",
  //     commentUserImage: "download.jpg",
  //     userName: comment.authorId,
  //     time: comment.createdAt,
  //     bodyContent: comment.text,
  //   },
  // };
  const commentBody = {
    postContent:
      "[WP] They tell you the warmachines aren't sentient, being kind to them does nothing. But at the same time, it seems funny to you that their targets often seems the be the ones currently shooting at you.",
    commentUserImage: "download.jpg",
    userName: comment.authorId,
    time: comment.createdAt,
    bodyContent: comment.text,
    postFooter: {
      upVotes: comment.votesCount,
      Comments: "",
    },
  };

  console.log(comment);
  return (
    <Container title="comment">
      <Layout>
        {/* <PostHeader postheader={comment.postHeader} /> */}
        <CommentBody commentBody={commentBody} />
        {/* <PostFooter postfooter={comment.postFooter} /> */}
      </Layout>
    </Container>
  );
};

export default Comment;
