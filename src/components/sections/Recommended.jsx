const Recommended = ({ name, year, category, rating, photo, bookmark, onMarcar, valor }) => {
    return (
        <div className="cursor-pointer group 2xl:w-72 xl:w-72 md:w-56 w-44">
            {
                bookmark === true ? (
                    <div onClick={() => onMarcar(valor)} className=" cursor-pointer absolute w-10 h-10 xl:ml-[230px] md:ml-40 ml-[125px] md:mt-4 mt-2 hover:bg-white hover:bg-opacity-100 hover:z-30 bg-opacity-50 flex items-center justify-center rounded-full bg-black z-10 group/bookmark">
                        <svg className="z-20 fill-white group-hover/bookmark:fill-black" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" /></svg>
                    </div>
                ) : (
                    <div onClick={() => onMarcar(valor)} className=" cursor-pointer absolute w-10 h-10 xl:ml-[230px] md:ml-40 ml-[125px] md:mt-4 mt-2 hover:bg-white hover:bg-opacity-100 hover:z-30 bg-opacity-50 flex items-center justify-center rounded-full bg-black z-10 group/bookmark">
                        <svg className=" z-20 stroke-white group-hover/bookmark:stroke-black" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" strokeWidth="2" fill="none" /></svg>
                    </div>
                )
            }
            <div className="absolute hidden group-hover:flex items-center bg-white bg-opacity-50 px-2 py-[5px] rounded-3xl xl:ml-24 xl:mt-20 md:ml-16 md:mt-14 ml-10 mt-11">
                <svg className="opacity-100 z-10" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF" /></svg>
                <div className="ml-3 pr-2 relative text-white group-hover:opacity-100 z-10">Play</div>
            </div>
            <img className="rounded-md cursor-pointer w-[290px] group-hover:opacity-50" src={photo} alt="photo-trending" />
            <div className="mt-2">
                <div className="text-white opacity-80 flex gap-x-1 font-light">
                    <div>{year}</div>
                    <div>•</div>
                    <div>
                        {
                            category == "Movie" ? (
                                <div className="flex items-center gap-x-1">
                                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75" /></svg>
                                    <div>{category}</div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-x-1">
                                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#FFF" opacity=".75" /></svg>
                                    <div>{category}</div>
                                </div>
                            )
                        }
                    </div>
                    <div>•</div>
                    <div>{rating}</div>
                </div>
                <div className="relative text-white text-[18px] group-hover:opacity-100">{name}</div>
            </div>
        </div>
    )
}
export default Recommended;
