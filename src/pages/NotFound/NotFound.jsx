import { TextNotFound, TitleNotFound } from './NotFound.styled';

const NotFound = () => {
  return (
    <div>
      <TitleNotFound> Page not found </TitleNotFound>
      <TextNotFound>
        Please, return to the home page. And try to enter a new car!
      </TextNotFound>
      <img
        src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-404-error-people-failure-energy-picture-image_8729597.png"
        alt="Not Found"
      />
    </div>
  );
};

export default NotFound;
