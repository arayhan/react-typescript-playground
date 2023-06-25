import { Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header
        title="React Typescript Playground"
        description="by Ahmed Rayhan Primadedas"
      />

      <div className="py-16 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-4 gap-10">
            <Link
              to="/headless-ui"
              className="bg-indigo-700 text-white rounded-lg px-10 py-6 font-bold text-center"
            >
              Headless UI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
