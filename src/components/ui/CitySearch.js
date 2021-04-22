import React,{useState} from 'react';



const CitySearch = ({search, forecast}) => {
    const [inputCity, setCity] = useState('');
    

    const handleInputChange = ( e ) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <label className="search">Ingrese la ciudad</label>
            <input 
            className="form-control form-control-lg shadow" 
            type="text" 
            placeholder="ej. Monterrey"
            value = {inputCity}
            onChange= { handleInputChange }

            />
            <div className="boton d-flex justify-content-center">
                <button className='btn btn-success' onClick={() => {
                                                    search(inputCity); 
                                                    forecast(inputCity)}} 
                >
                    Buscar ciudad
                </button>
            </div>
            
        </form>
    )
}

export default CitySearch;

