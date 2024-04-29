import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualificacao from './components/qualificacao/Qualificacao';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
import Projetos from './components/projetos/Projetos';



const App = () => {
    return (
        <>
          <Header />
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Qualificacao />
                <Projetos /> 
                <Contact />
 
            </main>

            <Footer />
            <ScrollUp />
        </>
    );
};

export default App;