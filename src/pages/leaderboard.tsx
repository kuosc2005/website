import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '@theme/Layout';
import styles from './leaderboard.module.css';


export default function Leaderboard() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const owner = "kuosc2005";
  const repo = "website";

  const fetchContributors = async () => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contributors`);
      setContributors(response.data);
    } catch (err) {
      console.error('Error fetching contributors:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributors();
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentContributors = contributors.slice(startIndex, endIndex); // Get current page contributors

  // Handle next page click
  const handleNextPage = () => {
    if (endIndex < contributors.length) {
      setPage(page + 1); 
    }
  };

    // Handle previous page click
	const handlePreviousPage = () => {
		if (startIndex > 0) {
		  setPage(page - 1); 
		}
	  };

	const topThreeContributors = contributors.slice(0, 3);

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
			<div className={styles.parentbox}>
			<div className={styles.title}><h1>Contributors</h1></div>
			<div className={styles.title}><p>The lovely people who have worked on this website!</p>
			<br></br>
				</div>
              <div className={styles.flexRow}>
                <div className={styles.leftBox}>
                  <h2>Spotlight!</h2>
				  <h3>Top three contributors</h3>
                  <div className={styles.topThreeLeft}>
                    {topThreeContributors.map((contributor) => (
                      <a
                        key={contributor.id}
                        href={contributor.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contributorCard}
                      >
                        <img
                          src={contributor.avatar_url}
                          alt={`${contributor.login}'s Avatar`}
                          className={styles.avatar}
                        />
                        <h3 className={styles.username}>{contributor.login}</h3>
                        <p> {contributor.contributions} contributions</p>
                      </a>
                    ))}
                  </div>
                </div>

                <div className={styles.rightBox}>
                  <h2>Leaderboard</h2>
                  <div className={styles.rightColumn}>
                    {currentContributors.map((contributor) => (
                      <a
                        key={contributor.id}
                        href={contributor.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contributorCard}
                      >
                        <img
                          src={contributor.avatar_url}
                          alt={`${contributor.login}'s Avatar`}
                          className={styles.avatar}
                        />
                        <h3 className={styles.username}>{contributor.login}</h3>
                        <p> {contributor.contributions} contributions</p>
                      </a>
                    ))}

                    <div className={styles.paginationButtons}>
                      <button
                        className={styles.prevPageButton}
                        onClick={handlePreviousPage}
                        disabled={startIndex === 0} // Disable if it's the first page
                      >
                        Previous
                      </button>
                      <button
                        className={styles.nextPageButton}
                        onClick={handleNextPage}
                        disabled={endIndex >= contributors.length} // Disable if it's the last page
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
			  </div>
            </>
          )}
		  </div>
	
      </main>
    </Layout>
  );
}

