import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/dashboard/DashboardPage";
import QuizPage from "./pages/quiz/QuizPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
    </>
  );
}

export default App;
