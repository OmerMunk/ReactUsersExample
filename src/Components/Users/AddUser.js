import React, {useState} from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error,setError] = useState()

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                massage: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if (+enteredAge < 1) { //the '+' is to make sure that the inputted string will be treated as a number.
            setError({
                title: 'Invalid Age',
                massage: 'Please enter a valid age ( > 0 )'
            })
            return;
        }
        const new_user = {id: Math.random().toString(), name: enteredUsername, age: enteredAge}
        props.OnAddUser(prevUsers => {
            return ([...prevUsers, new_user])
        })
        setEnteredUsername('')
        setEnteredAge('')
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} massage={error.massage} onConfirm={errorHandler} /> }
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>{/*Of course, no parenthesis after the function*/}
                    {/*if it was like this: addUserHandler(), so the function will be executed when*/}
                    {/*this line is executed, not good! we want just a pointer to the function,*/}
                    <label htmlFor='username'>
                        Username
                    </label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor='age'>
                        Age (Years)
                    </label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser