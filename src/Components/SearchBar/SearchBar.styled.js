import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { Dropdown } from "react-bootstrap";

export const StyledDropdown = styled(Dropdown)`
  width: 100%;
  height: 100%;
`;

export const StyledSearchButton = styled.div`
  display: flex;
  border-radius: 20px;
  position: relative;
  height: 40px;
  background: ${({ theme }) => theme.background.post_background};
  margin: auto;
  width: 100%;
  @media (min-width: 1286px) {
    min-width: 616px;
  }
`;
export const StyledSearchIcon = styled(CiSearch)`
  color: ${({ theme }) => theme.color.muted};
  position: absolute;
  margin-top: 10px;
  min-width: 50px;
`;

export const StyledSearcherInput = styled.input`
  border-radius: 18px;
  background-color: ${({ theme }) => theme.background.post_background};
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.background.primary};
  width: 100%;
  &:active,
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color.secondary};
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.lineColor.secondary};
  }

  line-height: normal;

  white-space: nowrap;
  text-indent: 30px;
  padding: 15px;
`;
export const ClearBtn = styled.button`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 7px;
  right: 0;
  /* position: absolute; */
  margin-top: 2px;
  align-items: center;
  visibility: ${({ textValue }) => (textValue > 0 ? "visible" : "hidden")};
  margin-right: 16px;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  vertical-align: middle;
  border: none;
  background: none;
`;
