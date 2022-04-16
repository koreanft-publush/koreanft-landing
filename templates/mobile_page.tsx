import type { NextPage } from 'next'
import tw from 'twin.macro';
import styled from '@emotion/styled';
import Head from 'next/head'

import { useRef, useState, useEffect } from "react";

import introImage from "../public/mobile/1.jpg";
import aboutImage from "../public/mobile/2.jpg";
import projecttImage from "../public/mobile/3.jpg";
import noticeImage from "../public/mobile/4.jpg";
import locationImage from "../public/mobile/5.jpg";
import contactImage from "../public/mobile/6.jpg";

const PageWrapper = styled.div`
`;


const MainContent = styled.main`
	${tw`w-full flex flex-col`}
`;

const Section = styled.section`
	${tw`w-full`}
	height: max-content;

	object, img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const MobilePageTemplate: NextPage = () => {
	const headerRef = useRef<HTMLObjectElement>(null);
	const projectSectionRef = useRef<HTMLImageElement>(null);
	const noticeSectionRef = useRef<HTMLImageElement>(null);
	const contactSectionRef = useRef<HTMLImageElement>(null);

	const [
		projectSectionCoordinates,
		setProjectSectionCoordinates
	] = useState("0,0,0,0");

	const [
		noticeSectionCoordinates,
		setNoticeSectionCoordinates,
	] = useState("0,0,0,0");

	const [
		contactSectionCoordinates,
		setContactSectionCoordinates,
	] = useState("0,0,0,0");


	useEffect(() => {
		const projectSectionWidth: number = projectSectionRef.current?.scrollWidth || 0;
		const projectSectionHeight: number = projectSectionRef.current?.scrollHeight || 0;

		setProjectSectionCoordinates(
			(
				[
					projectSectionWidth * 5/100,
					projectSectionHeight * 42/100,
					projectSectionWidth * 60/100,
					projectSectionHeight * 49/100,
				].map((element: number) => Math.ceil(element)).join(",")
			)
		);
	}, [projectSectionRef]);

	useEffect(() => {
		const noticeSectionWidth: number = noticeSectionRef.current?.scrollWidth || 0;
		const noticeSectionHeight: number = noticeSectionRef.current?.scrollHeight || 0;

		setNoticeSectionCoordinates(
			(
				[
					noticeSectionWidth * 18/100,
					noticeSectionHeight * 65/100,
					noticeSectionWidth * 82/100,
					noticeSectionHeight * 82/100,
				].map((element: number) => Math.ceil(element)).join(",")
			)
		);
	}, [noticeSectionRef]);


	useEffect(() => {
		const contactSectionWidth: number = contactSectionRef.current?.scrollWidth || 0;
		const contactSectionHeight: number = contactSectionRef.current?.scrollHeight || 0;

		setContactSectionCoordinates(
			(
				[
					contactSectionWidth * 5/100,
					contactSectionHeight * 46/100,
					contactSectionWidth * 95/100,
					contactSectionHeight * 64/100,
				].map((element: number) => Math.ceil(element)).join(",")
			)
		);
	}, [contactSectionRef]);

  return (
    <PageWrapper>
      <Head>
        <title>KOREA NFT</title>
        <meta name="description" content="Korea NFT 서명에 참여하세요!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<MainContent>
				<Section>
					<img src={introImage.src} useMap="#header" alt={`
						우리의 역사와 문화를

						당신과 함께 NFT로
						만들어 갑니다.
					`} />
				</Section>
				<Section>
					<img src={aboutImage.src} useMap="#about" alt={`
						ABOUT

						블록체인 기술의 핵심은 분산원장이고 이것은 정보의 위변조를 불가능하게 합니다.<br/>
						이런 점을 활용하여 여러 사람들의 서명과 함께 우리 역사의 문화를 블록체인 위에 남깁니다. <br/>
					`}/>
				</Section>
				<Section id="project-section">
					<img src={projecttImage.src} useMap="#project" ref={projectSectionRef} alt={`
						FIRST PROJECT

						DOKDO NFT

						독도가 대한민국 영토라는 자명한 사실을
						위변조가 불가능한 블록체인에 당신 이름과
						함께 남겨드립니다.
					`} />
					<map name="project">
						<area shape="rect" coords={projectSectionCoordinates} href="https://dokdonft.kr" target="_blank" alt="DOKDO NFT 서명하기" />
					</map>
				</Section>
				<Section>
					<img src={noticeImage.src} useMap="#notice" ref={noticeSectionRef} alt={`
						NOTICE

						DOKDO NFT에 대한 최신 소식과 안내사항을 확인하세요.
					`} />
					<map name="notice">
						<area shape="rect" coords={noticeSectionCoordinates} href="https://t.me/+5QilEohoFf9iMWRl" target="_blank" alt="텔레그램 참여하기" />
					</map>
				</Section>
				<Section>
					<img src={locationImage.src} useMap="#location" alt={`
						LOCATION

						서울 송파구 법원로 9길 26
						에이피 비지니스파크 C동
					`} />
				</Section>
				<Section>
					<img src={contactImage.src} useMap="#contact" ref={contactSectionRef} alt={`
						CONTACT

						KOREANFT 관련 궁금하신 부분이 있다면
						아래 이메일로 문의해주세요.
					`}/>
					<map name="contact">
						<area shape="rect" coords={contactSectionCoordinates} href="mailto:koreanft@krnft.kr" target="_blank" />
					</map>
				</Section>
			</MainContent>
    </PageWrapper>
  )
}

export default MobilePageTemplate;
