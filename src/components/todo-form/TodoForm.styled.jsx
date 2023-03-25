import styled from 'styled-components';
export const FormWrap = styled.div`
  display: flex;
  text-align: center;
  align-items: flex-end;
`;

export const Input = styled.input`
  display: block;
  resize: none;
  overflow: auto;
  width: 400px;
  height: 100%;
  font-size: 24px;
  font-family: inherit;
  color: #614933;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #614933;
  & :hover,
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  width: 100px;
  height: 30px;
  color: #614933;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  background: #ffdab9;
  border: 1px solid #614933;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: rgb(232 202 174);
    background: #fff;
    box-shadow: 0 0 10px 0 rgb(255 211 171) inset, 0 0 20px 2px rgb(97, 73, 51);
  }
`;
