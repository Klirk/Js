import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import axios from "axios";

export default function Profile() {
  const [shouldRedirect, setRedirect] = useState()
  const [animes, setAnimes] = useState([])
  useEffect(() => {
    checkRedirect();
    loadAnimes();
  }, []);

  const checkRedirect = () => {
    setRedirect(localStorage.Auth !== 'true' || window.location.href !== 'http://localhost:3000/profile/' + localStorage.AuthData ? true : false)
  }
  const loadAnimes = async () => {
    const linkId= "https://localhost:7278/api/Anime/List?Id=" + localStorage.AuthId
    axios.get(linkId)
      .then(res => setAnimes(res.data))
      .catch(error => console.log(error))
  }
  return (
    <div className="min-h-full">
      {shouldRedirect && <Navigate replace to="/autherror" />}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{localStorage.AuthData}</h1>
        </div>
      </header>
      <main>
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
                        User Rated
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
                        Type
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
                        View Status
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
                              {item.name_type}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                              {item.name_status}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap">
                              {item.view_status}
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
      </main>

    </div>
  )
}
