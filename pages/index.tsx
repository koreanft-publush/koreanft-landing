import type { NextPage } from 'next'
import {isMobile} from 'react-device-detect';

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag';

import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  const PcPage = dynamic(() => import("./pc"));
  const MobilePage = dynamic(() => import("./pc"));

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    isMobile ? <MobilePage /> : <PcPage />
  )
}

export default Home
