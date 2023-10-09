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
  description: string;
  types?: { label: string, thumbnail: string }[];
  materials?: string[];
}

export type Products = {
  [key: string]: Product;
};


// Product Types
const products: Products = {
  'garage-door': {
    name: 'Garage Door',
    description: "Unlike normal doors that swing sideway or roller shutters that rolls up into a cell, automatic garage doors are guided by tracks that open upwards to over head position electrically by garage door openers controlled by a handheld remote control.",
    types: [{ label: 'Sectional', thumbnail: '/products/garage-doors/sectional/thumbnail.jpg' }, { label: 'Canopy', thumbnail: '/products/garage-doors/canopy/thumbnail.jpg' }, { label: 'Martin', thumbnail: '/products/garage-doors/martin/thumbnail.jpg' }],
    materials: ['Copper', 'Steel', 'Aluminium'],
  },
  'residential-gate': {
    name: 'Residential Gate',
    description: "By virtual of its space saving features, sliding gate is the best choice for automated access to your gated property. When space is a problem, you can either choose swing gate of roller shutter for your driveway.",
    types: [{ label: 'Folding', thumbnail: '/products/residential-gates/folding/thumbnail.jpg' }, { label: 'Sliding', thumbnail: '/products/residential-gates/sliding/thumbnail.jpg' }, { label: 'Swinging', thumbnail: '/products/residential-gates/swinging/thumbnail.jpg' }],
  },
  'commercial-door': {
    name: 'Commercial Door',
    description: "Teraoka is the leading automatic doors manufacturer from Japan, our partner in commercial access solution focusing on amenity and safety.",
    types: [{ label: 'Swinging', thumbnail: '/products/commercial-doors/swinging/thumbnail.jpg' }, { label: 'Revolving', thumbnail: '/products/commercial-doors/revolving/thumbnail.jpg' }, { label: 'Sliding', thumbnail: '/products/commercial-doors/sliding/thumbnail.jpg' },],
  },
  'secret-door': {
    name: 'Secret Door',
    description: "We are a distributor of Creative Home Engineering, the world's best engineering and customs manufacturer of secret passage systems and secret hidden doors. By turning bottles hanging on the wall, the secret hidden passage swings open. The secret door possibilities are endless, please visit hiddenpassageway.com here for more examples.",
    types: [{ label: 'Secret Door', thumbnail: '/products/secret-doors/thumbnail.jpg' }]
  },
  'shutter-door': {
    name: 'Shutter Door',
    description: "The weight of the roller shutter is supported by an axial concealed inside a cell horizontally above the entrance. The gate opener only needs to overcome inertia and friction to move the gate. Gate can go up to 6 meter in length and 100 Kg in weight. Material can be stainless steel, wrought iron, brass, Aluminum or glass.",
    types: [{ label: 'Roller Shutter', thumbnail: '/products/shutter-doors/roller/thumbnail.jpg' }, { label: 'Fire Shutter', thumbnail: '/products/shutter-doors/fire/thumbnail.jpg' }],
  },
  'renlita-door': {
    name: "Renlita Door",
    description: "Built by Renlita USA according to ANSI standard. Powered with electrically operated opener for remote control access.",
    types: [{ label: 'Floataway', thumbnail: '/products/renlita-door/floataway/thumbnail.jpg' }, { label: 'Hingeway', thumbnail: '/products/renlita-door/hingeway/thumbnail.jpg' }, { label: 'Foldaway', thumbnail: '/products/renlita-door/foldaway/thumbnail.jpg' }],
  },
  'avon-barrier': {
    name: "Avon Barrier",
    description: "Physically impact tested to PAS 68 criteria. Manufactured from heavy gauge materials. Variable height and clear widths. Manual operating override facility. High quality coating system(minimum galvanised). Shallow mounting less than 500mm overall depth. Hold to run operation(deadman mode)",
    types: [{ label: 'PAS 68', thumbnail: '/products/avon-barrier/thumbnail.jpg' }],
  },
}

export default products;
