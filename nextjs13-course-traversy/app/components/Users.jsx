import Link from "next/link";

// async function fetchUsers() {
//   const response = await fetch("http://localhost:3000/api/users");
//   const users = await response.json();
//   return users;
// }

const Users = async ({ users }) => {
  //   const users = await fetchUsers();
  //   console.log(users);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="card">
          <h2>{user.name}</h2>
          <Link href={user.name} target="_blank">
            <h2>{user.name}</h2>
          </Link>
          <small>{user.year}</small>
          <p>{user.color}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
