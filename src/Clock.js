import React, {useState,useEffect} from 'react'
import './Clock.css'
const Clock = () => {

  const [time,setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() =>{
         setTime(new Date())
    },1000)

    return () =>
     clearInterval(interval);
  },[])


  const getRotationDegrees = (unit,max) => (unit /max)* 360;

  const secondDegrees = getRotationDegrees(time.getSeconds(),60);
  const minuteDegrees = getRotationDegrees(time.getMinutes(),60);
  const hourDegrees = getRotationDegrees(time.getHours() % 12,12) +getRotationDegrees(time.getMinutes(),60)/12;


  return(
    <div className="clock">
       <div className="hand hour" style={{ transform : `rotate(${hourDegrees}deg`}} />
       <div className="hand minute" style={{ transform : `rotate(${minuteDegrees}deg`}} />
       <div className="hand second" style={{ transform : `rotate(${secondDegrees}deg`}} />

         <div className="center"/>
         {[...Array(12)].map((_,index)=>
          (
            <div key={index} className="number" style={{ transform: `rotate(${index * 30}deg)`}}>
              <div style={{transform: `rotate(-${index * 30}deg)`}}>{index + 1}
              </div>
                </div>
          ))}
  </div>

  )
}

export default Clock;