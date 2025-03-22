// Fetching data in Next js..
"use client"
import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if (!response.ok) throw new Error("Failed to fetch Users");

                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError((err as Error).message); //Error ko properly handle kiya
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}
                    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >{user.name}  ({user.email})</li>
                ))}
            </ul>
        </div>

    );
}
