import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ContentPage from "./pages/content/ContentPage";
import QuizPage from "./pages/quiz/QuizPage";
import ImportContent from "./chapterImportService.js";
import "./App.css";
import "./db";

function App() {
  const x = async () => { 
    const quizData =  ImportContent({chapter:"current-electricity", type:"quiz"});
    const topicsData = ImportContent({chapter:"current-electricity", type:"topics"});
    return quizData;
  }

  x();
  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path=":chapter/">
        <Route path=":topic" element={<ContentPage />} />
        <Route path="quiz" element={<QuizPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
