import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/css/font.css" />
    </Head>
    <div style={{margin: 20, padding: 20}}>
      <Header />
      <div style={{
        paddingTop: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '960px',
        paddingRight: '1em',
        paddingLeft: '1em',
      }}>{children}</div>
    </div>
    <Footer />

    <style global jsx>{`
      * {
        font-family: Papyrus;
        margin: 0;
      }

      h1, h2 {
        text-align: center;
        padding-bottom: 2rem;
      }

      h3 {
        text-align: center;
      }
    `}</style>
  </>
)
