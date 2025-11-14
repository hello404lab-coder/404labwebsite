import React from 'react'
import ServicesComponent from '../components/ServicesComponent'
import WebflowFeatures from '../components/WebFlowFeatures'
import OurTeam from './OurTeam'
import AboutUsHero from '../components/AboutUsHero'

const About = () => {
  return (
    <div>
    <div  className=''><AboutUsHero/></div>

      <div><OurTeam /></div>
     <div><ServicesComponent /></div>
    <div><WebflowFeatures /></div>
    </div>
  )
}

export default About