import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res=> res.json())
    // .then(data=> setUsers(data))
    const dataLoad = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const fecthed = await fetch(url);
      const res = await fecthed.json();
      const data = res;
      // console.log(data);
      setUsers(data);
    };
    dataLoad();
    // const data = dataLoad();
    // console.log(data)
    // setUsers(data);
  }, []);
  return (
    <div>
      <h2>Users: {users.length}</h2>
    </div>
  );
}
