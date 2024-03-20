async function getNotes(callback) {
    
    const res = await fetch ('http://localhost:3000/api/v1/')
    const data = await res.json()

    callback(data)
}

export { getNotes }