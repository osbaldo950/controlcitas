import {useState, useEffect} from 'react'
import Error from './Error'

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fechaAlta, setFechaAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect( () => {
    if(Object.keys(paciente).length > 0){
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechaAlta(paciente.fechaAlta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  const handleSubmit = (e) => {
    
    
    e.preventDefault();

    //validaciones
    if([mascota, propietario, email, fechaAlta, sintomas].includes('')){
      setError(true)
      return;
    }

    setError(false)

    const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36);

      return random + fecha;
    }

    //objeto datos paciente
    const objetoPaciente = {
      mascota,
      propietario,
      email,
      fechaAlta,
      sintomas
    }

    if(paciente.id){
      //editando
      objetoPaciente.id = paciente.id
      //actualizando arreglo pacientes
      const pacientesActualizados = pacientes.map( pacienteState => 
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      )
      //asignando nuevo arreglo pacientes
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      //nuevo
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar form
    setMascota('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')

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
          <label htmlFor="fechaAlta" className="block text-gray-700 font-bold">
            Fecha alta
          </label>
          <input 
            id="fechaAlta" 
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
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }>
              
          </textarea>
        </div>
        <input 
          type="submit" 
          className="bg-green-700 w-full text-white p-3 uppercase font-bold hover:bg-green-800 cursor-pointer transition-all rounded" 
          value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'} 
          />
        { 
          error &&  
            <Error 
              mensaje='Todos los campos son obligatorios'
            />
        }
      </form>

    </div>
  )
}

export default Form

