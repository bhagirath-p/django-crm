import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContactsList from "./pages/ContactsList";
import CompaniesList from "./pages/CompaniesList";
import DealsList from "./pages/DealsList";
import ContactForm from "./pages/ContactForm";
import DealForm from "./pages/DealForm";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/login", element: <Login /> },
  { path: "/contacts", element: <ContactsList /> },
  { path: "/contacts/new", element: <ContactForm /> },
  { path: "/deals", element: <LeadssList /> },
  { path: "/deals/new", element: <LeadForm /> },
  { path: "/companies", element: <CompaniesList /> },
]);

export default router;
