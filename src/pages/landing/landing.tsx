import Division from './division';
import PageTitle from './pageTitle';
import stbeach from "../../shared/img/stbeach.jpg";
import keyboard from "../../shared/img/keyboard.jpeg";
import './index.css';

function Landing() {
  const handleClick = () => {
    console.log("CLICKED!!")
  }
  return (
    <div className="flex">
      <PageTitle text="Colin MacLeod" style={{position: "absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0, top:"10vh", textAlign: "center"}}/>
      <Division background={keyboard} />
      <Division background={stbeach} align="right"/>
    </div>
  );
}

export default Landing;
