import type { NextPage } from 'next'
import {isMobile} from 'react-device-detect';

import PcPage from './pc'
import MobilePage from './mobile'

const Home: NextPage = () => {
  return (
    isMobile ? <MobilePage /> : <PcPage />
  )
}

export default Home
