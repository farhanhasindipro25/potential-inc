import cn from "@/common/helpers/UtilKit";
import { cva } from "class-variance-authority";

const DEFAULT_BUTTON_STYLES =
    "h-fit inline-flex items-center rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2  cursor-pointer";

const LARGE_BUTTON_STYLES = "px-6 py-4 text-base font-bold";
const MEDIUM_BUTTON_STYLES = "px-4 py-2 md:py-3 text-base font-semibold";
const SMALL_BUTTON_STYLES = "px-3 py-2 text-sm font-semibold";
const PRIMARY_BUTTON_STYLES =
    "bg-primary-600 text-neutral-50 hover:bg-primary-700 active:bg-primary-400 focus:bg-primary-400 focus:ring-primary-400";
const SECONDARY_BUTTON_STYLES =
    "bg-white text-primary-600 border border-primary-600 hover:bg-primary-50 hover:border-primary-700 active:bg-primary-50 active:border-primary-700 focus:bg-primary-50 focus:border-primary-700 active:text-primary-600 focus:text-primary-600 focus:ring-primary-700";
const TERTIARY_BUTTON_STYLES =
    "text-primary-600 bg-transparent border-none hover:bg-neutral-50-100 hover:text-primary-700 focus:ring-primary-700 shadow-none";
const ACCENT_BUTTON_STYLES =
    "bg-neutral-50 text-neutral-700 border border-gray-400 hover:bg-neutral-50-100 hover:text-neutral-600 active:bg-neutral-50-100 active:text-neutral-600 focus:bg-neutral-50 focus:text-neutral-600 focus:ring-neutral-300";
const SKELETON_BUTTON_STYLES = "bg-gray-200 text-gray-200";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
    variants: {
        variant: {
            primary: PRIMARY_BUTTON_STYLES,
            secondary: SECONDARY_BUTTON_STYLES,
            tertiary: TERTIARY_BUTTON_STYLES,
            accent: ACCENT_BUTTON_STYLES,
            skeleton: SKELETON_BUTTON_STYLES,
        },
        size: {
            large: LARGE_BUTTON_STYLES,
            medium: MEDIUM_BUTTON_STYLES,
            small: SMALL_BUTTON_STYLES,
        },
    },
    defaultVariants: {
        variant: "primary",
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
