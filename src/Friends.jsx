import { useEffect, useState } from 'react'
import './Friend.css'
import FriendSingle from './Single';
export default function Friend(){
    const [friendsc , setFriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=> setFriends(data))
    },[])
    return (
        <div className='box'>
            <h3>Friends: {friendsc.length}</h3>
            {
                friendsc.map(x => <FriendSingle friend={x}></FriendSingle>)
            }
        </div>
    )
}