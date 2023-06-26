export default function DynamicButton2(
  props: {
    text: string
    iconLeft?: React.ReactElement
    iconright?: React.ReactElement
    state: 'primary' | 'secondary' | 'secondary-white'
    size: 'small' | 'medium' | 'large' | 'xs'
    animate: boolean
  } & React.ComponentProps<'button'>
) {
  return (
    <button
      className={`flex  max-w-fit select-none items-center gap-2 rounded-[10px]  capitalize
      ${props.state === 'primary' ? 'bg-gradient_purple hover:bg-red-500' : ''}
      ${props.state === 'secondary' ? 'border-2 border-purple-500' : ''}
      ${props.state === 'secondary-white' ? 'border-2 border-white' : ''}
      ${props.size === 'medium' ? 'text-md my-2 px-6 py-2' : ''}
      ${props.size === 'large' ? 'my-4 px-10 py-5 h-[3rem]' : ''}
      ${props.size === 'small' ? 'my-1 px-6 py-3' : ''} 
      ${props.size === 'xs' ? 'my-1 px-2 py-1 text-sm' : ''}    
      ${props.animate ? 'button h-[2rem]' : ''}  
      `}
      {...props}
    >
      {props.iconLeft}
      <span
        className={`button_content font-bold text-white
        // ${props.size === 'xs' ? '' : ''}  
        ${props.state === 'secondary' ? 'text-purple-500' : ''}

        `}
        {...props}
      >
        {props.text}
      </span>
      {props.iconright}
    </button>
  )
}
