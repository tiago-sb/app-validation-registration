import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

export const Button = ({ title, onClick }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
  )
};

