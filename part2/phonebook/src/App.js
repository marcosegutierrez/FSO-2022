import React, { useState } from 'react'

const View = (props) => {
  return (
    <p>{props.name}</p>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObjet = {
      name: newName,
      id: persons.length + 1,
    }

    if (newName !== '')
      setPersons(persons.concat(personObjet))
    setNewName('')
  }

  const handleNameChangue = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
                  value={newName}
                  onChange={handleNameChangue}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <View key={person.id} name={person.name} />
      )}
    </div>
  )
}

export default App