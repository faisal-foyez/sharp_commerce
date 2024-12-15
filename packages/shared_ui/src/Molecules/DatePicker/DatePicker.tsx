'use client'
import { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '../../utils/cn';
import '@dsc/scss/lib/DatePicker.css';

export type CalendarProps = ComponentProps<typeof DayPicker> & {
  dayShape?: 'circle' | 'rounded'
}

export type DateRangeType = {
  from: Date | undefined
  to: Date | undefined
}

const DatePicker = ({
  className,
  classNames,
  dayShape = 'circle',
  showOutsideDays = false,
  ...props
}: CalendarProps) => {
  return (
    <>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          'dsc-date-picker',
          className,
        )}
        classNames={{
          root: 'root',
          months: 'dsc-months',
          month_grid: 'dsc-month-grid',
          month_caption: 'dsc-month-caption',
          caption_label: 'dsc-caption-label',
          dropdown: 'dsc-dropdown', // Important for dropdown styling
          months_dropdown: 'dsc-months-dropdown', // Month dropdown specific
          years_dropdown: 'dsc-years-dropdown', // Year dropdown specific
          nav: 'dsc-nav',
          button_previous: 'dsc-previous-button',
          button_next: 'dsc-next-button',
          weekdays: 'dsc-weekdays',
          weekday: 'dsc-weekday',
          week: 'dsc-week',
          head_cell: 'dsc-head-cell',
          row: 'dsc-row',
          day: 'dsc-day',
          day_button: `dsc-day-button ${dayShape === 'rounded' ? 'dsc-day-button-rounded' : 'dsc-day-button-circle'}`,
          range_end: 'dsc-range-end',
          range_start: 'dsc-range-start',
          selected: `dsc-selected-day ${
            dayShape === 'rounded' 
            ? 'dsc-rounded-selected' 
            : 'dsc-day-button-circle'
          }`,
          today: 'dsc-today',
          outside: 'dsc-outside-day',
          disabled: 'dsc-disabled',
          range_middle: 'dsc-range-middle',
          hidden: 'dsc-hidden',
          chevron: 'dsc-chevron',
          ...classNames,
        }}
        {...props}
      />
    </>
  )
}
DatePicker.displayName = 'DatePicker'

export default DatePicker