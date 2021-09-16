import { FizzBuzzProvider } from "../contexts/FizzBuzzContext.js";

function MyApp({ Component, pageProps }) {
  return (
    <FizzBuzzProvider>
      <Component {...pageProps} />
    </FizzBuzzProvider>
  );
}

export default MyApp;
