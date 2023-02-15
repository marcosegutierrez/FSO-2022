import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-1234567' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523'},
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setFilter ] = useState('')

  const handleNameChangue = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChangue = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      < Filter filter={filter} handleFilter={handleFilter}/>

      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName}
       newPhone={newPhone} setNewName={setNewName} setNewPhone={setNewPhone} 
       handleNameChangue={handleNameChangue} handlePhoneChangue={handlePhoneChangue}/>
      
      <h3>Numbers</h3>
      <Persons filter={filter} persons={persons} />
    </div>
  )
}

export default App;