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
                        <DescriptionEditingField/>
                    </td>
                    <td>
                        <RateEditingField/>
                    </td>
                    <td>
                        <HoursEditingField/>
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

function DescriptionEditingField() {
    return(
        <>
            Editing description...
        </>
    )
}

function RateEditingField() {
    return(
        <>
            Editing rate...
        </>
    )
}

function HoursEditingField() {
    return(
        <>
            Editing hours...
        </>
    )
}