import { useState,useEffect } from "react"

const Cards = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async() => {
            const apiUrl = 'https://jsonplaceholder.typicode.com/users'
            try {
                const response = await fetch(apiUrl)
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                console.log("Error Fetching data", error)
            }
        }
        fetchUsers()
    }, [])

    console.log(users)

    const textMargin = "text-gray-600 my-2 mb-7"
    const  marginLeft = "ml-7"
    const valusStyle = "text-bold text-2xl flex justify-center text-center hover:text-green-400"
  
    return (
        <>
            <div className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container mx-auto">
                <h1 className="text-7xl font-bold text-green-400 mb-6 text-center">
                    Random Data
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="mb-6">
                                    <div className={ textMargin }>
                                        <span 
                                            className={ marginLeft }>
                                                Name: 
                                        </span>
                                        <span 
                                            className={ valusStyle }>
                                                {user.name}
                                        </span>
                                    </div>

                                    <div className={ textMargin }>
                                        <span 
                                            className={ marginLeft }>
                                                Username: 
                                        </span>
                                        <span 
                                            className={ valusStyle }>
                                                {user.username}
                                        </span>
                                    </div>

                                    <div className={ textMargin }>
                                        <span 
                                            className={ marginLeft }>
                                                Email: 
                                        </span>
                                        <span 
                                            className={ valusStyle }>
                                                {user.email}
                                        </span>
                                    </div>

                                    <div className={ textMargin }>
                                        <span 
                                            className={ marginLeft }>
                                                Address: 
                                        </span>
                                        <ul className={ marginLeft }>
                                            <li
                                                className={ valusStyle }>
                                                    City: {user.address.city}
                                            </li>
                                            <li
                                                className={ valusStyle }>
                                                    Street: {user.address.street}
                                            </li>
                                            <li
                                                className={ valusStyle }>
                                                    Suite: {user.address.suite}
                                            </li>
                                            <li
                                                className={ valusStyle }>
                                                    Zipcode: {user.address.zipcode}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={ textMargin }>
                                        <span 
                                            className={ marginLeft }>
                                                Phone: 
                                        </span>
                                        <span 
                                            className={ valusStyle }>
                                                {user.phone}
                                        </span>
                                    </div>

                                    <div className={ textMargin }>
                                        <span 
                                            className={ marginLeft }>
                                                Website: 
                                        </span>
                                        <span className={ valusStyle }>
                                            {user.website}
                                        </span>
                                    </div>

                                    <div className={ textMargin }>
                                        <span 
                                            className={ marginLeft }>
                                                Company Name: 
                                        </span>
                                        <span className={ valusStyle }>{user.company.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards