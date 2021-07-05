import React, { useState } from "react";
import { useHistory } from "react-router";


const Create = () => {
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')
    const[author,setAuthor]=useState('mario')
    const[ispending,setIsPending]=useState(false)
    const history=useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const blog ={title,body,author}
        setIsPending(true)

        fetch('http://localhost:8080/blogs/',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("Blog added")
            setIsPending(false)
            history.push("/")
        })
    }

    return (  
        <div className="create">

            <form onSubmit={handleSubmit}>
                    <label>Add title</label>
                    <input type="text"t
                        required
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <label >Add Body</label>
                <textarea 
                required 
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                    <label>Blog Author</label>
                <select
                value= {author}
                onChange={(e)=>setAuthor(e.target.value)}

                >
                    <option value="mario">mario</option>
                    <option value="yushi">yushi</option>
                </select>
                    {!ispending && <button>Add Blog</button>}
                    {ispending && <button disabled>Adding Blog...</button>}
                    <p>{title} </p>
                    <p>{body} </p>
                    <p>{author} </p>
                </form>
        </div>
        
    );
}
 
export default Create;
