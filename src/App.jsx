import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [recipe, setCount] = useState({image:"",title:"New Burger", time:"", difficulty:""});

  return (
    <div className="divide-y divide-gray-100">
      <Nav />

      <ul className="divide-y divide-gray-100">
        <article className="p-4 flex space-x-4">
          <img
            src={recipe.image}
            alt=""
            className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
            width="144"
            height="144"
          />
          <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
            <h2 className="text-lg font-semibold text-black mb-0.5">
              {recipe.title}
            </h2>
            <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
              <div>
                <dt className="sr-only">Time</dt>
                <dd>
                  <abbr title={`20 minutes`}>20m</abbr>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Difficulty</dt>
                <dd> · {recipe.difficulty}</dd>
              </div>
              </dl>
          </div>
        </article>
      </ul>
    </div>
  );
}

export default App;
