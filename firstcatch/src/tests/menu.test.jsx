import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import Menu from '../pages/Menu';
import "@testing-library/jest-dom/vitest";

describe("Menu", () => {
    test("renders the menu list correctly", () => {
        render(<Menu />);

        const pageHeading = screen.getByRole("heading", { level: 2, name: /menu/i });
        expect(pageHeading).toBeInTheDocument();

        const fishItems = screen.getAllByRole("listitem");
        expect(fishItems.length).toBeGreaterThan(0);
    });

    test("has a button to add new items", () => {
        render(<Menu />);
        const addButton = screen.getByRole("button", { name: /add new catch/i });
        expect(addButton).toBeInTheDocument();
    });
});