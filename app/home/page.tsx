import React from 'react'
import HomeHeader from 'layout/HomeHeader'

export default function Page() {
  return (
    <>
      <HomeHeader>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1>Coluna 1</h1>
          </div>
          <div>
            <h1>Coluna 2</h1>
          </div>
        </div>
      </HomeHeader>
    </>
  )
}
