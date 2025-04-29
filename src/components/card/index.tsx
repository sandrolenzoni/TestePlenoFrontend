import type React from 'react';
import './style.css';



function CardTitle(props: Omit<React.ComponentProps<'h1'>, 'className'>) {
  return (
    <h1
      className='card-title'
      {...props}
    />
  )
}

function Card(props: Omit<React.ComponentProps<'div'>, 'className'>) {
  return (
    <div
      className='card'
      {...props}
    />
  )
}

export {
  Card,
  CardTitle
}