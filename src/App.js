import "./App.css";
import Title from "./Components/Title";
import SearchForm from "./Components/SearchForm";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <Title />
        <SearchForm />
      </main>
      <code className="App-code">
        <p>
          Designed by{" "}
          <span>
            <a href="#" className="App-link">
              @Blessing
            </a>
          </span>
          {" || </> "}
          <span>
            <a href="#" className="App-link">
              @Augustine
            </a>
          </span>
        </p>
      </code>
    </div>
  );
}

export default App;
