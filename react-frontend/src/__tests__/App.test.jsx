// App.test.jsx
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";

test("our first test", () => {
  render(<App />);
});
