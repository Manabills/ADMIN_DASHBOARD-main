import { Route, Routes } from "react-router-dom"

import User from "./pages/User";
import Users from "./pages/Users";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Users/> } />
        <Route path="user" element={ <User/> } />
      </Routes>
    </div>
  );
}

export default App;
