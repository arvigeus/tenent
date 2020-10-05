import React, { useCallback } from "react";
import { NextSeo } from "next-seo";

export default function Home() {
  const testButtonCallback = useCallback(() => {
    // eslint-disable-next-line no-alert
    window.alert("Hello, world!");
  }, []);
  return (
    <div className="container">
      <NextSeo title="Home" />
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>src/pages/index.tsx</code>
        </p>

        <button
          type="button"
          onClick={testButtonCallback}
          data-testid="test-button"
        >
          Test Button
        </button>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/katawaredev/config" className="card">
            <h2>Permissive config &rarr;</h2>
            <p>Find more about tools used</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 0 0.5rem;
        }

        main {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 5rem 0;
        }

        footer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          font-size: 4rem;
          line-height: 1.15;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          font-size: 1.5rem;
          line-height: 1.5;
        }

        code {
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          background: #fafafa;
          border-radius: 5px;
        }

        .grid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          flex-basis: 45%;
          margin: 1rem;
          padding: 1.5rem;
          color: inherit;
          text-align: left;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        @media screen and (prefers-reduced-motion: reduce) {
          .card {
            transition: none;
          }
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
