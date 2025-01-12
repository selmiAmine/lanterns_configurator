import { StarIcon } from '@heroicons/react/20/solid'
import { useCustomization } from '../../contexts/Customization'
import { useEffect } from 'react';




export function Home(props) {



    // const { ringsByOwner } = useCustomization()


    const { ringsByOwner, fetchRingsByOwner } = useCustomization();

    useEffect(() => {
        const token = localStorage.getItem("token")
        const payloadBase64 = token.split(".")[1];
        const payload = JSON.parse(atob(payloadBase64));
        const userID = payload.id
        if (userID) {
            console.log(userID)
            fetchRingsByOwner(userID); // Fetch rings with the id
            console.log(ringsByOwner)
        }
    }, []);

    useEffect(() => {
        console.log("Updated ringsByOwner:", ringsByOwner);
    }, [ringsByOwner]); // This effect runs when `ringsByOwner` changes



    const products = [
        {
            id: 1,
            name: 'Organize Basic Set (Walnut)',
            price: '$149',
            rating: 5,
            reviewCount: 38,
            imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
            imageAlt: 'TODO',
            href: '#',
        },
        {
            id: 2,
            name: 'Organize Pen Holder',
            price: '$15',
            rating: 5,
            reviewCount: 18,
            imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
            imageAlt: 'TODO',
            href: '#',
        },
        {
            id: 3,
            name: 'Organize Sticky Note Holder',
            price: '$15',
            rating: 5,
            reviewCount: 14,
            imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
            imageAlt: 'TODO',
            href: '#',
        },
        {
            id: 4,
            name: 'Organize Phone Holder',
            price: '$15',
            rating: 4,
            reviewCount: 21,
            imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
            imageAlt: 'TODO',
            href: '#',
        },
        // More products...
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <main className="-mt-24 pb-8">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                <h1 className="text-3xl font-bold my-8 tracking-tight text-white">Bonjour</h1>



                <div className="title text-gray-900 text-md font-bold">My rings</div>

                <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">

                    {ringsByOwner.map((product) => (
                        <div
                            onClick={() => { redirectModel(product) }}
                            key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">

                            {/* <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6"> */}
                            <div className={`aspect-h-1 aspect-w-1 overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-300`}
                                style={{ backgroundColor: `${product.shape.options.color}33` }} // Add opacity (E6 is ~90%)
                            >
                                <img
                                    alt={product.name}
                                    src={`http://localhost:3000/${product.thumbnail}`}
                                    className="h-full w-full object-cover object-center translate-y-9 scale-125 group-hover:scale-150 transition-transform duration-300 ease-in-out"
                                />
                            </div>
                            <div className="pb-4 pt-10 text-center">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <div className="mt-3 flex flex-col items-center">
                                    {/* <p className="sr-only">{product.rating} out of 5 stars</p> */}
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    4 > rating ? 'text-yellow-400' : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0',
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500 w-full truncate ...">{product.description}</p>
                                </div>
                                <p className="mt-4 text-base font-medium text-gray-900">{product.price} $ </p>
                                {/* </div>  */}
                            </div>
                            {/* </Link> */}
                        </div>
                    ))}

                </div>
            </div>
        </main>
    )
}

