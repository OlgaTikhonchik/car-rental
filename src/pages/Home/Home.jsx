import { Images, Text, Title } from './Home.styled';

import tesla from '../../images/tesla.jpg';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <h1>Home</h1>
      </Helmet>

      <Title>
        Welcome! <br />
        Car Rent is a application that provides users with easy access to rental
        cars !
      </Title>
      <Images src={tesla} alt="car" />

      <Text>
        Car Rent is the perfect solution for those who need a car for a short
        period of time without the commitment of purchasing one.
      </Text>
    </>
  );
};

export default Home;
