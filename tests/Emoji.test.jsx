import { render, screen } from '@testing-library/react';
import Avatar from "../src/lib/Emojitar";


describe('Emoji Avatar Value', () => {
	it('checks for value prop', () => {
		render(<Avatar value="johndoe@gmail.com" />);
		const value = screen.getByText(/jo/i);
		expect(value).toBeInTheDocument();
	});
});

describe('Emoji Avatar Display Value', () => {
	it('checks for displayValue', () => {
		render(<Avatar value="johndoe@gmail.com" displayValue="be" />);
		const displayValue = screen.getByText(/be/i);
		expect(displayValue).toBeInTheDocument();
	});
});
