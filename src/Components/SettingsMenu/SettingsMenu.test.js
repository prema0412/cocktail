import SettingsMenu from './SettingsMenu';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it("should render the form", () => {
    // 1. Arrange
    render(<SettingsMenu />);

    //2. Act
    const form = screen.getByRole("form")

    //3. Assert
    expect(form).toBeInTheDocument();
})


it("should render the basic input fields", () => {
    // 1. Arrange
    render(<SettingsMenu />);

    //2. Act
    const firstNameInput = screen.getByRole("textbox", { name: /firstName/i });
    const lastMailInput = getByRole("textbox", { name: /lastName/i });
    const saveButton = getByRole("button", { name: /Save/i });
    //3. Assert

    expect(firstNameInput).toBeInTheDocument();
    expect(lastMailInput).toBeTruthy();
    expect(saveButton).toBeTruthy();

    //getAllBy...

    const inputs = screen.getAllByRole("textbox");
    inputs.forEach(input => {
        expect(input).toBeInTheDocument();
        
    })
})  

    xit("should not render error message on load", () => {

        render(<SettingsMenu />)
        const errorMessage = screen.queryByText(/Sorry something went wrong/i)
        expect(errorMessage).toBeFalsy();
        expect(errorMessage).not.toBeInTheDocument();
    })

    xit("should not render success message on load", () => {

        render(<SettingsMenu />)
        const successMessage = screen.queryByText(/Thank you for submitting! We'll be in touch/i)
        expect(successMessage).toBeFalsy();
        expect(successMessage).not.toBeInTheDocument();
    })

   xit("should not submit the form with invalid fields", () => {

        render(<SettingsMenu />)
        const errorMessage = screen.queryByText(/Sorry something went wrong/i)
        const successMessage = screen.queryByText(/Thank you for submitting! We'll be in touch/i)
        const nameInput = screen.getByRole("textbox", { name: /name/i });
        userEvent.type(nameInput, "");

        const emailInput = screen.getByRole("textbox", { name: /email/i });
        userEvent.type(emailInput,"notvalidemail");

        const button = screen.getByRole("button", { name: /sign in/i });
        userEvent.click(button);

        //Assert
        expect(errorMessage).toBeTruthy;
        expect(successMessage).toBeFalsy;
        //expect the error text to be dislayed
   })

  


   