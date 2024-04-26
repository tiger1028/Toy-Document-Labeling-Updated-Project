import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
`;

export const DialogContent = styled.div`
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 200px;
  gap: 20px;
  border-radius: 5px;
  padding: 15px;

`;

export const TextField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: #2D2424;
  font-size: 25px;
  font-weight: bold;
`;

export const SubmitButtonBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  margin-left: 10px;
  color: white;
  font-size: 20px;
  width: 55px;
  height: 25px;
  background-color: #494444;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #292121;
  }
`