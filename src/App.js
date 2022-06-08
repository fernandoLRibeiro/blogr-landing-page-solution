import CTA from "./containers/CTA";
import Navbar from "./containers/Navbar";
import style from "./styles/App.module.css";

function App() {
  return (
    <div className={style.App}>
      <CTA />
    </div>
  );
}

export default App;
