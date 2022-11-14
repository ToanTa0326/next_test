import { useEffect, useState } from "react";

export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const users = await fetch('https://6371ad2b025414c637fb9f79.mockapi.io/api/next/users')
                .then(res => res.json())
            setUsers(users);
        }
        fetchData()
    },[])

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <h4>{user.name}</h4>
                    <img src={user.avatar} alt="avatar" />
                    <p>{user.detail}</p>
                </li>
            ))}
        </ul>
    );
};