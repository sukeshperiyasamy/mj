
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"; 
import BasicExample from './components/NavigationBar'
import Imageslider from "./components/Carousels"
import Menu from './components/Menu'
import Dealoftheday from './components/Dealoftheday';
import Comments from './components/Comments';

function App() {
  return (
    <>
      <BasicExample/>
<Imageslider/>
<Menu/>
<Dealoftheday/>
<Comments/>
<div className='text-center my-3 text-danger small'>Copyright @2023</div>
    </>
 
  );
}

export default App;
