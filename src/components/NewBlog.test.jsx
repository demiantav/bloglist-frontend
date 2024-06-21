import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewBlog from './NewBlog';

test('the form calls the event handler it received as props with the right details when a new blog is created.', async () => {
  const handleBlog = vi.fn();
  const user = userEvent.setup();

  render(<NewBlog handleBlog={handleBlog} />);

  const inputs = screen.getAllByRole('textbox');
  const saveButton = screen.getByText('Save');

  await user.type(inputs[0], 'pedo...');
  await user.type(inputs[1], 'Elvira...');
  await user.type(inputs[2], 'panchito...');

  await user.click(saveButton);

  console.log(handleBlog.mock.calls);
});
