import React from 'react';
import styles from './styles.module.css';

import sponsors from '../../../data/sponsors.json';
import LazyLoad from 'react-lazyload';
import SponsorAvatar from '../SponsorAvatar';

const Sponsors = () => {
	return (
		<div className={styles.sponsors}>
			<div className="pluginsHeader">Sponsors</div>
			<div>
				{sponsors.length > 0 && (
					<LazyLoad height={200}>
						<div className={styles.sponsor_content}>
							{sponsors.map((data, i) => (
								<SponsorAvatar key={i} {...data} />
							))}
						</div>
					</LazyLoad>
				)}
			</div>
		</div>
	);
};

export default Sponsors;
