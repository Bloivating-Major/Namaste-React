import { render , screen} from '@testing-library/react'
import Contact from "../src/components/Contact";
import '@testing-library/jest-dom'

test("Should load Contact component", ()=> {
    // This will render the contact component in js dom and test that whether it is present or not
    render( <Contact />);

    const heading = screen.getByRole("heading");

    // * Assertion

    expect(heading).toBeInTheDocument();
})

test("Should load button inside Contact component", ()=> {
    // This will render the contact component in js dom and test that whether it is present or not
    render( <Contact />);

    const button = screen.getByRole("button");
    // const button = screen.getByText('Random');

    // * Assertion
    expect(button).toBeInTheDocument();
})

test("Should input name inside Contact component", ()=> {
    // This will render the contact component in js dom and test that whether it is present or not
    render( <Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // * Assertion
    expect(inputName).toBeInTheDocument();
})

test("Should load 2 input boxes on the Contact component", ()=> {
    // This will render the contact component in js dom and test that whether it is present or not
    render( <Contact />);

    // * Querying
    const inputs = screen.getAllByRole("textbox"); // getAllByRole - returns multiple elements

    // console.log(inputs.length); // returns jsx element

    // * Assertion
    expect(inputs.length).toBe(2);
})