import React from 'react'
type DataProps = {
    status : "success" | "loading" | "error"
}
const DataFetch = ({status}: DataProps) => {
    if(status === "success"){
        return <p>Data is loading successfully</p>
    }
    else if(status === "loading"){
        return <p>Data is loading....</p>
    }
  return (
    <div>
        <p>Data con't fetching</p>
    </div>
  )
}

export default DataFetch