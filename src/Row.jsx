import { useState } from 'react'

export default function Row(props) {

    let [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(!isEditing)
    }

    return (
        <>
            { isEditing
                ? <tr>
                    <td>
                        <EditSaveButton/>
                    </td>
                    <td>
                        <DescriptionEditingField
                            description={props.description}
                        />
                    </td>
                    <td>
                        <RateEditingField
                            rate={props.rate}
                        />
                    </td>
                    <td>
                        <HoursEditingField
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

function EditSaveButton() {
    return(
        <>
            <button>Save</button>
        </>
    )
}

function DescriptionEditingField(props) {
    
    const [currentValue, setCurrentValue] = useState(props.description)

    function onChangeHandler(event) {
        setCurrentValue(event.target.value)
    }
    
    return(
        <>
            <input value={currentValue} onChange={onChangeHandler}/>
        </>
    )
}

function RateEditingField(props) {
    const [currentValue, setCurrentValue] = useState(props.rate)

    return(
        <>
            <input type={'number'} value={currentValue} onChange={(e) => setCurrentValue(e.target.value)}/>
        </>
    )
}

function HoursEditingField(props) {
    const [currentValue, setCurrentValue] = useState(props.hours)

    function onChangeHandler(event) {
        setCurrentValue(event.target.value)
    }
    
    return(
        <>
            <input type={'number'} value={currentValue} onChange={onChangeHandler}/>
        </>
    )
}