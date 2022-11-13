import React, { useEffect, useState } from 'react'

function ShowcaseApp() {

    const successRate = 0.75;
    const [currentLevel, setCurrentLevel] = useState(0);
    const [resultText, setResultText] = useState("FAIL");
    const [resultStyle, setResultStyle] = useState("result-popout");

    const levelup = ()=>{
        let randomVal = Math.random();
        if(randomVal <= successRate){
            setCurrentLevel((previousLevel)=> previousLevel+1);
            setResultStyle((e)=>(e+" result-enable good-result"));
            setResultText("SUCCESS");
        }
        else{
          setResultText("FAIL");
          setCurrentLevel(0);
          setResultStyle((e)=>(e+" result-enable bad-result"));
        }

        setTimeout(()=>{
          setResultStyle("result-popout");
        }
        , 500);
    }


  return (
    <div className='sc-app-container'>
      <div className='sc-item'>
        <img className='' src="https://cdn-icons-png.flaticon.com/512/1213/1213817.png?w=740&t=st=1668230181~exp=1668230781~hmac=db5ae83583d58e4b698a34d38451013a46e19273d760442cccdf118d025bda4e" alt="item" />
        <div>item name</div>
        <div className='sc-level-info'>Level: <span>{currentLevel}
        </span></div>
      </div>
      
        <div className='sc-sucess-info'>Success rate: <span>{`${successRate*100}%`}</span></div>
      <div onClick={levelup} className='lvlupButton'>LVL UP</div>

      <div className={resultStyle}>{resultText}</div>      
    </div>
  )
}

export default ShowcaseApp
