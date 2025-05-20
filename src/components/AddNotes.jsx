import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import { BASE_URL } from '../utils'

const AddNotes = () => {
const [title,setTitle] = useState("")
const [writer,setWriter] = useState("")
const [date,setDate] = useState("")
const [content,setContent] = useState("")
const navigate = useNavigate()

const saveNotes = async (e) =>{
    e.preventDefault()
    try {
         await axios.post(`${BASE_URL}/add-notes`,{
            title,
            writer,
            date,
            content
        });
        navigate("/")
    } catch (error) {
        console.log(error)
    }
    
}

  return (
   <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <form onSubmit={saveNotes}>
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
                <button type='submit' className='button is-success'>save</button>
            </div>
        </form>
    </div>
   </div>
  )
}

export default AddNotes