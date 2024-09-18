import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { EllipsisVerticalIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { useCustomization } from '../../contexts/Customization';


export const Selector = () => {

    const {
        material,
        setMaterial, visibility, setvisibility,
        selectedDiamond, setSelectedDiamond,
        selectedHeader, setSelectedHeader,
        SelectedModel, setSelectedModel,

        selectedHeaderShape2, setSelectedHeaderShape2, 
        selectedDiamondShape2, setSelectedDiamondShape2,
        
        selectedHeaderShape3, setSelectedHeaderShape3,
        selectedDiamondShape3, setSelectedDiamondShape3
    } = useCustomization();

    const [choiceStepped, setChoiceStepped] = useState(1);

    // Inside the component headers list display
    const [headersList, setHeadersList] = useState(null);

    // Inside the component diamonds list display
    const [diamondsList, setDiamondsList] = useState(null);

    const shapes = [
        {
            id: 1,
            name: 'Rectangular',
            description: 'description',
            initials: '/thumbnails/shape1/Shape.png',

            headers: [
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
            ],

            diamonds: [
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

        },
        {
            id: 2,
            name: 'Circular variation',
            description: 'description',
            initials: '/thumbnails/shape2/Shape.png',

            headers: [
                {
                    shapeId: 2,
                    name: 'Heading 1',
                    description: 'description',
                    initials: '/thumbnails/shape2/Header-1.png'
                },
                {
                    shapeId: 2,
                    name: 'Heading 2',
                    description: 'description',
                    initials: '/thumbnails/shape2/Header-2.png'
                },
            ],

            diamonds: [
                {
                    shapeId: 2,
                    name: 'Diamond 1',
                    description: 'description',
                    initials: '/thumbnails/shape2/Diamond-1.png'
                },
                {
                    shapeId: 2,
                    name: 'Diamond 2',
                    description: 'description',
                    initials: '/thumbnails/shape2/Diamond-2.png'
                },
            ]

        },
        {
            id: 3,
            name: 'Circular',
            description: 'description',
            initials: '/thumbnails/shape3/Shape.png',

            headers: [
                {
                    shapeId: 3,
                    name: 'Heading 1',
                    description: 'description',
                    initials: '/thumbnails/shape3/Header-1.png'
                },
                {
                    shapeId: 3,
                    name: 'Heading 2',
                    description: 'description',
                    initials: '/thumbnails/shape3/Header-2.png'
                },
                {
                    shapeId: 3,
                    name: 'Heading 3',
                    description: 'description',
                    initials: '/thumbnails/shape3/Header-2.png'
                },
            ],

            diamonds: [
                {
                    shapeId: 3,
                    name: 'Diamond 1',
                    description: 'description',
                    initials: '/thumbnails/shape3/Diamond-1.png'
                },
                {
                    shapeId: 3,
                    name: 'Diamond 2',
                    description: 'description',
                    initials: '/thumbnails/shape3/Diamond-2.png'
                },
                {
                    shapeId: 3,
                    name: 'Diamond 3',
                    description: 'description',
                    initials: '/thumbnails/shape3/Diamond-3.png'
                },
            ]

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

        switch (param.shapeId) {
            case 1:
              return (
                setSelectedDiamond(param.name)
              );
      
            case 2:
              return (
                setSelectedDiamondShape2(param.name)
              );

            case 3:
              return (
                setSelectedDiamondShape3(param.name)
              );
      
              return (
                <Teapot
                  castShadow
                  colors={TeapotState.colors}
                  updateCurrent={updateTeapotCurrent}
                />
              );
            default:
              break;
          }
    }

    const selectedHeaderClick = (param) => {

        switch (param.shapeId) {
            case 1:
              return (
                setSelectedHeader(param.name)
              );
      
            case 2:
              return (
                setSelectedHeaderShape2(param.name)
              );

            case 3:
              return (
                setSelectedHeaderShape3(param.name)
              );
      
              return (
                <Teapot
                  castShadow
                  colors={TeapotState.colors}
                  updateCurrent={updateTeapotCurrent}
                />
              );
            default:
              break;
          }
    }

    const selectedShapeClick = (param) => {
        setSelectedModel(param.id)
        setHeadersList(param.headers)
        setDiamondsList(param.diamonds)
    }

    return (
        <>

            <div className="wrapper flex justify-center">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    {/* <div className="title">Ring shape</div> */}
                    <div className="options">

                        {/* list of Shapes */}
                        {
                            choiceStepped == 1 &&
                            (<div>
                                <h2 className="text-sm font-medium text-gray-500">Ring shapes</h2>
                                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                                    {shapes.map((shape) => (
                                        <li key={shape.name} className="col-span-1 flex rounded-md shadow-sm border-[0.5px] border-gray-300">
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
                                                        onClick={() => selectedShapeClick(shape)}
                                                        type="button"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="sr-only">Open options</span>
                                                        <PaperAirplaneIcon aria-hidden="true" className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>)}

                        {/* List of headers */}
                        {
                            headersList && choiceStepped == 2 &&
                            (<div>
                                <h2 className="text-sm font-medium text-gray-500">Header shapes</h2>
                                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                                    {headersList.map((project) => (
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
                                                        onClick={() => selectedHeaderClick(project)}
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
                            </div>)}

                        {/* List of diamonds */}
                        {
                            diamondsList && choiceStepped == 3 &&
                            <div>
                                <h2 className="text-sm font-medium text-gray-500">Header shapes</h2>
                                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                                    {diamondsList.map((project) => (
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
                                                        onClick={() => selectedDiamondClick(project)}
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
                        }

                        <div className="wrapper w-full  flex justify-center py-4">
                            <div className="stepped max-w-20 flex justify-between  gap-4">
                                <button onClick={() => setChoiceStepped(1)} className='step1 w-5 h-5 bg-red-200 rounded-full'></button>
                                <button onClick={() => setChoiceStepped(2)} className='step2 w-5 h-5 bg-red-200 rounded-full'></button>
                                <button onClick={() => setChoiceStepped(3)} className='step3 w-5 h-5 bg-red-200 rounded-full'></button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    );
}


export default Selector