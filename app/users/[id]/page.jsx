"use client";

import Link from "next/link";

const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

const UsersPage = async ({ params }) => {
  const user = await getUser(params.id);
  return (
    <>
      <h2 className="text-2xl text-center pt-8">User Detail</h2>
      <div key={user.id} className="flex justify-center py-5">
        <img src={user.avatar} alt={user.email} className="rounded-3xl" />
        <div className="pl-5">
          <h3 className="text-3xl pt-8">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-xl">{user.email}</p>
        </div>
      </div>
      <Link href="/" className="underline flex justify-center text-lg">
        Back to Users List
      </Link>
    </>
  );
};

export default UsersPage;
