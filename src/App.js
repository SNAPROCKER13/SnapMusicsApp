import './App.css';
import { BrowserRouter } from "react-router-dom";

//import router
import Router from './Router'

function App() {  

  return (
    <div className='bg-neutral-300'>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </div>
  );
}

export default App;
