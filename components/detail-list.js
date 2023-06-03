import { useContext } from 'react';
import { InwatchContext } from '../store/context';

export default function DetailList() {
    const {state} = useContext(InwatchContext)

    const Row = ({name, pluralName , item, pluralItem}) => {
        return (item &&
            <div className='grid gap-y-px pb-2 mb-2 border-b last-of-type:pb-0 last-of-type:border-0 border-three order-last sm:order-first'>
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
            item={state.main.tvSeriesInfo?.creators} pluralItem={state.main.tvSeriesInfo?.creatorList} />
            <Row name='Director' pluralName='Directors' 
            item={state.main.directors} pluralItem={state.main.directorList} />
            <Row name='Writer' pluralName='Writers' 
            item={state.main.writers} pluralItem={state.main.writerList} />
            <Row name='Star' pluralName='Stars' 
            item={state.main.stars} pluralItem={state.main.starList} />
            <Row name='Company' pluralName='Companies' 
            item={state.main.companies} pluralItem={state.main.companyList} />
            <Row name='Country' pluralName='Countries' 
            item={state.main.countries} pluralItem={state.main.countryList} />
            <Row name='Language' pluralName='Languages' 
            item={state.main.languages} pluralItem={state.main.languageList} />
            <Row name='Keyword' pluralName='Keywords' 
            item={state.main.keywords} pluralItem={state.main.keywordList} />
            <Row name='Budget' item={state.main.boxOffice?.budget} />
            <Row name='Gross' item={state.main.boxOffice?.cumulativeWorldwideGross} />
            <Row name='Release' item={state.main.releaseDate} />
        </div>                           
    )
}