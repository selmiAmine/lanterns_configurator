import React from 'react';
import ReactDOM from 'react-dom/client';
import { EllipsisVerticalIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { useCustomization } from '../../contexts/Customization';


export const Selector = () => {

    const {
        material,
        setMaterial,visibility, setvisibility,
        selectedDiamond, setSelectedDiamond
      } = useCustomization();

    const shapes = [
        {
            id: 1,
            name: 'Rectangular shape',
            description: 'description',
            initials: '/thumbnails/shape1/Shape.png'
        },
        {
            id: 2,
            name: 'Circular variation shape',
            description: 'description',
            initials: '/thumbnails/shape2/Shape.png'
        },
        {
            id: 3,
            name: 'Circular shape',
            description: 'description',
            initials: '/thumbnails/shape3/Shape.png'
        },
    ]

    const heading = [
        {
            shapeId: 1,
            name: 'Heading 1',
            description: 'description',
            initials: '/thumbnails/shape1/Header-1.png'
        },
        {
            shapeId: 1,
            name: 'Heading 2',
            description: 'description',
            initials: '/thumbnails/shape1/Header-2.png'
        },
        {
            shapeId: 1,
            name: 'Heading 3',
            description: 'description',
            initials: '/thumbnails/shape1/Header-3.png'
        },
    ]

    const diamonds = [
        {
            shapeId: 1,
            name: 'Diamond 1',
            description: 'description',
            initials: '/thumbnails/shape1/Diamond-1.png'
        },
        {
            shapeId: 1,
            name: 'Diamond 2',
            description: 'description',
            initials: '/thumbnails/shape1/Diamond-2.png'
        },
        {
            shapeId: 1,
            name: 'Diamond 3',
            description: 'description',
            initials: '/thumbnails/shape1/Diamond-3.png'
        },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    const shapeIdSelect = (param) => {
        setvisibility(!visibility)
        console.log(param)
        // console.log(visibility)
    }

    const selectedDiamondClick = (param) => {
        // console.log(param)
        setSelectedDiamond(param)
    }
    
    // Console log the material
    console.log(visibility)
    console.log(selectedDiamond)

    return (
        <>

            <div className="wrapper flex justify-center">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    {/* <div className="title">Ring shape</div> */}
                    <div className="options py-8">
          
                        {/* list of Shapes */}
                        <div>
                            <h2 className="text-sm font-medium text-gray-500">Ring shapes</h2>
                            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                                {shapes.map((shape) => (
                                    <li key={shape.name} className="col-span-1 flex rounded-md shadow-sm">
                                        <div
                                            className={classNames(
                                                'flex w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white overflow-hidden',
                                            )}
                                        >
                                            {/* {shape.initials} */}
                                            <img src={shape.initials} className='grayscale hover:grayscale-0 transition hover:scale-110' alt="" />
                                        </div>
                                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                            <div className="flex-1 truncate px-4 py-2 text-sm">
                                                <a href={shape.href} className="font-medium text-gray-900 hover:text-gray-600 ">
                                                    {shape.name}
                                                </a>
                                                <p className="text-gray-500">{shape.description}</p>
                                            </div>
                                            <div className="flex-shrink-0 pr-2">
                                                <button
                                                    onClick={() => shapeIdSelect(shape.id)} type="button"
                                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    <span className="sr-only">Open options</span>
                                                    <PaperAirplaneIcon aria-hidden="true" className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* List of headers */}
                        <div>
                            <h2 className="text-sm font-medium text-gray-500">Header shapes</h2>
                            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                                {heading.map((project) => (
                                    <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
                                        <div
                                            className={classNames(
                                                project.bgColor,
                                                'flex w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white overflow-hidden',
                                            )}
                                        >
                                            {/* {project.initials} */}
                                            <img src={project.initials} className='grayscale scale-110 hover:grayscale-0 transition scale-[3] hover:scale-[5]' alt="" />
                                        </div>
                                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                            <div className="flex-1 truncate px-4 py-2 text-sm">
                                                <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                                                    {project.name}
                                                </a>
                                                <p className="text-gray-500">{project.members} Members</p>
                                            </div>
                                            <div className="flex-shrink-0 pr-2">
                                                <button
                                                    type="button"
                                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    <span className="sr-only">Open options</span>
                                                    <PaperAirplaneIcon aria-hidden="true" className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* List of diamonds */}
                        <div>
                            <h2 className="text-sm font-medium text-gray-500">Header shapes</h2>
                            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                                {diamonds.map((project) => (
                                    <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
                                        <div
                                            className={classNames(
                                                project.bgColor,
                                                'flex w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white overflow-hidden',
                                            )}
                                        >
                                            {/* {project.initials} */}
                                            <img src={project.initials} className='grayscale hover:grayscale-0 transition scale-[3] hover:scale-[5]' alt="" />
                                        </div>
                                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                            <div className="flex-1 truncate px-4 py-2 text-sm">
                                                <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                                                    {project.name}
                                                </a>
                                                <p className="text-gray-500">{project.members} Members</p>
                                            </div>
                                            <div className="flex-shrink-0 pr-2">
                                                <button
                                                    onClick={() => selectedDiamondClick(project.name)}
                                                    type="button"
                                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    <span className="sr-only">Open options</span>
                                                    <PaperAirplaneIcon aria-hidden="true" className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>
            </div>


        </>
    );
}


export default Selector