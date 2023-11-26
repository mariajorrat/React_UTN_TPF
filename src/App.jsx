import React from "react";
import "./App.css";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import FooterWeb from "./components/FooterWeb/FooterWeb";
import Components from "./components";

function App() {
    return (
        <div className="App">
            <HeaderNav />
            <Components />
            <FooterWeb />
        </div>
    );
}

export default App;
