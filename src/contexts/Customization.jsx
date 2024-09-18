import { createContext, useContext, useState } from "react";

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

  // Colors Shape 1
  const [ringColor, setringColor] = useState(ringColors[0]);
  const [diamondColor, setdiamondColor] = useState(ringColors[2]);
  const [headerColor, setheaderColor] = useState(ringColors[1]);
  const [selectedDiamond, setSelectedDiamond] = useState("Diamond 1");
  const [selectedHeader, setSelectedHeader] = useState("Heading 1");

  // Colors Shape 2
  const [ringColorShape2, setringColorShape2] = useState(ringColors[0]);
  const [diamondColorShape2, setdiamondColorShape2] = useState(ringColors[2]);
  const [headerColorShape2, setheaderColorShape2] = useState(ringColors[1]);
  const [selectedHeaderShape2, setSelectedHeaderShape2] = useState("Heading 1");
  const [selectedDiamondShape2, setSelectedDiamondShape2] = useState("Diamond 1");

  // Colors Shape 3
  const [ringColorShape3, setringColorShape3] = useState(ringColors[0]);
  const [diamondColorShape3, setdiamondColorShape3] = useState(ringColors[2]);
  const [headerColorShape3, setheaderColorShape3] = useState(ringColors[1]);
  const [selectedHeaderShape3, setSelectedHeaderShape3] = useState("Heading 1");
  const [selectedDiamondShape3, setSelectedDiamondShape3] = useState("Diamond 1");

  // Color picker object
  const RingState = {
    current: null,
    colors: {
      Material_6: "#d3d3d3",
      gold: "#d3d3d3",
      silver: "#d3d3d3",
    },
  }
  

  // Header Shape 1
  // const [ringColor, setringColor] = useState(ringColors[0]);
  // const [diamondColor, setdiamondColor] = useState(ringColors[2]);
  // const [headerColor, setheaderColor] = useState(ringColors[1]);

  // We have the variables for the material color for multiple meshes, we need to attribute the variables for mesh appearences to be visible or not
  // then move on to the visibility of the specific material



  // Selecte Shape
  const [selectedModel, setSelectedModel] = useState("High");

  // Current ring
  const [currentRing, setCurrentRing] = useState(
    {
      shapeId :0,
      header : {},
      diamond : {},
      ownerId : 0,
      name : '',
      description : '',
      price : 0,
      comment : ''
    }
  ); 

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
        
        ringColor,
        diamondColor,
        headerColor,
        selectedDiamond, setSelectedDiamond,
        selectedHeader, setSelectedHeader,
        
        ringColorShape2,
        diamondColorShape2,
        headerColorShape2,
        selectedDiamondShape2, setSelectedDiamondShape2,
        selectedHeaderShape2, setSelectedHeaderShape2,

        ringColorShape3,
        diamondColorShape3,
        headerColorShape3,
        selectedDiamondShape3, setSelectedDiamondShape3,
        selectedHeaderShape3, setSelectedHeaderShape3,
      

        RingState
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
