
async function main(){
    let response = await fetch("http://127.0.0.1:51140/songs/")
    let data = await response.text()
    console.log(data)
    
}

main()
