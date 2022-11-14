import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import styles from "../styles/users.module.css";

export default function Users(){
    const [type, setType] = useState('users');
    const fetchData = (url) => fetch(url).then(res => res.json());
    const {data, error} = useSWR(`https://6371ad2b025414c637fb9f79.mockapi.io/api/next/${type}`, fetchData);
    
    return error? (
        <>
            <Head>
                <title>Client</title>
            </Head>
            <h1>Loading...</h1>
        </>
    ) : (
        <>
            <Head>
                <title>Client</title>
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