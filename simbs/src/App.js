import React from 'react';
import Header from './components/menu.jsx';
import Blocks from './components/blocks.jsx';
// import Form from './components/form';
import Footer from './components/footer';
import Plane from './components/plane';
import './App.css';
import './index.css';

function App() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Blocks />
      </section>
      <section>
        <Plane />
      </section>
      <section>
        {/* <Form /> */}
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
