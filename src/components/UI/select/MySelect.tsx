import type { ChangeEvent } from 'react'

interface SelectOption {
  value: string
  name: string
}

interface MySelectProps {
  options: SelectOption[]
  defaultValue: string
  value: string
  onChange: (value: string) => void
}

export const MySelect = ({ options, defaultValue, value, onChange }: MySelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }
  return (
    <select value={value} onChange={handleChange}>
      <option disabled value=''>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
