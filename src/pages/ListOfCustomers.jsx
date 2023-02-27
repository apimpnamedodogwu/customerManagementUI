
import React from 'react'
import CustomButton from '../components/button'
import Input from '../components/input'
import Layout from '../components/layout'

function ListOfCustomers(props) {
    return (
        <Layout header={'List of Customer'}>
                <Input label={'Name'} />
                <Input label={'Email'} />
                <Input label={'Phone'} />
                <Input label={'Product Plan'} />
                <CustomButton />
        </Layout>
    )
}
export default ListOfCustomers
