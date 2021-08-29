import Head from 'next/head';
import Image from 'next/image';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import homeStyles from '@/styles/Home.module.css';
import Projects from '@/components/section/projects';
import Contact from '@/components/section/contact';
import Layout from '../components/layout/layout';
import cvImg from '../../public/curriculum-vitae.svg';
import linkedinImg from '../../public/linkedin.svg';
import gmailImg from '../../public/gmail.svg';

export default function Home() {
  const socialMediaImgSize = 32;
  const images = [
    { image: cvImg, class: homeStyles.cvImg, href: `` },
    {
      image: linkedinImg,
      class: homeStyles.linkedinImg,
      href: `https://www.linkedin.com/in/maulanaichwan/`,
    },
    {
      image: gmailImg,
      class: homeStyles.gmailImg,
      href: `https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrfTPLqRNQGxWfmkPBlVVgDjFBhwVxhKjhvPJjrjFfpHNKnQpWvFBXzXLTdwbkHQJvzMpg`,
    },
  ];

  const animateSocialMedia = (id: any) => {
    const variantsChild = {
      initial: {
        y: 0,
      },
      animate: {
        y: -50,
        transition: {
          delay: 0.1 + id,
          duration: 3,
          repeat: Infinity,
          ease: [0.17, 0.67, 0.83, 0.67],
        },
      },
    };

    return variantsChild;
  };
  return (
    <Layout>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta name="description" content="Maulana Ichwan's Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LazyMotion features={domAnimation}>
        <section className={homeStyles.container}>
          <div className={homeStyles.main}>
            <h3 className={homeStyles.name}>Maulana Ichwan</h3>
            <h1 className={homeStyles.textSkill1}>Machine Learning</h1>
            <h1 className={homeStyles.textSkill2}>Web Development</h1>
          </div>

          <div className={homeStyles.images}>
            {images.map((image, id) => (
              <m.a
                className={image.class}
                initial="initial"
                animate="animate"
                variants={animateSocialMedia(id)}
                key={image.class}
              >
                <Image
                  src={image.image}
                  alt="curriculum vitae"
                  width={socialMediaImgSize}
                  height={socialMediaImgSize}
                />
              </m.a>
            ))}
          </div>
        </section>
        <Projects />
        <Contact />
      </LazyMotion>
    </Layout>
  );
}
