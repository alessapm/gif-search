import { render, screen } from '@testing-library/react';
import Home from './page';


test('renders the Home component', async () => {
    render(<Home/>);

    expect(screen.getByTestId('home-component')).toBeInTheDocument();
});
