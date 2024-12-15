import { screen, render } from '@testing-library/react'
import DatePicker from './DatePicker'
import { ComponentProps } from 'react'
import '@testing-library/jest-dom'
describe('DatePicker', () => {
  const renderDatePicker = ({...props}: ComponentProps<typeof DatePicker>) => render(<DatePicker data-testid='date-picker' {...props} />)

  it('should render', () => {
    renderDatePicker({mode: 'single', numberOfMonths: 1, startMonth: new Date(1850, 1), selected: new Date(1850, 1)})
    expect(screen.getByTestId('date-picker')).toBeInTheDocument()
  })

  it('should render with a single date picker', () => {
    renderDatePicker({mode: 'single', numberOfMonths: 1, startMonth: new Date(1850, 1), selected: new Date(1850, 1)})
    expect(screen.getByTestId('date-picker')).toBeInTheDocument()
  })

  it('should render with a range date picker', () => {
    renderDatePicker({mode: 'range', numberOfMonths: 2, startMonth: new Date(1850, 1), selected: {from: new Date(1850, 1), to: new Date(1850, 1)}})
    expect(screen.getByTestId('date-picker')).toBeInTheDocument()
  })

  it('should render with a multiple date picker', () => {
    renderDatePicker({mode: 'multiple', numberOfMonths: 2, startMonth: new Date(1850, 1), selected: [new Date(1850, 1), new Date(1850, 1)]})
    expect(screen.getByTestId('date-picker')).toBeInTheDocument()
  })
})
