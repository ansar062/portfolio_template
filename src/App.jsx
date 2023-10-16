import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Hero, Aboutme, MyServices, MySkills, Portfolio, Contactme, Header } from './Components'

export default function App() {
  return (
    <>
    <header className='sticky top-9'>
      <Header />
    </header>
    <section className='min-h-screen font-roboto bg-[#27323E] w-full'>
      <Hero />
    </section>
    <section className='bg-[#212529] font-roboto min-h-screen w-full'>
      <Aboutme />
    </section>
    <section className='min-h-screen font-roboto bg-[#27323E] w-full'>
      <MyServices />
    </section>
    <section className='bg-[#212529] font-roboto min-h-screen w-full'>
      <Portfolio />
    </section>
    <section className='min-h-screen font-roboto bg-[#27323E] w-full'>
      <MySkills />
    </section>
    <section className='bg-[#212529] font-roboto min-h-screen w-full'>
      <Contactme />
    </section>
    </>
  )
}