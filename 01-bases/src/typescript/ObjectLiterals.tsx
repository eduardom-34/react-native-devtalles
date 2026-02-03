
interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address;
}

interface Address {
    country: string;
    houseNo: string;
    street?: string
}

export const ObjectLiterals = () => {

    const person: Person = {
        age: 24,
        firstName: "Cesar",
        lastName: "Casco",
        address: {
            country: 'Canada',
            houseNo: '123',
            street: "Another st"
        }
    }


  return (
    <>
        <h3>Objetos Literales</h3>

        <pre>
            { JSON.stringify(person, null, ) }
        </pre>
    </>
  )
}
