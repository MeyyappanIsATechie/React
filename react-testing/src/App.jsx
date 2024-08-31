import "./App.css";
import ApiTesting from "./components/ApiTesting";
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";
import ThemeToggleButton from "./context-test/Button";
import ThemeContent from "./context-test/Theme";

function App() {
  return (
    <div>
      {/* <HelloWorld />
      <Counter />
      <ApiTesting /> */}
      <ThemeToggleButton />
      <ThemeContent />
    </div>
  );
}

export default App;
