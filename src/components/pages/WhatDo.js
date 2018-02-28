import React from "react";
import "./css/Skills.css";
import { NavBar } from "../elements";
import { Footer } from "../elements";

import Backg from '../img/people-woman.jpg';


const sectionStyle = {
  width: "100%",
  height: "1000px",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  position: "relative",
  top: "0px",
  left: "0px",
  zIndex: "0",
  backgroundPosition: "center",
  backgroundImage: `url(${Backg})`
};




export const WhatDo = () => {
  return (
    <section className="projects" style={ sectionStyle }>
      <NavBar />
      <div className="layout">
        <div className="outerrow">

            <h1 className="outerrow" id="twoid"> PROGRAMS AND SERVICES </h1>
            <h2 className="outerrow" id="threeid"> Brighter Together, a non-profit New York City based company, provides counseling and coaching to foreign-born immigrant and head of household women who are early-stage company building entrepreneurs. Our program consists of career counseling, training and creating a network between our clients and external agents who could provide support to our clients until they feel comfortable to run their business on their own. </h2>

          <div className="firstgrid">
            <h1 className="grids" id="gridsthree"> Coaching </h1>
            <ul className="grids">
              <li>One-on-one sessions to provide personal coaching to get women ready and have confidence in starting their business.</li>
            <li>Introduce them to similar skilled peers if they want to pair up as a start-up.</li>
          </ul>
            <h1 className="grids" id="h3"> Initial programs </h1>

            <h3 className="grids" id="h3"> Financial literacy Program: </h3>

            <p className="grids">In the Financial Literacy program, our clients will learn how to manage their money in the smartest way possible. We will provide coaching on how to manage a personal budget, open bank accounts, build credit history, protect their identities, and have a healthy relationship with money. Women will leave the course feeling confident and equipped in their abilities to control money for themselves and their families.</p>

            <h3 className="grids" id="h3"> Building A Business: </h3>
            <p className="grids">The Business creation program will be targeted for women who have a business idea and want to develop it. The program will then guide them through every step needed to take in order to start their own business. A curriculum will be provided as well. </p>

          <h4 className="grids" id="h3"> The program will focus on: </h4>
          <ul className="grids">
            <li>Life coaching, where the clients together with the coach will discover their strengths and weaknesses and will define if the idea is suitable and if they will need one or more partners. </li>
            <li>Finances, in this module the clients will learn how to manage their personal finances as well as the business finances, how to develop a budgeting plan, how to build credit, how to determine the startup cost of the business and how to make financial projections.</li>
            <li>In the marketing module clients will learn how to choose a right space and location for the business if they need it, how to promote their business and will learn the appropriate use of social media to promote their business.</li>
            <li>The legal requirements part will explain the different types of legal entities that exist in NYC and what is the most adequate for their needs, it will also provide a guidance on how to register the business with the City and the State of New York.</li>
          </ul>
          <p className="grids">At the end of the program, every women or group of women will be able to have a draft business plan, and will receive seed money for startup costs. The seed money for our potential clients will be funded by gifts and donations to Brighter Together and it will serve as initial funding for cost related to: Website domain cost, materials, or registration purposes. We consider that every client who fulfills the requisites to receive the money will be given approximately USD1000. The seed money will be based upon funding BT receives.</p>
          <h3 className="grids" id="h3"> Career Advancement Program:  </h3>
          <p className="grids">Through the Career Advancement program, our clients will become prepared to secure a stable career path, according to their skills and interests. We will provide training and mentoring in professionalism, job search, interviews, negotiating salaries, and networking in both traditional and non-traditional fields. Women will leave the course with a strong network of resources, meaningful connections, individual skills, and confidence to pursue a fulfilling career.</p>
        </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
