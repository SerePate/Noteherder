import React from 'react'

import Note from './Note'
import './NoteList.css'

const NoteList=(props)=>{
  const noteIds = Object.keys(props.notes)

    return(
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {noteIds.map(noteId=> 
              <Note notes={props.notes[noteId]}/> )}
          </ul>
        </div>        
    )
}

export default NoteList