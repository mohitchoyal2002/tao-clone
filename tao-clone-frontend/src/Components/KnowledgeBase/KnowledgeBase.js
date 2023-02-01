import React from "react";
import "./knowledge-base.css";
import MenuList from "./menu";
import Menudata from "./Menudata";

const KnowledgeBase = () => {
  return (
    <>
      <div className="App">
        <div className="tao">
          <h1 className="heading">TAO Hub</h1>
          <p className="pragraph">
            Open source and open standards are at the heart of TAO and a driving
            force behind our mission to accelerate innovation in digital
            assessment. That’s why we’ve decided to bring the TAO Hub and our
            main website together in one connected environment — to empower our
            community of users to build better assessments with easier,
            streamlined access to the TAO Core and our collection of resources,
            all under one roof.
          </p>
        </div>
      </div>

      <section className="main-card--cointainer">
        {MenuList.map((curElem) => {
          return (
            <>
              <div className="gh" key={curElem.id}>
                <div className="card">
                  <div className="image">
                    <img src={curElem.image} />
                  </div>
                  <div className="user guide">
                    <h1> {curElem.guide}</h1>
                    <p> {curElem.description}</p>
                    <button className="button">{curElem.button}</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
      <div className="know">
        <h2 className="main-doc">
          Want to <span className="more">Know More?</span>
        </h2>
        <p className="speak">
          Speak to one of our experts about training and support packages for
          TAO online assessment solutions.
        </p>
        <button className="btn-contact">contact Us</button>
      </div>
    </>
  );
};

const Resou = () => {
  return (
    <>
      <section className="up">
        {Menudata.map((curElem) => {
          return (
            <>
              <div className="re">
                <div className="resource" key={curElem.id}>
                  <div className="main-div">
                    <div className="image-div">
                      <img src={curElem.image} />
                    </div>
                    <div className="rit">
                      <h2 className="ries">{curElem.name}</h2>
                      <p className="kh">{curElem.description}</p>
                      <div className="down-card">
                        <p>{curElem.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export { Resou };

export default KnowledgeBase;
