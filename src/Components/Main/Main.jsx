import React,{useEffect} from 'react'
import './Main.css'
import './Main.scss'
import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.webp'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.webp'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgsrc: img,
    destTitle: 'Qutb Minar',
    location: 'Delhi',
    grade: 'History',
    fees: '$5000',
    description: 'The epitome of history, Qutb minar is one of the best place in the Delhi.This place is known for its history and victory monument.'
  },
  {
    id:2,
    imgsrc: img2,
    destTitle: 'Hawa Mahal',
    location: 'Jaipur',
    grade: 'Winds',
    fees: '$3000',
    description: 'Hawa Mahal,known as the Palace of the Winds,Originally, it served as an extension to the women`s chambers of the nearby City Palace.hawa mahal is considered as one of the most iconic attraction of the turist.'
  },
  {
    id:3,
    imgsrc: img3,
    destTitle: 'Taj Mahal',
    location: 'Agra',
    grade: 'Memory',
    fees: '$5000',
    description: 'The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal,The Taj Mahal is a major tourist attraction and attracts a large number of domestic and foreign visitors. About five million visitors visited Taj Mahal in the financial year 2022–23..'
  },
  {
    id:4,
    imgsrc: img4,
    destTitle: 'Chittorgarh Fort',
    location: 'Rajasthan',
    grade: 'Victory',
    fees: '$7000',
    description: 'The Chittorgarh (literally Chittor Fort), also known as Chittod Fort, is one of the largest living forts in India. It is a UNESCO World Heritage Site. The fort was the capital of Mewar and is located in the present-day city of Chittorgarh.'
  },
  {
    id:5,
    imgsrc: img5,
    destTitle: 'Sanchi Stupa',
    location: 'Madhya Pradesh',
    grade: 'Buddha',
    fees: '$8000',
    description: 'Sanchi Stupa is a Buddhist complex, famous for its Great Stupa, on a hilltop at Sanchi Town in Raisen District of the State of Madhya Pradesh, India. It is located,.'
  },
  {
    id:6,
    imgsrc: img6,
    destTitle: 'Rishikesh',
    location: 'Dehradun',
    grade: 'Rivers',
    fees: '$10000',
    description: 'Rishikesh, also spelt as Hrishikesh, Rishikesh is in uttrakhand on of the best destination for rivers rafting,riskesh is known for its Ganges River ,Mountains,history and temples.'
  },
  {
    id:7,
    imgsrc: img7,
    destTitle: 'Assi Ghat',
    location: 'Varanasi',
    grade: 'Culture',
    fees: '$7000',
    description: 'Assi Ghat is the southernmost ghat in Varanasi. To most visitors to Varanasi, it is known for being a place where long-term foreign students, researchers, and tourists live, assi ghat provides a spectacular notion of river Ganga'
  },
  {
    id:8,
    imgsrc: img8,
    destTitle: ' Darjeeling',
    location: ' West Bengal',
    grade: 'Tiger Hill',
    fees: '$8000',
    description: 'Tiger Hill (2,590 metres (8,500 ft)) is a mountain located in Darjeeling, in the Indian State of West Bengal. It has a panoramic view of Mount Everest and Mount Kanchenjunga together.'
  },
  {
    id:9,
    imgsrc: img9,
    destTitle: 'Shillong',
    location: ' Meghalaya',
    grade: 'Camping',
    fees: '$10,000',
    description: 'The top attractions to visit shillong for the best outdoor activities in according to tripadvisor.shillong is a hill station.the place is known  for its mountain and adventurous activities'
  },
]

const Main = () => {

  // scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
    }, [])


  return (
    <section className='main container section'> 
      <div className="secTitle">
    <h3 data-aos="fade-right" className="title">
      Most visited destinations
    </h3>
      </div>
      <div className='secContent grid'>

     {
      Data.map(({id, imgsrc, destTitle, location, fees, grade,
        description})=>{
         return(
          <div key={id} data-aos="fade-up"
          className="singleDestination">


           <div className="imageDiv">
            <img src={imgsrc} alt={destTitle} className="" />
           </div>
           <div className="cardInfo">
            <h4 className="destTitle">
              {destTitle}</h4>
              <span className="continent flex">
              <HiOutlineLocationMarker  className='icon'/>
              <span className="name">{location}</span>
              </span>

              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>
              <button className='btn flex'>
                DETAILS <LuClipboardCheck className='icon'/>
              </button>
           </div>
          </div>
         )
      })
     }
      </div>

    </section>
  )
}

export default Main