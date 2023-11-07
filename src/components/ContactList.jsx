import { useState, useEffect } from "react"
import ContactRow from "./ContactRow"

const APIURL = "https://jsonplaceholder.typicode.com/users"

const dummyContacts =[
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
]

function ContactList () {
  const [contacts, setContacts] = useState([])

  useEffect (() => {
    async function contactFetch() {
      try{
        const response = await fetch(APIURL)
        const data = await response.json()
        setContacts(data)
      }
      catch(err){
        console.error(err);
      }
    }
    contactFetch()
  }, [])
  
  // const [contacts, setContacts] = useState(dummyContacts)
  // console.log("Contacts: ", contacts)
  return (
  <>
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
        <tr>
          <td>name</td>
          <td>email</td>
          <td>phone</td>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />
        })}
      </tbody>
    </table>
  </>
  )
}

export default ContactList