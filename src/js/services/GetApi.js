const apiUrl = "https://assets.breatheco.de/apis/fake/todos/user/nicolettastru";

const GetApi = async () => {
    try {
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error (`Error. Status error is ${response.status}`)
        };

        const fetchResult = await response.json();
        return fetchResult;
    }

    catch(error) {
        console.log(error.message);
    }
}

export default GetApi;