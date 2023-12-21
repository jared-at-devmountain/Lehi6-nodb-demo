import { useState } from 'react'

export default function Row(props) {

    let [isEditing, setIsEditing] = useState(false)

    return (
        <>
            { isEditing
                ? <>
                    <EditSaveButton/>
                    <DescriptionEditingField/>
                    <RateEditingField/>
                    <HoursEditingField/>
                </>
                : <>
                    <tr>
                        <td className={'widecolumn'}>
                            <button>Delete</button>
                            <button>Edit</button>
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
                </>
            }
        </>
    )
}

function EditSaveButton() {
    return(
        <>
        </>
    )
}

function DescriptionEditingField() {
    return(
        <>
        </>
    )
}

function RateEditingField() {
    return(
        <>
        </>
    )
}

function HoursEditingField() {
    return(
        <>
        </>
    )
}