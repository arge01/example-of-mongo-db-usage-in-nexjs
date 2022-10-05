import { render, screen } from '@testing-library/react';

import Home from '../../pages';

test('my title', () => {
  render(<Home />);
  const myTitle = screen.getByText(/Arif GEVENCİ/i);
  expect(myTitle).toBeInTheDocument();
});
