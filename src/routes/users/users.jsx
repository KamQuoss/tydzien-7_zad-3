import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "../../components/Users/UserList";
import User from "./user";
import { fetchUsers } from "../../services/fetchUsers";

// https://randomuser.me/documentation#intro

export default function Users() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<UserList users={users} isLoading={isLoading} error={error} />}
      />
      <Route path=":id" element={<User users={users} />} />
    </Routes>
  );
}
