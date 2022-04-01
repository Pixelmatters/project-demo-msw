import '@testing-library/jest-dom'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { App } from './App'

it('renders hello message', async () => {
  render(<App />)
  expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { level: 1, name: 'Users' })
  ).toBeInTheDocument()
  const loading = screen.getByText('Loading...')
  await waitForElementToBeRemoved(loading)
  expect(screen.getByRole('list')).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')).toHaveLength(10)
})
