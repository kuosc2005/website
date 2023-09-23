import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '@theme/Layout';
import styles from './leaderboard.module.css';

export default function Leaderboard() {
	const [contributors, setContributors] = useState([]);
	const [selectedContributor, setSelectedContributor] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const itemsPerPage = 7;

	const fetchData = async () => {
		try {
			const response = await axios.get('https://api.contributor.kuosc.org.np/api/v1/webhook');
			if (response.data.success) {
        console.log(response.data.data.docs);
				setContributors(response.data.data.docs);
			}
		} catch (err) {
			console.error('Error fetching data:', err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (contributors.length > 0) {
      console.log(contributors[0]);
			setSelectedContributor(contributors[0]);
		}
	}, [contributors]);

	const handleContributorSelect = (contributor) => {
		setSelectedContributor(contributor);
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		const maxPage = Math.ceil(contributors.length / itemsPerPage);
		if (currentPage < maxPage) {
			setCurrentPage(currentPage + 1);
		}
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	return (
		<Layout title="Contributors Leaderboard" description="View the leaderboard of contributors.">
			<main>
				<div className={styles.container}>
					{loading ? (
						<div className={styles.loading}>
							<img src="/img/loading.gif" alt="Loading..." />
							<p>Loading...</p>
						</div>
					) : (
						<>
							<div className={styles.board}>
								{selectedContributor && (
									<div className={styles.leftDetails}>
										<div className={styles.avatarUsername}>
											<div className={`${styles.avatar} avatar`}>
												<img
													src={`https://avatars.githubusercontent.com/u/${selectedContributor._id.userId}?v=4`}
													alt={`${selectedContributor._id.username}'s Image`}
												/>
											</div>
											&nbsp; &nbsp; &nbsp; &nbsp;
											<h3 className={styles.userName}>{selectedContributor._id.username}</h3>
										</div>
										<div className={styles.userInfo}>
											<p>
												<strong>Number of Contributions: </strong>
												{selectedContributor.total}
											</p>
											<p>
												<strong>Repository:</strong> {selectedContributor._id.username}
											</p>
											<p>
												<strong>Type:</strong>{' '}
												{selectedContributor.types
													.map((type) => `${type.count} ${type.type}${type.count > 1 ? 's' : ''}`)
													.join(', ')}
											</p>
										</div>
									</div>
								)}
								<hr />
								<div className={styles.leaderboardStairs}>
									<h2>Contribution Leaders</h2>
									{contributors.length > 0 && (
										<div className={styles.leaderboardBar}>
											<div className={styles.leaderboardPosition}>
												<img src="/img/medals/first.png" alt="" />
											</div>
											<div className={styles.leaderboardName}>{contributors[0]._id.username}</div>
										</div>
									)}
									{contributors.length > 1 && (
										<div className={styles.leaderboardBar}>
											<div className={styles.leaderboardPosition}>
												<>
													<img src="/img/medals/second.png" alt="" />
												</>
											</div>
											<div className={styles.leaderboardName}>{contributors[1]._id.username}</div>
										</div>
									)}
									{contributors.length > 2 && (
										<div className={styles.leaderboardBar}>
											<div className={styles.leaderboardPosition}>
												<span>
													<img src="/img/medals/third.png" alt="" />
												</span>
											</div>
											<div className={styles.leaderboardName}>{contributors[2]._id.username}</div>
										</div>
									)}
								</div>
							</div>

							<div className={styles.boardDetail}>
								<div id="header">
									<h1>Contributions Leaderboard</h1>
								</div>
								<br />
								<div id="leaderboard">
									<table>
										<thead>
											<tr className={styles['header-row']}>
												<th className={styles.number}>Position</th>
												<th className={styles.name}>Name</th>
												<th className={styles.points}>Contributions</th>
											</tr>
										</thead>
										<tbody>
											{contributors.slice(startIndex, endIndex).map((contributor, index) => (
												<tr
													key={contributor._id.userId}
													onClick={() => handleContributorSelect(contributor)}
													className={
														selectedContributor === contributor
															? `${styles.selectedRow} ${styles.selected}`
															: styles.notSelectedRow
													}
												>
													<td className={styles.number}>{startIndex + index + 1}</td>
													<td className={styles.name}>{contributor._id.username}</td>
													<td className={styles.points}>{contributor.total}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<div className={styles.pagination}>
									<button onClick={handlePreviousPage} disabled={currentPage === 1}>
										Previous
									</button>
									<button onClick={handleNextPage} disabled={endIndex >= contributors.length}>
										Next
									</button>
								</div>
							</div>
						</>
					)}
				</div>
			</main>
		</Layout>
	);
}
