import React from 'react'

const UseFetch = (url, options={}) => {

    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(url, {...options});
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();
            if(jsonData){
            setData(jsonData);
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            setError(error);
        }
        finally{
            setIsLoading(false);
        }
    }

    React.useEffect(()=>{
        fetchData();
    },[url])

  return {
        data,
        error,
        isLoading,
}
}

export default UseFetch
