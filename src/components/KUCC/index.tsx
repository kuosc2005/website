import React from 'react';
import styles from './styles.module.css';

const KUCC = () => {
	return (
		<>
			<div className={'container banner kucc-banner'}>
				<div className={'content'}>
					<h1>Kathmandu University Computer Club</h1>
					<p>
						Kathmandu University Computer Club KUCC is a non-profit, independent club formed by
						students of the Department of Computer Science and Engineering in the year 1997. Being
						registered as the first club of Kathmandu University with the registration number
						001/1997 in the Student Welfare, KUCC has worked in the field of ICT for twenty years.
						As an autonomous community supported by the esteemed Kathmandu University Computer Club
						(KUCC), KUOSC radiates the same spirit of technological excellence and collaboration.
					</p>
				</div>
				<img src={'/img/kucc-logo.webp'} alt="KUCC" />
			</div>
		</>
	);
};

export default KUCC;
