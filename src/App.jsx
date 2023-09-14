import { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SkillsExp from "./components/SkillsExp";
import Projects from "./components/Projects";


export default function App() {

  const[page,setPage] = useState("Main");

  const getPage = ()=>{
    switch (page) {
      case "SkillsExp":
        return <SkillsExp/>
      case "Projects":
        return <Projects/>
      // case "Contact":
      //   return <Contact/>
      default:
        return <Main/>;
    }
  }

  return (
    <>
    <div id="container">
      <Nav page={page} setPage={setPage}/>
      <div id="content-area-main">
        <div className="about-me-content">
      {getPage()}
        </div>
      </div>
    </div>
    </>  );
}
