import { getData } from '../api/context';
const Users = () =>
{
    const fnn = async () =>
    {
        const data = await getData("Users")
        data.map((user) => 
        {
            const {id, name, email, password}= user;
            console.log ();
        })

    }

    return (
        <div>
            <h1>Users</h1>
            <button onClick={fnn}>Get Users</button>
        </div>
    );
}

export default Users;