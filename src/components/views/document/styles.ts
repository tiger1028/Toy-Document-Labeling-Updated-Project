import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
`;

export const ContentArea = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 50%;
  padding: 10px 15px;
  background-color: #211D1D;
`;

export const Title = styled.span`
  color: white;
  font-size: 30px;
`;

export const Description = styled.span`
  color: white;
  font-size: 20px;
`;

export const LinkButton = styled.a`
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  color: white;
  background-color: none;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const LabelContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const LabelInputSection = styled.div`
  display: flex;
  width: 30%;
  gap: 20px;
`;

export const Label = styled.span`
  color: white;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 150px;
  height: 40px;
  color: black;
  border-radius: 5px;
  background-color: #D9D9D9;
`;

export const LabelArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 8px;
  background-color: #403939;
  width: 60%;
  border-radius: 5px;
`;

export const Item = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 10px;
  height: 30px;
  color: black;
  background-color: #D9D9D9;
  font-size: 15px;
  padding: 4px;
  text-align: center;
  button {
    height: 12px;
    border-radius: 50%;
    border: none;
    background-color: #311313;
    cursor: pointer;
    &:hover {
      background-color: #6D1C1C;
    }
  }
`;

export const SuggestButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 20px;
  background-color: #211D1D;
  &:hover {
    color: black;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

export const PageButtonBar = styled.div`
  display: flex;
  width: 30%;
  gap: 10px;
`;

export const PageButton = styled.button`
  background-color: #D9D9D9;
  width: 30px;
  height: 30px;
  font-size: 15px;
  cursor: pointer;
  color: black;
  border-radius: 5px;
  border: none;
`;

export const SubmitButtonBar = styled.div`
  display: flex;
  width: 30%;
  gap: 30px;
`;

export const SubmitButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: white;
  background-color: #161212;
  border-radius: 5px;
`;