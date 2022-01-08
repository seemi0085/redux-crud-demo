import React from "react";
import List from './List'
import { useSelector } from 'react-redux'

function Home() {
    const userList = useSelector(state => state.user.users)
    console.log("userlist=====", userList)
    // const UserList = [{id:1,name:'test'}];
    return (
        <div className="container">
            <div className='CRUD form'>
                <div>&nbsp;</div>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-11'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>email</th>
                                <th>phone</th>
                                {/* <th>action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user) => (<List user={user} key={user.name} />))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;