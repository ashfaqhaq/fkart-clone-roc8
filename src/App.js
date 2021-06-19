import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import ContentBody from "./components/ContentBody/ContentBody";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <CategoryBar />

    <div className="grid 1-3part bg-gray">

      <aside>
        <Sidebar />
      </aside>
      <section>
        <ContentBody />
      </section>

      </div>
    

     
    </div>
  );
}

export default App;
