import Layout from "@theme/Layout";
import styles from "./leaderboard.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
const useDocusaurusContext =
  require("@docusaurus/useDocusaurusContext").default;
<script src="https://unpkg.com/@phosphor-icons/web"></script>;

export default function Leaderboard() {
  const { siteConfig } = useDocusaurusContext();
  const [contributors, setContributors] = useState([]);
  const [selectedContributor, setSelectedContributor] = useState(null);
  const handleContributorSelect = (contributor) => {
    setSelectedContributor(contributor);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.contributor.kuosc.org.np/api/v1/webhook"
      );
      console.log(response.data);
      if (response.data.success) {
        setContributors(response.data.data.docs);
      }
    } catch (err) {
      console.log("Error");
      console.log(err);
    }
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  {
    contributors.slice(startIndex, endIndex).map((contributor, index) => ({
      ...contributor,
      position: index + 1,
    }));
  }

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (contributors.length > 0) {
      setSelectedContributor(contributors[0]);
    }
  }, [contributors]);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Welcome to the Kathmandu University Open Source Community (KUOSC), a thriving and historic community from Kathmandu University dedicated to promoting and embracing the spirit of Open Source."
    >
      <main>
        <div className={styles.container}>
          <div className={styles.board}>
            {selectedContributor && (
              <div className={styles.leftDetails}>
                <h2>{selectedContributor.username}</h2>
                <div className={`${styles.avatar} avatar`}>
                  <img
                    src={`https://avatars.githubusercontent.com/u/${selectedContributor.userId}?v=4`}
                    alt={`${selectedContributor.username}'s Image`}
                  />
                </div>
                <p>
                  Number of Contributions: {selectedContributor.contributions}
                </p>
                <p>
                  Repository: {selectedContributor.repositoryName}
                  <br />
                  Type: {selectedContributor.type}
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
                        key={contributor._id}
                        onClick={() => handleContributorSelect(contributor)}
                        className={
                          selectedContributor === contributor
                            ? styles.selectedRow
                            : styles.notSelectedRow
                        }
                      >
                        <td className={styles.number}>{index + 1}</td>
                        <td className={styles.name}>
                          {contributor.username}
                          <br />
                          {contributor.repositoryName}
                        </td>
                        <td className={styles.points}>
                          {contributor.type === "commit"
                            ? contributor.type
                            : contributor.type + "s"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className={styles.pagination}>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
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
