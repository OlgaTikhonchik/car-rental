import {
  Form,
  Option,
  Label,
  Select,
  SelectBrand,
  FormBrand,
  Saidbar,
  FormMileage,
  MileageInputWrapper,
  MileageInputLeft,
  MileageInputRight,
  Button,
} from './Filter.styled';

const makesList = [
  'Buick',
  'Volvo',
  'Hummer',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'Mini',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

const Filter = () => {
  return (
    <>
      <Saidbar>
        <FormBrand>
          <Label htmlFor="make-select">Car brand</Label>
          <SelectBrand id="make-select">
            <option value="">Enter the text</option>
            {makesList.map((el, index) => (
              <Option key={index} value={el}>
                {el}
              </Option>
            ))}
          </SelectBrand>
        </FormBrand>
        <Form>
          <Label htmlFor="price-select">Price/ 1 hour</Label>
          <Select id="price-select">
            <Option value="">To $</Option>

            <Option value="30">To $30 </Option>
            <Option value="40">To $40</Option>
            <Option value="50">To $50</Option>
            <Option value="60">To $60</Option>
            <Option value="70">To $70</Option>
            <Option value="80">To $80</Option>
            <Option value="90">To $90</Option>
          </Select>
        </Form>
        <FormMileage>
          <Label htmlFor="mileageTitle">Car mileage / km </Label>
          <MileageInputWrapper>
            <MileageInputLeft
              id="mileageTitle"
              placeholder="From"
              type="text"
              name="mileageFrom"
            />

            <MileageInputRight
              id="mileageTitle"
              type="text"
              name="mileageTo"
              placeholder="To"
            />
          </MileageInputWrapper>
        </FormMileage>
        <Button type="button"> Search </Button>
      </Saidbar>
    </>
  );
};

export default Filter;
