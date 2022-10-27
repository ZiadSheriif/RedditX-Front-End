/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { AiOutlineReload } from "react-icons/ai";

import ReCAPTCHA from "react-google-recaptcha";
import RandomUserName from "Features/Authentication/Utils/RandomUserName";

import FormInputPageCom from "Features/Authentication/Components/FormInputPageCom/FormInputPageCom";
import Button from "../../Components/Button/Button";
import PasswordStrength from "Features/Authentication/Components/PasswordStrength/PasswordStrenght";
import GetPasswordStrength from "Features/Authentication/Utils/GetPasswordStrenght";

import {
  Group,
  ButtonsContainer,
  ErrorParagraph,
  FirstDiv,
  MidDiv,
  LastDiv,
  BackButton,
  RandomContainer,
  Reload,
  ReCAPTCHAContainer,
} from "./SignUpPageSecondScreen.styled";

const USER_NAME = /^[A-z][A-z0-9-_]{3,20}$/;
const PWD_REGEX = /^[A-z][A-z0-9-_]{8,20}$/;

const SignUpPageSecondScreen = ({
  formFields,
  setFormFields,
  validUserName,
  setValidUserName,
  notRobot,
  setNotRobot,
  passwordStrength,
  setPasswordStrength,
  validPassword,
  setValidPassword,
  secondScreen,
  setSecondScreen,
  initialFocus,
  setInitialFocus,
  errMsg,
  setErrMsg,
  sug1,
  sug2,
  sug3,
  sug4,
  sug5,
  setSug1,
  setSug2,
  setSug3,
  setSug4,
  setSug5,
}) => {
  const { userName, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    setErrMsg("Username must be between 3 and 20 characters");

    setValidUserName(USER_NAME.test(userName));
  }, [userName]);

  /**
   * useEffect for password field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    if (password.length > 0) {
      setInitialFocus(false);
    }
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    if (name === "password") {
      setPasswordStrength(GetPasswordStrength(password));
    }
    if (name === "userName") {
      setValidUserName(USER_NAME.test(userName));
    }
  };

  const changeUserName = (name) => {
    setFormFields({ ...formFields, userName: name });
    setValidUserName(true);
  };
  const newRandomUserNames = () => {
    setSug1(RandomUserName());
    setSug2(RandomUserName());
    setSug3(RandomUserName());
    setSug4(RandomUserName());
    setSug5(RandomUserName());
  };

  /**
   * some configurations for the captcha
   */
  const grecaptchaObject = window.grecaptcha;
  window.recaptchaOptions = {
    useRecaptchaNet: true,
  };

  /**
   * Function to handle the captcha and set the state of notRobot to true
   * @param {boolean} value the value of captcha
   */
  const recaptchaHandler = (value) => {
    setNotRobot(true);
  };

  return (
    <>
      {secondScreen && (
        <div>
          <FirstDiv>
            <h2>Choose your username</h2>
            <p>
              Your username is how other community members will see you. This
              name will be used to credit you for things you share on Reddit.
              What should we call you?
            </p>
          </FirstDiv>

          <hr></hr>

          <form onSubmit={handleSubmit}>
            <MidDiv>
              <div>
                <Group secondScreen={secondScreen}>
                  <FormInputPageCom
                    valid={validUserName}
                    initialFocus={initialFocus}
                    label="USERNAME"
                    type="text"
                    required
                    showIcon={true}
                    onChange={handleChange}
                    name="userName"
                    value={userName}
                    onFocus={() => {
                      setInitialFocus(false);
                    }}
                  />
                </Group>

                <ErrorParagraph valid={validUserName || initialFocus}>
                  {errMsg}
                </ErrorParagraph>

                <Group secondScreen={secondScreen}>
                  <FormInputPageCom
                    valid={validPassword}
                    initialFocus={initialFocus}
                    label="PASSWORD"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                    onFocus={() => setInitialFocus(false)}
                  />
                  {!initialFocus && (
                    <span>
                      <PasswordStrength
                        strength={passwordStrength}
                      ></PasswordStrength>
                    </span>
                  )}
                </Group>

                {/* Show error message if the password is not valid and the user made a focus on the it's input field */}
                <ErrorParagraph valid={validPassword || initialFocus}>
                  password should contain 8 to 20 characters
                </ErrorParagraph>

                <ReCAPTCHAContainer validEmail={validUserName && validPassword}>
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={recaptchaHandler}
                    grecaptcha={grecaptchaObject}
                  />
                </ReCAPTCHAContainer>
              </div>
              <div>
                <div>
                  Here are some username suggestions{" "}
                  <Reload
                    onClick={() => {
                      newRandomUserNames();
                    }}
                  >
                    <AiOutlineReload />
                  </Reload>
                </div>
                <RandomContainer>
                  <p
                    onClick={() => {
                      changeUserName(sug1);
                    }}
                  >
                    {sug1}
                  </p>
                  <p
                    onClick={() => {
                      changeUserName(sug2);
                    }}
                  >
                    {sug2}
                  </p>
                  <p
                    onClick={() => {
                      changeUserName(sug3);
                    }}
                  >
                    {sug3}
                  </p>
                  <p
                    onClick={() => {
                      changeUserName(sug4);
                    }}
                  >
                    {sug4}
                  </p>
                  <p
                    onClick={() => {
                      changeUserName(sug5);
                    }}
                  >
                    {sug5}
                  </p>
                </RandomContainer>
              </div>
            </MidDiv>
            <LastDiv>
              <BackButton
                onClick={() => {
                  setSecondScreen(false);
                }}
              >
                BACK
              </BackButton>
              <ButtonsContainer>
                {validUserName && validPassword && notRobot && (
                  <Button
                    page={true}
                    valid={validUserName && validPassword && notRobot}
                    type="button"
                    onClick={() => RandomUserName()}
                  >
                    SIGN UP
                  </Button>
                )}
                {(!validUserName || !validPassword || !notRobot) && (
                  <Button
                    page={true}
                    disabled
                    valid={validUserName && validPassword && notRobot}
                    type="button"
                  >
                    SIGN UP
                  </Button>
                )}
              </ButtonsContainer>
            </LastDiv>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUpPageSecondScreen;
