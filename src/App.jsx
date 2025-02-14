import "./App.css";
import {
  Home,
  ListMenu,
  Technologies,
  Services,
  Projects,
  Contact,
  Footer,
} from "./Components ";
import { useDarkMode } from "./Context.api/DarkMode";

function App() {
  const { darkMode } = useDarkMode();

  return (
    <section
      style={{
        "--background_color_one": darkMode ? "#000" : "#ededed",
        "--background_color_two": darkMode ? "#ededed" : "#000",
        "--gray_color": darkMode ? "#1b1b1b" : "#dfdfdf",
      }}
    >
      <Home />
      <ListMenu />
      <Technologies />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
