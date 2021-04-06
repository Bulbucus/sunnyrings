import React, { useEffect }  from 'react';

import fadeInAnimation from './animation/fadeInScroll';

import Section from './hook/Section/Section';

import Home from './components/Home/Home';
import Inox from './components/Produto/Inox/Inox';
import Arame from './components/Produto/Arame/Arame';
import Processo from './components/Processo/Processo';
import Entrevista from './components/Entrevista/Entrevista';
import SobreNos from './components/SobreNos/SobreNos';

import './App.scss';

function App() {
  
  useEffect(() => {
    //efeito fadein quando faz scroll e aparece no viewport
    fadeInAnimation();
  },[])
  return (
    <>
      <Home ></Home>
      <Section title="Anel Inox">
        <Inox></Inox>
      </Section>
      <Section title="Anel Arame">
        <Arame></Arame>
      </Section>
      <Section title="Processo">
        <Processo></Processo>
      </Section>
      <Section title="Entrevistas">
        <Entrevista></Entrevista>
      </Section>
      <Section title="Sobre nós">
        <SobreNos></SobreNos>
      </Section>
    </>
  );
}

export default App;
