import React, {useState} from 'react';
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";


function App() {

    const [usersList, setUsersList] = useState([])


    return (
        <div>
            <AddUser OnAddUser={setUsersList}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
