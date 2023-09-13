import { Images, Text, Title } from './Home.styled';

import tesla from '../../images/tesla.jpg';

const Home = () => {
  return (
    <>
      <Title>
        Welcome! <br />
        Unlock the Road to Adventure with Our Car Rental Service!
      </Title>
      <Images src={tesla} alt="car" />

      <Text>
        The ultimate solution for hassle-free car rentals! With a wide range of
        vehicles to choose from, our user-friendly interface simplifies the
        process of renting a car.
      </Text>
    </>
  );
};

export default Home;
