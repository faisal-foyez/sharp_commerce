import { render, screen } from '@testing-library/react'
import { Timeline } from '../Timeline'
import '@testing-library/jest-dom'

describe('Timeline', () => {
  it('should render', () => {
    render(<Timeline data-testid="timeline" />)
    expect(screen.getByTestId('timeline')).toBeInTheDocument()
  })
})