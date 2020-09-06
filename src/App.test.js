import React from 'react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import App from './App';

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.json({
      "id": 306,
      "question": "If you were me, what changes would you make?",
      "category": "About Manager",
      "created_at": "2017-11-18T14:26:13.870Z",
      "updated_at": "2017-11-18T14:26:13.870Z"
    },
    {
      "id": 307,
      "question": "How do you prefer to receive feedback?",
      "category": "About Manager",
      "created_at": "2017-11-18T14:26:13.874Z",
      "updated_at": "2017-11-18T14:26:13.874Z"
    }))
  })
)

test('renders page with header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Choose questions/i);
  expect(linkElement).toBeInTheDocument();
});

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  render(<App/>)

  fireEvent.click(screen.getByText('Choose'))

  const list = await screen.findAllByTestId('questions-list-loaded');
  //debug();

  expect(list).toHaveLength(1)
})


// test('handles server error', async () => {
//   server.use(
//     rest.get('/greeting', (req, res, ctx) => {
//       return res(ctx.status(500))
//     })
//   )

//   render(<Fetch url="/greeting" />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await waitFor(() => screen.getByRole('alert'))

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
//   expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
// })