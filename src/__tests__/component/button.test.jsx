import { render } from '@testing-library/react';

import Button from '../../component/Button';

it('renders homepage unchanged', () => {
  const { container } = render(
    <Button onClick={() => 'button'}>This a button</Button>
  );
  expect(container).toMatchSnapshot();
});
