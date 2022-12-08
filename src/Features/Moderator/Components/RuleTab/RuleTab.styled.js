import styled from "styled-components";
import { Accordion } from "react-bootstrap";
export const ReportReason = styled.span`
  display: block;
  padding: 8px 0;
`;
export const Apply = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  display: flex;
  padding: 8px 0;
`;
export const PostsComments = styled.div`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;
export const Applies = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  display: block;
  text-transform: uppercase;
`;
export const Description = styled.span`
  display: block;
  padding: 8px 0;

  p {
    padding-bottom: 0;
    padding-top: 0;
  }
`;
export const StampTwo = styled.div`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;
export const StampOne = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  display: block;
  text-transform: uppercase;
`;
export const AccordionContainer = styled(Accordion)`
  .accordion-header {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    background-color: ${({ theme }) => theme.btnColor.backColor};
    border-bottom: 1px solid ${({ theme }) => theme.btnColor.backColor};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .accordion-body {
    background-color: ${({ theme }) => theme.lineColor.primary};
    border: 1px solid ${({ theme }) => theme.lineColor.primary};
    display: block;
    padding: 4px 20px 8px;
    word-break: break-word;
  }
  .accordion-button {
    padding: 0;
    :focus {
      box-shadow: none !important;
    }
    ::after {
      margin-left: 16px !important;
      content: none !important;
    }
  }
  .accordion-button:not(.collapsed) {
    color: unset !important;
    background: none !important;
    box-shadow: none !important;
  }
`;
export const Number = styled.span`
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  flex: 0 0 48px;
  height: 100%;
  justify-content: center;
  width: 48px;
  font-family: Noto Sans, Arial, sans-serif;
  font-weight: 400;
`;
export const RuleText = styled.span`
  font-size: 14px;
  line-height: 18px;
  margin: 16px 8px;
  word-break: break-word;
  font-family: Noto Sans, Arial, sans-serif;
  font-weight: 400;
`;
export const Space = styled.span`
  display: ${({ showDragDrop }) => (showDragDrop ? "none" : "flex")};
  margin-left: auto;
  padding-right: 4px;
  border: 0;
  vertical-align: baseline;
`;
export const MarginRight = styled.div`
  margin-right: 48px;
`;
export const EditBtn = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  padding: 0;
  margin-right: 16px;
`;
export const ExpandedBtn = styled.span`
  display: ${({ show }) => (show ? "none" : "initial")};
`;
export const ShrinkBtn = styled.span`
  display: ${({ show }) => (show ? "initial" : "none")};
`;
export const Tabs = styled.span`
  display: ${({ showDragDrop }) => (showDragDrop ? "flex" : "none")};
  margin-left: auto;
  padding-right: 4px;
  border: 0;
  vertical-align: baseline;
`;
