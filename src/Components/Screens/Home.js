import React from 'react'
// import { Doctor } from '../Doctor'
import { Feature } from '../Feature'
import { Header } from '../Header'
import { Navbar } from '../Navbar'
import { Service } from '../Service'
import { Spinner } from '../Spinner'
import { Topbar } from '../Topbar'
import { About } from './About'
import { Team } from '../Team'
import { Appointment } from '../Appointment'
import { Testimonial } from '../Testimonial'
import { Footer } from '../Footer'



export const Home = () => {
  return (
    <div>
       <Spinner/> 
        <Topbar/>
        <Navbar/>
        
    </div>
  )
}
