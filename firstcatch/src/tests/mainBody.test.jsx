import { render, screen } from '@testing-library/react';
import { test, it, describe, expect } from 'vitest';
import MainBody from '../components/MainBody';
import "@testing-library/jest-dom/vitest";

describe("MainBody", () => {
    it("renders the main heading", () => {
        render(<MainBody />);
        const heading = screen.getByRole("heading", { name: /firstcatch/i });
        expect(heading).toBeInTheDocument();
    });

    test("displays navigation links", () => {
        render(<MainBody />);
        const menuLink = screen.getByRole("link", { name: /sell/i });
        const catchLink = screen.getByRole("link", { name: /buy/i });
        expect(menuLink).toBeInTheDocument();
        expect(catchLink).toBeInTheDocument();
    });
});