import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/mainpage";
import TopicPage from "./routes/TopicPage";

function App() {
  return (
    <BrowserRouter>
		<Routes>
		 	<Route path="/" element={<MainPage />} />
			<Route path="/assunto/:id" element={<TopicPage />} />		
		</Routes>
	</BrowserRouter>
  );
}

export default App;
