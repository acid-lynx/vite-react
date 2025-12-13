import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type ButtonType = "clear" | "primary" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: ButtonType
  onClick?: () => void
}

export function Button({ btnType, ...props }: Props) {
  const styles = {
    clear: "bg-transparent px-4 text-blue-500",
    primary: "bg-blue-500 text-white ",
    danger: "bg-red-500 text-white px-4 py-2"
  };

  return (
    <button
      className={clsx("bg-transparent px-4 border border-gray-300 rounded-md", styles[btnType])}
      onClick={props.onClick}
      {...props}
    >
      { props.children }
    </button>
  );
}