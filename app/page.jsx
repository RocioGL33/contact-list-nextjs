"use client";
import Users from "../components/Users";

const fetchUsers = () => {
  return fetch("https://reqres.in/api/users").then((res) => res.json());
};

const IndexPage = async () => {
  const users = await fetchUsers();
  // console.log("index users", users);

  return (
    <div>
      <h1 className="flex justify-center text-2xl py-5">Users List 📝</h1>
      <Users users={users} />
    </div>
  );
};

export default IndexPage;
