import type { NextPage } from 'next'
import tw from 'twin.macro';
import styled from '@emotion/styled';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const PageWrapper = styled.div`
	${tw`bg-gray-800`}
`;

const OutlinedText = styled.p`
	${tw`text-4xl text-transparent`}
	-webkit-text-stroke: 0.125rem white;
`;

const MainContent = styled.main`
	${tw`w-full`}
`;

const FilledImage = styled(Image)`
	${tw`object-cover relative`}

	position: relative !important;
	width: 100% !important;
	height: 100% !important;
`;

const Section = styled.section`
	${tw`w-full`}
	height: max-content;
	position: relative;
	span {
		position: relative !important;
		z-index: 0;
	}

	& > * {
		grid-area: 1 / 1;
	}
`;

const IntroSection = styled(Section)``;

const Navigation = styled.nav`
	position: absolute;
	display: flex;
	justify-content: space-between;
	z-index: 3;
	${tw`pl-28 w-full pr-28 pt-14`}

	span {
		position: relative !important;
		width: 13rem !important;
		height: 2rem !important;
		z-index: 15;
	}
`;

const Menu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;

	li a {
		color: white;
		padding: 0 1rem;
		font-weight: 900;
		font-size: 1.25rem;
		text-decoration: none;
	}
`

const IntroParagraph = styled.p`
	position: absolute;
	margin-left: 17rem;
	margin-right: 17rem;
	margin-top: 14.5rem;

	color: white;
	z-index: 19;

	h4 {
		font-weight: 100;
		font-size: 3.75rem;
		margin: 0;
	}

	h2 {
		margin-top: 2rem;

		font-weight: 900;
		font-size: 11.5rem;
		line-height: 1.18;
		letter-spacing: -0.25rem;
	}
`

const AboutSection = styled(Section)`
	background-color: #1b2937;
	${tw`w-full grid`}
	min-height: 15rem;
`;

const AboutParagraph = styled.p`
	margin-top: 20rem;
	margin-left: 17rem;
	margin-right: 17rem;

	word-break: keep-all;

	h2 {
		font-weight: 900;
		font-size: 3.75rem;
		color: #ff8400;
	}

	h4 {
		margin-top: 4rem;
		font-size: 2rem;
		font-weight: 300;
		color: #e2e1e1;
	}
`;

const HeritageSection = styled(Section)`
	margin-top: 12rem;
	background-color: #1b2937;
	${tw`w-full grid`}
	min-height: 15rem;
`;

const ProjectSection = styled(Section)`
	display: flex !important;
	align-items: flex-end;

	background-color: #143434;
	${tw`w-full grid`}
	min-height: 15rem;
`;

const PetitionLink = styled.a`
	display: inline-block;

	margin-top: 1.5rem;
	margin-bottom: 15.5em;

	border: 1px white solid;
	padding: 1.5rem 2rem;

	text-decoration: none;
	font-size: 1.5rem;
	font-weight: normal;

	color: white;
`;

const ProjectParagraph = styled.p`
	margin-top: 11rem;
	margin-left: 17rem;

	word-break: keep-all;

	h2 {
		font-weight: 900;
		font-size: 4rem;
		margin: 5rem 0;
		color: #ff8400;
	}

	h3 {
		font-weight: 900;
		font-size: 4rem;
		color: white;

		margin: 4rem 0;
	}

	h4 {
		margin-top: 1.5rem;
		font-size: 2rem;
		font-weight: 300;
		color: #e2e1e1;
	}
`;

const MockupSection = styled(Section)`
	background-color: #143434;
	width: auto !important;

	span {
		width: 38rem !important;
		height: 47rem !important;
	}

	img {
		width: 38rem !important;
		height: 47rem !important;
	}
`;

const NoticeSection = styled(Section)``;

const NoticeParagraph = styled.p`
	width: 100vw;
	position: absolute;
	z-index: 19;
	text-align: center;

	h2 {
		font-weight: 900;
		font-size: 4rem;
		margin-top: 5.5rem;
		margin-bottom: 2rem;
		color: white;
	}


	h4 {
		margin-top: 1.5rem;
		margin-bottom: 2rem;
		font-size: 2rem;
		font-weight: 300;
		color: white;
	}
`;

const NoticeLink = styled.a`
	display: inline-block;

	border: 1px white solid;
	padding: 1.5rem 3rem;

	text-decoration: none;
	font-size: 1.5rem;
	font-weight: normal;

	color: white;

	p {
		margin: 0;
	}

	span {
		display: inline-block !important;
		width: 51px !important;
	}

	img {
		width: 51px !important;
	}
`;


const NoticeLinkWrapper = styled.div`
	${tw`flex items-center`}

	p {
		${tw`ml-4`}
	}
`;

const LocationSection = styled(Section)`
	background-color: #f7f7f7;
	text-align: right;

	padding-top: 3rem;
	padding-bottom: 4rem;
	padding-right: 17rem;

	h2 {
		font-weight: 900;
		font-size: 4rem;
		margin: 1rem 0;
		color: #ff8400;
	}


	h4 {
		margin-top: 1.5rem;
		font-size: 2rem;
		font-weight: 300;
		color: black;
	}
