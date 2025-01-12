/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { StarIcon } from '@heroicons/react/20/solid'
import { useCustomization } from '../../contexts/Customization'
import { Link, useNavigate } from 'react-router-dom';


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

export default function RingsList() {

  const { rings } = useCustomization()
  const navigate = useNavigate();



  const redirectModel = (product) => {
    // console.log('product id', productId)


    const ownerId = product.ownerId

    const token = localStorage.getItem("token")
    const payloadBase64 = token.split(".")[1];
    const payload = JSON.parse(atob(payloadBase64));
    const userID = payload.id
    console.log(payload)
    console.log(userID)
    console.log(ownerId)


    // navigate("/user/view/"+productId);


    if (userID == ownerId)
      navigate("/user/configurator/" + product._id);
    else navigate("/user/view/" + product._id);
  }

  return (
    <div className="mt-4">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {rings.map((product) => (



            <div
              onClick={() => { redirectModel(product) }}
              key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
              {/* <Link
              to={`/user/configurator/${product._id}`} // Dynamic link to product configurator
              className='group relative border-b border-r border-gray-200 p-4 sm:p-6'
              key={product.id}
            > */}
              {/* <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6"> */}
              <div className={`aspect-h-1 aspect-w-1 overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-300 `}
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
                  <p className="mt-1 text-sm text-gray-500">{product.description} reviews</p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">{product.price} $ </p>
                {/* </div>  */}
              </div>
              {/* </Link> */}
            </div>


          ))}
        </div>
      </div>
    </div>
  )
}