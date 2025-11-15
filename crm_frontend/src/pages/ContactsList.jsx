import { useEffect, useState } from "react";
import api from "../api";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contacts/")
      .then(res => setContacts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Contacts</h1>
      <Link to="/contacts/new">+ New Contact</Link>
      <ul>
        {contacts.map(c => (
          <li key={c.id}>
            {c.first_name} {c.last_name} — {c.email}
          </li>
        ))}
      </ul>
    </>
  );
}
