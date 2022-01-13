import styled from "styled-components";

export const UserListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
`;

export const UserContainer = styled.div`
  text-align: center;
  color: #fff;
  background: rgba(255, 250, 250, 0.3);
  border: 1px solid #fff;
  border-bottom-width: 4px;
  border-right-width: 6px;
  margin: 10px;
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const Hero = styled.img`
  outline: 1px solid #fff;
  object-fit: cover;
`;
export const Info = styled.div`
  padding: 80px 10px 10px 10px;
  text-align: left;
  line-height: 1.6;
`;
export const Name = styled.p`
  margin: 6px 0px;
  padding-bottom: 3px;
  font-size: 135%;
  border-bottom: 1px solid white;
`;
export const Address = styled.p`
  font-size: 80%;
  margin: 0px;
`;
export const Mail = styled.p`
  margin: 0px;
  margin-bottom: 6px;
`;
export const Date = styled.p`
  margin: 0;
  font-size: 70%;
  text-align: right;
`;
