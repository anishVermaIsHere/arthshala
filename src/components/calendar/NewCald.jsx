
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'


  const events = [
    { title: 'Meeting', start: new Date() }
  ]

  export function renderEventContent(eventInfo) {
    return (
      <div className='py-[11px]'>
        <p className='text-[16px] font-semibold'>{eventInfo.event.title}</p>
        <b className='text-[10px]'>{eventInfo.timeText}</b>
      </div>
    )
  }

const NewCald=()=>{
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
        initialView={["timeGridWeek"]}
        events={events}
        eventContent={renderEventContent}
        headerToolbar={
            {start: 'title', // will normally be on the left. if RTL, will be on the right
            center: '',
            end: 'today prev,next'}
        }
      />
    )
}

export default NewCald