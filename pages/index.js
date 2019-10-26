// import Link from 'next/link';

// const Index = () => (
//     <div>
//       <Link href="/">
//         <a title="Nela and Adam">Home</a>
//       </Link>
//       <Link href="/TheWedding">
//         <a title="The Wedding">The Wedding</a>
//       </Link>
//       <Link href="/GuestInformation">
//         <a title="Guest Information">Guest Information</a>
//       </Link>
//       <Link href="/gifts">
//         <a title="Gifts">Gifts</a>
//       </Link>
//       <header>
//       <h1>Nela and Adam</h1>
//       </header>
//     </div>
//   );
  
//   export default Index;

import Header from '../components/Header';

export default function Index() {
  return (
    <div>
      <Header />
    </div>
  );
}