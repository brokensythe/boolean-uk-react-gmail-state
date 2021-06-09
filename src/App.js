import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'
import { useState } from 'react'

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState([...initialEmails])

  function toggleRead(email){
    if (email.read===true) {
      const newEmails = emails.slice()
      const currentEmailIndex = newEmails.findIndex(currentEmail=>email.title===currentEmail.title)
      newEmails[currentEmailIndex].read = false
      setEmails([...newEmails])
    }else if (email.read===false) {
      const newEmails = emails.slice()
      const currentEmailIndex = newEmails.findIndex(currentEmail=>email.title===currentEmail.title)
      newEmails[currentEmailIndex].read = true
      setEmails([...newEmails])
    }
  }

  function toggleStar(email) {
    if (email.starred===true) {
      const newEmails = emails.slice()
      const currentEmailIndex = newEmails.findIndex(currentEmail=>email.title===currentEmail.title)
      newEmails[currentEmailIndex].starred = false
      setEmails([...newEmails])
    }else if (email.starred===false) {
      const newEmails = emails.slice()
      const currentEmailIndex = newEmails.findIndex(currentEmail=>email.title===currentEmail.title)
      newEmails[currentEmailIndex].starred = true
      setEmails([...newEmails])
    }
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(function(email) {
            if (email.read===true) {
            return <li className="email read">
              <input onClick={()=>toggleRead(email)} type="checkbox" checked={email.read} />
              <input onClick={()=>toggleStar(email)} className="star-checkbox" type="checkbox" checked={email.starred} />
              <span>{email.sender}</span>
              <span className="title">{email.title}</span>
            </li>
            }else if (email.read===false) {
              return <li className="email unread">
              <input onClick={()=>toggleRead(email)} type="checkbox" checked={email.read} />
              <input onClick={()=>toggleStar(email)} className="star-checkbox" type="checkbox" checked={email.starred} />
              <span>{email.sender}</span>
              <span className="title">{email.title}</span>
            </li>
            }
          })}
        </ul>
      </main>
    </div>
  )
}

export default App
