import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
const Todolist = () => {
    const[todo,setTodo]=useState('')
    const[name,setName]=useState('')
    const[db,setDb]=useState([])
    function datapost(){
        axios.post("http://localhost:3000/posts",{todo,name})
       .then(()=>{
        alert("data has been posted")
       })
       .catch(()=>{
        alert("data has'nt posted")
       })}
    function getdata(){
        axios.get("http://localhost:3000/posts")
        .then((response)=>{
            setDb(response.data)
            alert("data has been retrived")
        })
        .catch(()=>{
            alert("data has'nt retrived")
        })
    }
    function updatedata(id,data){
        axios.put(`http://localhost:3000/posts/${id}`,{todo:data})
        .then(()=>{
            console.log("data updated");
            getdata();
        })
        .catch(()=>{
            console.log("data cannot update");
          
        })
    }
    function newdata(id){
        const data=prompt("Enter new data")
        updatedata(id,data);
    }
    console.log(db)
  return (
    <div> 
         
        <p>{todo}

        </p>
        
        <TextField 
        id="outlined-basic" 
        variant="outlined" 
        label="Todo" 
        value={todo}
        onChange={(ref)=>setTodo(ref.target.value)}
       />
    <p>{name}</p>
        <TextField 
        id="outlined-basic" 
        variant="outlined" 
        label="Name" 
        value={name}
        onChange={(ref)=>setName(ref.target.value)}
       />
       
       <p>
    <Button variant="contained" onClick={datapost}>post</Button>
    </p>
  <p>
    <Button variant="contained" onClick={getdata}>get</Button>
</p>
    <div>
        <ul>{
            db.map((item)=>(
                <li key={item.id}>{item.todo}<Button onClick={()=>newdata(item.id)}>Edit</Button></li>
            ))
            }
        </ul>
    </div>
    </div>
  )
}

export default Todolist