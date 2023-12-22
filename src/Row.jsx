import { useState } from 'react'

export default function Row(props) {

    let [isEditing, setIsEditing] = useState(false)
    let [newData, setNewData] = useState({description: props.description, rate: props.rate, hours: props.hours})

    console.log(newData)

    function handleEditClick() {
        setIsEditing(!isEditing)
    }

    return (
        <>
            { isEditing
                ? <tr>
                    <td>
                        <EditSaveButton
                            newData={newData}
                            id={props.id}
                            setTableDataRow={props.setTableDataRow}
                            setIsEditing={setIsEditing}
                        />
                    </td>
                    <td>
                        <DescriptionEditingField
                            setNewData={setNewData}
                            newData={newData}
                            description={props.description}
                        />
                    </td>
                    <td>
                        <RateEditingField
                            setNewData={setNewData}
                            newData={newData}
                            rate={props.rate}
                        />
                    </td>
                    <td>
                        <HoursEditingField
                            setNewData={setNewData}
                            newData={newData}
                            hours={props.hours}
                        />
                    </td>
                    <td>
                        Pending...
                    </td>
                </tr>
                : <tr>
                    <td className={'widecolumn'}>
                        <button>Delete</button>
                        <button onClick={handleEditClick}>Edit</button>
                    </td>
                    <td className={'widecolumn'}>
                        {props.description}
                    </td>
                    <td className={'medcolumn'}>
                        {props.rate}
                    </td>
                    <td className={'smallcolumn'}>
                        {props.hours}
                    </td>
                    <td className={'smallcolumn'}>
                        {props.rate * props.hours}
                    </td>
                </tr>
            }
        </>
    )
}

function EditSaveButton(props) {

    const {id, newData, setTableDataRow, setIsEditing} = props

    function onSaveClick() {
        setTableDataRow(id, newData)
        setIsEditing(false)
    }

    return(
        <>
            <button onClick={onSaveClick}>Save</button>
        </>
    )
}

function DescriptionEditingField(props) {
    
    const [currentValue, setCurrentValue] = useState(props.description)

    function onChangeHandler(event) {
        setCurrentValue(event.target.value)
        props.setNewData({...props.newData, description: event.target.value})
    }
    
    return(
        <>
            <input value={currentValue} onChange={onChangeHandler}/>
        </>
    )
}

function RateEditingField(props) {
    const [currentValue, setCurrentValue] = useState(props.rate)

    function onChangeHandler(event) {
        setCurrentValue(event.target.value)
        props.setNewData({...props.newData, rate: event.target.value})
    }

    return(
        <>
            <input type={'number'} value={currentValue} onChange={onChangeHandler}/>
        </>
    )
}

function HoursEditingField(props) {
    const [currentValue, setCurrentValue] = useState(props.hours)

    function onChangeHandler(event) {
        setCurrentValue(event.target.value)
        props.setNewData({...props.newData, hours: event.target.value})
    }
    
    return(
        <>
            <input type={'number'} value={currentValue} onChange={onChangeHandler}/>
        </>
    )
}