import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="matches" element={<Matches />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
