import { useEffect, useState } from "react";
import api from "../api";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function DealsList() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    api.get("/deals/").then(r => setDeals(r.data));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Deals</h1>
      <Link to="/deals/new">+ New Deal</Link>

      <ul>
        {deals.map(d => (
          <li key={d.id}>
            {d.title} — {d.stage} — ${d.value}
          </li>
        ))}
      </ul>
    </>
  );
}
