import React from 'react';
import Heatmap from './components/Heatmap';


function App() {
  return (
    
      <div className='w-full h-screen bg-[#071827] flex flex-col justify-center  '>
        <div className=''>
        <div className='bg-white border max-w-7xl  m-auto relative  rounded-md'>
        <Heatmap/>
        </div>
        </div>
       
       <div>
        <p className='text-[#fff] text-sm text-center mt-4'>Heatmap component built with <span className='text-[#e01a10]'>♥</span>  by <a className='text-[#0eb683] underline cursor-pointer transition-all active:scale-90' href="https://github.com/idyWilliams">idy-Williams</a> </p>
       </div>
      </div>
  );
}

export default App;
