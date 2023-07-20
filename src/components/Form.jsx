import {useState, useEffect} from 'react'

const Form = ({ setPacientes }) => {

  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fechaAlta, setFechaAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();

    //validaciones
    if([mascota, propietario, email, fechaAlta, sintomas].includes('')){
      console.log('todos los campos son obligatorios')
      setError(true)
      return;
    }

    setError(false)

    setPacientes(nombre)
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 m-3">
      <h2 className="font-black text-3xl text-center">
        Seguimiento pacientes
      </h2>
      <p className="text-lg mt-3 mb-3 text-center">
        Anade pacientes y {''}
        <span className="text-green-700 font-bold">
          Administralos
        </span>
      </p>
      

      <form className="bg-white shadow-md rounded-lg py-10 px-5"
            onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="mascota" className="block text-gray-700 font-bold">
            Nombre mascota
          </label>
          <input 
            id="mascota" 
            type="text" 
            placeholder="Nombre de la mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={mascota}
            onChange={ (e) => setMascota(e.target.value) }/>
        </div>
        <div className="mb-3">
          <label htmlFor="propietario" className="block text-gray-700 font-bold">
            Nombre propietario
          </label>
          <input 
            id="propietario" 
            type="text" 
            placeholder="Nombre del propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            Email
          </label>
          <input 
            id="email" 
            type="email" 
            placeholder="Email propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }/>
        </div>
        <div className="mb-3">
          <label htmlFor="alta" className="block text-gray-700 font-bold">
            Fecha alta
          </label>
          <input 
            id="alta" 
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={fechaAlta}
            onChange={ (e) => setFechaAlta(e.target.value) }/>
        </div>
        <div className="mb-3">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold">
            Describe los sintomas de la mascota
          </label>
          <textarea 
            id="sintomas" 
            cols="30" 
            rows="5" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            onChange={ (e) => setSintomas(e.target.value) }>
              {sintomas}
          </textarea>
        </div>
        <input 
          type="submit" 
          className="bg-green-700 w-full text-white p-3 uppercase font-bold hover:bg-green-800 cursor-pointer transition-all rounded" 
          value='Agregar paciente' 
          />
        { error && (
          <div className='bg-red-600 p-5 text-white rounded text-center font-bold mt-3'>
            <p>Todos los campos son obligatorios</p>
          </div>
        )}
      </form>

    </div>
  )
}

export default Form

