import { useState } from 'react';
import Image from 'next/image';
import fooStyles from '@/styles/components/footer.module.css';
import { HeartIcon } from '@heroicons/react/solid';
import { motion, AnimateSharedLayout } from 'framer-motion';
import figmaImg from '../../../public/figma.svg';
import framerImg from '../../../public/framer.svg';
import nextImg from '../../../public/next.svg';
import tailwindImg from '../../../public/tailwindcss.svg';
import vercelImg from '../../../public/vercel.svg';

export default function Footer() {
  const [stackOpen, setStackOpen] = useState(false);
  const stackImgSize = 24;

  const handleStackClicked = () => {
    setStackOpen(!stackOpen);
  };

  const infoStacks = [
    { name: `figma`, href: `https://www.figma.com`, img: figmaImg },
    { name: `nextjs`, href: `https://nextjs.org/`, img: nextImg },
    { name: `framer motion`, href: `https://www.framer.com/`, img: framerImg },
    { name: `tailwindcss`, href: `https://tailwindcss.com/`, img: tailwindImg },
    { name: `vercel`, href: `https://vercel.com/`, img: vercelImg },
  ];

  const stackContainerAnimate = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemStackAnimate = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
  };

  return (
    <footer className={fooStyles.container}>
      <p className={fooStyles.text}>
        Portofolio 2021{' '}
        <span className={fooStyles.info} onClick={handleStackClicked}>
          tech stack
          {stackOpen === true ? (
            <AnimateSharedLayout>
              <motion.ul
                layout
                className={fooStyles.stackContainer}
                initial="hidden"
                animate="visible"
                variants={stackContainerAnimate}
              >
                {infoStacks.map((stack, id) => (
                  <motion.li
                    key={id}
                    variants={itemStackAnimate}
                    whileHover={{
                      scale: 1.3,
                      originX: -0.01,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {console.log(id)}
                    <a href={stack.href} className={fooStyles.stackItem}>
                      <Image
                        src={stack.img}
                        alt={stack.name}
                        width={stackImgSize}
                        height={stackImgSize}
                      />
                      {stack.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimateSharedLayout>
          ) : (
            ``
          )}
        </span>
      </p>
      <p className={fooStyles.text}>
        Designed and Developed with{' '}
        <HeartIcon className="h-4 w-4 mx-0.5 mt-0.5" /> by Alan
      </p>
    </footer>
  );
}
