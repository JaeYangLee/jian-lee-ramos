import "./index.css";
import { useEffect, useState } from "react";
import PageOne from "./pages/PageOne";
import PageTwo from "../src/pages/PageTwo";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const setThemeMode = (mode) => {
    setDarkMode(mode === "dark");
  };
  return (
    <>
      <PageOne />
      <PageTwo />
      <Footer darkMode={darkMode} setTheme={setThemeMode} />
    </>
  );
}

export default App;
