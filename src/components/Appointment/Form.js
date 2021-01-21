import React, { useState } from 'react'
import InterviewerList from '../InterviewerList'
import Button from '../Button'

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setName("")
    setInterviewer(null)
  }

  const cancel = () => {
    reset()
    props.onCancel()
  }

  const save = () => {
    props.onSave(name, interviewer)
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            onChange={(event) => setName(event.target.value)}
            value={name}
            name="name"
            type="text"
            placeholder="Enter Student Name"
            /*
              This must be a controlled component
            */
          />
        </form>
        <InterviewerList 
          interviewers={props.interviewers} 
          setInterviewer={setInterviewer}
          interviewer={interviewer} 
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}
