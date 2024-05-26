import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import KUCC from '@site/src/components/KUCC';

import styles from './index.module.css';
import Sponsors from '../components/Sponsors';
import HomepageFeatures from '../components/HomepageFeatures';
import KUOSC from '../components/KUOSC';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						Know Our Projects
					</Link>
					<Link className="button button--secondary button--lg" to="/open-school/intro">
						Open School
					</Link>
					<Link className="button button--secondary button--lg" to="https://sfd.kuosc.org.np/">
						SFD 2023
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="Welcome to the Kathmandu University Open Source Community (KUOSC), a thriving and historic community from Kathmandu University dedicated to promoting and embracing the spirit of Open Source."
		>
			<HomepageHeader />
			<main>
				<h1 className={styles.sectionHeading}>About</h1>
				<KUOSC />
				<KUCC />
				<HomepageFeatures />
				<Sponsors />
			</main>
		</Layout>
	);
}
