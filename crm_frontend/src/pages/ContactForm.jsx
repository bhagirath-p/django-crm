import { useState } from "react";
import api from "../api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const nav = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async e => {
    e.preventDefault();
    await api.post("/contacts/", form);
    nav("/contacts");
  };

  return (
    <>
      <Navbar />
      <h1>New Contact</h1>
      <form onSubmit={submit}>
        <input name="first_name" placeholder="First Name" onChange={handleChange} />
        <input name="last_name" placeholder="Last Name" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </>
  );
}
