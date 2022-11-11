import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';



const  Users = () =>{
    function Makefetch(url, params){
        return fetch(`${url}/${params.nick}`)

    }

    const params = useParams();
    const [datas, setDatas] = useState([]);

    useEffect(()=>{
        Makefetch('/config/getdata',params).then(res => res.json().then(res =>{
            let dataArray = [res.nick, res.secondName]
            setDatas([...dataArray])
        }));
    },[params])

    return(
        <div className="user-area">
            <div className="user-field">
                <div className="user-datas">
                    <section className="user-name" >{String(datas[0]).toUpperCase()}</section>
                    <section className="user-second-name" >{String(datas[1]).toUpperCase()}</section>
                </div>
            </div>
        </div>
    ) 
}

export default Users;