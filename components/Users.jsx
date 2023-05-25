"use client";
import { useRouter } from "next/navigation";

const Users = ({ users }) => {
  const router = useRouter();

  return (
    <div>
      {users.data.map((user) => (
        <ul className="">
          <li
            key={user.id}
            onClick={() => {
              router.push(`/users/${user.id}`);
            }}
          >
            <div className="flex justify-center gap-7 pb-5">
              <img src={user.avatar} alt={user.email} className="rounded-3xl" />
              <div>
                <h5 className="text-3xl pt-8">
                  {user.first_name} {user.last_name}
                </h5>
                <p className="text-xl">{user.email}</p>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Users;
