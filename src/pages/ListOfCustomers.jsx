
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
// import MaterialTable from 'material-table'
import { Box } from '@mui/material'

function ListOfCustomers(props) {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        const fetchusers = async () => {
            const { data } = await axios.get('https://customerprofilemanagementsystem.up.railway.app/api/v1/customer?pageNumber=1&pageSize=100', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            setCustomers(data)
        }
        fetchusers()

    }, [])
    return (
        <Layout header={'List of Customer'}>
            {/* <MaterialTable
                columns={[
                    { title: 'Firstname', field: 'firstName' },
                    { title: 'Lastname', field: 'lastName' },
                    { title: 'Product Plan', field: 'productPlan' },
                    { title: 'Product Features', field: 'productFeature', render: ({productFeature}) => <Box> {productFeature?.map(x => <>{x}</>)} </Box> }
                ]}
                data={customers}
                title="Demo Title"
            /> */}

        </Layout>
    )
}
export default ListOfCustomers
