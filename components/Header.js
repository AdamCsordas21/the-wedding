import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  fontFamily: "Arial"
};

const name = {
  fontSize: '4.50em',
  lineHeight: '1.85em',
  textTransform: 'none',
  letterSpacing: 'normal',
  color: '#202633',
  margin: 0,
  fontWeight: 'normal',
  fontFamily: "Sophia Script Medium",
}

const Header = () => (
  <div>
    <h1 style={name}>Nela<br/>&amp;<br/>Adam</h1>
    <Link href="/index">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/TheWedding">
      <a style={linkStyle}>The Wedding</a>
    </Link>
    <Link href="/GuestInformation">
      <a style={linkStyle}>Guest Information</a>
    </Link>
  </div>
);

export default Header;
