import gsap from "gsap";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import RingService from "../services/ring-service";

const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const ringColors = [
  {
    color: "#F2EFE5",
    name: "circle",
  },
  {
    color: "#B4B4B8",
    name: "header",
  },
  {
    color: "#F2EFE5",
    name: "diamond",
  }
];

const ringShapes = [
  {
    id: 1,
    name: "rectangular",
  },
  {
    id: 2,
    name: "rectangular variation",
  },
  {
    id: 3,
    name: "circular",
  }
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {

  const [material, setMaterial] = useState("leather");

  const [visibility, setvisibility] = useState(false);

  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);
  const [currentItem, setCurrentItem] = useState("");

  // Colors Shape 1
  const [ringColor, setRingColor] = useState(ringColors[0].color);
  const [diamondColor, setDiamondColor] = useState(ringColors[2].color);
  const [headerColor, setHeaderColor] = useState(ringColors[1].color);
  const [selectedDiamond, setSelectedDiamond] = useState("Diamond 1");
  const [selectedHeader, setSelectedHeader] = useState("Heading 1");

  // Colors Shape 2
  const [ringColorShape2, setRingColorShape2] = useState(ringColors[0].color);
  const [diamondColorShape2, setDiamondColorShape2] = useState(ringColors[2].color);
  const [headerColorShape2, setHeaderColorShape2] = useState(ringColors[1].color);
  const [selectedHeaderShape2, setSelectedHeaderShape2] = useState("Heading 1");
  const [selectedDiamondShape2, setSelectedDiamondShape2] = useState("Diamond 1");

  // Colors Shape 3
  const [ringColorShape3, setRingColorShape3] = useState(ringColors[0].color);
  const [diamondColorShape3, setDiamondColorShape3] = useState(ringColors[2].color);
  const [headerColorShape3, setHeaderColorShape3] = useState(ringColors[1].color);
  const [selectedHeaderShape3, setSelectedHeaderShape3] = useState("Heading 1");
  const [selectedDiamondShape3, setSelectedDiamondShape3] = useState("Diamond 1");

  const [materialsImported, setMaterialsImported] = useState({});

  // Selected material
  const [selectedMaterial, setSelectedMaterial] = useState(1);



  // Camera ref
  const cameraControlRef = useRef(null);

  const setCameraControlRef = (value) => {
    cameraControlRef.current = value
  }

  const zoomToDiamond = (value) => {
    cameraControlRef.current?.setLookAt(0, 2.4, 1, 0, 2, 0, true)
    // cameraControlRef.current = value
  }

  const zoomToHeader = (value) => {
    cameraControlRef.current?.setLookAt(0, 2, 1, 0, 1.8, 0, true)
    // cameraControlRef.current = value
  }

  const resetCamera = (value) => {
    cameraControlRef.current.setPosition(0, 2, 4, true)
    cameraControlRef.current.setTarget(0, 0, 0, true)

    // cameraControlRef.current?.setLookAt(0, 1, 4,0,2,0, true)
  }

  // Header Shape 1
  // const [ringColor, setringColor] = useState(ringColors[0]);
  // const [diamondColor, setdiamondColor] = useState(ringColors[2]);
  // const [headerColor, setheaderColor] = useState(ringColors[1]);

  // We have the variables for the material color for multiple meshes, we need to attribute the variables for mesh appearences to be visible or not
  // then move on to the visibility of the specific material

  // Selected Shape
  const [selectedModel, setSelectedModel] = useState(1);

  // Rotate animation
  const [canAnimate, setCanAnimate] = useState(false);

  // Floating animation
  const [isFloating, setIsFloating] = useState(false);

  // Floating animation
  const [currentModelAttributes, setCurrentModelAttributes] = useState(null);

  const [formDataContent, setFormDataContent] = useState(null);

  const [rings, setRings] = useState([]);

  // Current ring
  const [currentRing, setCurrentRing] = useState(
    {
      thumbnail: {},
      shape: {
        data: selectedModel,
        options: {
          material: selectedMaterial,
          color: "",
        }
      },
      header: {
        data: {},
        options: {
          material: 0,
          color: "",
        }
      },
      diamond: {
        data: {},
        options: {
          material: 0,
          color: "",
        }
      },
      ownerId: 0,
      name: '',
      description: '',
      price: 0,
      comment: ''
    }
  );

  const saveRing = () => {
    console.log('RING SAVED', currentRing)
  }

  const resetRing = () => {
    console.log('RING RESETTED', currentRing)
  }

  const [exposedFunction, setExposedFunction] = useState(null);

  const [exposedFunction2, setExposedFunction2] = useState(null);

  const registerFunction = (func, func2) => {
    setExposedFunction(() => func); // Register the function
    setExposedFunction2(() => func2); // Register the function
  };

  const registerFunction2 = (func) => {
    setExposedFunction2(() => func); // Register the function
  };

  const fetchRing = useCallback(async (id) => {
    try {
      const fetchedRing = await RingService.getRing(id);
      console.log(fetchedRing)
      setCurrentRing(fetchedRing); // Ensure this doesn't cause state changes that lead to re-rendering
      console.log(currentRing)
    } catch (error) {
      console.error("Error fetching ring in context:", error);
    }
  }, [setCurrentRing]);

  const fetchRings = async () => {
    try {
      const ringData = await RingService.getRings();
      // console.log("Fetched rings:", ringData); // Console log the fetched rings
      setRings(ringData); // Update the rings in the context state
    } catch (error) {
      console.error("Failed to fetch rings:", error);
    }
  };

  const setLayingPosition = () => {
    console.log(currentModelAttributes.position);

    // Animate the rotation using GSAP
    gsap.to(currentModelAttributes.rotation, {
      x: Math.PI / 2,
      duration: 1, // Animation duration in seconds
      onUpdate: () => {
        setCurrentModelAttributes({ ...currentModelAttributes });
      }
    });

    // Animate the position at the same time
    gsap.to(currentModelAttributes.position, {
      z: -1,
      y: 1,
      duration: 1, // Animation duration in seconds
      onUpdate: () => {
        setCurrentModelAttributes({ ...currentModelAttributes });
      }
    });

  };

  const setResetPositon = () => {
    console.log(currentModelAttributes.position);

    // Animate the rotation using GSAP
    gsap.to(currentModelAttributes.rotation, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1, // Animation duration in seconds
      onUpdate: () => {
        setCurrentModelAttributes({ ...currentModelAttributes });
      }
    });

    gsap.to(currentModelAttributes.position, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1, // Animation duration in seconds
      onUpdate: () => {
        setCurrentModelAttributes({ ...currentModelAttributes });
      }
    });
  };

  useEffect(() => {
    fetchRings();
  }, []);


  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        visibility,
        setvisibility,
        legs,
        setLegs,
        chairColors,
        chairColor,
        setChairColor,
        cushionColors,
        cushionColor,
        setCushionColor,

        currentRing, setCurrentRing,
        selectedModel, setSelectedModel,

        ringColor, setRingColor,
        diamondColor, setDiamondColor,
        headerColor, setHeaderColor,
        selectedDiamond, setSelectedDiamond,
        selectedHeader, setSelectedHeader,

        ringColorShape2, setRingColorShape2,
        diamondColorShape2, setDiamondColorShape2,
        headerColorShape2, setHeaderColorShape2,
        selectedDiamondShape2, setSelectedDiamondShape2,
        selectedHeaderShape2, setSelectedHeaderShape2,

        ringColorShape3, setRingColorShape3,
        diamondColorShape3, setDiamondColorShape3,
        headerColorShape3, setHeaderColorShape3,
        selectedDiamondShape3, setSelectedDiamondShape3,
        selectedHeaderShape3, setSelectedHeaderShape3,

        // Current selected Item with mouse
        currentItem, setCurrentItem,

        cameraControlRef, setCameraControlRef,
        zoomToDiamond,
        zoomToHeader,
        resetCamera,

        materialsImported, setMaterialsImported,
        selectedMaterial, setSelectedMaterial,

        canAnimate, setCanAnimate,

        isFloating, setIsFloating,

        currentModelAttributes, setCurrentModelAttributes,
        formDataContent, setFormDataContent,


        // functions

        saveRing, resetRing,
        exposedFunction, registerFunction,
        exposedFunction2, registerFunction2,

        setLayingPosition, setResetPositon,
        fetchRing,


        rings, fetchRings

      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
