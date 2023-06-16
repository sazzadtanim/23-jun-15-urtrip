import React from 'react'

export default function DynamicButton(
  props: {
    text: string
    iconLeft?: React.ReactElement
    iconright?: React.ReactElement
    state: 'primary' | 'secondary' | 'secondary-white'
    size: 'small' | 'medium' | 'large'
  } & React.ComponentProps<'button'>
) {
  return (
    <button
      className={`flex max-w-fit select-none items-center gap-2 rounded-[10px]  capitalize
      ${props.state === 'primary' ? 'bg-gradient_purple hover:bg-red-500' : ''} 
      ${props.state === 'secondary' ? 'border-2 border-purple-500' : ''} 
      ${props.state === 'secondary-white' ? 'border-2 border-white' : ''}
      ${props.size === 'medium' ? 'text-md px-6 py-2' : ''}
      ${props.size === 'large' ? 'px-10 py-5 text-lg' : ''}
      ${props.size === 'small' ? 'px-6 py-3 text-lg' : ''}     
      `}
      {...props}
    >
      {props.iconLeft}
      <span
        className={`text-lg font-bold text-white 
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
