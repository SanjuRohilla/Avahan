import React, { useEffect, useRef }  from "react";
import { useNavigate } from 'react-router-dom';
import "./BelowBanner.css";

const BelowBanner = () => {
  const libraryRef = useRef(null);
  const navigate = useNavigate(); 
  const handleRegisterClick = () => {
    navigate('/events'); // Navigate to the Event page
  };
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

        <h1 className="animation-show" style={{ fontSize: "40px" }}>

        आह्वान
        </h1>
        <p className="animation-show">
          
        राष्ट्रीय प्रौद्योगिकी संस्थान रायपुर का राजभाषा क्लब हिंदी भाषा और संस्कृति का उत्सव अपने मुख्य कार्यक्रम,
        आवाहन के माध्यम से मनाता है। इस कार्यक्रम में कविता लेखन, नुक्कड़ नाटक, तत्कालीन भाषा, समूह चर्चा
        और कविता पाठन जैसी गतिविधियाँ शामिल हैं। ये गतिविधियाँ हिंदी साहित्य को बढ़ावा देती हैं और छात्रों को 
        रचनात्मक और बौद्धिक रूप से संलग्न होने के लिए प्रोत्साहित करती हैं। क्लब युवाओं में हिंदी के प्रति सराहना और संरक्षण की भूमिका निभाता है।
        </p>
        <button className="animation-show" onClick={handleRegisterClick}>
        कार्यक्रम के लिए पंजीकरण करें
        </button>
      </div>

       <div className="outerhead">  <h2>शब्दांगन</h2></div>

      <div className="tab library" ref={libraryRef}>

        <div className="library-item animation-show">
        <h2>कविता वाचन </h2>
          <img src="https://i.postimg.cc/RVf5PNGd/Screenshot-2024-09-13-004857.pngnpm" alt="description of image"/>
          <p>
          इसमें प्रतिभागी अपनी या किसी प्रसिद्ध कवि की कविताओं का प्रभावी ढंग से वाचन करते हैं। कविता की भावनाओं और लय को सही ढंग से प्रस्तुत करना महत्वपूर्ण होता है।
          </p>
        </div>
        <div className="library-item animation-show">
        <h2>चित्रकथा लेखन </h2>
          <img src="https://i.postimg.cc/3xTMzYcT/Screenshot-2024-09-13-005222.png" alt="Image Name" />
          <p>
          इसमें प्रतिभागी एक कहानी को चित्रों के माध्यम से प्रस्तुत करते हैं। कहानी की कल्पनाशीलता और चित्रांकन की गुणवत्ता का इसमें विशेष महत्व होता है।
          </p>
        </div>
        <div className="library-item animation-show">
        <h2>प्रश्नोत्तरी</h2>
          <img src="https://i.postimg.cc/kMLPFxND/Screenshot-2024-09-13-005600.png" alt="Image Name" />
          <p>
          यह एक प्रतियोगिता है जिसमें ज्ञानवर्धक प्रश्न पूछे जाते हैं। इसमें प्रतिभागियों की सामान्य ज्ञान और विभिन्न विषयों पर जानकारी की परख की जाती है।
          </p>
        </div>
      </div>
      <div className="outerhead">  <h2>अभिव्यक्ति</h2></div>
      <div className="tab library" ref={libraryRef}>
        <div className="library-item animation-show">
          <h2>कविता वाचन</h2>
          <img src="https://i.postimg.cc/L83dpwcZ/Screenshot-2024-09-13-005732.png" alt="Image Name" />
          <p>
          इसमें प्रतिभागी अपनी या किसी प्रसिद्ध कवि की कविताओं का प्रभावी ढंग से वाचन करते हैं। कविता की भावनाओं और लय को सही ढंग से प्रस्तुत करना महत्वपूर्ण होता है।
          </p>
        </div>
        <div className="library-item animation-show">
          <h2>पूर्ण विराम</h2>
          <img src="https://i.postimg.cc/8CZqFWPp/Screenshot-2024-09-13-005837.png" alt="Image Name" />
          <p>
          पूर्णविराम एक साहित्यिक प्रतियोगिता है जिसमें प्रतिभागी हिंदी में पूर्णविराम का सही प्रयोग करके काव्य और गद्य रचनाएं प्रस्तुत करते हैं। इस प्रतियोगिता का उद्देश्य हिंदी लेखन में पूर्णविराम के महत्व को समझाना और लेखन के मूल तत्वों को प्रोत्साहित करना है।
          </p>
        </div>
        <div className="library-item animation-show">
        <h2>शब्द रचना</h2>
          <img src="https://i.postimg.cc/C1d9b1zj/Screenshot-2024-09-13-010016.png" alt="Image Name" />
          <p>
          शब्द रचना एक रचनात्मक गतिविधि है जिसमें प्रतिभागी दिए गए शब्दों का उपयोग करके नए और अर्थपूर्ण शब्दों या वाक्यों का निर्माण करते हैं। इस प्रतियोगिता का उद्देश्य हिंदी भाषा की शब्दावली को समृद्ध करना और कल्पनाशीलता को प्रोत्साहित करना है।
          </p>
        </div>
      </div>
      <div className="outerhead">  <h2>चक्रव्यूह</h2></div>
      <div className="tab library" ref={libraryRef}>
        <div className="library-item animation-show">
          <h2>चकमा गेंद</h2>
          <img src="https://i.postimg.cc/k4ZzsmbL/Screenshot-2024-09-13-010352.png" alt="Image Name" />
          <p>
          इसमें प्रतिभागी एक दूसरे को गेंद से मारने का प्रयास करते हैं, जबकि अन्य खिलाड़ी उससे बचने की कोशिश करते हैं। यह तेज़ी और चपलता का खेल है।
          </p>
        </div>
        <div className="library-item animation-show">
          <h2>गतिस्पर्धा</h2>
          <img src="https://i.postimg.cc/VvCTHV9v/Screenshot-2024-09-13-010530.png" alt="Image Name" />
          <p>
          यह एक दौड़ प्रतियोगिता होती है जिसमें प्रतिभागी सबसे तेज गति से लक्ष्य तक पहुंचने का प्रयास करते हैं। इसमें धैर्य, शक्ति और गति का संतुलन महत्वपूर्ण होता है
          </p>
        </div>
        <div className="library-item animation-show">
          <h2>खजाने की खोज</h2>
          <img src="https://i.postimg.cc/mZz0DPx4/Screenshot-2024-09-13-010629.png" alt="Image Name" />
          <p>
          इसमें प्रतिभागियों को विभिन्न सुरागों के आधार पर एक निर्धारित लक्ष्य यानी 'खजाने' तक पहुंचना होता है। यह दिमागी खेल है जिसमें त्वरित सोच और निर्णय लेने की क्षमता आवश्यक होती है।
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BelowBanner);
