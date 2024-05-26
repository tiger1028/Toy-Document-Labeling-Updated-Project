import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  box-shadow: rgba(0,0,0,0.3) 2px 2px 5px 5px;
`;

export const SuggestListContainer = styled.div`
  display: flex;
  width: 150px;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: #D9D9D9;  
`;

export const ListItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2D2424;
  font-size: 15px;
  width: 100%;
`;

export const CheckMark = styled.img`
  width: 15px;
  height: 15px;
`;

export const SpinnerMark = styled.img`
  width: 50px;
  height: 50px;
`;

export const SubmitArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #161212;
  &:hover {
    background-color: #010101;
  }
`;