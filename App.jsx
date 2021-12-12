import { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import { motion } from "framer-motion"
import a from '../public/res.json'

import { std } from '../public/stdss.json'


import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import "./style.scss"
function App() {
  SwiperCore.use([Autoplay]);

  const [count, setCount] = useState(0)
  console.log(std);
  useEffect(() => {
    //alert("dfdfdf")

    // document.body.onkeydown = (e => {
    //   if (e.key == "ArrowRight") {
    //     count < a.length ?
    //       (setCount(0), setCount(count + 1)) : setCount(0)
    //   }
    // })
  }, [0])
  console.log(a[count]);


  function Controllers() {

    let _imgs = [

      '', "staff", "quran", "sharee", "social", "lang", "usul"]
    const [nth, setNth] = useState(0)
    useEffect(() => {
      // setTimeout(() => {
      //   //setNth(0)
      //   setNth(nth + 1)
      // }, 10500)
    }, [
      nth
    ])
    return (
      <motion.div animate={{ transition: { delay: 4 } }}>

        <motion.img animate={{ opacity: [0, 1] }} style={{ position: "absolute", zIndex: "5", top: "0", height: "100vh" }} src={`./image/${_imgs[nth]}.jpg`} alt="" />
      </motion.div>

    )
  }

  function Home() {
    const ref = useRef(null)
    useEffect(() => {
      document.onclick = () => {
        ref.current.play()

      }
      //alert("dfsdf")

    }, [0])
    return (
      <motion.div initial={{}}
        animate={{ opacity: [0, .75, 1], transition: { duration: 3 } }}
        style={{ display: "flex", "min-height": "100vh" }}>
        <div style={{ "margin": "auto" }}>
          {/* <audio ref={ref} autoPlay={true} src="trim.mp3"></audio> */}
          {/* <img  style={{ width: "50vw"}} src="image/staff.jpg" alt="" /> */}

          <Controllers />

          <motion.img animate={{ opacity: [1, .5, 1], scale: [1, 1.2], transition: { duration: 2, delay: .8 } }} style={{ width: "50vw" }} src="image/logo.png" alt="logo" />
        </div>
        <div className="logo">
          <motion.img animate={{ y: [-200, 0, 0], opacity: [0, 1, 1], scale: [1, 1, 1, 1, .9], transition: { delay: .5, duration: 1.5 } }} src="image/dsu.png" alt="DSU" />
        </div>

      </motion.div>
    )
  }


  function Results({ prog, pos1, pos2, pos3, gradeOnly }) {
    //const [Gradset, setGradset] = useState(false)
    let tf = 1
    let ts = 1
    let tt = 1
    pos1 ? tt = 1 : 0;
    pos2 ? ts = tf + 1 : tf + 0;
    pos3 ? tf = ts + 1 : ts + 0;

    console.log((tf + ts + tt) * 1000);

    // setTimeout(() => {
    //   count<a.length?
    //   setCount(count + 1):setCount(0)
    // }, 35000);


    useEffect(() => {
      setTimeout(() => {
        setGradset(true)
      }, (tf + ts + tt) * 1000);
    }, [0])
    console.log(pos1);
    return (
      <>
        <div className="result">
          <audio autoPlay={true} src="a.mp3"></audio>

          <motion.div animate={{ scale: [0, 1.7, 1.5], opacity: [0, .8, .3, 1] }} className="prname" id="prname">
            {prog}
          </motion.div>



          <div className="res">

            {pos2 ?

              <motion.div animate={{ opacity: [0, 1], transition: { delay: tf } }} className="e pos2">
                <div className='_poslabel'>
                  SECOND

                </div>
                <motion.div style={{ backgroundImage: `url(./ph/${pos2.enr}.jpg)` }} animate={{ y: [150, 0], opacity: [0, 1], transition: { delay: tf } }} className="_res">

                  {/* <img src={`./ph/${pos2.enr}.jpg`} alt="" /> */}
                  <div className="grade">{pos2.grade}</div>
                </motion.div>
                <div className="det">
                  <div className="enr2">
                    {pos2.enr}
                  </div>
                  <div className="name">
                    {std.find(e => e.enr == pos2.enr).name}
                  </div>
                  <div className="kul">
                    {std.find(e => e.enr == pos2.enr).kulliya}

                  </div>
                </div>
              </motion.div> : <motion.div animate={{ opacity: [0, 1], transition: { delay: ts } }} className="e pos1">

              </motion.div>

            }
            {pos1 ?
              <motion.div animate={{ opacity: [0, 1], transition: { delay: ts } }} className="e pos1">
                <div className='_poslabel'>
                  FIRST
                </div>
                <motion.div style={{ backgroundImage: `url(./ph/${pos1.enr}.jpg)` }} animate={{ y: [150, 0], opacity: [0, 1], transition: { delay: ts } }} className="_res">

                  <motion.div className="pos">

                  </motion.div>
                  <div className="grade">{pos1.grade}</div>
                </motion.div>
                <div className="det">
                  <div className="enr">
                    {pos1.enr}
                  </div>
                  <div className="name">
                    {std.find(e => e.enr == pos1.enr).name}
                  </div>
                  <div className="kul">
                    {std.find(e => e.enr == pos1.enr).kulliya}

                  </div>
                </div>
              </motion.div> :
              <motion.div animate={{ opacity: [0, 1], transition: { delay: ts } }} className="e pos1">

              </motion.div>

            }

            {pos3 ?
              <motion.div animate={{ opacity: [0, 1], transition: { delay: tt } }} className="e pos3">
                <div className='_poslabel'>
                  THIRD
                </div>

                <motion.div style={{ backgroundImage: `url(./ph/${pos3.enr}.jpg)` }} animate={{ y: [150, 0], opacity: [0, 1], transition: { delay: tt } }} className="_res">
                  <motion.div className="pos">

                  </motion.div>

                  <div className="grade">{pos3.grade}</div>
                </motion.div>
                <div className="det">
                  <div className="enr2">
                    {pos3.enr}
                  </div>
                  <div className="name">
                    {std.find(e => e.enr == pos3.enr).name}
                  </div>
                  <div className="kul">
                    {std.find(e => e.enr == pos3.enr).kulliya}

                  </div>
                </div>
              </motion.div> : <motion.div animate={{ opacity: [0, 1], transition: { delay: ts } }} className="e pos1">

              </motion.div>
            }
          </div>




          <div className="res">
            {/* {gradeOnly.map((e, i) =>
                <motion.div className="e">
                  <div className='_grade'>
                    {e.grade}
                  </div>
                  <motion.div style={{ backgroundImage: `url(./ph/${e.enr}.jpg)` }} animate={{ y: [150, 0], opacity: [0, 1], transition: { delay: i * .75 } }} className="_res">
                  </motion.div>
                  <div className="enr2">
                    {e.enr}
                  </div>
                  <div className="name">
                    {std.find(_e => _e.enr == e.enr).name}
                  </div>
                </motion.div>
              )} */}
          </div>


        </div>
      </>
    )
  }

const [ind, setind] = useState(0)


  return (
    <div className="App">
      <audio src="trim.mp3" autoPlay={true}></audio>

      {/* {count == 0 && <Home />}
      {count > 0 &&

        <Results {...a[count - 1]} />
      } */}

      <Swiper
        autoplay={{ delay: 5000,reverseDirection:true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(e) => {
          setind(e.activeIndex)
          //console.log('slide change',e)
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >


        {a.map((e,i) =>

          <SwiperSlide>

            {i==ind&&<Results {...e} />}
          </SwiperSlide>


        )}



        )

      </Swiper>
    </div>
  )
}




export default App
