import Patient from "./Patient"

const PatientsList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">
        Listado de pacientes
      </h2>
      <p className="text-xl mt-3 mb-3 text-center">
        Administra tus {''}
        <span className="text-green-700 font-bold">
            Pacientes y citas
        </span>
      </p>
      
      <Patient />
      <Patient />

    </div>
  )
}

export default PatientsList
