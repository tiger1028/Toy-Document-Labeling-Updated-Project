import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: calc(100% - 140px);
  background-color: #F5F5F5;
  overflow-y: auto;
  padding: 10px;
`

export const Ticket = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #D9D9D9;
  color: #251C1C;
  width: 80%;
  height: fit-content;
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