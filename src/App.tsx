import React from 'react';
import Heatmap from './components/Heatmap';


function App() {
  return (
    <>
  
      <div className='min-h-screen  flex flex-col   '>
        <div className='  bg-indigo-300  p-10'>
        <div className='     rounded-md'>
        <Heatmap/>
        </div>
        
        </div>
       
       
      </div>
      </>
  );
}

export default App;
