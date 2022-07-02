import styled from "styled-components";

const DefaultForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 30px 0 34px 0;

  input {
    width: 100%;
    margin-bottom: 14px;
    padding: 18px 16px;
    font-size: 20px;
    border-radius: 6px;
    border: none;
  }

  input::placeholder {
    color: #000000;
  }
`;

export default DefaultForm;