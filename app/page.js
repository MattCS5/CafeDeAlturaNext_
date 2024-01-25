"use client";
import Wrapper from './components/Wraper'
import Condiciones from './components/Codiciones'
import Novedades from './components/Novedades' 
import Faq from './components/Faq'
import WraperDos from './components/WraperDos'
import Split from './components/Split';
import Footer from './components/Footer'


export default function Home() {
  return (
    <div className='pt-16'>
    
      <Wrapper/>
      <Condiciones/> 
      <Novedades/>
      <Faq/>
      <WraperDos/>
      <Split/>
      <Footer/>
    </div>
  )
  
  
}
