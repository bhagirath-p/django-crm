import { useState } from "react";
import api from "../api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function DealForm() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    title: "",
    company: "",
    value: 0,
    stage: "lead",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async e => {
    e.preventDefault();
    await api.post("/deals/", form);
    nav("/deals");
  };

  return (
    <>
      <Navbar />
      <h1>New Deal</h1>
      <form onSubmit={submit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="company" placeholder="Company ID" onChange={handleChange} />
        <input name="value" type="number" placeholder="Deal Value" onChange={handleChange} />
        <select name="stage" onChange={handleChange}>
          <option value="lead">Lead</option>
          <option value="qualified">Qualified</option>
          <option value="proposal">Proposal</option>
          <option value="won">Won</option>
          <option value="lost">Lost</option>
        </select>
        <button>Create</button>
      </form>
    </>
  );
}
