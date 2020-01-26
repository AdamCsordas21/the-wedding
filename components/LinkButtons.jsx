import React from 'react';
import Link from 'next/link';

const LinkButton = ({ href, desc }) => (
  <>
    <Link href={href}><a data-testid="link-button" style={
      {
        textDecoration: "none",
        padding: "20px",
        color: "black",
        fontSize: "1.4em"
      }}>{desc}</a></Link>
  </>
)

export default () => <nav data-testid="link-buttons" style={{
  letterSpacing: '1.6px',
  padding: '25px 0',
}}>
  <LinkButton href="/index" desc="Home" />
  <LinkButton href="/TheWedding" desc="The Wedding" />
  <LinkButton href="/GuestInformation" desc="Guest Information" />
</nav>

