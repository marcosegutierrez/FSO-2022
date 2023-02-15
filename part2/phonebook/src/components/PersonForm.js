const PersonForm = ({ persons, newName, newPhone, setPersons, setNewName, setNewPhone, handleNameChangue, handlePhoneChangue }) => {

    const addPerson = (event) => {
        let free = true
        event.preventDefault()
        const personObjet = {
            id: persons.length + 1,
            name: newName.charAt(0).toUpperCase() + newName.toLowerCase().slice(1),
            number: newPhone
        }

        if (newName !== '' && newPhone !== '') {
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

    return (
        <>
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
        </>
    )
}

export default PersonForm;