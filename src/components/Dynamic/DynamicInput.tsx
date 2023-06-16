import React, { type HTMLInputTypeAttribute } from 'react'
import {
  type Path,
  type FieldValues,
  type UseFormRegister,
  type FieldErrors,
} from 'react-hook-form'

interface Props<T extends FieldValues> {
  register: UseFormRegister<T>
  field_id: Path<T>
  errors: FieldErrors<T>
  label: string
  placeholder?: string
  type: HTMLInputTypeAttribute
}

export default function DynamicInput<T extends FieldValues>(props: Props<T>) {
  return (
    <div className='form-control w-full max-w-screen-sm'>
      <label className='label' htmlFor={props.field_id}>
        <span className='label-text capitalize'>{props.label}</span>
      </label>
      <input
        id={props.field_id}
        {...props.register(props.field_id, {
          valueAsNumber: props.type === 'number' ? true : false,
        })}
        placeholder={props.placeholder}
        className='input-bordered input w-full ring-1 sm:input-sm md:input-md placeholder:text-xs'
        type={props.type}
        defaultValue={
          props.type === 'date' ? new Date().toLocaleDateString('en-CA') : ''
        }
      />
      {props.errors[props.field_id] && (
        <label className='label'>
          <span className='label-text-alt lowercase text-red-500 first-letter:capitalize'>
            {props.errors[props.field_id]?.message?.toString()}
          </span>
        </label>
      )}
    </div>
  )
}
