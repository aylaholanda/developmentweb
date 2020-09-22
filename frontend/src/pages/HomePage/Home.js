import React from 'react';
import { homeObjOne,homeObjFive,homeObjFour} from './Data';
import { InfoSection } from '../../Components';
import { VideoPlayer } from '../../Components';
import Slider from '../../Components/Slider';
import images from '../../images';

function Home() {

  return (
    <>
    <Slider slides={images} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjFour} />
      <VideoPlayer {...homeObjFive}/>
    </>
  );
}

export default Home;
