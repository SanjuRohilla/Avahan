import React ,{useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import './Event.css';
import nukkadimage from '../assets/events/nukkad.png';
import andhamod from '../assets/events/images.png';
import treasurehunt from '../assets/events/treasure.jpeg';
import vaachan from '../assets/events/vaachan.jpg';

function Event() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleMouseMove = (e) => {
    const textbox = e.currentTarget.querySelector('.textbox');
    const rect = textbox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    textbox.style.setProperty('--rotateX', `${rotateX}deg`);
    textbox.style.setProperty('--rotateY', `${rotateY}deg`);
    textbox.classList.add('tilt');
  };

  const handleMouseLeave = (e) => {
    const textbox = e.currentTarget.querySelector('.textbox');
    textbox.classList.remove('tilt');
  };

  const handleClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <>
    <div className="main">
      <h1>शब्दांगन</h1>
      
      <div className="eventline">
        <div className="container left-container" onClick={() => handleClick('nukkad')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={nukkadimage} alt="" />
          <div className="textbox">
            <h2>कविता वाचन </h2>
            <small>18/9/24</small>
          
            <p>कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है।</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container" onClick={() => handleClick('andha')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={andhamod} alt="" />
          <div className="textbox">
            <h2>चित्रकथा लेखन</h2>
            <small>19/9/24</small>
            <p>चित्रकथा लेखन में कहानी को चित्रों के माध्यम से प्रस्तुत किया जाता है। यह कला शब्दों और चित्रों के संयोजन से भावनाओं और संदेशों को प्रभावी ढंग से व्यक्त करती है।</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container left-container" onClick={() => handleClick('treasure')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={treasurehunt} alt="" />
          <div className="textbox">
            <h2>प्रश्नोत्तरी</h2>
            <small>20/9/24</small>
            <p>प्रश्नोत्तरी एक ज्ञानवर्धक खेल है जिसमें प्रतिभागियों से विभिन्न विषयों पर प्रश्न पूछे जाते हैं। यह खेल मनोरंजन के साथ-साथ ज्ञान बढ़ाने का प्रभावी तरीका है।</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
       
      </div>
      
    </div>
      {/* 2nd head---------------- */}
      <div className="main">
      <h1>अभिव्यक्ति</h1>
      
      <div className="eventline">
        <div className="container left-container" onClick={() => handleClick('nukkad')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={nukkadimage} alt="" />
          <div className="textbox">
            <h2>कविता वाचन</h2>
            <small>18/9/24</small>
          
            <p>कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container" onClick={() => handleClick('andha')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={andhamod} alt="" />
          <div className="textbox">
            <h2>पूर्ण विराम</h2>
            <small>19/9/24</small>
            <p>पूर्ण विराम एक गतिविधि है जो प्रतिभागियों को विषय विशेष पर अंतिम निष्कर्ष प्रस्तुत करने का अवसर देती है। यह कला तार्किक और रचनात्मक सोच को विकसित करने में सहायक है।</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container left-container" onClick={() => handleClick('treasure')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={treasurehunt} alt="" />
          <div className="textbox">
            <h2>शब्द रचना</h2>
            <small>20/9/24</small>
            <p>शब्द रचना भाषा विज्ञान का एक महत्वपूर्ण अंग है जिसमें हम शब्दों की रचना, उनके भेद, और उनके गुणों का अध्ययन करते हैं</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
       
      </div>
      
    </div>
      {/* 3rd head---------------- */}

      
      <div className="main">
      <h1>चक्रव्यूह</h1>
      
      <div className="eventline">
        <div className="container left-container" onClick={() => handleClick('nukkad')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={nukkadimage} alt="" />
          <div className="textbox">
            <h2>चकमा गेंद</h2>
            <small>18/9/24</small>
          
            <p>चकमा गेंद एक टीम खेल है जिसमें दो विरोधी टीमों के खिलाड़ी गेंद फेंकने और विरोधियों को मारने की कोशिश करते हैं जबकि खुद को मारे जाने से बचाते हैं।</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container" onClick={() => handleClick('andha')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={andhamod} alt="" />
          <div className="textbox">
            <h2>गतिस्पर्धा</h2>
            <small>19/9/24</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita hic provident at cum possimus.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container left-container" onClick={() => handleClick('treasure')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={treasurehunt} alt="" />
          <div className="textbox">
            <h2>खजाने की खोज</h2>
            <small>20/9/24</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita hic provident at cum possimus.</p>
            
            <span className="left-container-arrow"></span>
          </div>
        </div>
       
      </div>
      
    </div>
    </>
  );
}

export default Event;
