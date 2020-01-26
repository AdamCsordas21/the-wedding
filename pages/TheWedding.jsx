import Layout from '../components/Layout';
import Divider from '../components/Divider';
import P from '../components/P';
import Li from '../components/Li';
import ImgFigure from '../components/ImgFigure';
import FlexBox from '../components/FlexBox';
import FlexItem from '../components/FlexItem';

const TheWedding = () => {
  return (
    <Layout>
      <ImgFigure src='/img/FriernManor.jpg' caption="Friern Manor Country House Hotel" />
      <h1>June 27<sup>th</sup>, 2019</h1>
      <h2>WE ARE MARRIED</h2>
      <Divider />
      <h1>The Wedding</h1>
      <P>Our wedding will be held in the classic Georgian house Friern Manor, built in the 18th century. It is located in beautiful landscape grounds in Brentwood, Essex. The ceremony will take place in the Manor House Conservatory of South Lawns. Reception drinks afterwards in the garden and following wedding breakfast in the Old Coaching Stables.</P>
      <P>Here is a draft wedding timeline:</P>
      <ol>
        <Li><strong>2.30 pm:</strong> First guests arriving, cash bar is open at your convenience.</Li>
        <Li><strong>3.15 pm:</strong> Guests are invited to take their seats.</Li>
        <Li><strong>3.20 pm:</strong> Mother of Bride as the last guest arrives.</Li>
        <Li><strong>3.30 pm:</strong> Ceremony begins in the Manor House Conservatory of South Lawns.</Li>
        <Li><strong>4.00 pm:</strong> We Are Married! Couple and main bridal party have their pictures taken. Drinks, reception in the garden.</Li>
        <Li><strong>5.00 pm:</strong> The Receiving Line. Wedding Breakfast begins in the Old Coaching Stables.</Li>
        <Li><strong>6.45 pm:</strong> Speeches.</Li>
        <Li><strong>7.00 pm:</strong> Cutting the cake.</Li>
        <Li><strong>7.15 pm:</strong> Games and party starting.</Li>
        <Li><strong>9.00 pm:</strong> Evening buffet.</Li>
        <Li><strong>11.45 pm:</strong> Bride and Groom depart to the honeymoon suite.</Li>
        <Li><strong>11.55 pm:</strong> Last Dance</Li>
      </ol>
      <Divider />
      <h1>Meet our Bridesmade and Best Man</h1>
      <ImgFigure src='/img/bridesmadebestman.jpg' caption="The thoughest mini golf tournament ever" />
      <FlexBox>
        <FlexItem h1="Alex" h3="The Bridesmade">Me and Alex are cousins. We are very similar or at least we laugh at the same things. Alex is perfect choice for the Bridesmaid as she is so friendly and highly organised. If you feel lost or need anything on the Wedding Day, Alex is the best person to talk to.</FlexItem>
        <FlexItem h1="Ashley" h3="The Best Man">I know Ashley for 7 years. We met at work and since then, we are best friends. Ashley is a great guy, he can make anyone laugh and stays cool in every situation. No doubt, he is the best choice to be my best man. Feel free to ask him, if you need any help.</FlexItem>
      </FlexBox>
    </Layout>
  );
}

export default TheWedding;