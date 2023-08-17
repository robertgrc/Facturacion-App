import React from 'react'

const TotalView = ({total}) => {
  return (
    <>
        <div className="text-end">
            <span className="badge bg-success">
                {total}
            </span>
        </div>
    </>
  )
}

export default TotalView