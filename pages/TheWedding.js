import Layout from '../components/Layout';
import Img from '../components/Img';
import Divider from '../components/Divider';
import P from '../components/P';

const TheWedding = () => {
  return (
    <Layout>
      <Img src='/img/FriernManor.jpg' alt="Venue" />
      <P>Friern Manor Country House Hotel</P>
      <h1>June 27<sup>th</sup>, 2019</h1>
      <h2>WE ARE MARRIED</h2>
      <Divider />
      <h1>The Wedding</h1>
      <P>Our wedding will be held in the classic Georgian house Friern Manor, built in the 18th century. It is located in beautiful landscape grounds in Brentwood, Essex. The ceremony will take place in the Manor House Conservatory of South Lawns. Reception drinks afterwards in the garden and following wedding breakfast in the Old Coaching Stables.</P>
      <P>Here is a draft wedding timeline:</P>
      <ul>
					<li><strong>2.30 pm:</strong> First guests arriving, cash bar is open at your convenience.</li>
					<li><strong>3.15 pm:</strong> Guests are invited to take their seats.</li>
					<li><strong>3.20 pm:</strong> Mother of Bride as the last guest arrives.</li>
					<li><strong>3.30 pm:</strong> Ceremony begins in the Manor House Conservatory of South Lawns.</li>
					<li><strong>4.00 pm:</strong> We Are Married! Couple and main bridal party have their pictures taken. Drinks, reception in the garden.</li>
					<li><strong>5.00 pm:</strong> The Receiving Line. Wedding Breakfast begins in the Old Coaching Stables.</li>
					<li><strong>6.45 pm:</strong> Speeches.</li>
					<li><strong>7.00 pm:</strong> Cutting the cake.</li>
					<li><strong>7.15 pm:</strong> Games and party starting.</li>
					<li><strong>9.00 pm:</strong> Evening buffet.</li>
					<li><strong>11.45 pm:</strong> Bride and Groom depart to the honeymoon suite.</li>
					<li><strong>11.55 pm:</strong> Last Dance</li>
				</ul>
    </Layout>
  );
}

export default TheWedding;