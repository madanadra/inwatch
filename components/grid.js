import CardVertical from "./card-vertical";

export default function Grid({items}) {
    return (
        <div className="mt-3.5 mb-8 grid px-4 sm:px-10 grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 
        lg:grid-cols-6 xl:grid-cols-7 gap-2 xs:gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-[18px]">
            {items.map((item, i) => 
                <CardVertical key={i} id={item.id} image={item.image} title={item.title} />
            )}
        </div>
    )
}