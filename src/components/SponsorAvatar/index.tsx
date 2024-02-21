import React from 'react';
import styles from './styles.module.css';

const SponsorAvatar = ({ name, logo, url }) => {
	return (
		<a title={name} target="_blank" href={url} rel="noreferrer">
			<div className={styles.sponsor_wrapper}>
				<img className={styles.sponsor_avatar} src={logo} alt={name} />{' '}
			</div>{' '}
		</a>
	);
};

export default SponsorAvatar;
