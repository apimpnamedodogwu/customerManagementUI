
import axios from 'axios'
import React, { useState } from 'react'
import CustomButton from '../components/button'
import Input from '../components/input'
import Layout from '../components/layout'
import { baseUrl } from '../util'

function UpdateCustomers(props) {

    const [state, setState] = useState({})
    const onChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }
    const submit = () => {
        try {
            axios.patch(baseUrl + '/login', state, { headers: { 'Content-Type': 'application/json' } })
            // window.location.assign('/add')
        } catch (error) {
            // alert(error)
            console.log(error)
            // toast.error(error)
        }
    }
    return (
        <Layout header={'Update Customer'} submit={submit}>
            <Input onChange={onChange} required  name={'name'} label={'Name'} />
            <Input onChange={onChange} required  name={'email'} label={'Email'} type='email' />
            <Input onChange={onChange} required  name={'phone'} label={'Phone'} type='tel' />
            <Input onChange={onChange} required  name={'product_plan'} label={'Product Plan'} />
            <CustomButton />
        </Layout>
    )
}
export default UpdateCustomers
