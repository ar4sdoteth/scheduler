import React from 'react';
import './styles.scss'

import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import Form from './Form'
import Status from './Status'
import Confirm from './Confirm'
import useVisualMode from '../../hooks/useVisualMode'

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM"

export default function Appointment (props) {
  console.log(`from Appointment:interview`, props.interview)

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // useEffect(() => {
  //   if (props.interview && mode === EMPTY) {
  //     transition(SHOW);
  //   }
  // }, [transition, mode, props.interview])

  // function save(name, interviewer) {
  //   const interview = {
  //     student: name,
  //     interviewer
  //   };
  //   console.log(`from save`, interview)
  //   props.bookInterview(props.id, interview)
  // }

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      // .catch((error) => transition(ERROR_SAVE, true));
    }
    function destroy(event) {
      transition(DELETE, true);
      props
        .cancelInterview(props.id)
        .then(() => transition(EMPTY))
    }
  

  return (
  
    <article className="appointment">
      <Header time={props.time} id={props.id} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form 
        interviewers={props.interviewers} 
        interviewer={console.log(`from form export`, props)}
        onCancel={back} 
        onSave={save}
        />
      )}

      {mode === SAVING && <Status message={"Saving"} />}
      {mode === CONFIRM && (
        <Confirm
          onCancel={back}
          onConfirm={destroy}
          message={"Are you sure you would like to delete?"}
        />
      )}
      
      {mode === DELETE && <Status message={"Deleting"} />}
    </article>
  )
}