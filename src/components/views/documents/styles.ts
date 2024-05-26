import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100%;
  background-color: #F5F5F5;
  overflow-y: auto;
  padding: 10px;
`;

export const Ticket = styled.button`
  display: flex;
  background-color: #D9D9D9;
  color: #251C1C;
  width: 80%;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #251C1C;
    color: #D9D9D9;
  }
`;

export const TextField = styled.span`
  font-size: 30px;
  padding: 20px;
`;