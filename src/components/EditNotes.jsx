import React,{useState, useEffect,} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from "react-router-dom";
import { BASE_URL } from '../utils'

const EditNotes = () => {
const [title,setTitle] = useState("");
const [writer,setWriter] = useState("");
const [date,setDate] = useState("");
const [content,setContent] = useState("");
const navigate = useNavigate();
const {id} = useParams();

useEffect(()=>{
    getNotesById();
},[])

const updateNotes = async (e) =>{
    e.preventDefault()
    try {
         await axios.put(`${BASE_URL}/edit-notes/${id}`,{
            title,
            writer,
            date,
            content
        })
        navigate("/")
    } catch (error) {
        console.log(error)
    }
    
}
  const getNotesById = async ()=>{
    const response = await axios.get(`${BASE_URL}/notes/${id}`);
    setTitle(response.data.title)
    setWriter(response.data.writer)
    setDate(response.data.date)
    setContent(response.data.content)
  }

  return (
   <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <form onSubmit={updateNotes}>
            <div className="field">
                <label className="label">Title</label>
                <div className='control'>
                    <input type="text" 
                     className='input'
                     placeholder='title'
                     value={title}
                     onChange={(e)=> setTitle(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <label className="label">writer</label>
                <div className='control'>
                    <input type="text"
                     className='input'
                     placeholder='writer'
                     value={writer}
                     onChange={(e)=> setWriter(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Date</label>
                <div className='control'>
                    <input type="date"
                     className='input'
                     placeholder='date'
                     value={date}
                     onChange={(e)=> setDate(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Summary</label>
                <div className='control'>
                    <input type="text" 
                     className='input' 
                     placeholder='summary'
                     value={content}
                     onChange={(e)=> setContent(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <button type='submit' className='button is-success'>update</button>
            </div>
        </form>
    </div>
   </div>
  )
}

export default EditNotes
