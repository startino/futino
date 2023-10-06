enum ProductType {
  GarageDoor,
  ResidentialGate,
  CommercialDoor,
  BifoldDoor,
  SecretDoor,
  RollerShutter,
  FireShutter,
  RenlitaDoor,
  AvonPas68,
}


// Garage Doors
enum GarageDoorType {
  Sectional,
  Canopy,
  MartinDoor,
}

enum GarageDoorMaterial {
  Copper,
  Steel,
  Aluminium,
}

// Residential Gates
enum ResidentialGateType {
  Fold,
  Slide,
  Swing,
}

enum SlideGateType {
  Uphill,
  Curved,
  Telescopic,
  Cantilever,
}

enum SwingGateType {
  Arm,
  Underground,
}

// Commercial Doors
enum CommercialDoorType {
  Slide,
  Swing,
  Revolving,
}

type Product = {
  name: string;
  types?: string[];
  materials?: string[];
}

export type Products = {
	[key: string]: Journey;
};


// Product Types
const products: Products = {
  'garage-door' : {
    name: 'Garage Door',
    types: ['Sectional', 'Canopy', 'Martin'],
    material: ['Copper', 'Steel', 'Aluminium'],
  },
  'residential-gate' : {
    name: 'Residential Gate',
    types: ['Folding', 'Sliding', 'Swinging'],
  },
  'commercial-door' : {
    name: 'Commercial Door',
    types: ['Sliding', 'Swinging', 'Revolving'],
  },
  'bifold-door' : {
    name: 'Bifold Door',
  },
  'secret-door' : {
    name: 'Secret Door',
  },
  'roller-shutter' : {
    name: 'Roller Shutter',
  },
  'fire-shutter' : {
    name: 'Fire Shutter'
  },
  'renlita-doors' : {
    name: "Renlita Doors",
  },
  'avon-pas68' : {
    name: "Avon Pas 68"
  },
}
  
export default products;
