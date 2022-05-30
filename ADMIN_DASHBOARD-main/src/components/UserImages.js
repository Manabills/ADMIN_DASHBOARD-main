import React from 'react'

const UserImages = () => {
  return (
    <div className='w-1/3 h-screen ml-4'>
        <div className='h-2/3 w-full bg-cover bg-center'
          style={{backgroundImage: `url(https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg)`}}
        >

        </div>

        <div className='h-1/3 w-full bg-cover bg-center'
           style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7Q86PnChUcMfMFJCLKcJEUxeZe5A1gYeJA&usqp=CAU)`}}
        >

        </div>
    </div>
  )
}

export default UserImages