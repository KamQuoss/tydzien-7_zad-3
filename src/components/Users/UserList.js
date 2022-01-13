import React from "react";
import User from "./User";
import { Link as NavLink } from "react-router-dom";
import { UserListContainer } from "../../styledComponents";

export default function UserList({ users, isLoading, error }) {
  return (
    <UserListContainer>
      {isLoading && <p>Ładuję dane...</p>}
      {error && <p>Coś poszło nie tak, odśwież stronę</p>}
      {!isLoading &&
        users.length > 0 &&
        users.map((user, index) => {
          return <User user={user} key={index} id={index} />;
        })}
    </UserListContainer>
  );
}
