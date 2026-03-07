interface ButtonProps {
  id: string;
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ id, text, onClick}: ButtonProps) {
  return (
    <div
      className={`
          inline-block
          border-r-1
          bg-solid-shadow-2
      `}
    >
      <button
        id={id}
        className={`
          px-2 py-1
          bg-fg
          block transition-all duration-240
          hover:-translate-1 focus:-translate-1
          active:duration-60 active:translate-y-1 active:translate-x-0 active:bg-solid-shadow
        `}
        onClick={onClick}
      >
          {text}
      </button>
    </div>
  )
}