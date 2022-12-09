import { BrowserRouter, Routes, Route,  Navigate } from "react-router-dom";
import AuthPage from "./app/pages/login"
import HomePage from "./app/pages/home"
import CreatePage from "./app/pages/create"
import EditPage from "./app/pages/edit"
import { useSelector } from 'react-redux'


function App() {
  const auth = useSelector(state => state.auth)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/home" element={auth.isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />} />
        
        <Route path="/create" element={auth.isLoggedIn ? <CreatePage /> : <Navigate to="/login" replace />} />
        <Route path="/edit/:id" element={auth.isLoggedIn ? <EditPage /> : <Navigate to="/login" replace />} />

        <Route path="/" element={auth.isLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
