export const getData = (setData) => {
    fetch('/resume.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        setData(myJson)
    });
}

export default getData;
