import Head from "next/head";
import { useContext } from "react";
import { FizzBuzzContext } from "../contexts/FizzBuzzContext";

export default function Home() {
  const { fizzBuzz, refreshFizzBuzz } = useContext(FizzBuzzContext);
  return (
    <div className="container">
      <Head>
        <title>FizzBuzz Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to{" "}
          <a href="https://docs.google.com/presentation/d/1cEUl7W1crmPJPStviFJvo39H_24LphrFsXYTDNUZKfg/edit#slide=id.gaa09691091_0_2">
            FizzBuzz Test
          </a>
        </h1>

        <p className="description">
          Write a program that prints the numbers from 1 to 100. But for
          multiples of three print “Fizz” instead of the number and for the
          multiples of five print “Buzz”. For numbers which are multiples of
          both three and five print “FizzBuzz”.
        </p>

        <button onClick={refreshFizzBuzz}>Write the numbres!</button>
        <div className="grid">
          {fizzBuzz.map((item) => (
            <p className="card">{JSON.stringify(item)}</p>
          ))}
        </div>
      </main>

      <footer>
        <a
          href="https://www.linkedin.com/in/ypvaldivia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Presented by{" "}
          <img
            src="https://www.gravatar.com/avatar/c36c768c20d54b26b050363929f8ca2d"
            alt="Yasmani Palmero"
            className="logo"
          />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
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
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        button {
          background-color: #4caf50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: black;
          border-color: #0070f3;
        }

        .logo {
          height: 1em;
        }

        ol {
          background: #0070f3;
          padding: 20px;
        }

        ol li {
          color: white;
          padding: 5px;
          margin-left: 35px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
