import React from 'react'
import TransformingHero from '../components/TransformingHero'
import TextWithImages from '../components/TextWithImages'
import Work from '../components/Work'
import WhyWorkWithMe from '../components/WhyWorkWithMe'
import FAQ from '../components/Faq'
import Services from '../components/Services'
import OurTeam from './OurTeam'


const Home = () => {
  return (
    <>
    <div  className=''><TransformingHero/></div>
    <div className=''> <TextWithImages /> </div>
    <div className=''> <Work/> </div>
    <div className=''> <Services/> </div>
    <div className=''> <OurTeam/> </div>
    <div className=''> <WhyWorkWithMe/> </div>
    <div className=''> <FAQ/> </div>
    </>
  )
}

export default Home