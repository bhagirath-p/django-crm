import { Link } from "react-router-dom";
import { setAuthToken } from "../api";

export default function Navbar() {
  function logout() {
    setAuthToken(null);
    window.location.href = "/login";
  }

  return (
    <nav style={{ padding: 10, background: "#eee" }}>
      <Link to="/">Dashboard</Link> |
      <Link to="/contacts">Contacts</Link> |
      <Link to="/companies">Companies</Link> |
      <Link to="/deals">Deals</Link> |
      <button onClick={logout} style={{ marginLeft: 10 }}>Logout</button>
    </nav>
  );
}
