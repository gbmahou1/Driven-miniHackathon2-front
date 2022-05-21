import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/mainpage";
import TopicPage from "./components/TopicPage";
import QuestionsPage from "./components/QuestionsPage";

function App() {
  return (
    <BrowserRouter>
		<Routes>
		 	<Route path="/" element={<MainPage />} />
			<Route path="/assunto/:id" element={<TopicPage />} />
			<Route path="/questions/:id" element={<QuestionsPage />} />		
		</Routes>
	</BrowserRouter>
  );
}

export default App;
