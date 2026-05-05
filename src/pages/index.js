import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageIntro() {
  return (
    <section className="container" style={{padding: '3rem 1rem 1rem', textAlign: 'center', maxWidth: '780px', margin: '0 auto'}}>
      <p style={{fontSize: '1.15rem', lineHeight: '1.7'}}>
        Documentation drifts. Code changes faster than the docs that describe it,
        and stale documentation costs users time, support teams credibility, and
        engineering teams trust. CodeFlow watches your source code for changes
        that contradict your Markdown documentation and flags drift before users
        encounter it.
      </p>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="CodeFlow keeps Markdown documentation in sync with the source code it describes through automated drift detection.">
      <HomepageHeader />
      <main>
        <HomepageIntro />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
