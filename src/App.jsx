import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientsList from "./components/PatientsList"

function App() {

  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mx-auto mt-3">
      <Header
      />
      <div className="mt-12 md:flex">
        <Form  setPacientes={setPacientes}/>
        <PatientsList />
      </div>
    </div>
  )
}

export default App
