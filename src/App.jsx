import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientsList from "./components/PatientsList"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      console.log(pacientesLS)
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])


  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-3">
      <Header
      />
      <div className="mt-12 md:flex">
        <Form  
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}/>
        <PatientsList 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  )
}

export default App
