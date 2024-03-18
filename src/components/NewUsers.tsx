import React, { useState } from 'react';

interface User {
    name: string;
    email: string;
}

const NewUsers: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [users, setUsers] = useState<User[]>([{ name: "Mehedi", email: "mehedi@gmail.com" }]);
    
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser: User = { name, email };
        console.log(newUser);
        setUsers([...users, newUser]);
        setEmail("");
        setName("");
    };

    return (
        <div>
            <h1>New User Create</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : 
                    <input type="text" name="name" id="name" value={name} placeholder='Enter your name' onChange={handleNameChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="email">Email :
                    <input type="email" name="email" id="email" value={email} placeholder='Enter your email...' onChange={handleEmailChange} />
                    </label>
                </div>
                <button type="submit">Create User</button>
            </form>
            <div>
                <h2>Users:</h2>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user.name} - {user.email}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NewUsers;
