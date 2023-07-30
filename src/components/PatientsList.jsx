import Patient from "./Patient"

const PatientsList = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 m-3 md:h-screen md:overflow-y-scroll">

      { pacientes && pacientes.length ? 
        (
          <>
            <h2 className="font-black text-3xl text-center">
              Listado de pacientes
            </h2>
            <p className="text-xl mt-3 mb-3 text-center">
              Administra tus {''}
              <span className="text-green-700 font-bold">
                  Pacientes y citas
              </span>
            </p>
            { pacientes.map( paciente => (
              <Patient 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </>
        ) : 
        (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes
            </h2>
            <p className="text-xl mt-3 mb-3 text-center">
              Agrega tus pacientes {''}
              <span className="text-green-700 font-bold">
                  Para visualizarlos aquí
              </span>
            </p>
          </>
        )
      }

    </div>
  )
}

export default PatientsList
