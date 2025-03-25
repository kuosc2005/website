import React, { useEffect, useState } from 'react';

// Get contributors from GitHub

interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

const Contributors: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/kuosc2005/website/contributors")
      .then(response => response.json())
      .then((data: Contributor[]) => setContributors(data))
      .catch(error => console.error("Error fetching contributors:", error));
  }, []);

  return (
    <div>
      <h2>Contributors</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {contributors.length > 0 ? (
          contributors.map((contributor) => (
            <div key={contributor.id} style={{ textAlign: "center" }}>
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                width="50"
                height="50"
                style={{ borderRadius: "50%" }}
              />
              <p>
                <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
                  {contributor.login}
                </a>
              </p>
            </div>
          ))
        ) : (
          <p>Loading contributors...</p>
        )}
      </div>
    </div>
  );
};

export default Contributors;
