import { useState } from 'react'
import axios from 'axios'

export default function AddButton({setTableData}) {

    const [isMakingNewRow, setIsMakingNewRow] = useState(false)
    const [descriptionInput, setDescriptionInput] = useState('')
    const [rateInput, setRateInput] = useState('')
    const [hoursInput, setHoursInput] = useState('')

    function onAddClickHandler() {
        setIsMakingNewRow(true)
    }

    function onCancelClickHandler() {
        setIsMakingNewRow(false)
    }

    function onSaveClickHandler() {
        let maBod = {
            description: descriptionInput,
            rate: +rateInput,
            hours: +hoursInput
        }

        axios.post('/job', maBod)
        .then((response) => {
            setTableData(response.data)
            setIsMakingNewRow(false)
            setDescriptionInput('')
            setRateInput('')
            setHoursInput('')
        })
    }

    return (
        <>
            { isMakingNewRow
                ? <div>
                    <span>
                        <button onClick={onSaveClickHandler}>Save</button>
                        <button onClick={onCancelClickHandler}>Cancel</button>
                    </span>
                    <span>
                        <input
                            type={'text'}
                            value={descriptionInput}
                            onChange={(e) => setDescriptionInput(e.target.value)}
                        />
                    </span>
                    <span>
                        <input
                            type={'number'}
                            value={rateInput}
                            onChange={(e) => setRateInput(e.target.value)}
                        />
                    </span>
                    <span>
                        <input
                            type={'number'}
                            value={hoursInput}
                            onChange={(e) => setHoursInput(e.target.value)}
                        />
                    </span>
                    <span>
                        Will be calculated...
                    </span>
                </div>
                : <button onClick={onAddClickHandler} className="add-button">
                    Add
                </button>
            }
        </>
    )
}