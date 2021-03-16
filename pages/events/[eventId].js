import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getAllEvents, getEventById } from '../../dummy-data';

import EventSummary from '../../components/events/event-detail/event-summary'
import EventContent from '../../components/events/event-detail/event-content'
import EventLogistics from '../../components/events/event-detail/event-logistics'
import ErrorAlert from '../../components/events/ui/error-alert/error-alert';

function EventDetailPage(props) {
    const event = props.selectedEvent;
  
    if (!event) {
      return (
        <div className="center">
          <p>Loading...</p>
        </div>
      );
    }
  
    return (
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    );
  }
  
  export async function getStaticProps(context) {
    const eventId = context.params.eventId;
  
    const event = await getEventById(eventId);
  
    return {
      props: {
        selectedEvent: event
      },
      revalidate: 30
    };
  }
  
  export async function getStaticPaths() {
    const events = await getAllEvents();
  
    const paths = events.map(event => ({ params: { eventId: event.id } }));
  
    return {
      paths: paths,
      fallback: 'blocking'
    };
  }
  
  export default EventDetailPage;