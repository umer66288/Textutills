import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

export default function Textform(props) {
    const handeltoUppercase = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showaleart("converted to Upper-case", 'primary')
    }
    const handeltoLowercase = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showaleart("converted to Lower-case", 'primary')
    }
    const handeltocapitalize = () => {
        let lower = text.toLowerCase();
        setText(lower.charAt(0).toUpperCase() + lower.slice(1));
        props.showaleart("First letter capitalize", 'primary')
    }
    const handeltoClear = () => {
        let newtext = ''
        setText(newtext)
        props.showaleart("Text clear", 'primary')
    }
    const handeltopenwindow = () => {
        let newtext = window.open('https://www.google.com/')
        setText(newtext)
    }
    const handeltospaces = () => {
        let newtext = text.trim()
        setText(newtext)
        props.showaleart("Remove-extra-spaces", 'primary')
    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className=" p-4 mt-5 container text-center ">
                <h1 className='text-center'>{props.heading}</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={5} value={text} onChange={handleonchange} />
                    </Form.Group>
                    <div className="d-md-flex d-block">
                        <div className={`btn btn-${props.btn} m-1`} onClick={handeltoUppercase}>Upper-case</div>
                        <div className={`btn btn-${props.btn} m-1`} onClick={handeltoLowercase}>Lower-case</div>
                        <div className={`btn btn-${props.btn} m-1`} onClick={handeltocapitalize}>Capitalize</div>
                        <div className={`btn btn-${props.btn} m-1`} onClick={handeltoClear}>Clear-text</div>
                        <div className={`btn btn-${props.btn} m-1`} onClick={handeltopenwindow}>New-window</div>
                        <div className={`btn btn-${props.btn} m-1`} onClick={handeltospaces}>Remove-extra-spaces</div>
                    </div>
                </Form>
            </div>
            <div className="container  my-3">
                <h2 className='mt-4'>{props.summary}</h2>
                <p className='mb-1'>
                    {text.split(" ").length} Words and {text.length} Characters.
                </p>
                <p className='mb-1'>
                    {0.008 * text.split(" ").length} Minutes required to Read.
                </p>
                <h3>Preview</h3>
                <p className='mb-1'>
                    {text.length > 0 ? text : "Enter something in the textbox above to preview here....."}
                </p>
            </div>
        </>
    )
}