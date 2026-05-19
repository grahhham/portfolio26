import React, { ReactNode, ComponentPropsWithoutRef } from 'react';

export enum BUTTON_STYLE {
  block = 0,
  flat
}

// 1. Extend ComponentPropsWithoutRef<'button'> to inherit all native HTML button props (like disabled)
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  // id is already included in standard button attributes, so we don't need to redeclare it unless making it mandatory
  id: string; 
  children: ReactNode;
  className?: string;
  styleType?: BUTTON_STYLE; // Renamed from 'style' to avoid clashing with React's native HTML inline 'style' prop
}

// 2. Use the rest operator (...props) to catch everything else passed to the component
export function Button({ 
  id, 
  children, 
  className = "", 
  styleType = BUTTON_STYLE.block, 
  ...props 
}: ButtonProps) {
  
  // Dynamic class assignment
  const styleClass = styleType === BUTTON_STYLE.flat ? " flat" : " block";
  const combinedClassName = `${className} card-button${styleClass}`.trim();

  return (
    <div id={id+"-container"} className={("button-container"+styleClass).trim()}>
      {/* 3. Spread the remaining props onto the actual button element */}
      <button
        id={id}
        className={combinedClassName}
        {...props} 
      >
        {children}
        <span className="button-indicator"></span>
      </button>
    </div>
  );
}