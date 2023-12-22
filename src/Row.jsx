import { useState } from 'react'
import axios from 'axios'

export default function Row(props) {

    let [isEditing, setIsEditing] = useState(false)
    let [newData, setNewData] = useState({
        description: props.description,
        rate: props.rate,
        hours: props.hours,
        id: props.id
    })

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
                            setTableData={props.setTableData}
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

    const {id, newData, setTableData, setIsEditing} = props

    function onSaveClick() {

        //TODO: start a spinner so that the user knows we are waiting on a network request

        axios.put(`/edit-job/${id}`, newData)
        .then((response) => {
            //TODO: stop the spinner
            setTableData(response.data)
            setIsEditing(false)
        })
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