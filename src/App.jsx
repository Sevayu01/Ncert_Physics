import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/dashboard/DashboardPage";
import QuizPage from "./pages/quiz/QuizPage";
import ContentPage from "./pages/Content/ContentPage";
import Electriccharge from "./pages/Content/Electriccharge";
import Couloumb from "./pages/Content/Couloumb";
import ElectricField from "./pages/Content/ElectricField";
import GaussLaw from "./pages/Content/GaussLaw";
import Slider from "./components/Slider";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/chapter1" element={<ContentPage/>}>
          <Route index element={<Electriccharge/>}/>
          <Route
              path="couloumb's-law"
              element={<Couloumb/>}
          />
          <Route
            path="electric-field"
            element={<ElectricField/>}
          />
          <Route
            path="gauss-law"
            element={<GaussLaw/>}
          />
          <Route
            path="slider"
            element={<Slider/>}
          />
      </Route>
    </Routes>
    </>
  );
}

export default App;
