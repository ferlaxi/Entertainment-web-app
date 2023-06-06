import Nav from "../sections/Nav";
import SearchBar from "../sections/Search";
import Recommended from "../sections/Recommended";
import 'swiper/css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cambiarValor } from "../../app/miSlice";


const Bookmarked = () => {
    const [searchAll, setSearchAll] = useState("");
    const [cant, setCant] = useState(0);
    const [cantMovie, setCantMovie] = useState(0);
    const [cantSeries, setCantSeries] = useState(0);
    const [cantGlobal, setCanGlobal] = useState(0);

    const listaShows = useSelector(state => state.misShows.show)
    const dispatch = useDispatch();

    //counter bookmarked
    useEffect(() => {
        const newarray = listaShows.filter((item) => {
            if (item.isBookmarked == true) {
                return item.title.toLowerCase().includes(searchAll)
            }
        })
        setCant(newarray.length)
    }, [searchAll])

    //count movies
    useEffect(() => {
        let arrayMovie = []
        listaShows.map((e) => {
            if (e.isBookmarked == true && e.category == "Movie") {
                arrayMovie.push(e)
            }
        })
        arrayMovie.length == 0 ? setCantMovie(1) : setCantMovie(0)

    }, [listaShows])

    //count series
    useEffect(() => {
        let arraySeries = []
        listaShows.map((e) => {
            if (e.isBookmarked == true && e.category == "TV Series") {
                arraySeries.push(e)
            }
        })
        arraySeries.length == 0 ? setCantSeries(1) : setCantSeries(0)
    }, [listaShows])

    //counter global
    useEffect(() => {
        cantMovie == 1 && cantSeries == 1 ? setCanGlobal(1) : setCanGlobal(0)
    }, [cantMovie, cantSeries])

    const handleChange = e => {
        setSearchAll(e.target.value.toLowerCase())
    }

    //dispatch marcar
    const Marcar = (valor) => {
        dispatch(cambiarValor(valor))
    }

    return (
        <div className="flex overflow-hidden">
            <Nav />
            <div>
                <SearchBar search={handleChange} placeholder="Buscar shows guardados" />
                {
                    searchAll == 0 ? (
                        cantGlobal == 0 ? (
                            <>
                                <div>
                                    {/* movies bookmarked */}
                                    {
                                        cantMovie == 0 ? (
                                            <>
                                                <div className="text-white 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 text-[32px] font-light mt-8">Peliculas Guardadas</div>
                                                <div className="flex flex-wrap 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 mt-4 gap-10">
                                                    {listaShows.map((e, index) => {
                                                        if (e.isBookmarked == true && e.category == "Movie") {
                                                            return <Recommended name={e.title} year={e.year} category={e.category} rating={e.rating} photo={e.thumbnail.regular.small} index={index} onMarcar={Marcar} valor={e} bookmark={e.isBookmarked} key={e.title} />
                                                        }
                                                    })}
                                                </div>
                                            </>
                                        ) : (
                                            <></>
                                        )
                                    }

                                    {/* series bookmarked */}
                                    {
                                        cantSeries == 0 ? (
                                            <>
                                                <div className="text-white 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 text-[32px] font-light mt-8">Series Guardadas</div>
                                                <div className="flex flex-wrap 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 mt-4 gap-10">
                                                    {listaShows.map((e, index) => {
                                                        if (e.isBookmarked == true && e.category == "TV Series") {
                                                            return <Recommended name={e.title} year={e.year} category={e.category} rating={e.rating} photo={e.thumbnail.regular.small} index={index} onMarcar={Marcar} valor={e} bookmark={e.isBookmarked} key={e.title} />
                                                        }
                                                    })}
                                                </div>
                                            </>
                                        ) : (
                                           <></>
                                        )
                                    }
                                </div>
                            </>
                        ) : (
                            <div className="text-white 2xl:ml-[50rem] xl:ml-[35rem] md:ml-56 ml-16 md:text-[32px] text-[25px] mt-8 font-light">Ningun elemento guardado</div>
                        )

                    ) : (
                        <>
                            <div className="text-white 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 text-[32px] font-light mt-8">{cant} resultados encontrados para '{searchAll}'</div>
                            <div className="flex flex-wrap 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 mt-7 gap-8">
                                {
                                    listaShows.filter((item) => {
                                        return item.title.toLowerCase().includes(searchAll)
                                    }).map((e, index) => {
                                        if (e.isBookmarked === true) {
                                            return <Recommended name={e.title} year={e.year} category={e.category} rating={e.rating} photo={e.thumbnail.regular.small} bookmark={e.isBookmarked} index={index} onMarcar={Marcar} valor={e} key={e.title} />
                                        }
                                    })
                                }
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}
export default Bookmarked;