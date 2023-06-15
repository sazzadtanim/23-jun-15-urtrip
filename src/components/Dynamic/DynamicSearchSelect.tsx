import React from 'react'
import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type SetValueConfig,
} from 'react-hook-form'
import Select from 'react-select'

type Option = {
  id: string
  name: string
}
export default function DynamicSearchSelect<
  T extends FieldValues,
  U extends Option
>(props: {
  errors: FieldErrors<T>
  apiData: U[] | undefined
  fieldId: Path<T>
  label: string
  placeholder?: string
  setValue: (name: Path<T>, value: string, options?: SetValueConfig) => void
}): JSX.Element {
  return (
    <>
      {props.apiData && (
        <>
          <label className="label" htmlFor="categoryId">
            <span className="label-text capitalize">{props.label}</span>
          </label>
          <Select
            classNamePrefix={'react-select'}
            id="categoryId"
            isClearable
            isSearchable
            escapeClearsValue
            backspaceRemovesValue
            className="select-multiple grow capitalize placeholder:capitalize"
            placeholder={props.placeholder}
            options={props.apiData.map(({ id, name }) => ({
              label: name,
              value: id,
            }))}
            onChange={selected => {
              if (selected?.value) props.setValue(props.fieldId, selected.value)
            }}
          />
          {props.errors[props.fieldId] && (
            <label className="label">
              <span className="label-text-alt lowercase text-red-600 first-letter:capitalize">
                {props.errors[props.fieldId]?.message?.toString()}
              </span>
            </label>
          )}
        </>
      )}
    </>
  )
}
