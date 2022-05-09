import {useEffect,useState} from 'react'

const useCount = (props) =>{
    console.log('kkkk',props);
    const [data, setData] = useState(props)
    const inc = () => setData(data+1)
    const dec = () => setData(data-1)

   return {inc,data,dec}
}
export default useCount