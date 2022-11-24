import axios from "axios";
import { useState, useEffect } from "react";
export default function Anime() {

    const [animes, setAnimes] = useState([])

    useEffect(() => {
        loadAnimes();
    }, []);

    const loadAnimes = async () => {

        axios.get(`https://localhost:7278/api/Anime`)
            .then(res => setAnimes(res.data))
            .catch(error => console.log(error))
    }

    return (
        <div className="flex flex-col mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
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
                                        Genres
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
                                                {item.genre_list}
                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                    <button
                                                        type="show"
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                    >
                                                        Show
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )



                                    : <p>animes is empty...</p>
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div >
        // products.map((product) => (
        //     <div key={product.id} className="group relative">
        //         <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        //         </div>
        //         <div className="mt-4 flex justify-between">
        //             <div>
        //                 <h3 className="text-sm text-gray-700">
        //                     <a href={product.href}>
        //                         <span aria-hidden="true" className="absolute inset-0" />
        //                         {product.name}
        //                     </a>
        //                 </h3>
        //                 <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        //             </div>
        //             <p className="text-sm font-medium text-gray-900">{product.price}</p>
        //         </div>
        //     </div>
        // ))

    )

}