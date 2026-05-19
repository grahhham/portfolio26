import React, { ReactNode } from 'react';

interface ButtonProps {
  id: string;
  children: ReactNode;
}

export function ButtonRow({ id, children }: ButtonProps) {

  return (
    <ul 
      id={id}
      className="max flex"
    >
      {children}
      <div className="card-button-spacer">
      </div>
    </ul>
  )
}
