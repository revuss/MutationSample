import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { ThemeProvider } from "./context/theme";
import { useEffect, useState } from "react";
import UserLayout from "./Layouts/userLayout";
import Home from "./Components/Home";
import ProtectedRoute from "./AuthGuards/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [themeMode, setthemeMode] = useState(() => {
    const savedTheme = localStorage.getItem("themeMode");
    return savedTheme ? savedTheme : "light";
  });

  const darkTheme = () => {
    setthemeMode("dark");
    localStorage.setItem("themeMode", "dark");
  };

  const lightTheme = () => {
    setthemeMode("light");
    localStorage.setItem("themeMode", "light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <AuthProvider>
          {" "}
          <Router>
            <Routes>
              <Route path="/" element={<UserLayout />}>
                <Route index element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/task"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
