import Layout from '../components/Layout';
import Divider from '../components/Divider';
import ImgFigure from '../components/ImgFigure';
import Li from '../components/Li';
import P from '../components/P';

const GuestInformation = () => {
  return (
    <Layout>
      <Divider />
      <h1>Getting There</h1>
      <h5>Click on the map for direction</h5>
      <ImgFigure src='https://external-lhr3-1.xx.fbcdn.net/static_map.php?v=1012&amp;osm_provider=2&amp;size=820x242&amp;bbox=51.575821%2C0.376900%7C51.579821%2C0.392900&amp;markers=51.57782076%2C0.38889962&amp;language=en_GB&amp;scale=2' caption="Lower Dunton Road, Dunton, Brentwood, Essex, CM13 3SL Brentwood, UK" />
      <P></P>
      <h2>Fastest routes to The Venue</h2>
      <P></P>
      <ol>
        <Li><strong>Route 1</strong> : From London via A13 (fastest route), or A2. Free of charge car park available at the venue.</Li>
        <Li><strong>Route 2</strong> : From West Ham Train Station, train c2c Shoeburyness to Laindon.</Li>
        <Li><strong>Route 3</strong> : From Laindon Railway Station bus 8 to Fraser Close and walk about 20 minutes.</Li>
        <Li><strong>Route 4</strong> : From Laindon Railway Station taxi 6 minutes.</Li>
      </ol>
      <Divider />
      <h1>Accomodation</h1>
    </Layout>
  );
}

export default GuestInformation;