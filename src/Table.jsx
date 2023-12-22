import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header.jsx'
import Row from './Row.jsx'
import AddButton from './AddButton.jsx'

export default function Table() {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        axios.get('/jobs')
        .then((response) => {
            setTableData(response.data)
        })
    }, [])

    return (
        <>
            <table>
                <Header/>
                <tbody>
                    { tableData.map((jobObj) => {
                            return <Row
                                key={jobObj.id}
                                description={jobObj.description}
                                rate={jobObj.rate}
                                hours={jobObj.hours}
                                id={jobObj.id}
                                setTableData={setTableData}
                            />
                        })
                    }
                </tbody>
            </table>
            <AddButton
                setTableData={setTableData}
            />
        </>
    )
}