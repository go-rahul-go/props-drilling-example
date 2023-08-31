import "./style.css"
import GrandParent from "./components/GrandParent";
import { BsArrowRightCircle } from "react-icons/bs";
import Header from "./components/Header";
function App() {
  return (
    <div className="main">
      <Header/>
      <GrandParent />
      <BsArrowRightCircle/>
    </div>
  );
}

export default App;
