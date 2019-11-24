import Link from 'next/link';

const LinkButton = ({ href, desc }) => (
  <>
    <Link href={href}><a>{desc}</a></Link>
    <style jsx>{`
      a {
        text-decoration: none;
        padding: 20px;
        color: black;
        font-size: 1.4em;
      }
    `}</style>
  </>
)

export default () => <nav style={{
  letterSpacing: '1.6px',
  padding: '25px 0',
}}>
  <LinkButton href="/index" desc="Home" />
  <LinkButton href="/TheWedding" desc="The Wedding" />
  <LinkButton href="/GuestInformation" desc="Guest Information" />
</nav>

