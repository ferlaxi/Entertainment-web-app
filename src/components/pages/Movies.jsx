import { useEffect, useState } from "react";
import Nav from "../sections/Nav";
import SearchBar from "../sections/Search";
import Recommended from "../sections/Recommended";
import { cambiarValor } from "../../app/miSlice";
import { useSelector, useDispatch } from "react-redux";


const Movies = () => {
    const [searchAll, setSearchAll] = useState("");
    const [cant, setCant] = useState(0);

    const listaShows = useSelector(state => state.misShows.show);
    const dispatch = useDispatch();


    const handleChange = e => {
        setSearchAll(e.target.value.toLowerCase())
    }

    //counter movies
    let datapeli = []
    useEffect(() => {
        listaShows.filter((item) => {
            return item.title.toLowerCase().includes(searchAll)
        }).map((e) => {
            if (e.category == "Movie") {
                datapeli.push(e)
            }
        })
        setCant(datapeli.length)
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
                    <SearchBar search={handleChange} placeholder="Buscar peliculas" />
                    {
                        searchAll == 0 ? (
                            <div>
                                {/* all movies */}
                                <div className="text-white 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 text-[32px] font-light mt-8">Peliculas</div>
                                <div className="flex flex-wrap 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 mt-4 gap-10">
                                    {listaShows.map((e, index) => {
                                        if (e.category == "Movie") {
                                            return <Recommended name={e.title} year={e.year} category={e.category} rating={e.rating} photo={e.thumbnail.regular.small} onMarcar={Marcar} index={index} valor={e} bookmark={e.isBookmarked} key={e.title} />
                                        }
                                    })}
                                </div>
                            </div>

                        ) : (
                            <>
                            {/* search all movies */}
                                <div className="text-white 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 text-[32px] font-light mt-8">{cant} resultados encontrados para '{searchAll}'</div>
                                <div className="flex flex-wrap 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 mt-7 gap-8">
                                    {
                                        listaShows.filter((item) => {
                                            return item.title.toLowerCase().includes(searchAll)
                                        }).map((e, index) => {
                                            if (e.category == "Movie") {
                                                return <Recommended name={e.title} year={e.year} category={e.category} rating={e.rating} photo={e.thumbnail.regular.small} onMarcar={Marcar} index={index} valor={e} bookmark={e.isBookmarked} key={e.title} />
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
export default Movies;