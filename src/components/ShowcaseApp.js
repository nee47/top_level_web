import React, { useState } from 'react'

function ShowcaseApp() {

    const successRate = 0.7;
    const [currentLevel, setCurrentLevel] = useState(0)
    

    const levelup = ()=>{
        let randomVal = Math.random();
        if(randomVal <= successRate){
            setCurrentLevel((previousLevel)=> previousLevel+1);
        }
        else setCurrentLevel(0);

    }

  return (
    <div className='sc-app-container'>
      <img className='sc-item' src="https://cdn-icons-png.flaticon.com/512/1213/1213817.png?w=740&t=st=1668230181~exp=1668230781~hmac=db5ae83583d58e4b698a34d38451013a46e19273d760442cccdf118d025bda4e" alt="item" />
      <div className='sc-level-info'>Level: <span>{currentLevel}</span></div>
      <div className='sc-sucess-info'>Success rate: <span>70%</span></div>
      <div onClick={levelup} className='lvlupButton'>LVL UP</div>
    </div>
  )
}

export default ShowcaseApp
