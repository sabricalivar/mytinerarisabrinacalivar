import { useEffect, useState } from 'react'
import axios from 'axios'

const DataCharge = (props) => {
    const [newCity, setNewCity] = useState({
        caption: '',
        textAlt:"",
        quote:'',
        cover:'',
        country: '',
        description: '',
        pictures1:'',
        pictures2:'',
        pictures3:'',
        maps: '',
        connection:'',
        voltage: 0,
        plugs: '',
        currency: '',
        cryptocurrencies: '',
    })

    useEffect(() => {
        console.log('Me monté')
     }, [])

    const inputHandler = (e) => {
        setNewCity({
            ...newCity,
            [e.target.name]: e.target.value,
        })
    }

    const sendData = () => {
        axios
            .post('http://localhost:4000/api/cities', newCity)
            .then((res) => {
                if (res.data.success) {
                    props.history.push('/cities')
                }
            })
            .catch((err) => {
                props.history.push('/error')
            })
    }

    return (
        <div className="Main">
            <div className='container inputAdmin'>
                <h1>Add new City</h1>
                <input
                    className='input'
                    type='text'
                    name='caption'
                    placeholder='Name City'
                    value={newCity.caption}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='cover'
                    placeholder='Cover Page'
                    value={newCity.cover}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='textAlt'
                    placeholder='Text alternative'
                    value={newCity.textAlt}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='quote'
                    placeholder='Quote'
                    value={newCity.quote}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='country'
                    placeholder='Country'
                    value={newCity.country}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='description'
                    placeholder='Description'
                    value={newCity.description}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='pictures1'
                    placeholder='Pictures 1'
                    value={newCity.pictures1}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='pictures2'
                    placeholder='Pictures 2'
                    value={newCity.pictures2}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='pictures3'
                    placeholder='Pictures 3'
                    value={newCity.pictures3}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='maps'
                    placeholder='Maps'
                    value={newCity.maps}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='connection'
                    placeholder='Connection'
                    value={newCity.connection}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='number'
                    name='voltage'
                    placeholder='Voltage'
                    value={newCity.voltage}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='plugs'
                    placeholder='Plugs'
                    value={newCity.plugs}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='text'
                    name='currency'
                    placeholder='Currency legal'
                    value={newCity.currency}
                    onChange={inputHandler}
                />
                <input
                    className='input'
                    type='boolean'
                    name='cryptocurrencies'
                    placeholder='Cryptocurrency accepted?'
                    value={newCity.cryptocurrencies}
                    onChange={inputHandler}
                />
                <button id='botonForm' onClick={sendData}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default DataCharge
