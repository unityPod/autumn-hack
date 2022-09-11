import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default App;
