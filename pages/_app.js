import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-screen bg-back h-screen text-txtlight">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
