import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Training Programs',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				We offer a diverse range of training programs, including Linux Talks, Workshops and
				Bootcamps, to equip our members with essential skills in Open Source technologies through
				online and offline mediums.
			</>
		)
	},
	{
		title: 'Advocacy Activities',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				We actively participate in various advocacy activities, such as celebrating Software Freedom
				Day, organizing community-level workshops, and spreading awareness about the importance of
				Free and Open Source Software.
			</>
		)
	},
	{
		title: 'Open Source Projects',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				One of our primary focuses is on initiating and maintaining a wide array of open-source
				projects that are thoughtfully designed to cater to the unique needs and challenges faced by
				the local community.
			</>
		)
	}
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container ">
				<div className={styles.sectionHeading}>
					<h2>What We Do?</h2>
				</div>
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
