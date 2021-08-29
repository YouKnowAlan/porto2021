import contact from '@/styles/components/contact.module.css';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { m, useAnimation } from 'framer-motion';

export default function Contact() {
  const { ref, inView } = useInView();
  const animateSection = useAnimation();

  useEffect(() => {
    if (inView) {
      animateSection.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          type: `tween`,
          when: `beforeChildren`,
        },
      });
    }
    if (!inView) {
      animateSection.start({
        x: 100,
        opacity: 0,
      });
    }
  }, [animateSection, inView]);

  return (
    <m.section
      className={contact.container}
      ref={ref}
      animate={animateSection}
      layout
    >
      <h3 className={contact.title}>
        If you’re interested to collaborate,
        <br /> please let me know the detail
      </h3>
      <div className={contact.approachButtons}>
        <m.button
          type="button"
          className={contact.buttonEmail}
          whileHover={{
            rotate: `-15deg`,
            backgroundColor: `rgba(29, 78, 216)`,
          }}
        >
          <a>Write an email</a>
        </m.button>
        <m.button
          type="button"
          className={contact.buttonLinkedin}
          whileHover={{
            rotate: `-15deg`,
            backgroundColor: `rgba(29, 78, 216)`,
          }}
        >
          <a>Write an message</a>
        </m.button>
      </div>
    </m.section>
  );
}
