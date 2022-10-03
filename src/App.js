import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import Agr from "./components/Agr";
import Agr2 from "./components/Agr2";
import AgrForm from "./components/Agr_form";
import AreaFeedback from "./components/AreaFeedback";
import CommonDash from "./components/CommonDash";
import FeedbackCleint from "./components/FeedbackCleint";
import SelectPlace from "./components/SelectPlace";
import Vcm01 from "./components/Vcm01";
import Vs01 from "./components/Vs01";
import Vs02 from "./components/Vs02";
import WeatherForacst from "./components/weatherForacst";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App h-100">
      <Routes>
        <Route path="/" element={<Navigate replace to="/frame1" />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="frame1" element={<Vcm01 />} />
          <Route path="frame2" element={<Vs01 />} />
          <Route path="frame3" element={<Vs02 />} />
          <Route path="frame4" element={<Agr />} />
          <Route path="frame5" element={<Agr2 />} />
          <Route path="frame6" element={<AgrForm />} />
          <Route path="frame7" element={<WeatherForacst />} />
          <Route path="frame8" element={<CommonDash />} />
          <Route path="frame9" element={<SelectPlace />} />
          <Route path="frame10" element={<AreaFeedback />} />
          <Route path="frame11" element={<FeedbackCleint />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
