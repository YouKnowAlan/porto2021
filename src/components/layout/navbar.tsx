import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import navStyles from '../../styles/components/navbar.module.css';
import Hamburger from '../utils/hamburgerMenu';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const setMenu = (value: boolean) => {
    setIsOpen(value);
  };

  const listNav = [
    { name: `projects`, path: `/projects` },
    { name: `resume`, path: `/resume` },
    { name: `about`, path: `/about` },
  ];

  const mobileNav = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: 'tween',
        when: 'beforeChildren',
      },
    },
  };

  return (
    <nav className={navStyles.container}>
      <Link href="/">
        <a
          className={
            router.asPath === `/`
              ? `${navStyles.active} ${navStyles.home}`
              : `${navStyles.home}`
          }
        >
          home
        </a>
      </Link>
      <ul className={navStyles.listItem}>
        {listNav.map((navItem) => (
          <li
            className={
              router.asPath === navItem.path
                ? `${navStyles.active} ${navStyles.itemMenu}`
                : `${navStyles.itemMenu}`
            }
            key={navItem.name}
          >
            <Link href={navItem.path}>
              <a>{navItem.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <Hamburger menuOpen={setMenu} />

      {isOpen ? (
        <motion.div
          className={isOpen ? navStyles.mobileNav : 'hidden'}
          initial="initial"
          animate="animate"
          variants={mobileNav}
          layout
        >
          <ul className={navStyles.listItemMobile}>
            <li
              className={router.asPath === `/` ? navStyles.itemMenuMobile : ``}
            >
              {router.asPath === `/` ? (
                <ArrowRightIcon className="w-7 h-7" />
              ) : (
                ``
              )}
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
            {listNav.map((navItem) => (
              <li
                className={
                  router.asPath === navItem.path ? navStyles.itemMenuMobile : ``
                }
                key={navItem.name}
              >
                {router.asPath === navItem.path ? (
                  <ArrowRightIcon className="w-5 h-5" />
                ) : (
                  ``
                )}
                <Link href={navItem.path}>
                  <a>{navItem.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : (
        <></>
      )}
    </nav>
  );
}
