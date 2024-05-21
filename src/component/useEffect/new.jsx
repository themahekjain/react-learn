import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export const UseEffect = () =>{
    const [count, setCount ] = useState(0);
    const[users, setUsers] = useState([]);

    useEffect(() => {
        // component mount state
        getData(); // 5 sec
    
        return () => {
          console.log("Un mount handling")
        }
      }, []);

       const getData = async  () =>{
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/posts");
            let data = await res.json();
            if(data){
                setUsers(data);
            }
        } catch (error) {
            console.log("error" , error);
        }

       };
       useEffect(()=>{
        console.log("Update useEffect", count);
       },[count]);

       const incCount = () =>{
        setCount(count+1);
        alert("I got clicked");
       };
       const deletePost = (index)=>{
        const copy = [...users];
        copy.splice(index,1);
        setUsers(copy);
        alert("Deleted the Post"  +  (index+1));
       };
       return(
        <div>
            <h1>Click on button to increase count</h1>
            <h1>count: {count}</h1>
            <Button variant="secondary" onClick={incCount}>Click Me</Button>
            <br />
            <h1>List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Sr. No</th>
                    <th>title</th>
                    <th>body</th>
                    <th>Want To Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return(
                            <tr key={user.id}>
                                <td>{index+1}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                                <td>
                                    <Button variant="danger" onClick={() => {deletePost(index)}}>Delete</Button>
                                </td>
                            </tr>
                        );
                    })};
                </tbody>
            </Table>


        </div>
       )
 }