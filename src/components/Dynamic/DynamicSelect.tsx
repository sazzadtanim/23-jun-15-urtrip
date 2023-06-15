import {
  type UseFormRegister,
  type FieldErrors,
  type FieldValues,
  type Path,
} from 'react-hook-form'

interface ApiData {
  id: string
  name: string
}

interface Props<T extends FieldValues> {
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  fieldId: Path<T>
  label: string
  data: ApiData[] | undefined
}

export default function DynamicSelect<T extends FieldValues>(props: Props<T>) {
  return (
    <>
      {props.register && (
        <div className='form-control w-full max-w-screen-sm'>
          <label
            htmlFor={props.fieldId}
            className='label label-text capitalize'
          >
            {props.label}
          </label>
          <select
            id={props.fieldId}
            {...props.register(props.fieldId)}
            className='select select-sm ring-1'
          >
            <option value=''>Select...</option>
            {props.data &&
              props.data.map(customer => (
                <option value={customer.id} key={customer.id}>
                  {customer.name}
                </option>
              ))}
          </select>
          {props.errors[props.fieldId] && (
            <label className='label'>
              <span className='text-red-600 label-text-alt lowercase first-letter:capitalize'>
                {props.errors[props.fieldId]?.message?.toString()}
              </span>
            </label>
          )}
        </div>
      )}
    </>
  )
}
