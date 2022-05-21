import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/mainpage";
import TopicPage from "./routes/TopicPage";
import QuestionsPage from "./routes/QuestionsPage";

function App() {
  return (
    <BrowserRouter>
		<Routes>
		 	<Route path="/" element={<MainPage />} />
			<Route path="/assunto/:id" element={<TopicPage />} />	
			<Route path="/questions" element={<QuestionsPage />}/>
		</Routes>
	</BrowserRouter>
  );
}

export default App;
