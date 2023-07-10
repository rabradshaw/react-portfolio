import React from "react";
import "./App.css";
import Header from "./components/Header";

import Main from "./components/Main";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="App">
      
      <Header name=" Rodney Bradshaw. A Web Developer in the making..." title="About" subtitle="I am Rodney Bradshaw a Chartered Accountant (ACCA) and freelance web designer. My business name is Rodney Designs. I have over 10 years experience in web designing. It started as a hobby to build a site and have my own little space on the internet. Now this hobby has turned into a profession.
I design Simple to Complex Websites. Whether it be an informative site about yourself or product(s) or a complex shopping site. Designing web galleries for photographers or for your wedding, or just maintaining your previous site and doing animation or ads.
Other services I provide are personalized screensavers, logo designing, business card and personalized e-card." 
       />
      
      <Main projects="Projects:" skills="Skills:" text1="Vicious Cycles – A Class Project of a fake bicycle shop, done with only CSS. This was a project assignment." text2="A Portfolio Site, a Class assignment with the use of CSS Grid. Had to use CSS grid and make site responsive with hamburger menu." text3="ABC Real Estate Services, it was done from the Logo I designed. This site was build in 2013. Now in the archives." 
      experience="Experience:" year1="2008 - 2012" card1="Build ASL Real Estate Website, with html and css and maintenance" year2="2013 - 2014" card2="Design and build ABC Real Estate website, with wordpress and javascript and maintenance" drop1="Designed Logo first" drop2="Used the selected logo to build site" drop3="It was the first Wordpress Site" 
       year3="2015 - 2018" card3="Build SVG Football Club website, with Wordpress, with maintenance" year4="2018 - Present" card4="Build Our Holiness Church website, with wordpress and currently maintains it." />
       
      <Footer note="Rodney Designs 2023" note1="Github" note2="Linkedin" />
     

    </div>
  );
}