import cn from "@/_libs/utils/cn";
import { cva } from "class-variance-authority";

const DEFAULT_BUTTON_STYLES =
    "h-fit inline-flex items-center rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2  cursor-pointer";

const LARGE_BUTTON_STYLES = "px-6 py-4 text-base font-bold";
const MEDIUM_BUTTON_STYLES = "px-4 py-2 md:py-3 text-base font-semibold";
const SMALL_BUTTON_STYLES = "px-3 py-2 text-sm font-semibold";
const ORANGE_BUTTON_STYLES =
    "bg-orange-500 text-neutral-50 hover:bg-orange-400 active:bg-orange-400 focus:bg-orange-400 focus:ring-orange-400";
const SECONDARY_BUTTON_STYLES =
    "bg-white text-orange-600 border border-orange-600 hover:bg-orange-50 hover:border-orange-700 active:bg-orange-50 active:border-orange-700 focus:bg-orange-50 focus:border-orange-700 active:text-orange-600 focus:text-orange-600 focus:ring-orange-700";

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
