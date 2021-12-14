import React,{useEffect,useState} from 'react'
import CategoryAPI from '../../../api/CategoryAPI'
import CatalogueSelect from '../CatalogueSelect/CatalogueSelect'
function HeaderBottom() {
    const [list, setList] = useState()
    useEffect(() => {
        const fetchList = async ()=> {
            const data = await CategoryAPI.getAll();
            setList(data);
            console.log("api" ,data);
        }
        fetchList();
    }, [])
    return (
        <section className="header__catalogue">
            {list && list.map((ele,i)=> <CatalogueSelect data={ele} key={i}></CatalogueSelect>)}
        </section>

    )
}

export default HeaderBottom
