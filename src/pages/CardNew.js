import React, { useState } from 'react'
import { Form, Input, Label, Button, FormGroup } from 'reactstrap'
// import { useNavigate } from 'react-router-dom' || TODO vvvv
import './CardNew.css'

const CardNew = () => {
    return ( 
        <Form>
            <div className='cardHeader'>
                <h1>Create A Card</h1>
            </div>
        </Form>
    )
}

export default CardNew