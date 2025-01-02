import { screen, render } from '@testing-library/react'
import { Card, CardContent, CardDescription, CardTitle } from '../index'
import '@testing-library/jest-dom'

describe('Card', () => {
  const renderCard = () => {
    return (
      <Card data-testid="card_testid" style={{width: '500px', maxWidth: '100%'}} className="max-w-md">
      <CardContent>
        <CardTitle>Keep design system</CardTitle>
        <CardDescription>
          Component design systems can help developers to be more productive by providing them with a ready-made set of
          components to use.
        </CardDescription>
      </CardContent>
    </Card>
    )
  }
  it('should render', () => {
    render(renderCard())
    expect(screen.getByTestId('card_testid')).toBeInTheDocument()
  })
})
