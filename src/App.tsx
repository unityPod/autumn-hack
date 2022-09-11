import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Calendar from "./components/Calendar";
import Registration from "./components/Registration/Registration";
import Advisor from "./components/Registration/views/Advisor";
import JobHunter from "./components/Registration/views/JobHunter";
import SelectAdvisor from "./components/SelectAdvisor";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/job-hunter" element={<JobHunter />} />
      <Route path="/advisor" element={<Advisor />} />
      <Route path="/selectadvisor" element={<SelectAdvisor />} />
      <Route path="/calendly" element={<Calendar />} />
    </Routes>
  );
};

export default App;
