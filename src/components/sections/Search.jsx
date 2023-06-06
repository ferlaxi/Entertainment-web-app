import search_icon from '../../../public/assets/icon-search.svg'


const SearchBar = ({placeholder, search}) => {

    return (
        <form className="flex items-center justify-items-start xl:mt-8 md:mt-32 2xl:ml-44 xl:ml-36 md:ml-8 ml-5 mt-20 gap-x-4" action="#">
            <img src={search_icon} alt="icon_search" />
            <input onChange={search} className=" cursor-pointer h-12 md:w-[700px] w-80 text-white font-light text-[22px] focus:outline-none focus:ring-0 focus:border-b-[1px] focus:border-b-ewa-gray bg-ewa-darkblue border-transparent focus:border-transparent placeholder:text-[22px] placeholder:font-light caret-ewa-red pl-0" type="text" placeholder={placeholder} />
        </form>
    )
}

export default SearchBar;