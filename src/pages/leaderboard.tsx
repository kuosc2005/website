import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@theme/Layout";
import styles from "./leaderboard.module.css";

export default function Leaderboard() {
  const [contributors, setContributors] = useState([]);
  const [selectedContributor, setSelectedContributor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/v1/webhook");
      if (response.data.success) {
        setContributors(response.data.data.docs);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (contributors.length > 0) {
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
    <Layout
      title="Contributors Leaderboard"
      description="View the leaderboard of contributors."
    >
      <main>
        <div className={styles.container}>
          <div className={styles.board}>
            {selectedContributor && (
              <div className={styles.leftDetails}>
                <h2>{selectedContributor._id.username}</h2>
                <div className={`${styles.avatar} avatar`}>
                  <img
                    src={`https://avatars.githubusercontent.com/u/${selectedContributor._id.userId}?v=4`}
                    alt={`${selectedContributor._id.username}'s Image`}
                  />
                </div>
                <p>Number of Contributions: {selectedContributor.total}</p>
                <p>
                  Repository: {selectedContributor._id.username}
                  <br />
                  Type:{" "}
                  {selectedContributor.types
                    .map(
                      (type) =>
                        `${type.count} ${type.type}${type.count > 1 ? "s" : ""}`
                    )
                    .join(", ")}
                </p>
              </div>
            )}
          </div>
          <div className={styles.boardDetail}>
            <div id="header">
              <h1>Leaderboard</h1>
            </div>
            <div id="leaderboard">
              <table>
                <thead>
                  <tr className={styles["header-row"]}>
                    <th className={styles.number}>Position</th>
                    <th className={styles.name}>Name</th>
                    <th className={styles.points}>Contributions</th>
                  </tr>
                </thead>
                <tbody>
                  {contributors
                    .slice(startIndex, endIndex)
                    .map((contributor, index) => (
                      <tr
                        key={contributor._id.userId}
                        onClick={() => handleContributorSelect(contributor)}
                        className={
                          selectedContributor === contributor
                            ? styles.selectedRow
                            : styles.notSelectedRow
                        }
                      >
                        <td className={styles.number}>
                          {startIndex + index + 1}
                        </td>
                        <td className={styles.name}>
                          {contributor._id.username}
                        </td>
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
              <button
                onClick={handleNextPage}
                disabled={endIndex >= contributors.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
