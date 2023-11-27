import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/dashboard/DashboardPage";
import QuizPage from "./pages/quiz/QuizPage";
import ContentPage from "./pages/Content/ContentPage";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/content" element={<ContentPage/>} />
    </Routes>
      {/* <ContentPage/> */}
    </>
  );
}

export default App;
