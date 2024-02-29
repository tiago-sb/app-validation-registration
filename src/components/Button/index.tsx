import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

export const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return (
    disabled ? ( <ButtonContainer onClick={onClick}>{title}</ButtonContainer>) 
    : ( <ButtonContainer onClick={onClick} disabled>{title}</ButtonContainer> )
  )
};

