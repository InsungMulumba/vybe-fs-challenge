/**
 * @jest-environment jsdom
 */

import * as renderer from "react-test-renderer";
import MarketCap from "../charts/marketCap";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

const testData = [
  {
    name: "Token1",
    address: "EPedfgdfgdfsg5GGon7jmAWKVUHuux1Tpz",
    marketCap: 70004.38,
  },
  {
    name: "Token2",
    address: "a1sFFFwFtw2kb48X77W9xq8hBZ5kVfdd321W",
    marketCap: 55555.6,
  },
  {
    name: "Token3",
    address: "ki87nWEUx17Y4AggKG444BYerwr1Pd8wZ4cp",
    marketCap: 66666.92,
  },
  {
    name: "Token4",
    address: "8LzFRE3B890023TKYz9Drzqnpgee3SGarqM",
    marketCap: 44447.9,
  },
  {
    name: "Token5",
    address: "CBB55111SCo9jkCejsZfz8Ec8nH7TEKSnvwT6XK6",
    marketCap: 99987.85,
  },
];

describe("Market Cap Component", () => {
  it("renders Pie Chart correctly", () => {
    const tree = renderer.create(<MarketCap data={testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
