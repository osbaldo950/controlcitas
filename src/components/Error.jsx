
const Error = ({mensaje}) => {
  return (
    <div className='bg-red-600 p-5 text-white rounded text-center font-bold mt-3'>
      <p>{mensaje}</p>
    </div>
  )
}

export default Error