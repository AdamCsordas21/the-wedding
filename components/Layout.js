import Header from './Header'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

const MyLayout = ({ children }) => (
  <div style={layoutStyle}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/css/font.css" />
    </Head>
    <Header />
    {children}
    <style global jsx>{`
      img {
        display: block;
        box-sizing: border-box;
        max-width: 100%;
        margin-bottom: 30px;
        border: 14px solid #fff;
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
      }
    `}</style>
  </div>
)


  
export default MyLayout;