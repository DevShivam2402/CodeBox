import React from 'react'
import Header from './component/Header'
import Landing from './component/Landing'
import Service from './component/Service'
import Enviroment from './component/Enviroment'
import Footer from './component/Footer'
import './Home.css';

function Home() {
  return (
    <div>
        <Header/>
        <Landing/>
        <Service/>
        <Enviroment/>
        <Footer/>
    </div>
  )
}

export default Home