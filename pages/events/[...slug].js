import { useRouter } from 'next/router'
import React from 'react'
import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy-data';

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
        return <p>invalid filter </p>
    }

    const filteredEvents = getFilteredEvents({
        year : numYear,
        month : numMonth,
    })

  if(!filteredEvents || filteredEvents.length === 0){
   return <p>no events found for this route</p>
  }



 
    return (
        <div>
            <EventList items={filteredEvents} />

        </div>
    )
}

export default FilteredEventsPage
