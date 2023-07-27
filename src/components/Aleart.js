import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function Aleart(props) {
    return (
        props.aleart && <Alert variant={props.aleart.type}>
            {/* <strong>{capitalize(props.aleart.type)}</strong>:{props.aleart.msg} */}
            <strong>{props.successfully}</strong> : {props.aleart.msg}
        </Alert>
    )
}
