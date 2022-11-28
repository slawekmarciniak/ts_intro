import React from "react";
import { Welcome } from "./components/Welcome";
import { number } from "./constants/someNumber";

function App() {
    return (
        <div className="App">
            <Welcome number={number} />
        </div>
    );
}

export default App;
