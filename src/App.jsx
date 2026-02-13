import { useState } from 'react'
import Section from './components/Section'
import Hand from './features/expand_cards/Hand'
import pic1 from './assets/IMG_2034.jpg'
import pic2 from './assets/IMG_2110.JPG'
import pic3 from './assets/IMG_2211.JPG'
import pic4 from './assets/WhatsApp Image 2026-01-24 at 01.32.14.jpeg'
import './App.css'

function App() {
  const myImages = [pic1, pic2, pic3, pic4]

  return (
    <>
      <Section children={<h1>Hey Baby! 👋😊</h1>}></Section>
      <Section children={<h1>Sorry for being late with this... 😔</h1>}></Section>
      <Section children={<h1>I know I've been busy but I still wanted to make something special for you! 🫵😊</h1>}></Section>
      <Section children={<h1>Here you go! ✋😚🤚</h1>}></Section>
      <Section><h1 className='thanks'>Thank you for always supporting me. Whether it be when I'm sick or stressed you have always been there for me and I haven't thanked you enough for that.</h1><Hand images={myImages}></Hand></Section>
    </>
  )
}

export default App
