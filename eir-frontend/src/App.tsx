import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setUser(data.user_id);
          }
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const handleLogout = () => {
    setUser(null);
    window.location.href = "/api/slo";
  };

  return (
    <Routes>
      <Route
        path="/auth"
        element={user ? <Navigate to="/" replace /> : <LoginPage projectTitle="EIR Income Projection" />}
      />
      <Route
        path="/"
        element={user ? <HomePage user={user} onLogout={handleLogout} /> : <Navigate to="/auth" replace />}
      />
    </Routes>
  );
}

export default App;