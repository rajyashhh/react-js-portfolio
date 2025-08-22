import React from "react";

function GithubGraph() {
  return (
    <div>
      {/* picture added */}
      <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcSet="https://raw.githubusercontent.com/rajyashhh/rajyashhh/output/github-snake-dark.svg"
        />
        <source
          media="(prefers-color-scheme: light)"
          srcSet="https://raw.githubusercontent.com/rajyashhh/rajyashhh/output/github-snake.svg"
        />
        <img
          alt="github-snake"
          src="https://raw.githubusercontent.com/rajyashhh/rajyashhh/output/github-snake.svg"
          style={{
            width: "100%",
            maxWidth: "2200px",
            display: "block",
            margin: "0 auto",
          }}
        />
      </picture>
    </div>
  );
}

export default GithubGraph;
