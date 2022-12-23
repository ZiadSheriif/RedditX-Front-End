import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import Post from "./Post";

jest.mock(
  "Features/Post/Services/getCommunityInfo",
  () => (fetchData, auth) => {}
);
jest.mock(
  "Features/Post/Services/submitComment",
  () => (fetchData, auth) => {}
);


describe("Post", () => {
  it("renders Post component", () => {
    render(
      <TestingComponent>
        <Post
          post={{
            // _id: "63a51f64e5de076130c9a910",
            title: "New title",
            textHTML: "not a link",
            textJSON: "not a link",
            isDeleted: false,
            attachments: [],
            spoiler: false,
            locked: false,
            type: "link",
            nsfw: false,
            insightCnt: 7,
            spamCount: 0,
            votesCount: 0,
            createdAt: "2022-12-22T21:05:08.545Z",
            followers: [],
            userID: {
              _id: "t2_mahmoud_reda",
              avatar: "default.jpg",
            },
            voters: [
              {
                userID: "t2_mahmoud_reda",
                voteType: 1,
                _id: "63a51f64e5de076130c9a911",
              },
              {
                userID: "t2_AbdelrahmanHamza",
                voteType: -1,
                _id: "63a52564e5de076130c9ad2e",
              },
            ],
            mintionedInUsers: [],
            postComments: [],
            spammers: [],
          }}
          show={true}
          setShow={() => {}}
        />
      </TestingComponent>
    );
    expect(screen.getByText("Comment as")).toBeInTheDocument();
  });
});
