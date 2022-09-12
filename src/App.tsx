import { Routes, Route } from "react-router-dom";

import Calendar from "./components/Calendar";
import Registration from "./components/Registration/Registration";
import SelectAdvisor from "./components/SelectAdvisor";
import JobHunter from "./components/Registration/views/JobHunter";
import Advisor from "./components/Registration/views/Advisor";
import Login from "./components/Login/login";
import ProfileAdvisor from "./components/Profile/ProfileAdvisor";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/job-hunter" element={<JobHunter />} />
      <Route path="/advisor" element={<Advisor />} />
      <Route path="/selectadvisor" element={<SelectAdvisor />} />
      <Route path="/calendly" element={<Calendar />} />
      <Route path="/profile" element={<ProfileAdvisor />} />
    </Routes>
  );
};

export default App;
