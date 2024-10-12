import { createContext, useContext, useRef, useState } from "react";

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
    cameraControlRef.current?.setLookAt(0,2.4,1,0,2,0, true)
    // cameraControlRef.current = value
  }

  const zoomToHeader = (value) => {
    cameraControlRef.current?.setLookAt(0,2,1,0,1.8,0, true)
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
  const [canAnimate, setCanAnimate] = useState(true);

  // Current ring
  const [currentRing, setCurrentRing] = useState(
    {
      // shapeId :selectedModel,
      // shapeOptions : {
      //   material : 0,
      //   color : "",
      // },
      shape : {
        data : selectedModel,
        options: {
          material : selectedMaterial,
          color : "",
        }
      },
      header : {
        data : {},
        options: {
          material : 0,
          color : "",
        }
      },
      diamond : {
        data : {},
        options: {
          material : 0,
          color : "",
        }
      },
      ownerId : 0,
      name : '',
      description : '',
      price : 0,
      comment : ''
    }
  ); 

  const saveRing = () => {
    console.log('RING SAVED',currentRing)
  }

  const resetRing = () => {
    console.log('RING RESETTED',currentRing)
    // setSelectedModel(0)
    setSelectedDiamond('asds')

    // Set all possibilities to empty string
  }

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
        
        selectedModel, setSelectedModel,
        currentRing, setCurrentRing,
        
        ringColor, setRingColor,
        diamondColor, setDiamondColor,
        headerColor, setHeaderColor,
        selectedDiamond, setSelectedDiamond,
        selectedHeader, setSelectedHeader,
        
        ringColorShape2, setRingColorShape2,
        diamondColorShape2, setDiamondColorShape2,
        headerColorShape2,setHeaderColorShape2,
        selectedDiamondShape2, setSelectedDiamondShape2,
        selectedHeaderShape2, setSelectedHeaderShape2,

        ringColorShape3, setRingColorShape3,
        diamondColorShape3, setDiamondColorShape3,
        headerColorShape3, setHeaderColorShape3,
        selectedDiamondShape3, setSelectedDiamondShape3,
        selectedHeaderShape3, setSelectedHeaderShape3,
      
        // Current selected Item with mouse
        currentItem, setCurrentItem,

        cameraControlRef,setCameraControlRef,
        zoomToDiamond,
        zoomToHeader,
        resetCamera,

        materialsImported, setMaterialsImported,
        selectedMaterial, setSelectedMaterial,

        canAnimate, setCanAnimate,





        // functions

        saveRing, resetRing,

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
