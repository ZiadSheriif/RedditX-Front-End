import PeoplePage from "./PeoplePage";

import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";

const PeopleList = [
  {
    avatar: "People_Image.jpg",
    userID: "t5_imagepro",
    about:
      "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
    username: "/u/Abdo",
    totalKarmas: 10,
  },
];
const PeopleFollow = [
  {
    id: "1",
  },
  {
    id: "t5_imagepro1",
  },
  {
    id: "t5_imagepro",
  },
  {
    id: "t5_imagepro2",
  },
];
describe("People component", () => {
  it("check that people are renders well", async () => {
    render(
      <TestingComponent>
        <PeoplePage PeopleList={PeopleList} PeopleFollow={PeopleFollow} />
      </TestingComponent>
    );

    const listItemElements = await screen.findAllByTitle("people");
    expect(listItemElements).not.toHaveLength(0);
  });
});
