import React, { useState } from 'react'
import { Items } from './Items'
export const Todo = (props) => {
    let list=Array.from(props.list);

    const [desc,setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!desc){
            alert("Item not entered.")
        }
        else{
            props.addItem(desc);
            setDesc("");
        }
    }

  return (
    <div className='container'>
        <h3 className='text-center my-3'>ToDo List</h3>
        <input type="text" placeholder="Add an item" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        <button type="submit" className="btn btn-success px-2 mx-3" onClick={submit}>Add</button>
        <hr />
        
        {props.list.length===0? "List is Empty":
        list.map((item)=>{
            return <Items item={item} deleteItem={props.deleteItem} key={item.sno}/>
        
        })}

    </div>
  )
}
