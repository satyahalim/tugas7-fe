import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import { BASE_URL } from '../utils'

const NotesList = () => {
    const [Notes,setNotes] = useState([])

    useEffect(()=>{
        getNotes();

    },[])

    const getNotes = async ()=>{
        const response = await axios.get(`${BASE_URL}/notes`)
        setNotes(response.data)
    }

  const  deleteNote = async (id) =>{
    try {
        await axios.delete(`${BASE_URL}/delete-notes/${id}`)
        getNotes()
    } catch (error) {
        console.log(error)
    }

  }
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={'add'} className='button is-success'>add new</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Writer</th>
                        <th>date</th>
                        <th>summary</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {Notes.map((note, index) =>(
                    <tr key={note.id}>
                        <td>{index +1}</td>
                        <td>{note.title}</td>
                        <td>{note.writer}</td>
                        <td>{note.date}</td>
                        <td>{note.content}</td>
                        <td>
                            <Link to ={`edit/${note.id}`}
                            className='button is-small is-info'>edit
                            </Link>

                            <button onClick={()=> deleteNote(note.id)} className='button is-small is-danger'>delete</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default NotesList
