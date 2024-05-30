import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';
import { beforeEach } from 'vitest';

let blog;
let container;

beforeEach(() => {
  blog = {
    title: 'Piru',
    author: 'Ricardo',
    url: 'www.sacatreque.com',
    userId: {
      id: '6634fcafa21000dcb63cb85a',
      name: 'root',
      userName: 'Dem8755kkk6',
    },
  };

  const user = {
    user: 'Diego',
  };

  container = render(<Blog blog={blog} user={user} />).container;
});

test('blog renders title and author', () => {
  const element = screen.getByText('Ricardo');
  expect(element).toBeDefined();
});

test('a blog shows likes and url when the button is clicked', async () => {
  const user = userEvent.setup();

  const button = screen.getByText('Show');

  const divBlog = container.querySelector('.blogContent');

  await user.click(button);

  expect(divBlog).not.toHaveStyle('display: none');
});
