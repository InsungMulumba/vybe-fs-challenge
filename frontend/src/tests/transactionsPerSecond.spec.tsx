/**
 * @jest-environment jsdom
 */

import * as renderer from "react-test-renderer";
import TransactionsPerSecond from "../charts/transactionsPerSecond";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

const testData = [3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008];

describe("Transactions Per Secong Component", () => {
  it("renders Time Chart Series correctly", () => {
    const tree = renderer
      .create(<TransactionsPerSecond data={testData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
