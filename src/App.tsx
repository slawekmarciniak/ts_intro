import React from "react";
import "./App.css";
import SomeText from "./components/1_statycally-typed";
import { number } from "./constants/someNumber";

function App() {
    return (
        <div className="App">
            <SomeText number={number} />
        </div>
    );
}

export default App;
