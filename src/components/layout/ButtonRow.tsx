import React, { ReactNode } from 'react';

interface ButtonProps {
  id: string;
  children: ReactNode;
}

export function ButtonRow({ id, children }: ButtonProps) {

  return (
    <div 
      id={id}
      className="max flex"
    >
      {children}
      <div className="card-button-spacer">
      </div>
    </div>
  )
}
