import { useState } from 'react'
import { Outlet } from 'react-router-dom'
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
     <main>
      <Outlet/>
     </main>
    </>

  )
}

export default App
