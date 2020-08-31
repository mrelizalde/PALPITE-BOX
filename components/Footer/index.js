import React from 'react'

const Footer = () => {
  return(
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por {' '} <a href='https://mswebcreation.com'>MS Web Tecnologia</a>
        <div className='mt-2'>
        <img className='inline p-4' src='/logo_semana_fsm.png' width='200px' />
        <img className='inline p-4' src='/logo_devpleno.png' width='200px' />
        </div>
    </div>
    </div>
  )
}

export default Footer