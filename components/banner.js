import { useRouter } from 'next/router';

export default function Banner({items}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push('box-office')}
        className="relative overflow-hidden cursor-pointer bg-three mb-10">
            <div className="grid grid-cols-10 brightness-50">
                {items.map((item, i) => 
                    <div key={i} className='overflow-hidden'>
                        <img src={item.image.replace(/@._V1_.*\_AL_.jpg/gi, '@._V1_UX540_CR0,3,540,810_AL_.jpg')} 
                        alt="Poster" loading='eager' 
                        className="w-full aspect-[1/6] sm:aspect-[1/4] object-cover object-center scale-150" />
                    </div>
                )}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-wider uppercase 
            absolute inset-0 grid place-content-center 
            shadow-[0_0_50px_25px_rgba(0,0,0,0.5)_inset] sm:shadow-[0_0_100px_50px_rgba(0,0,0,0.5)_inset] 
            drop-shadow-[0_0_20px_10px_#000000] sm:drop-shadow-[0_0_30px_20px_#000000]">box office</h1>
        </div>
    )
}