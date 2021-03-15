import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy-data';
import ResultsTitle from '../../components/events/results-title/results-title'
import Button from '../../components/events/ui/Button';
import ErrorAlert from '../../components/events/ui/error-alert/error-alert'

const FilteredEventsPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;
    console.log(filterData)
    if(!filterData) {
        return <p className='center'>Loading...</p>
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear >2030 || numYear <2021 || numMonth < 1 || numMonth > 12)
    {
        return <Fragment>
            <ErrorAlert>
            <p>invalid filter </p>
            </ErrorAlert>
            <div className="center">
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
    }

    const filteredEvents = getFilteredEvents({
        year : numYear,
        month : numMonth,
    })

  if(!filteredEvents || filteredEvents.length === 0){
   return (
   <Fragment>
       <ErrorAlert>
       <p>no events found for this route</p>
       </ErrorAlert>
    <div className='center'> 
        <Button link='/events'>
            Show All Events
        </Button>
    </div>
    </Fragment>
   )
  }


const date = new Date(numYear , numMonth-1);
 
    return (
        <Fragment>
            <ResultsTitle  date={date} />
            <EventList items={filteredEvents} />

        </Fragment>
    )
}

export default FilteredEventsPage
