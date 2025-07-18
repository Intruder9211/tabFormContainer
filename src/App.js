import React from "react";
import Tabs from "./Tabs";

function App() {
    const tabsData = [
        { title: "Home", content: "Welcome to the Home tab." },
        { title: "Profile", content: "This is your Profile." },
        { title: "", content: "" }, // will trigger default messages
        { content: "Only content, no title." }, // title missing
        { title: "About" } // content missing
    ];

    return (
        <div className="App">
            <h1>Tabs Example</h1>
            <Tabs tabs={tabsData} />
        </div>
    );
}

export default App;

