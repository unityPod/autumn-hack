import { Routes, Route } from "react-router-dom";
import Login from "./Components/login/login";
import Registration from "./Components/Registration/Registration";
import Advisor from "./Components/Registration/views/Advisor";
import JobHunter from "./Components/Registration/views/JobHunter";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/job-hunter" element={<JobHunter />} />
      <Route path="/advisor" element={<Advisor />} />
    </Routes>
  );
};

export default App;
