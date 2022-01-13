import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";

import UserFull from "../../components/Users/UserFull";

export default function User({ users }) {
  let params = useParams();
  let id = parseInt(params.id);
  let navigate = useNavigate();
  return (
    <>
      <UserFull user={users[id]} />
      <button onClick={() => navigate("/users")} children="Back to Users" />
    </>
  );
}
