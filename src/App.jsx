import { useEffect } from "react";
import { useState } from "react";
import Article from "./Article";
import data from "./data";
import "./style/style.css";

const localStorageData = () => {
  let theme = "light__theme";

  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

function App() {
  const [darkTheme, setDarkTheme] = useState(localStorageData());

  useEffect(() => {
    document.documentElement.className = darkTheme;
    localStorage.setItem("theme", darkTheme);
  }, [darkTheme]);

  const toggle = () => {
    // console.log("click");
    if (darkTheme === "light__theme") {
      setDarkTheme("dark__theme");
    } else {
      setDarkTheme("light__theme");
    }
  };

  return (
    <>
      <header className="header">
        <h1 className="logo__heading">Dark-mode</h1>
        <button className="btn btn-dark" onClick={toggle}>
          Toggle
        </button>
      </header>
      <main className="main">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </main>
    </>
  );
}

export default App;
