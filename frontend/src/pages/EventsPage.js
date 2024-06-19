import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title :'some event',
    },
    {
        id: 'e2',
        title :'Another event',
    }
]

function EventsPage() {
  return (<>
    <h1>
      Events page
    </h1>
     <ul>
     {DUMMY_EVENTS.map(events => <li key={events.id}>
        {/* <Link to={`/events/${events.id}`}></Link> */}
      <Link to={events.id} >{events.title}</Link>
     </li>)}  
     </ul>
    </>

  )
}

export default EventsPage
