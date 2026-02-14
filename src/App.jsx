import { useState } from 'react'
import Section from './components/Section'
import SpecialSection from './components/SpecialSect'
import Hand from './features/expand_cards/Hand'
import pic1 from './assets/IMG_2034.jpg'
import pic2 from './assets/IMG_2110.JPG'
import pic3 from './assets/WhatsApp Image 2026-01-24 at 01.32.14.jpeg'
import pic4 from './assets/IMG_2211.JPG'
import pic5 from './assets/Image from iOS.jpg'
import pic6 from './assets/8C2B2DEA-30F7-42E8-B9FC-A9748E013913_4_5005_c.jpeg'
import pic7 from './assets/98B0F527-5901-49EC-A2DD-34BF1C6D90A0_4_5005_c.jpeg'
import BackgroundMusic from './features/background_music/BackgroundMusic'
import './App.css'

function App() {
  const myImages = [pic1, pic2, pic3, pic4]

  return (
    <>
      <BackgroundMusic/>
      <Section children={<h1 className='thanks'>Hey Baby! 👋😊</h1>}></Section>
      <Section children={<h1 className='thanks'>Sorry for being late with this... 😔</h1>}></Section>
      <Section children={<h1 className='thanks'>I know I've been busy but I still wanted to make something special for you! 🫵😊</h1>}></Section>
      <Section children={<h1 className='thanks'>Here you go! ✋😚🤚</h1>}></Section>
      <Section>
        <h1 className='thanks'>Thank you for always supporting me. Whether it be when I'm sick or stressed you have always been there for me and I haven't thanked you enough for that.</h1>
        <Hand images={myImages}/>
      </Section>
      <Section>
        <div className='image-container'>
          <img src={pic5} alt='Us'/>
        </div>
        <h1 className='thanks'>Thank you for loving me even when I'm bald.</h1>
      </Section>
      <Section>
        <h1 className='thanks'>Thank you for letting us be vulnerable with each other.</h1>
        <div className='image-container'>
          <img src={pic6} alt='First Date'/>
        </div>
      </Section>
      <Section>
        <div className='image-container'>
          <img src={pic7} alt='You!'/>
        </div>
        <h1 className='thanks'>Thank you for being my girlfriend ❤️</h1>
      </Section>
      <SpecialSection/>
    </>
  )
}

export default App
