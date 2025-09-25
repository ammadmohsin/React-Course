import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'danger';
    // '?' means property is optional.
    // '|' union operator : too make sure no other values passed other than given ones.
    onClick: () => void;
}

function Button({ children, color = 'primary', onClick }: Props) {
  return (
    <div>
          <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
