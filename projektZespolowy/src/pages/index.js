import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 >Dokumentacja</h1>
        <p className="hero__subtitle">Miniaturowej Tablicy Informacji Pasażerskiej</p>
        
        <img className='obrazek' src="/img/logo.png" width="200"></img>
        <br></br>
        <p className="hero__subtitle"> </p>
        <div className={styles.buttons}>
          <Link
            className="button "
            to="/docs/category/PKP">
              <div className={styles.button}>
            Sprawdź dokumentację! 
            </div>
          </Link>
        </div>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`MTIP`}
      description="Dokumentacja Zespolu nr2">
      <HomepageHeader />
    </Layout>
  );
}
