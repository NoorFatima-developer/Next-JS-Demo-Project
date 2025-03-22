// improved bundle size, lower latency, improved SEO, direct access to backend resources, ability to secure sensitive data...

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    await new Promise((resolve)=>setTimeout(resolve, 2000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

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

 
