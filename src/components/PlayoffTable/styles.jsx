import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  margin: 25px 0;
  padding: 15px;
  list-style: none;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    width: 150px;
  }

  p {
    font-size: 4rem;
    color: green;
  }
`;
