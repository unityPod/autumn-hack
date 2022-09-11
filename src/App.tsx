import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Advisor from "./components/Registration/views/Advisor";
import JobHunter from "./components/Registration/views/JobHunter";

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/job-hunter" element={<JobHunter />} />
      <Route path="/advisor" element={<Advisor />} />
    </Routes>
  );
};

export default App;
