import React,{useEffect,useState} from 'react'
import SubcategoryAPI from '../../../api/SubcategoryAPI';
import SubcatalogueList from './SubcatalogueList';



function CatalogueSelect(props) {
    const {data} = props;
    const [subcatalogueList, setSubcatalogueList] = useState();
    const [active, setActive] = useState(false);
    // use data.code to load List subcatalogue
    useEffect(() => {
        const fetchSubcate = async (slug) => {
         const sublist = await SubcategoryAPI.getByParentSlug(slug)
        //  console.log(sublist);
        setSubcatalogueList(sublist)
        };
        fetchSubcate(data.slug);
    }, [data.slug])
    const catalogueClickHandle = (e)=> {
        setActive(!active);
    }
    const catalogueBlur =()=> {
        setActive(false);   
    }
    return (
        <button className="catalogue__select " onClick={catalogueClickHandle} onBlur={catalogueBlur}>
                <div className="catalogue__select-field">
                    <p className="catalogue__select-text ">{data.name}</p>
                    <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-down_LCYAei6Yn.svg?updatedAt=1639053392995" alt=""
                     className={`catalogue__arrow catalogue--bakery ${active ? "spin" : ""}`} />
                </div>
                {subcatalogueList && <SubcatalogueList active={active} list={subcatalogueList} main={data.slug} ></SubcatalogueList>}
        </button>
    )
}

export default CatalogueSelect
