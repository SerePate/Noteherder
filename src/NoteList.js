import React from 'react'

import Note from './Note'
import './NoteList.css'

const NoteList=()=>{
  const notes = {
     'note-4': {
      id: 'note-4',
      title: 'My fancy note',
      body: 'Oh so fancy'
    },
    'note-5': {
      id: 'note-5',
      title: 'Another one',
      body: 'Also very fancy',
    }

  }

  const noteIds = Object.keys(notes)

    return(
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {noteIds.map(noteId=> <Note notes={noteID}/> )}
          </ul>
        </div>

        
    )
}

export default NoteList