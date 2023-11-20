import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Events = () => {

    const router = useRouter()
    console.log('router :', router.query.eventID)
    const [dynamicEvent, setDynamicEvent] = useState('')

    useEffect(() => {
        //Runs on every render
        setDynamicEvent(router.query.eventID)
      },[router]);

      console.log("dynamicEvent",dynamicEvent)

    return (
        <div className='text-3xl text-center '>Events : {dynamicEvent} </div>
    )
}

export default Events