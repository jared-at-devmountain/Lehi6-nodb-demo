import Header from './Header.jsx'
import Row from './Row.jsx'
import AddButton from './AddButton.jsx'

export default function Table() {
    return (
        <>
            <table>
                <Header/>
                <tbody>
                    <Row description={'Firebreather'} rate={100} hours={60}/>
                    <Row description={'Shoe Shiner'} rate={120} hours={1}/>
                    <Row description={'Tent Master'} rate={30} hours={100}/>
                </tbody>
            </table>
            <AddButton/>
        </>
    )
}