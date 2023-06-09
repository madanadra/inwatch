import { useInwatch } from "../zustand"

export default function DetailList() {
    const { detail } = useInwatch()

    const Row = ({name, pluralName , item, pluralItem}) => {
        return (item &&
            <div className='grid gap-y-px pb-2 mb-2 border-b 
            last-of-type:pb-0 last-of-type:mb-0 last-of-type:border-0 border-three order-last sm:order-first'>
                <h1 className='text-xs sm:text-sm text-two font-bold'>
                    {pluralItem?.length > 1 ? pluralName : name}
                </h1>
                <h1 className='text-sm sm:text-base break-words'>{item}</h1>
            </div>
        )
    }

    return (
        <div className='grow grid content-start'>
            <Row name='Creator' pluralName='Creators' 
            item={detail.tvSeriesInfo?.creators} pluralItem={detail.tvSeriesInfo?.creatorList} />
            <Row name='Director' pluralName='Directors' 
            item={detail.directors} pluralItem={detail.directorList} />
            <Row name='Writer' pluralName='Writers' 
            item={detail.writers} pluralItem={detail.writerList} />
            <Row name='Star' pluralName='Stars' 
            item={detail.stars} pluralItem={detail.starList} />
            <Row name='Company' pluralName='Companies' 
            item={detail.companies} pluralItem={detail.companyList} />
            <Row name='Country' pluralName='Countries' 
            item={detail.countries} pluralItem={detail.countryList} />
            <Row name='Language' pluralName='Languages' 
            item={detail.languages} pluralItem={detail.languageList} />
            <Row name='Keyword' pluralName='Keywords' 
            item={detail.keywords} pluralItem={detail.keywordList} />
            <Row name='Budget' item={detail.boxOffice?.budget} />
            <Row name='Gross' item={detail.boxOffice?.cumulativeWorldwideGross} />
            <Row name='Release' item={detail.releaseDate} />
        </div>                           
    )
}