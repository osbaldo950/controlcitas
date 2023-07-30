const Patient = ({paciente, setPaciente, eliminarPaciente}) => {

  const { mascota, propietario, email, fechaAlta, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('estas seguro de eliminar el paciente')
    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-grey-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{mascota}</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Fecha alta: {''}
          <span className="font-normal normal-case">{fechaAlta}</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>


        <div className="flex justify-end">
          <button 
            type="button"
            className="mr-3 py-2 px-5 bg-yellow-400 hover:bg-yellow-500 text-white font-bold uppercase rounded-lg"
            onClick={() => setPaciente(paciente)}
            >
            Editar
          </button>
          <button 
            type="button"
            className="mr-3 py-2 px-5 bg-red-400 hover:bg-red-500 text-white font-bold uppercase rounded-lg"
            onClick={handleEliminar}
            >
            Eliminar
          </button>
        </div>

    </div>
  )
}

export default Patient