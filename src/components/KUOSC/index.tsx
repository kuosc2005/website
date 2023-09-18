import React from 'react';
import styles from './styles.module.css';

const KUOSC = () => {
	return (
		<>
			<div className={'container banner'}>
				<img src={'/img/kuosc.png'} alt="KUOSC" />
				<div className={'content'}>
					<h1>Kathmandu University Open Source Community</h1>
					<p>
						KUOSC is the Open Source related wing of KUCC. It is a vibrant historic community from
						Kathmandu University which provides a common platform for all FOSS enthusiasts to
						discuss, share, and learn about free and open source softwares. KUOSC is specifically
						focused on all the Open Source related activities ranging from training programs like
						Linux Talks, Useful Network Training to advocacy activities like Software Freedom Day
						celebration and organizing different community level workshops and events.
					</p>
				</div>
			</div>
		</>
	);
};

export default KUOSC;
