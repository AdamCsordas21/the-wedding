import LinkButtons from './LinkButtons';

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

const Header = () => (
  <header style={header}>
    <h1 style={name}>Nela<br/>&amp;<br/>Adam</h1>
    <LinkButtons />
  </header>
);

export default Header;
