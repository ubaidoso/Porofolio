import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import "@/styles/globals.css";
import "@/styles/fonts.css";

function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </>
  );
}

export default App;
