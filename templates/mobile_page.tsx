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
	z-index: 3;
	${tw`pl-6 pt-6`}

	span {
		position: relative !important;
		width: 11.5rem !important;
		height: 2.25rem !important;
		z-index: 15;
	}
`;

const IntroParagraph = styled.p`
	position: absolute;
	margin-left: 1.5rem;
	margin-right: 1.5rem;
	margin-top: 14.5rem;

	color: white;
	z-index: 19;

	h4 {
		font-weight: 100;
		font-size: 2rem;
		margin: 0;
	}

	h2 {
		margin-top: 2rem;

		font-weight: 900;
		font-size: 4rem;
		line-height: 1.41;
		letter-spacing: -0.25rem;
	}
`

const AboutSection = styled(Section)`
	background-color: #1b2937;
	${tw`w-full grid`}
	min-height: 15rem;
`;

const AboutParagraph = styled.p`
	margin-top: 3rem;
	margin-left: 1.5rem;
	margin-right: 1.5rem;

	word-break: keep-all;

	h2 {
		font-weight: 900;
		font-size: 3rem;
		color: #ff8400;
	}

	h4 {
		margin-top: 1.5rem;
		font-size: 2rem;
		font-weight: 300;
		color: #e2e1e1;
	}
`;

const Footer = styled.footer``;

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
						<Image src="/mobile/logo_w.png" layout="fill" />
					</Navigation>
					<IntroParagraph>
						<h4>우리의 역사와 문화를</h4>
						<h2>
							당신과 함께<br/>
							NFT로 만들어<br/>
							갑니다.
						</h2>
					</IntroParagraph>
					<FilledImage src="/mobile/bg_intro.jpg" layout="fill" />
				</IntroSection>
				<AboutSection>
					<AboutParagraph>
						<h2>ABOUT</h2>
						<h4>
							블록체인 기술의 핵심은 분산원장이고<br/>
							이것은 정보의 위변조를 불가능하게 합니다.<br/>
							이런 점을 활용하여 여러 사람들의 서명과 함께<br/>
							우리 역사의 문화를 블록체인 위에 남깁니다. <br/>
						</h4>
					</AboutParagraph>


				</AboutSection>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>

					<OutlinedText>
						Hello World Test
					</OutlinedText>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </MainContent>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </Footer>
    </PageWrapper>
  )
}

export default MobilePageTemplate;
