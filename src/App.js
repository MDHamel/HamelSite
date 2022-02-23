import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './content/Home';
import Test from './test';
import Navbar from './component/Navbar';
import Code from './content/Code';

function NoPage(){
  return(
    <div>
      <Navbar/>
      <br/>
      <h1 style={{textAlign:"center"}}>Error 404: Page Not Found</h1>
    </div>
    
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/code" element={<Code/>}/>
        <Route path="*"  element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
