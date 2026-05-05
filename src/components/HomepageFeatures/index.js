import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Drift Detection',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        CodeFlow scans your source files and the docs that reference them.
        When a function signature, configuration field, or API endpoint
        changes in the code, CodeFlow flags the corresponding documentation
        as out of sync.
      </>
    ),
  },
  {
    title: 'Auto-Publish',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Generate static documentation sites from your Markdown sources on
        every commit. Output formats include HTML for web hosting and PDF
        for offline distribution.
      </>
    ),
  },
  {
    title: 'Source Parsing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extract type signatures, code examples, and inline comments directly
        from source files, so reference documentation stays accurate without
        manual transcription.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
