import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data';

import EventSummary from '../../components/events/event-detail/event-summary'
import EventContent from '../../components/events/event-detail/event-content'
import EventLogistics from '../../components/events/event-detail/event-logistics'
import ErrorAlert from '../../components/events/ui/error-alert/error-alert';

const EventDetailPage = () => {
const router = useRouter();

const eventId = router.query.eventId;
const event = getEventById(eventId);

if(!event){
    return (
    <ErrorAlert>
    <p>no event found!</p>
    </ErrorAlert>
    )
}
    return (
        <div>
          <Fragment>
              <EventSummary title={event.title}  />
              <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
              <EventContent >
                  <p>{event.description}</p>
              </EventContent>
          </Fragment>
        </div>
    )
}

export default EventDetailPage
