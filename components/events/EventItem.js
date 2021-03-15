import React from 'react'
import Link from 'next/link'

import classes from '../../styles/event-item.module.css'
import Button from './ui/Button'

import DateIcon from '../../public/icons/date-icon'
import ArrowRight from '../../public/icons/arrow-right-icon'
import AddressIcon from '../../public/icons/address-icon'

const EventItem = (props) => {
     const { title , image , location, date , id }  = props
     const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day : 'numeric',
        month : 'long',
        year : "numeric" 
     })

     const formatedAddress = location.replace(',' , '\n');
     const exploreLink = `/events/${id}`
    return (
        <li className={classes.item}>
           <img src={'/'+ image} alt={title} />
           <div className={classes.content}>
               <div className={classes.summary}>
                   <h2>{title}</h2>
                   <div className={classes.date}>
                       <DateIcon />
                       <time>{humanReadableDate}</time>
                   </div>
                   <div className={classes.address}>
                       <AddressIcon />
                       <address>{formatedAddress}</address>
                   </div>
               </div>
               <div className={classes.actions}>
                   
                  <Button link={exploreLink}>
                      <span > Explore Event</span>
                      <span className={classes.icon}><ArrowRight /></span>
                      </Button>
               </div>
           </div>
        </li>

    )
}

export default EventItem
