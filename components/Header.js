import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  fontFamily: "Arial"
};

const header = {
  paddingTop: '85px',
  height: '510px',
  textAlign: 'center',
}

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

const LinkButtons = () => <>
  <LinkButton href="/index" desc="Home" />
  <LinkButton href="/TheWedding" desc="The Wedding" />
  <LinkButton href="/GuestInformation" desc="Guest Information" />
</>

const LinkButton = ({ href, desc }) => <Link href={href}><a style={linkStyle}>{desc}</a></Link>

const Header = () => (
  <header style={header}>
    <h1 style={name}>Nela<br/>&amp;<br/>Adam</h1>
    <LinkButtons />
  </header>
);

export default Header;
