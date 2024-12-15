import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import Catch from '../pages/Catch';
import "@testing-library/jest-dom/vitest";

describe("Catch", () => {
    test("renders the catch form", () => {
        render(<Catch />);

        const formHeading = screen.getByRole("heading", { level: 2, name: /log your catch/i });
        expect(formHeading).toBeInTheDocument();

        const speciesInput = screen.getByLabelText(/species/i);
        expect(speciesInput).toBeInTheDocument();

        const priceInput = screen.getByLabelText(/price \(per lb\)/i);
        expect(priceInput).toBeInTheDocument();

        const locationInput = screen.getByLabelText(/location/i);
        expect(locationInput).toBeInTheDocument();

        const submitButton = screen.getByRole("button", { name: /submit/i });
        expect(submitButton).toBeInTheDocument();
    });

    test("displays error message for missing fields on submit", () => {
        render(<Catch />);
        const submitButton = screen.getByRole("button", { name: /submit/i });

        submitButton.click();
        const errorMessage = screen.getByText(/please fill out all required fields/i);
        expect(errorMessage).toBeInTheDocument();
    });
});