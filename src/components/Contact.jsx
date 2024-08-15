import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className="broder-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center test-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p href="#" className="my-4">
            {CONTACT.email}
            </p>
      </div>
    </div>
  )
}

export default Contact
