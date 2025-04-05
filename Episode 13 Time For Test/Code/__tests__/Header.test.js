import {fireEvent, screen,  render } from "@testing-library/react";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import appStore from "../src/store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole('button'); // is recommended

  const loginButton = screen.getByRole("button", { name: "Login" }); // is recommended

  // const loginButton = screen.getByText('Login'); // not recommended

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("🛒 (0 items)"); // is recommended

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" }); // is recommended

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
