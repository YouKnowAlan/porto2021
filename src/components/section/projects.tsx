import Image from 'next/image';
import { useEffect } from 'react';
import projects from '@/styles/components/projects.module.css';
import { m, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon } from '@heroicons/react/outline';
import kirobarinoImg from '../../../public/kirobarino.png';
import myBidImg from '../../../public/MyBid.png';
import myBookImg from '../../../public/MyBook.png';
import dearDiaryImg from '../../../public/Dear-diary.png';

export default function Projects() {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  const projectsList = [
    { id: 1, title: `MyBook`, description: `online bookshelf` },
    { id: 2, title: `MyBid`, description: `online bidding website` },
    { id: 3, title: `Dear-diary`, description: `online note taking` },
    { id: 4, title: `Kirobarino`, description: `Company profile landing page` },
  ];

  const imagesShowCase = [
    { id: 1, image: myBookImg, class: projects.item1 },
    { id: 2, image: myBidImg, class: projects.item2 },
    { id: 3, image: dearDiaryImg, class: projects.item3 },
    { id: 4, image: kirobarinoImg, class: projects.item4 },
  ];

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          type: 'tween',
          when: 'beforeChildren',
        },
      });
    }
    if (!inView) {
      animation.start({
        x: -100,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <m.section
      ref={ref}
      className={projects.background}
      animate={animation}
      layout
    >
      <div className={projects.container}>
        <div className={projects.titleDesc}>
          <h2 className={projects.title}>Projects</h2>
          <p className={projects.desc}>
            List of all projects that i have been working on{` `}
            <span className="font-bold">since 2020</span>
          </p>
        </div>
        <div className={projects.projectsList}>
          {projectsList.map((project) => (
            <div className={projects.projectItem} key={project.id.toString()}>
              <div className={projects.projectTitleDesc}>
                <h1 className={projects.itemTitle}>{project.title}</h1>
                <p className={projects.itemDesc}>{project.description}</p>
              </div>
              <div className={projects.lineBottom} />
              <m.div
                className={projects.backgroundArrow}
                whileHover={{
                  backgroundColor: 'rgba(29, 78, 216)',
                  rotate: '-45deg',
                }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/">
                  <m.a>
                    <ArrowRightIcon className={projects.arrowRight} />
                  </m.a>
                </Link>
              </m.div>
            </div>
          ))}
        </div>
        <m.div
          className={projects.imagesShowCase}
          transition={{ delay: 2, duration: 1.2 }}
        >
          {imagesShowCase.map((showcase) => (
            <m.div
              className={`${projects.imageItem} ${showcase.class}`}
              key={showcase.id.toString()}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'tween',
                duration: 1.2,
                delay: 0.5 + showcase.id,
              }}
            >
              <Image src={showcase.image} alt="showcase image" />
            </m.div>
          ))}
        </m.div>
        <m.button
          className={projects.buttonMoreProjects}
          whileHover={{
            rotate: '-15deg',
            backgroundColor: 'rgba(29, 78, 216)',
          }}
        >
          <Link href="/projects">
            <a>More projects</a>
          </Link>
        </m.button>
      </div>
    </m.section>
  );
}
