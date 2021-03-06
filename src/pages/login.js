import React, { useState, useContext } from 'react'
//firebase
import { FirebaseContext } from '../components/Firebase'
//components
import { Button } from '../components/common/button'
import { Form } from '../components/common/form'
import { Input } from '../components/common/input'

const Login = () => {

    const [formValues, setFormValues] = React.useState({email: '', password: ''})
    const {firebase} = useContext(FirebaseContext)

    function handleSubmit(e) {
        e.preventDefault()

        firebase.login({email: formValues.email, password: formValues.password})
    }

    function handleInputChange(e) {
        e.persist()
        setFormValues(currentValues => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Input
                    value={formValues.email}
                    name='email' 
                    onChange={handleInputChange} 
                    placeholder='email' type='email' 
                />
                <Input
                    value={formValues.password}
                    name='password'
                    onChange={handleInputChange} 
                    placeholder='password' 
                    type='password' 
                />
                <Button type='submit' block>
                    Login
                </Button>
            </Form>
        </section>
    )
}

export default Login
