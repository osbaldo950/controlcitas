const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-grey-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Osbaldo Anzaldo</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Email: {''}
          <span className="font-normal normal-case">al221410832@gmail.com</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Fecha alta: {''}
          <span className="font-normal normal-case">10 de enero de 2023</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">Presenta mucho cansancio</span>
        </p>
    </div>
  )
}

export default Patient