import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
`

export const Ticket = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #D9D9D9;
  color: #251C1C;
  width: 80%;
  height: 60px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #251C1C;
    color: #D9D9D9;
  }
`
export const TextField = styled.span`
  font-size: 30px;
  font-weight: 300;
  padding: 20px;
`