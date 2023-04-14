import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState , useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

export default function Admin() {
    const [shouldRedirect, setRedirect] = useState()
    const [animes, setAnimes] = useState([])
    const [nameAnime, setName] = useState()
    const [rated, setRated] = useState()
    const [episodes,setEpisodes] = useState()
    const [datestart,setDatestart] = useState()
    const [idType,setIdType] = useState()
    const [idRating,setIdRating] = useState()
    const [idStatus,setIdStatus] = useState()
    useEffect(() => {
        loadAnimes();
        checkRedirect();
    }, []);

    const checkRedirect = () => {
        setRedirect(localStorage.Auth !== 'true' || localStorage.AuthIdType !== '1' ? true : false)
    }

    const postAddAnime = async (event) => {
        event.preventDefault();

        const anime = {
            Name_anime: nameAnime,
            Rated: rated,
            Episodes: episodes,
            Date_start: datestart,
            Date_end: null,
            Id_type: idType,
            Id_rating: idRating,
            Id_status: idStatus,
            Id_season: null
        };
        axios.post(`https://localhost:7278/api/Anime/Add`, anime)
        .then(() => {
            window.location.reload()})

    }
    const postDelete = (event, id_anime) => {
        event.preventDefault();
        console.log(typeof(id_anime | 0));
        axios.delete('https://localhost:7278/api/Anime/Delete?Id=' + id_anime)
          .then(() => {
            window.location.reload()
          })
      }
    const loadAnimes = async () => {

        axios.get(`https://localhost:7278/api/Anime`)
            .then(res => setAnimes(res.data))
            .catch(error => console.log(error))
    }
        return (
            <div className="flex flex-col mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {shouldRedirect && <Navigate replace to="/autherror" />}
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Anime Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Rated
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Epsodes
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Relise Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Age Rating
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Season
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            delete from base
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    animes?.length > 0 ?
                                        animes.map(item =>
                                            < tbody className="divide-y divide-gray-200">
                                                <tr id={item.id_anime}>
                                                    <td className="px-6 py-4 text-sm font-normal text-gray-800 whitespace-nowrap">
                                                        {item.name_anime}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {item.rated}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {item.episodes}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                        {item.date_start.substr(0, 10)}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                        {item.name_type}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                        {item.name_rating}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                        {item.name_status}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap">
                                                        {item.name_season}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                        <button
                                                            type="Delete"
                                                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                            onClick={(e) => postDelete(e,item.id_anime)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                        : <p>animes is empty...</p>
                                }
                                < tbody className="divide-y divide-gray-200">
                                                <tr id='add'>
                                                    <td className="px-6 py-4 text-sm font-normal text-gray-800 whitespace-nowrap">
                                                    <input className="w-28 py-2" onChange={(e) => setName(e.target.value)}></input>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    <input className="w-10 py-2" onChange={(e) => setRated(e.target.value)}></input>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    <input className="w-10 py-2" onChange={(e) => setEpisodes(e.target.value)}></input>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                    <input type="date" className="w-24 py-2" onChange={(e) => setDatestart(e.target.value)}></input>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                    <input className="w-20 py-2" onChange={(e) => setIdType(e.target.value)}></input>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                    <input className="w-20 py-2" onChange={(e) => setIdRating(e.target.value)}></input>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                    <input className="w-20 py-2" onChange={(e) => setIdStatus(e.target.value)}></input>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap">
                                                    <input className="w-20 py-2"></input>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                        <button
                                                            type="Add"
                                                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                            onClick={(e) =>postAddAnime(e)}
                                                        >
                                                            Add
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div >
    );
}