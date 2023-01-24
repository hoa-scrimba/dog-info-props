import React from "react";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import data from "./data.js";

function App() {
    
    const Cards = data.map( function(dogs) {
        return (
            <Card 
                key={dogs.id}
                dog={dogs}
            />
        );
    });
    
    return (
        <div className="container">
            <Header />
            <section className="cards--container">
                {Cards}
            </section>
        </div>
    );
};


export default App;
