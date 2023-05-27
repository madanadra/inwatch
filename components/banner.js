import { useRouter } from 'next/router';

export default function Banner({items}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push('box-office')}
        className="relative rounded overflow-hidden cursor-pointer bg-five mb-8">
            <div className="grid grid-cols-5 sm:grid-cols-10 brightness-75">
                {Array.isArray(items) && items.length ? items.map((item, i) => 
                    <img key={i} src={item.image} alt="Poster" loading='lazy' 
                    className="w-full aspect-[1/2] sm:aspect-[1/4] object-cover object-center" />
                ) : []}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-widest uppercase 
            absolute inset-0 grid place-content-center shadow-[0_0_59px_25px_#000000_inset] sm:shadow-[0_0_99px_50px_#000000_inset] 
            drop-shadow-[0_1px_9px_#000000]">box office</h1>
        </div>
    )
}