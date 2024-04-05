import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ContentPage from "./pages/content/ContentPage";
import "./App.css";
import QuizPage from "./pages/quiz/QuizPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path=":chapter">
        <Route path=":topic" element={<ContentPage />} />
        <Route path="quiz" element={<QuizPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
