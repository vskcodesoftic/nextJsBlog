import React, { Fragment } from 'react'
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data'

const HomePage = () => {
    const featuredEvents = getFeaturedEvents();
    return (
        <Fragment>
           <EventList  items={featuredEvents} />
        </Fragment>
    )
}

export default HomePage