`;

const ContactMailAnchor = styled.a`
	width: 30rem;
	${tw`px-16 py-2 flex justify-between items-center`}
	background-color: #303030;

	margin-top: 6rem;
	margin-bottom: 8rem;

	span {
		width: 2.5rem !important;
		height: 2rem !important;
	}

	img {
		width: 2.5rem !important;
		height: 2rem !important;
	}
`

const ContactSection = styled(Section)`
	padding-top: 12rem;
	padding-bottom: 4rem;
	padding-left: 17rem;
	padding-right: 17rem;

	background-color: #272727;

	h2 {
		font-weight: 900;
		font-size: 3rem;
		margin: 4rem 0;
		color: #ff8400;
	}

	h4 {
		margin-top: 1.5rem;
		font-size: 2rem;
		font-weight: 300;
		color: white;
	}

	p {
		font-size: 2rem;
		color: white;
	}
`;

const Footer = styled.footer`
	background: #272727;
`;

const FooterContent = styled.div`
	margin-left: 7.5rem;
	margin-right: 7.5rem;
	${tw`pt-10 border-transparent border-t-8 border-solid relative`}
	border-top-color: #303030;

	span {
		display: flex;
		position: relative !important;
		width: 11.5rem !important;
		height: 2.25rem !important;
	}

	img {
		width: 11.5rem !important;
		height: 2.25rem !important;
	}

	p {
		${tw`mt-10 pb-10`}
		color: #e2e1e1;
	}
`;

const MobilePageTemplate: NextPage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>KOREA NFT</title>
        <meta name="description" content="Korea NFT 서명에 참여하세요!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<MainContent>
				<IntroSection>
					<Navigation>
						<Image src="/pc/logo_w.png" layout="fill" />
						<Menu>
							<li>
								<a href="#about">
									About
								</a>
							</li>
							<li>
								<a href="#project">
									Project
								</a>
							</li>
							<li>
								<a href="#notice">
									Notice
								</a>
							</li>
							<li>
								<a href="#location">
									Location
								</a>
							</li>
							<li>
								<a href="#contact">
									Contact
								</a>
							</li>
						</Menu>
					</Navigation>
					<IntroParagraph>
						<h4>우리의 역사와 문화를</h4>
						<h2>
							당신과 함께<br/>
							NFT로 만들어<br/>
							갑니다.
						</h2>
					</IntroParagraph>
					<FilledImage src="/pc/bg_intro.jpg" layout="fill" />
				</IntroSection>
				<AboutSection id="about">
					<AboutParagraph>
						<h2>ABOUT</h2>
						<h4>
							블록체인 기술의 핵심은 분산원장이고 이것은 정보의 위변조를 불가능하게 합니다.<br/>
							이런 점을 활용하여 여러 사람들의 서명과 함께 우리 역사의 문화를 블록체인 위에 남깁니다. <br/>
						</h4>
					</AboutParagraph>
				</AboutSection>
				<HeritageSection>
					<FilledImage src="/pc/heritage_view_pc.png" layout="fill" />
				</HeritageSection>
				<ProjectSection id="project">
					<ProjectParagraph>
						<h2>
							FIRST PROJECT
						</h2>
						<h3>
							DOKDO NFT
						</h3>
						<h4>
							독도가 대한민국 영토라는 자명한 사실을 <br/>
							위변조가 불가능한 블록체인에 당신 이름과 <br/>
							함께 남겨드립니다.
						</h4>
						<PetitionLink href="https://dokdonft.kr" target="_blank">
							DOKDONFT 서명하기
						</PetitionLink>
					</ProjectParagraph>
					<MockupSection>
						<FilledImage src="/mobile/mockup.png" layout='fill' />
					</MockupSection>
				</ProjectSection>
				<NoticeSection id="section">
					<NoticeParagraph>
						<h2>
							NOTICE
						</h2>
						<h4>
							DOKDO NFT에 대한 최신 소식과 안내사항을 확인하세요.
						</h4>
						<NoticeLink href="https://t.me/+5QilEohoFf9iMWRl" target="_blank">
							<NoticeLinkWrapper>
								<FilledImage src="/pc/icon_telegram.png" layout='fill' />
								<p>텔레그램 참여하기</p>
							</NoticeLinkWrapper>
						</NoticeLink>
					</NoticeParagraph>
					<FilledImage src="/pc/bg_notice.jpg" layout='fill' />
				</NoticeSection>
				<LocationSection id="location">
					<h2>LOCATION</h2>
					<h4>
						서울 송파구 법원로 9길 26,<br/>
						에이피 비지니스파크 C동
					</h4>
				</LocationSection>
				<ContactSection id="contact">
					<h2>CONTACT</h2>
					<h4>
						KOREANFT 관련 궁금하신 부분이 있다면<br/>
						아래 이메일로 문의해주세요.
					</h4>
					<ContactMailAnchor href="mailto:koreanft@krnft.kr">
						<Image src="/pc/icon_mail.png" layout='fill' />
						<p>
							koreanft@krnft.kr
						</p>
					</ContactMailAnchor>
				</ContactSection>
				<Footer>
					<FooterContent>
						<Image src="/pc/logo_w.png" layout='fill' />
						<p>
							© 2022 KOREANFT Corporation. All Rights Reserved.
						</p>
					</FooterContent>
				</Footer>
      </MainContent>
    </PageWrapper>
  )
}

export default MobilePageTemplate;
