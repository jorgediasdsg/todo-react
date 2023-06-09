import style, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'

}

export const ButtonContainer = style.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    transition: all 0.2s ease-in-out;

    &:hover {
        filter: brightness(0.8);
    }

    // ${({ variant }) => buttonVariants[variant]}

    ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`;
    }}

`;

