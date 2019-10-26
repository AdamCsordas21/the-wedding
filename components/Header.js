import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  fontFamily: "Arial"
};

const Header = () => (
  <div>
    <Link href="/index">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/TheWedding">
      <a style={linkStyle}>The Wedding</a>
    </Link>
    <Link href="/GuestInformation">
      <a style={linkStyle}>Guest Information</a>
    </Link>
    <Link href="/gifts">
      <a style={linkStyle}>Gifts</a>
    </Link>
  </div>
);

export default Header;
