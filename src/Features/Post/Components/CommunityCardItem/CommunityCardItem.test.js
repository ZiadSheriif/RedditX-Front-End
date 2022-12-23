import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import CommunityCardItem from "./CommunityCardItem";

describe("Community CardI tem", () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it("this is a test for Community Card Item", () => {
    render(
      <CommunityCardItem
        communityIcon="CommunityImage.png"
        communityID={"t5_imagepro"}
        communityDescription={
          "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
        }
        communityName={"GermanWW2photos"}
        membersCount={10}
      />
    );
  });
});
