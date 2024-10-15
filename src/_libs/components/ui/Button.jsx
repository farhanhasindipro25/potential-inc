import {
    DEFAULT_BUTTON_STYLES,
    LARGE_BUTTON_STYLES,
    MEDIUM_BUTTON_STYLES,
    ORANGE_BUTTON_STYLES,
    SECONDARY_BUTTON_STYLES,
    SMALL_BUTTON_STYLES,
} from "@/_libs/styles/ButtonStyles";
import cn from "@/_libs/utils/cn";
import { cva } from "class-variance-authority";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
    variants: {
        variant: {
            primary: ORANGE_BUTTON_STYLES,
            secondary: SECONDARY_BUTTON_STYLES,
        },
        size: {
            large: LARGE_BUTTON_STYLES,
            medium: MEDIUM_BUTTON_STYLES,
            small: SMALL_BUTTON_STYLES,
        },
    },
    defaultVariants: {
        variant: "orange",
        size: "medium",
    },
});

export default function Button({
    children,
    variant,
    size,
    className,
    type,
    ...props
}) {
    const BUTTON_STYLES = cn(BUTTON_VARIANTS({ variant, size }), className);

    return (
        <button className={BUTTON_STYLES} type={type} {...props}>
            {children}
        </button>
    );
}
