'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contacct from "./components/Contacct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  const [darkmode, setdarkmode] = useState(false);
  useEffect(() => {
    if(localStorage.theme==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setdarkmode(true)
    }
    else{
      setdarkmode(false)
    }
  }, []);

  useEffect(() => {
    if(darkmode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';

    }
  }, [darkmode])
  
  return (
    <>
    <Navbar darkmode={darkmode} setdarkmode={setdarkmode}/>
    <Header darkmode={darkmode}/>
    <About darkmode={darkmode}/>
    <Services darkmode={darkmode}/>
    <Work darkmode={darkmode}/>
    <Contacct darkmode={darkmode}/>
    <Footer darkmode={darkmode}/>
    </>
  );
}
