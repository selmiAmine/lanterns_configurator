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

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");

  const [visibility, setvisibility] = useState(false);

  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);

  // Diamonds Shape 1
  const [ringColor, setringColor] = useState(ringColors[0]);
  const [diamondColor, setdiamondColor] = useState(ringColors[2]);
  const [headerColor, setheaderColor] = useState(ringColors[1]);


  // Header Shape 1
  // const [ringColor, setringColor] = useState(ringColors[0]);
  // const [diamondColor, setdiamondColor] = useState(ringColors[2]);
  // const [headerColor, setheaderColor] = useState(ringColors[1]);

  // We have the variables for the material color for multiple meshes, we need to attribute the variables for mesh appearences to be visible or not
  // then move on to the visibility of the specific material


  // Selected diamond
  const [selectedDiamond, setSelectedDiamond] = useState("Diamond 1");
  
  // Selected Header
  const [selectedHeader, setSelectedHeader] = useState("Heading 1");

  // Selecte Shape
  const [selectedModel, setSelectedModel] = useState("Rectangular");


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
        ringColor,
        diamondColor,
        headerColor,
        selectedDiamond, setSelectedDiamond,
        selectedHeader, setSelectedHeader,
        selectedModel, setSelectedModel
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
