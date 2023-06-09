import { useInwatch } from "../zustand";

export default function MoreLayout({children, itemExist}) {
    const { error } = useInwatch()

    if (error && !itemExist) {
        return (
            <h1 className="absolute inset-0 grid place-content-center text-sm sm:text-base">
                {error}
            </h1>
        )
    }

    if (!error && !itemExist) {
        return (
            <div className="absolute inset-0 grid place-content-center">
                <div className='rounded-full aspect-square w-[42px] sm:w-12 border border-two border-t-three animate-spin' />
            </div>
        )
    }

    return children
}
