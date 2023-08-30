import React from 'react';
import Counter from './Counter.jsx';
import './App.scss'

const App = () => {
   return (
      <div className='wrapper'>
         <Counter initialValue={0} />
      </div>
   );
};

export default App;