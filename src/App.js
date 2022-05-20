import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/mainpage";

function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;
