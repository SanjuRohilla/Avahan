import React from "react";
import styles from "./Team.module.css";
import HeadCard from "./HeadCard";
import { coordinatorsList } from "./heads_data";
import { techList } from "./tech_data";
import Card3 from "./components/Card3";
import { coresList } from "./cores_data";
import OCCard from "./OCCard";
import Title from "./Title";
import Domain from "./Domain";
import Cores from "./Cores";
// import teampic from "../assets/images/teampic.webp"

import style from "styled-jsx/style";

const Team = () => {
  return (
    <div className={styles.container} style={{background:"#fef9e7" , maxWidth:"100vw" ,overflowX:"hidden"}}>
      <Title color={"DEVELOPERS"} noncolor={"TEAM"} />
      <div data-aos="fade-up" className="container">
        <div class="bg-black">

        </div>
      </div>
      <Title color={"HEADS OF"} noncolor={" TECH TEAM"} />
      <div className={styles.OverallHeadSection}>
        {techList.map((headsTech) => {
          if (heads.id == 4 || heads.id == 5) {
            return (
              <OCCard
                key={headsTech.id}
                img={headsTech.imgUrl}
                name={headsTech.name}
                domain={headsTech.domain}
                linkedinId={headsTech.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>
          
      
      
      
      <Title color={"HEAD"} noncolor={"COORDINATORS"} />
      <div className={styles.HeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id > 3) {
            return (
              <HeadCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>
      <Title color={"CORE"} noncolor={"COORDINATORS"} />
      <div>
       <Cores/>
      </div>
      {/* <div className={styles.CoreSection}>
        {coresList.map((heads) => {
          return (
            <div
              key={heads.id}
              className={styles.fn_cs_steps}
              data-cols={4}
              data-gap={60}
            >
              
             <div>
             
             <ul>
                <li>
                  <div className={styles.item}>
                    <div className={styles.item_in}>
                      <h3 className={styles.fn__gradient_title}>{heads.Name}</h3>
                      <p>{heads.Domain}</p>
                    </div>
                  </div>
                </li>
              </ul>
             </div>

            </div>
          );
        })}
      </div> */}


      <Title color={"Volunteers"} noncolor={"Of Committee"} />
       <div >
      <Domain />
      </div>
    </div>
  );
};

export default Team;