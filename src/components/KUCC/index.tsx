import React from "react";
import styles from "./styles.module.css";

const KUCC = () => {
	return (
		<>
			<div className={"container banner"}>
				<img src={"/img/kucc-logo.png"} alt="KUCC" />
				<div className={"content"}>
				<h1>Kathmandu University Computer Club</h1>
				<p>
				KUCC is a non-profit, independent club formed by students of the Department of Computer Science and Engineering in the year 1997. Being registered as the first club of Kathmandu University with the registration number 001/1997 in the Student Welfare, KUCC has worked in the field of ICT for twenty years. KUCC has more than 1000 members from Department of Computer Science and Engineering. Kathmandu University Computer Club (KUCC) is a student wing of the Department of Computer Science and Engineering which was established with a goal to engage and aware students in the technological research and development, most prominently in the ICT field and at the same time provides a common platform for young and aspiring individuals to exhibit their ideas. Every year KUCC cooperates and organizes numerous competitive as well as non-competitive events like seminars, exhibitions, hackathon, skill development program and tutorial sessions to name a few, with an unwavering intention to promote, develop and encourage emerging technological advancement.
				</p>
				</div>
			</div>
		</>
	);
};

export default KUCC;
