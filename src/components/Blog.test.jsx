import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';
import blogService from '../services/blogs.js';

let blog;
let container;
let user;

vi.mock('../services/blogs.js');

beforeEach(() => {
  user = userEvent.setup();
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

  const userName = {
    user: 'Diego',
  };

  container = render(<Blog blog={blog} user={userName} />).container;

  blogService.updateLikes.mockImplementation(async (updatedLikes, id) => {
    return { ...blog, likes: updatedLikes.likes };
  });
});

test('blog renders title and author', () => {
  const element = screen.getByText('Ricardo');
  expect(element).toBeDefined();
});

test('a blog shows likes and url when the button is clicked', async () => {
  const button = screen.getByText('Show');

  const divBlog = container.querySelector('.blogContent');

  await user.click(button);

  expect(divBlog).not.toHaveStyle('display: none');

  screen.debug();
});

test('like button clicked twice', async () => {
  const button = screen.getByText('Show');
  await user.click(button);
  const buttonLike = screen.getByText('Like');

  await user.click(buttonLike);
  await user.click(buttonLike);

  expect(blogService.updateLikes).toHaveBeenCalledTimes(2);

  screen.debug();
});
