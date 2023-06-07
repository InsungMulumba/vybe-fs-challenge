/**
 * @jest-environment jsdom
 */

import * as renderer from "react-test-renderer";
import WalletBalance from "../charts/walletBalance";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

const testData = [
  {
    name: "Wallet1",
    address: "123456789abcdefghi",
    balance: 1861196340100629,
  },
  {
    name: "Wallet2",
    address: "987654321abcdefghij",
    balance: 1669620152191554,
  },
  {
    name: "Wallet3",
    address: "9876543210zaqwsxedc",
    balance: 272904980492348,
  },
  {
    name: "Wallet4",
    address: "1234plmo5678tgbv",
    balance: 3853142296897457,
  },
  {
    name: "Wallet5",
    address: "098765yreqttrg123",
    balance: 660208499533692,
  },
  {
    name: "Wallet6",
    address: "12345fgtre456ghhty",
    balance: 1052216886267585,
  },
  {
    name: "Wallet7",
    address: "9uyDy9VDBw12345UCtVKcX",
    balance: 1870262614264094,
  },
  {
    name: "Wallet8",
    address: "987654aqwsdertgyh",
    balance: 321051316053562,
  },
  {
    name: "Wallet9",
    address: "12345gttyerdsvbcvf",
    balance: 434037961362798,
  },
  {
    name: "Wallet10",
    address: "88xTWZMeKfiTgbfEm123456789Z",
    balance: 315247983175400,
  },
];

describe("Wallet Balance Component", () => {
  it("renders Bar Chart correctly", () => {
    const tree = renderer.create(<WalletBalance data={testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
