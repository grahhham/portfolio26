import React, { ReactNode } from 'react';

enum BUTTON_STYLE {
  block = 0,
  flat
}

interface ButtonProps {
  id: string;
  children: ReactNode;
  className?: string;
  style?: BUTTON_STYLE;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ id, children, className, style=BUTTON_STYLE.block, onClick}: ButtonProps) {
  return (
    <div
      className="button-container"
    >
      <button
        id={id}
        className={
          className+" card-button" + (
            style == BUTTON_STYLE.flat ? " flat" : (
            style == BUTTON_STYLE.block ?  " block" :
            ""
          ))
        }
        onClick={onClick}
      >
          {children}
      </button>
    </div>
  )
}