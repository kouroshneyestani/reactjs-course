import React, { useEffect, useState, useTransition } from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        // Fetch users from the API
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setFilteredUsers(data); // Initially, filtered users are all users
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        // Use startTransition to update the filtered users list
        startTransition(() => {
            const filtered = users.filter((user) =>
                user.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredUsers(filtered);
        });
    };

    return (
        <div>
            <h1>Users</h1>
            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search Users.."
            />
            {isPending ? (
                <div>Searching...</div>
            ) : (
                <ul>
                    {filteredUsers.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
