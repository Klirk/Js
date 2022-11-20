const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]

export default function Anime() {

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
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        1
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Jone Doe
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        jonne62@gmail.com
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        2
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Jone Doe
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        jonne62@gmail.com
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        3
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Jone Doe
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        jonne62@gmail.com
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
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