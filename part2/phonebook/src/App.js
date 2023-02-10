import React, { useState } from 'react'

const View = (props) => {
  return (
    <p>{props.name} {props.number}</p>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-1234567' } //phone in string
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const addPerson = (event) => {
    let free = true
    event.preventDefault()
    const personObjet = {
      id: persons.length + 1,
      name: newName.charAt(0).toUpperCase() + newName.toLowerCase().slice(1),
      number: newPhone
    }

    if (newName !== '' && newPhone !== ''){
      persons.forEach(person => {
        if (newName.toLowerCase() === person.name.toLowerCase()) {
          alert(`${newName} is already added to phonebook`)
          free = false
        }
      })
      free ? setPersons(persons.concat(personObjet)) : free = true
    } else
      alert('Complete the data')
    setNewName('')
    setNewPhone('')
  }

  const handleNameChangue = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChangue = (event) => {
    setNewPhone(event.target.value)
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
          number: <input
                  value={newPhone}
                  onChange={handlePhoneChangue}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <View key={person.id} name={person.name} number={person.number}/>
      )}
    </div>
  )
}

export default App