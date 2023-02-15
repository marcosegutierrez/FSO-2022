import View from "./View";

const Persons = ({ filter, persons }) => {

    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <>
            {personsToShow.map(person =>
                <View key={person.id} name={person.name} number={person.number} />
            )}
        </>
    )
}

export default Persons;