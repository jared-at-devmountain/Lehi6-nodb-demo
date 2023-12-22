import { useState } from 'react'
import Header from './Header.jsx'
import Row from './Row.jsx'
import AddButton from './AddButton.jsx'

let data = [
    {
        description: 'Firebreather',
        rate: 100,
        hours: 60,
        id: 1
    },
    {
        description: 'Shoe Shiner',
        rate: 120,
        hours: 1,
        id: 2
    },
    {
        description: 'Tent Master',
        rate: 30,
        hours: 100,
        id: 3
    }
]

export default function Table() {

    const [tableData, setTableData] = useState(data)

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
            <AddButton/>
        </>
    )
}