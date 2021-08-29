import React, { ReactNode } from 'react';
import Head from 'next/head';
import { AnimateSharedLayout } from 'framer-motion';
import Navbar from './navbar';
import Footer from './footer';

type PropsLayout = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title }: PropsLayout) {
  return (
    <div className="bg-white py-6">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key={title} />
      </Head>

      <AnimateSharedLayout>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </AnimateSharedLayout>
    </div>
  );
}
