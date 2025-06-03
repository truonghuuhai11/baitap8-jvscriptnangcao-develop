// src/App.jsx
import React from 'react';
import Card from './Card';

const assistants = [
  {
    name: "Alexa",
    handle: "@alexa99",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Amazon_Alexa_blue_logo.svg/180px-Amazon_Alexa_blue_logo.svg.png",
    description: "I'll help you buy stuff off Amazon"
  },
  {
    name: "Cortana",
    handle: "@cortana12",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Microsoft_Cortana_transparent.svg/250px-Microsoft_Cortana_transparent.svg.png",
    description: "Personal assistant by Microsoft"
  },
  {
    name: "Siri",
    handle: "@siri44",
    image: "https://upload.wikimedia.org/wikipedia/vi/thumb/8/8e/AppleSiriIcon2017.png/280px-AppleSiriIcon2017.png",
    description: "I don’t get a lot of updates anymore"
  }
];

function App() {
  return (
    <div className="container mt-5">
      <div className="columns is-justify-content-center">
        {assistants.map((a, i) => (
          <Card
            key={i}
            name={a.name}
            handle={a.handle}
            image={a.image}
            description={a.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
