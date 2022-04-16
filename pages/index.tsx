import type { NextPage } from 'next'
import {useMobileOrientation} from 'react-device-detect';

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag';

import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  const { isLandscape } = useMobileOrientation()

  const PcPage = dynamic(() => import("./pc"));
  const MobilePage = dynamic(() => import("./mobile"));

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
    !isLandscape ? <MobilePage /> : <PcPage />
  )
}

export default Home
