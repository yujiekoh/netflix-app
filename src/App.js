import React from 'react';
import jumboData from './fixtures/jumbo.json';
import Jumbotron from './components/jumbotron'; // notice you don't need index.js in the file path

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <p>{item.title}</p>
          <p>{item.subTitle}</p>
          
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
