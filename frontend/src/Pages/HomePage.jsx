import Hero from "../Components/Hero";
import Statements from "../Components/Statements";
import ViceChancellor from "../Components/ViceChancellor";
import About from "../Components/About";
import Tour from "../Components/Tour";
import Events from "../Components/Events";
import CardComponent from "../Components/CardComponent";
import { facultyData } from "../Data/faculty.js"
import testimonyData from "../Data/testimonial.json"
import VideoComponent from "../Components/VideoComponent";
import {communityData} from "../Data/communities.js" 



const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <Statements />
      <CardComponent data={facultyData} />
      <ViceChancellor />
      <VideoComponent data={testimonyData} />
      <About />   
      <Events/>     
      <Tour />
      <CardComponent data={communityData} />
    </div>
  );
};

export default HomePage;
