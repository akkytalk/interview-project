import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import { Nav, NavItem, NavLink } from "reactstrap";
import Pattern from "./pages/Pattern";

function App() {
  return (
    <div className="app p-4 text-center">
      {/* routing */}

      <Nav>
        <NavItem>
          <NavLink href="/">JSON to Form</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/pattern">Pattern</NavLink>
        </NavItem>
      </Nav>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/pattern" element={<Pattern />} />
      </Routes>
    </div>
  );
}

export default App;
