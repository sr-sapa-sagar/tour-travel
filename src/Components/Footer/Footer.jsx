import React,{useEffect} from 'react'
import './Footer.css'
import './Footer.scss'
import video_2 from '../../Assets/video_2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";


import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  
  // scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
    }, [])


  return (
   <section className="footer">
    <div className="videoDiv">
      <video src={video_2} loop autoPlay muted typeof='video/mp4'></video>
    </div>
    <div className="secContent container">
      <div className="contactDiv flex">
       <div data-aos="fade-up" className="text">
       <small>KEEP IN TOUCH</small>
       <h2>Travel With Us</h2>
       </div>
       <div className="inputDiv flex">
        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
        <button data-aos="fade-up" className="btn flex" type="submit">
          SEND <FiSend className='icon'/>
        </button>
       </div>
      </div>
      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className='logo flex'>
            <MdOutlineTravelExplore className='icon' />Travel.
            </a>
          </div>
          <div data-aos="fade-up"
          className="footerParagraph">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam est porro
         officiis ipsam esse repellat magni temporibus aspernatur at quaerat!
          </div>
          <div data-aos="fade-up"
          className="footerSocials flex">
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon' />
          <AiFillInstagram className='icon'/>
          <FaTripadvisor className='icon'/>
          </div>
        </div>
        
        <div className="footerLinks grid">
          {/*Group one*/}
          <div data-aos="fade-up" data-aos-duration="3000"
          className="linkGroup">
            <span className="groupTitle">
               OUR AGENCY</span>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
               Services
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
               Insurance
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
               Agency
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
                Turism
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
                Payment
               </li>
          </div>
           {/*Group Two*/}
           <div data-aos="fade-up" data-aos-duration="4000"
           className="linkGroup">
            <span className="groupTitle">
              PARTNERS</span>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
               Bookings
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
               Rent Cars
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
               Hostel World
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
                Trivago
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
                Trip Advisore
               </li>
          </div>
           {/*Group Three*/}
           <div data-aos="fade-up" data-aos-duration="5000"
           className="linkGroup">
            <span className="groupTitle">
               LAST MINUT</span>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
               Darjilling
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
               Shillong
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
               Rajasthan
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
                Rishikesh
               </li>

               <li className="footerList flex">
               <FiChevronRight className='icon'/>
                Agra
               </li>
          </div>
        </div>
        <div className='footerDiv flex'>
        <small>BEST TRAVEL WEBSITE THEM</small>
        <small>&copy; Reserved - TRAVEL TECH_2024@...</small>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Footer