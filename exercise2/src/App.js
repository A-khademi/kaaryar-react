import React from "react";
import users from './users.json';

function RenderUser() {
    // Filter users by gender
    const maleUsers = users.filter(user => user.gender === "Male");
    const femaleUsers = users.filter(user => user.gender === "Female");


    return (
        <div className="user">
            {maleUsers.map(user => (
                <h2>{user.first_name}</h2>
            ))}
            {femaleUsers.map(user=>(
                <h1>{user.first_name}</h1>
            ))}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <RenderUser />
        </div>
    );
}

export default App;
