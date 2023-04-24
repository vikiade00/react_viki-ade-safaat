import { v4 as uuidv4 } from "uuid";
const generateRandomNumber = () => {
  const uuid = uuidv4();
  const shortUuid = uuid.substr(0, 8); // ambil 8 karakter pertama dari UUID
  const decimal = parseInt(shortUuid, 16); // ubah 8 karakter tersebut menjadi angka desimal
  const fourDigitNumber = decimal % 10000; // ambil 4 digit terakhir dari angka desimal tersebut
  return fourDigitNumber;
};
export const INITIAL_TABLE_DATA = [
  {
    key: 1,
    id: "1",
    productName: "Mangga",
    productCategory: "1",
    productFreshness: "Brand New",
    productPrice: 1,
    uuid: generateRandomNumber(),
  },
  {
    key: 2,
    id: "2",
    productName: "Anggur",
    productCategory: "2",
    productFreshness: "Brand New",
    productPrice: 1,
    uuid: generateRandomNumber(),
  },
];
