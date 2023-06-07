import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: { "\\.(css|less|scss|sass)$": "identity-obj-proxy" },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
export default config;
