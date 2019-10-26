import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  fontFamily: "Arial"
};

const LinkButton = ({ href, desc }) => <Link href={href}><a style={linkStyle}>{desc}</a></Link>

export default () => <>
  <LinkButton href="/index" desc="Home" />
  <LinkButton href="/TheWedding" desc="The Wedding" />
  <LinkButton href="/GuestInformation" desc="Guest Information" />
</>


