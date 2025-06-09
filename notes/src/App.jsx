import { useState } from 'react'
import Navbar from './componets/Navbar'
import NotesList from './componets/NotesList'
import AddNote from './componets/AddNote'
import './App.css'

function App() {

  return (
    <>
     <Navbar/>
     <AddNote/>
     <NotesList/>
    </>

  )
}

export default App
