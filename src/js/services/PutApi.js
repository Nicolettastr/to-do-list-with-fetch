const apiUrl = "https://assets.breatheco.de/apis/fake/todos/user/nicolettastru";


const PutApi = () => async (data) =>  {
    try {
        const putApiFetch = await fetch (apiUrl, {
            method: "PUT",
            body:  JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
        })

        return putApiFetch;
    }

    catch (error){
        console.log(error.message)
    }
}

export default PutApi;