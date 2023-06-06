import { useEffect, useState } from "react";
import Nav from "../sections/Nav";
import SearchBar from "../sections/Search";
import Recommended from "../sections/Recommended";
import { cambiarValor } from "../../app/miSlice";
import { useSelector, useDispatch } from "react-redux";


const Series = () => {
    const [searchAll, setSearchAll] = useState("");
    const [cant, setCant] = useState(0);

    const listShows = useSelector(state => state.misShows.show)
    const dispatch = useDispatch();

    const handleChange = e => {
        setSearchAll(e.target.value.toLowerCase())
    }

    //counter series
    let dataseries = []
    useEffect(() => {
        listShows.filter((item) => {
            return item.title.toLowerCase().includes(searchAll)
        }).map((e) => {
            if (e.category == "TV Series") {
                dataseries.push(e)
            }
        })
        setCant(dataseries.length)
    }, [searchAll])

    //dispatch
    const Marcar = (valor) => {
        dispatch(cambiarValor(valor))
    }
    return (
        <>
            <div className="flex overflow-hidden">
                <Nav />
                <div>
                    <SearchBar search={handleChange} placeholder="Buscar series" />
                    {
                        searchAll == 0 ? (
                            <div>
                                {/* all series */}
                                <div className="text-white 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 text-[32px] font-light mt-8">TV Series</div>
                                <div className="flex flex-wrap 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 mt-4 gap-10">
                                    {listShows.map((e, index) => {
                                        if (e.category == "TV Series") {
                                            return <Recommended name={e.title} year={e.year} category={e.category} rating={e.rating} photo={e.thumbnail.regular.small} bookmark={e.isBookmarked} onMarcar={Marcar} index={index} valor={e} key={e.title} />
                                        }
                                    })}
                                </div>
                            </div>

                        ) : (
                            <>
                                {/* search series */}
                                <div className="text-white 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 text-[32px] font-light mt-8">{cant} resultados encontrados para '{searchAll}'</div>
                                <div className="flex flex-wrap 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 mt-7 gap-8">
                                    {
                                        listShows.filter((item) => {
                                            return item.title.toLowerCase().includes(searchAll)
                                        }).map((e, index) => {
                                            if (e.category == "TV Series") {
                                                return <Recommended name={e.title} year={e.year} category={e.category} rating={e.rating} photo={e.thumbnail.regular.small} bookmark={e.isBookmarked} onMarcar={Marcar} index={index} valor={e} key={e.title} />
                                            }
                                        })
                                    }
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Series;