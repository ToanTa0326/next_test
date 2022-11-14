import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/users.module.css";

export default function Users(){
    const [data, setData] = useState([]);
    const [type, setType] = useState('users');

    useEffect(() => {
        async function fetchData(){
            const data = await fetch(`https://6371ad2b025414c637fb9f79.mockapi.io/api/next/${type}`)
                .then(res => res.json())
            setData(data);
        }
        fetchData()
    },[type])

    return (
        <>
            <Head>
                <title>Server</title>
            </Head>
            <div>
                <div className={styles.list}>
                    <button onClick={() => setType('users')}>users</button>
                    <button onClick={() => setType('blogs')}>blogs</button>
                    <button onClick={() => setType('comments')}>comments</button>
                    <button onClick={() => setType('likes')}>likes</button>
                </div>
                <ul className={styles.list}>
                    {data?.map(data => (
                        <li key={data.id}>
                            <h4>{data.name}</h4>
                            {data?.avatar? <img src={data.avatar} alt="avatar" /> : null}
                            <p>{data.detail}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};