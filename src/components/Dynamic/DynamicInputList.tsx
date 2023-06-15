import {
  type Path,
  type FieldValues,
  type UseFormRegister,
  type FieldErrors,
} from 'react-hook-form'
import DynamicInput from './DynamicInput'

type InputType<T> = {
  name: Path<T>
  label: string
  placeholder: string
  type: React.HTMLInputTypeAttribute
}

export default function DynamicInputList<T extends FieldValues>({
  register,
  errors,
  inputlist,
}: {
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  inputlist: InputType<T>[]
}) {
  return (
    <>
      {register &&
        inputlist.map(item => (
          <DynamicInput
            errors={errors}
            field_id={item.name}
            label={item.label}
            register={register}
            type={item.type}
            placeholder={item.placeholder}
            key={item.name}
          />
        ))}
    </>
  )
}
