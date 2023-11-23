type FullName = {
  firstName: string;
  lastName: string;
};

type Address = {
  street: string;
  city: string;
  country: string;
};

type Order = {
  productName: string;
  price: number;
  quantity: number;
};

interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: FullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Address;
  orders?: Order[];
}
export default IUser;
