import React from 'react';
import { homeObjOne,homeObjFive} from './Data';
import { InfoSection } from '../../Components';
import { VideoPlayer } from '../../Components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <VideoPlayer {...homeObjFive}/>
    </>
  );
}

export default Home;
