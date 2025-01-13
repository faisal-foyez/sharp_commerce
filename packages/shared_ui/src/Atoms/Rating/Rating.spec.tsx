import { render, screen } from '@testing-library/react'
import { Rating, RatingStar } from './index'
import '@testing-library/jest-dom'
describe('Rating', () => {
  it('renders the Rating component', () => {
    render(<Rating data-testid="rating">
      <RatingStar value={1} />
      <RatingStar value={2} />
      <RatingStar value={3} />
      <RatingStar value={4} />
      <RatingStar value={5} />
    </Rating>)
    expect(screen.getByTestId('rating')).toBeInTheDocument()
  })
})
