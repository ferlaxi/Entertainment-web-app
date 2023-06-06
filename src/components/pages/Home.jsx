import Nav from "../sections/Nav";
import Trending from "../sections/Trending";
import SearchBar from "../sections/Search";
import Recommended from "../sections/Recommended";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cambiarValor } from "../../app/miSlice";


const Home = () => {
    const [searchAll, setSearchAll] = useState("");
    const [cant, setCant] = useState(0);

    const listaShows = useSelector(state => state.misShows.show)
    const dispatch = useDispatch();


    const handleChange = e => {
        setSearchAll(e.target.value.toLowerCase())
    }
    
    //counter shows
    useEffect(() => {
        const newarray = listaShows.filter((item) => {
            return item.title.toLowerCase().includes(searchAll)
        })
        setCant(newarray.length)
    }, [searchAll])

    //dispatch marcar
    const Marcar = (valor) => {
        dispatch(cambiarValor(valor))
    }


    return (
        <div className="flex overflow-hidden">
            <Nav />
            <div>
                <SearchBar search={handleChange} placeholder="Buscar peliculas o series de Tv"/>
                {
                    searchAll == 0 ? (
                        <div>

                            {/* Trending */}
                            <div className="text-white 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 text-[32px] font-light mt-5">Tendencias</div>
                            <div className="flex 2xl:ml-44 xl:ml-36 md:ml-8 mt-4 ml-5 gap-x-7 2xl:h-64 2xl:w-[100rem] xl:w-[80rem] md:w-[73rem] md:h-56 h-[190px] w-[75rem] overflow-x-hidden">
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={3}
                                >
                                    {listaShows.map((e, index) => {
                                        if (e.isTrending === true) {
                                            return <SwiperSlide key={e.title}><Trending name={e.title} year={e.year} category={e.category} rating={e.rating} photo={e.thumbnail.trending.large} onMarcar={Marcar} index={index} valor={e} bookmark={e.isBookmarked} key={e.title} /></SwiperSlide>
                                        }
                                    })}
                                </Swiper>
                            </div>

                            {/* all shows */}
                            <div className="text-white 2xl:ml-44 xl:ml-36 md:ml-8 text-[32px] ml-5 font-light mt-8">Recomendado para tí</div>
                            <div className="flex flex-wrap 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 mt-4 gap-9 2xl:w-[100rem] xl:w-[80rem] md:w-[750px] w-[25rem]">
                                {listaShows.map((e, index) => {
                                    if (e.isTrending === false) {
                                        return <Recommended name={e.title} year={e.year} category={e.category} rating={e.rating} photo={e.thumbnail.regular.small} onMarcar={Marcar} index={index} valor={e} bookmark={e.isBookmarked} key={e.title} />
                                    }
                                })}
                            </div>
                        </div>

                    ) : (
                        <>
                        {/* search all shows */}
                            <div className="text-white 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 text-[32px] font-light mt-8">{cant} resultados encontrados para '{searchAll}'</div>
                            <div className="flex flex-wrap 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 mt-7 gap-8">
                                {
                                    listaShows.filter((item) => {
                                        return item.title.toLowerCase().includes(searchAll)
                                    }).map((e, index) => {
                                        return <Recommended name={e.title} year={e.year} category={e.category} rating={e.rating} photo={e.thumbnail.regular.small} onMarcar={Marcar} index={index} valor={e} bookmark={e.isBookmarked} key={e.title}  />
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
export default Home;