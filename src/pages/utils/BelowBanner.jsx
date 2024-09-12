import React, { useEffect, useRef } from "react";
import "./BelowBanner.css";

const BelowBanner = () => {
  const libraryRef = useRef(null);

  // useEffect(() => {
  //     // const handleMouseMove = (event) => {
  //     //     const libraryItems = libraryRef.current.querySelectorAll('.library-item img');
  //     //     libraryItems.forEach((item) => {
  //     //         const rect = item.getBoundingClientRect();
  //     //         const x = event.clientX - rect.left;
  //     //         const y = event.clientY - rect.top;

  //     //         item.style.transform = `perspective(1000px) rotateY(${(x - rect.width / 2) / 20}deg) rotateX(${-(y - rect.height / 2) / 20}deg) scale(1.1)`;
  //     //     });
  //     // };

  //     // const handleMouseLeave = () => {
  //     //     const libraryItems = libraryRef.current.querySelectorAll('.library-item img');
  //     //     libraryItems.forEach((item) => {
  //     //         item.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
  //     //     });
  //     // };

  //     // const librarySection = libraryRef.current;
  //     // librarySection.addEventListener('mousemove', handleMouseMove);
  //     // librarySection.addEventListener('mouseleave', handleMouseLeave);

  //     // return () => {
  //     //     librarySection.removeEventListener('mousemove', handleMouseMove);
  //     //     librarySection.removeEventListener('mouseleave', handleMouseLeave);
  //     // };
  // }, []);

  return (
    <div className="belowbanner1">
      <div className="additional"></div>
      <div className="tab intro">
        <h1 className="animation-show" >
          AVAHAN
        </h1>
        <p className="animation-show">
          The RAJBHASHA club at NIT Raipur celebrates Hindi language and culture
          through its main event, Aavahan. This event features activities like
          Kavita Lekhan, Nukkad Natak, Tatkalin Bhasa, Samuh Charcha, and Kavita
          Pathan. These activities promote Hindi literature and encourage
          students to engage creatively and intellectually. The club plays a
          vital role in preserving and fostering appreciation for Hindi among
          the youth.
        </p>
        <button className="animation-show">Register For Event</button>
      </div>
       <div className="outerhead">  <h2>शब्दांगन</h2></div>
      <div className="tab library" ref={libraryRef}>

        <div className="library-item animation-show">
          <h2>कविता वाचन </h2>
          <img src="https://i.postimg.cc/g08Lnchm/Screenshot-2024-09-13-004857.png" alt="description of image"/>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            incidunt enim, excepturi reiciendis delectus dolore fuga earum
            similique molestiae. Numquam!
          </p>
        </div>
        <div className="library-item animation-show">
          <h2>चित्रकथा लेखन </h2>
          <img src="https://i.postimg.cc/76L4jmwd/Screenshot-2024-09-13-005222.png" alt="Image Name" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            incidunt enim, excepturi reiciendis delectus dolore fuga earum
            similique molestiae. Numquam!
          </p>
        </div>
        <div className="library-item animation-show">
          <h2>प्रश्नोत्तरी</h2>
          <img src="https://i.postimg.cc/sDCjgPcQ/Screenshot-2024-09-13-005600.png" alt="Image Name" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            incidunt enim, excepturi reiciendis delectus dolore fuga earum
            similique molestiae. Numquam!
          </p>
        </div>
      </div>
      <div className="outerhead">  <h2>अभिव्यक्ति</h2></div>
      <div className="tab library" ref={libraryRef}>
        <div className="library-item animation-show">
          <h2>कविता वाचन</h2>
          <img src="https://i.postimg.cc/63GK9T4f/Screenshot-2024-09-13-005732.png" alt="Image Name" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            incidunt enim, excepturi reiciendis delectus dolore fuga earum
            similique molestiae. Numquam!
          </p>
        </div>
        <div className="library-item animation-show">
          <h2>पूर्ण विराम</h2>
          <img src="https://i.postimg.cc/1zbxYP7n/Screenshot-2024-09-13-005837.png" alt="Image Name" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            incidunt enim, excepturi reiciendis delectus dolore fuga earum
            similique molestiae. Numquam!
          </p>
        </div>
        <div className="library-item animation-show">
          <h2>शब्द रचना</h2>
          <img src="https://i.postimg.cc/1t1CqzYH/Screenshot-2024-09-13-010016.png" alt="Image Name" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            incidunt enim, excepturi reiciendis delectus dolore fuga earum
            similique molestiae. Numquam!
          </p>
        </div>
      </div>
      <div className="outerhead">  <h2>चक्रव्यूह</h2></div>
      <div className="tab library" ref={libraryRef}>
        <div className="library-item animation-show">
          <h2>चकमा गेंद</h2>
          <img src="https://i.postimg.cc/D0XwYBcF/Screenshot-2024-09-13-010352.png" alt="Image Name" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            incidunt enim, excepturi reiciendis delectus dolore fuga earum
            similique molestiae. Numquam!
          </p>
        </div>
        <div className="library-item animation-show">
          <h2>गतिस्पर्धा</h2>
          <img src="https://i.postimg.cc/vBpn0PVL/Screenshot-2024-09-13-010530.png" alt="Image Name" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            incidunt enim, excepturi reiciendis delectus dolore fuga earum
            similique molestiae. Numquam!
          </p>
        </div>
        <div className="library-item animation-show">
          <h2>खजाने की खोज</h2>
          <img src="https://i.postimg.cc/Hs0Mt9sX/Screenshot-2024-09-13-010629.png" alt="Image Name" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            incidunt enim, excepturi reiciendis delectus dolore fuga earum
            similique molestiae. Numquam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BelowBanner);
