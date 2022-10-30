// Import styled components
import {
  FormContainer,
  Input,
  StyledButton,
  FormLabel,
  FormRow,
} from "./DraftLinkForm.styled";

// Import bootstrap components
import { Col } from "react-bootstrap";

/**
 * A small form that allows the user to enter a link in draft editor
 * It appears when the user clicks on add link button in the draft editor controls
 *
 * @param {Function} onLinkURLChange - Function to handle link URL change
 * @param {Function} onLinkTextChange - Function to handle link text change
 * @param {Function} onLinkInputKeyDown - Function to handle enter button
 * @param {Function} confirmLink - Function to handle form submit
 * @param {String} linkUrlValue - Link URL value (state)
 * @param {String} linkTextValue - Link text value (state)
 *
 * @returns {React.Component} - DraftLinkForm component
 */
const DraftLinkForm = ({
  onLinkURLChange,
  linkUrlValue,
  onLinkInputKeyDown,
  confirmLink,
  linkTextValue,
  onLinkTextChange,
}) => {
  return (
    <FormContainer>
      <FormRow>
        <FormLabel>Text</FormLabel>
        <Col>
          <Input
            onChange={onLinkTextChange}
            type="text"
            value={linkTextValue}
            onKeyDown={onLinkInputKeyDown}
            placeholder="Paste or type link here"
          />
        </Col>
      </FormRow>
      <FormRow>
        <FormLabel column lg={2}>
          Link
        </FormLabel>
        <Col>
          <Input
            onChange={onLinkURLChange}
            type="text"
            value={linkUrlValue}
            onKeyDown={onLinkInputKeyDown}
            placeholder="Title of link (optional)"
          />
        </Col>
      </FormRow>
      <FormRow>
        <Col>
          <StyledButton onMouseDown={confirmLink}> Insert </StyledButton>
        </Col>
      </FormRow>
    </FormContainer>
  );
};

export default DraftLinkForm;
