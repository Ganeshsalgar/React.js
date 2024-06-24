import {useEffect , useState} from 'react';

function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    //hit any change into the currency  useEffect run
    useEffect(() => {

        //call for API
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())  //this for convert to the json
        .then((res) => setData(res[currency]))
        console.log(data);
    } , [currency])
    console.log(data);

    //data is having a response currency
    return data;
}

export default useCurrencyInfo;
