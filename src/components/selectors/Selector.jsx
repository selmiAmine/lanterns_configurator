import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { EllipsisVerticalIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { useCustomization } from '../../contexts/Customization';

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import RingService from '../../services/ring-service';
import axios from 'axios';

export const Selector = () => {

    const {
        material,
        setMaterial, visibility, setvisibility,
        selectedDiamond, setSelectedDiamond,
        selectedHeader, setSelectedHeader,
        selectedModel, setSelectedModel,

        selectedHeaderShape2, setSelectedHeaderShape2,
        selectedDiamondShape2, setSelectedDiamondShape2,

        selectedHeaderShape3, setSelectedHeaderShape3,
        selectedDiamondShape3, setSelectedDiamondShape3,

        currentRing, setCurrentRing,

        zoomToDiamond, zoomToHeader, resetCamera, cameraControlRef,

        saveRing, resetRing,
        visualizeCurrentRing,
        formDataContent, exposedFunction2

    } = useCustomization();

    let [lineWidth, setLineWidth] = useState(1);
    let [choiceStepped, setChoiceStepped] = useState(1);

    const nextStep = () => {
        console.log(choiceStepped)

        if (choiceStepped < 6) {
            setChoiceStepped(++choiceStepped)
        }

        switch (choiceStepped) {
            case 1:
                {
                    resetCamera()
                    break;
                }
            case 2:

                {
                    // zoomToDiamond()
                    zoomToHeader()
                    break;
                }
            case 3:
                {
                    zoomToDiamond()
                    break;
                }

            case 4:
                {
                    resetCamera()
                    break;
                }

            default:
                break;
        }
    }

    const previousStep = () => {
        console.log(cameraControlRef.current)

        if (choiceStepped > 1) {
            setChoiceStepped(--choiceStepped)
        }

        switch (choiceStepped) {
            case 1:
                {
                    resetCamera()
                    break;
                }
            case 2:

                {
                    // zoomToDiamond()
                    zoomToHeader()
                    break;
                }
            case 3:
                {
                    zoomToDiamond()
                    break;
                }

            case 4:
                {
                    resetCamera()
                    break;
                }

            default:
                break;
        }
    }

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


    useEffect(() => {
        selectedShapeClick(shapes[0])
    }, [])

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const shapeIdSelect = (param) => {
        setvisibility(!visibility)
        console.log(param)
        // console.log(visibility)
    }

    const selectedDiamondClick = (param) => {

        currentRing.diamond.data = param
        setCurrentRing(currentRing)
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

        // console.log(param.name  )
        console.log(param)

        currentRing.header.data = param
        setCurrentRing(currentRing)
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
        currentRing.shape.data = param.id
        setCurrentRing(currentRing)
        setSelectedModel(param.id)
        setHeadersList(param.headers)
        setDiamondsList(param.diamonds)

        saveRing()

    }

    const resetRingConfiguration = () => {
        setChoiceStepped(1)
        resetRing()
    }

    const [ringName, setRingName] = useState(currentRing.name);
    const [ringDescription, setRingDescription] = useState(currentRing.description);
    const [ringPrice, setRingPrice] = useState(currentRing.price);




    useEffect(() => {

        currentRing.thumbnail = formDataContent
        setCurrentRing(currentRing)
        console.log('triggered')

        // RingService.create(currentRing)

        const formData = new FormData();

        // Append the file and other fields
        formData.append('thumbnail', currentRing.thumbnail); // Assuming `thumbnail` is a file object
        formData.append('data', JSON.stringify(currentRing));
        // formData.append('description', currentRing.description);
        // formData.append('price', currentRing.price);

    
    axios.post("http://localhost:3000/api/ring/create", 

      formData
      
      , {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    }, [formDataContent]);

    const handleSave = () => {

        currentRing.name = ringName
        currentRing.description = ringDescription
        currentRing.price = ringPrice

        if (exposedFunction2) {
            exposedFunction2(); // Trigger the function from Component 1
        }

        // Update the current ring
        setCurrentRing(currentRing);

        saveRing()


    };


    return (
        <>

            <div className="wrapper flex flex-col justify-center ">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 min-w-[900px]">
                    {/* <div className="title">Ring shape</div> */}
                    <div className="options min-w-full">
                        {/* list of Shapes */}
                        {
                            choiceStepped == 1 &&
                            <div className='min-h-16'>
                                <h2 className="text-sm font-medium text-gray-500 text-center">Ring shapes</h2>
                                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                                    {shapes.map((shape) => (
                                        <li onClick={() => selectedShapeClick(shape)}
                                            key={shape.id} className={`col-span-1 transition-colors duration-500 ease-in-out flex rounded-md  border-[0.5px] border-gray-300 ${shape.id == selectedModel ? 'outline outline-green-800 outline-2 bg-white shadow-xl' : 'bg-white/60'}`}>
                                            <div
                                                className={classNames(
                                                    'flex w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white overflow-hidden',
                                                )}
                                            >
                                                {/* {shape.id} */}
                                                <img src={shape.initials} className='grayscale hover:grayscale-0 transition hover:scale-110' alt="" />
                                            </div>
                                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 ">
                                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                                    <a href={shape.href} className="font-medium text-gray-900 hover:text-gray-600 ">
                                                        {shape.name}
                                                    </a>
                                                    <p className="text-gray-500">{shape.description}</p>
                                                </div>
                                                {/* <div className="flex-shrink-0 pr-2">
                                                    <button
                                                        type="button"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="sr-only">Open options</span>
                                                        <PaperAirplaneIcon aria-hidden="true" className="h-5 w-5" />
                                                    </button>
                                                </div> */}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>}

                        {/* List of headers */}
                        {
                            headersList && choiceStepped == 2 &&
                            <div className='min-h-16'>
                                <h2 className="text-sm font-medium text-gray-500 text-center">Header shapes</h2>
                                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                                    {headersList.map((project) => (
                                        <li key={project.name}
                                            onClick={() => selectedHeaderClick(project)}

                                            //  className={`col-span-1 flex rounded-md shadow-sm ${ 

                                            //     ((((project.name == selectedHeader) && (project.shapeId == selectedModel) ) || ((project.name == selectedHeaderShape2) && (project.shapeId == selectedModel)) || ((project.name == selectedHeaderShape3) && (project.shapeId == selectedModel))) )? 'outline outline-green-800 outline-2 bg-white shadow-xl' : 'bg-white/60'

                                            //  }`}
                                            className={`col-span-1 flex rounded-md shadow-sm ${((project.name === selectedHeader && project.shapeId === 1) ||
                                                (project.name === selectedHeaderShape2 && project.shapeId === 2) ||
                                                (project.name === selectedHeaderShape3 && project.shapeId === 3))
                                                ? 'outline outline-green-800 outline-2 bg-white shadow-xl'
                                                : 'bg-white/60'
                                                }`}

                                        >

                                            <div
                                                className={classNames(
                                                    project.bgColor,
                                                    'flex w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white overflow-hidden',
                                                )}
                                            >
                                                <img src={project.initials} className='grayscale scale-110 hover:grayscale-0 transition scale-[3] hover:scale-[5]' alt="" />
                                            </div>
                                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                                    <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                                                        {project.name}
                                                    </a>
                                                    <p className="text-gray-500">{project.members} Members</p>
                                                </div>
                                                {/* <div className="flex-shrink-0 pr-2">
                                                    <button
                                                        onClick={() => selectedHeaderClick(project)}
                                                        type="button"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="sr-only">Open options</span>
                                                        <PaperAirplaneIcon aria-hidden="true" className="h-5 w-5" />
                                                    </button>
                                                </div> */}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>}

                        {/* List of diamonds */}
                        {
                            diamondsList && choiceStepped == 3 &&
                            <div className='min-h-16'>
                                <h2 className="text-sm font-medium text-gray-500 text-center">Diamond shapes</h2>
                                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                                    {diamondsList.map((project) => (
                                        <li key={project.name}

                                            onClick={() => selectedDiamondClick(project)}
                                            className={`col-span-1 flex rounded-md shadow-sm ${((project.name === selectedDiamond && project.shapeId === 1) ||
                                                (project.name === selectedDiamondShape2 && project.shapeId === 2) ||
                                                (project.name === selectedDiamondShape3 && project.shapeId === 3))
                                                ? 'outline outline-green-800 outline-2 bg-white shadow-xl'
                                                : 'bg-white/60'
                                                }`}
                                        >
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
                                                {/* <div className="flex-shrink-0 pr-2">
                                                    <button
                                                        onClick={() => selectedDiamondClick(project)}
                                                        type="button"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="sr-only">Open options</span>
                                                        <PaperAirplaneIcon aria-hidden="true" className="h-5 w-5" />
                                                    </button>
                                                </div> */}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }

                        {/* Ring name */}
                        {
                            choiceStepped == 4 &&
                            <div className='min-h-16 flex items-center flex-col'>
                                <h2 className="text-sm font-medium text-gray-500 text-center mb-2">Ring name</h2>
                                {/* <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                                    Hello
                                </ul> */}

                                <label htmlFor="ringName" className="sr-only">
                                    Ring name
                                </label>
                                <div className="inputWrapper w-full flex justify-center">
                                    <input
                                        id="ringName"
                                        name="ringName"
                                        type="text"
                                        value={ringName}
                                        onChange={(e) => setRingName(e.target.value)}
                                        placeholder="..."
                                        className="text-sm font-semibold block text-center w-1/2 rounded-md border-b-4 border-black/50 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/0 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-gray-600/50 focus:border-gray-800 focus:shadow-lg sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        }

                        {/* Ring description */}
                        {
                            choiceStepped == 5 &&
                            <div className='min-h-16 flex items-center flex-col'>
                                <h2 className="text-sm font-medium text-gray-500 text-center mb-2">Ring description</h2>
                                {/* <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                                    Hello
                                </ul> */}

                                <label htmlFor="ringName" className="sr-only">
                                    Ring description
                                </label>
                                <div className="inputWrapper w-full flex justify-center">
                                    <input
                                        id="ringName"
                                        name="ringName"
                                        value={ringDescription}
                                        onChange={(e) => setRingDescription(e.target.value)}
                                        type="text"
                                        placeholder="..."
                                        className="text-sm font-semibold block text-center w-full rounded-md border-b-4 border-black/50 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/0 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-gray-600/50 focus:border-gray-800 focus:shadow-lg sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        }

                        {/* Ring price */}
                        {
                            choiceStepped == 6 &&
                            <div className='min-h-16 flex items-center flex-col'>
                                <h2 className="text-sm font-medium text-gray-500 text-center mb-2">Ring price</h2>
                                {/* <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                                    Hello
                                </ul> */}

                                <label htmlFor="ringName" className="sr-only">
                                    Ring price
                                </label>
                                <div className="inputWrapper w-full flex justify-center">
                                    <input
                                        id="ringName"
                                        name="ringName"
                                        type="number"
                                        value={ringPrice}
                                        onChange={(e) => setRingPrice(Number(e.target.value))}
                                        placeholder="..."
                                        className="text-sm font-semibold block text-center w-1/4 rounded-md border-b-4 border-black/50 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/0 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-gray-600/50 focus:border-gray-800 focus:shadow-lg sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        }

                        {/* <div className="overflow-hidden rounded-full mt-4 bg-gray-200">
                            <div style={{ width: lineWidth +'%' }} className="h-1 rounded-full bg-indigo-600" />
                        </div> */}

                        <div className="wrapper w-full  flex justify-evenly py-4">

                            <button disabled={choiceStepped == 1} onClick={() => resetRingConfiguration()} className={`step1 p-2 rounded-full ${choiceStepped == 1 ? 'bg-[#d3d3d3]' : 'bg-red-700 '}`}>
                                {/* <ChevronLeftIcon className={`mx-auto h-4 w-4 ${ choiceStepped == 1 ? 'text-white' : 'text-gray-900' }`} /> */}

                                <img className='w-4 h-4' src="/reset.svg" alt="" />
                            </button>

                            <div className="stepped max-w-20 flex justify-between  gap-4">
                                <button disabled={choiceStepped == 1} onClick={() => previousStep()} className={`step1 p-2 rounded-full ${choiceStepped == 1 ? 'bg-[#d3d3d3]' : 'bg-white'}`}>
                                    <ChevronLeftIcon className={`mx-auto h-4 w-4 ${choiceStepped == 1 ? 'text-white' : 'text-gray-900'}`} />
                                </button>
                                <button disabled={choiceStepped == 6} onClick={() => nextStep()} className={`'step2 p-2 rounded-full ${choiceStepped == 6 ? 'bg-[#d3d3d3]' : 'bg-white'} '`}>
                                    <ChevronRightIcon className={`mx-auto h-4 w-4 ${choiceStepped == 6 ? 'text-white' : 'text-gray-900'}`} />
                                </button>
                                {/* <button onClick={() => setChoiceStepped(3)} className='step3 w-5 h-5 bg-red-200 rounded-full'></button> */}
                            </div>

                            <button disabled={currentRing.header.data.shapeId == 1} onClick={() => handleSave()} className={`step1 p-2 rounded-full ${choiceStepped == 1 ? 'bg-[#d3d3d3]' : 'bg-green-700'}`}>
                                <img className='w-4 h-4' src="/SaveIcon.svg" alt="" />
                            </button>

                        </div>

                    </div>
                </div>

            </div>



        </>
    );
}


export default Selector