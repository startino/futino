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
  types?: { href: string, label: string, thumbnail: string }[];
  materials?: string[];
}

export type Products = {
  [key: string]: Product;
};


// Product Types
const products: Products = {
  'garage-doors': {
    name: 'Garage Door',
    description: "Unlike normal doors that swing sideway or roller shutters that rolls up into a cell, automatic garage doors are guided by tracks that open upwards to over head position electrically by garage door openers controlled by a handheld remote control.",
    types: [{ href: "/sectional", label: 'Sectional', thumbnail: '/products/garage-doors/sectional/thumbnail.jpg' }, { href: "/canopy", label: 'Canopy', thumbnail: '/products/garage-doors/canopy/thumbnail.jpg' }, { href: "/martin", label: 'Martin', thumbnail: '/products/garage-doors/martin/thumbnail.jpg' }],
    materials: ['Copper', 'Steel', 'Aluminium'],
  },
  'residential-gates': {
    name: 'Residential Gate',
    description: "By virtual of its space saving features, sliding gate is the best choice for automated access to your gated property. When space is a problem, you can either choose swing gate of roller shutter for your driveway.",
    types: [{ href: "/folding", label: 'Folding', thumbnail: '/products/residential-gates/folding/thumbnail.jpg' }, { href: "/sliding", label: 'Sliding', thumbnail: '/products/residential-gates/sliding/thumbnail.jpg' }, { href: "/swinging", label: 'Swinging', thumbnail: '/products/residential-gates/swinging/thumbnail.jpg' }],
  },
  'commercial-doors': {
    name: 'Commercial Door',
    description: "Teraoka is the leading automatic doors manufacturer from Japan, our partner in commercial access solution focusing on amenity and safety.",
    types: [{ href: "/#swinging", label: 'Swinging', thumbnail: '/products/commercial-doors/swinging/thumbnail.jpg' }, { href: "/#revolving", label: 'Revolving', thumbnail: '/products/commercial-doors/revolving/thumbnail.jpg' }, { href: "/#sliding", label: 'Sliding', thumbnail: '/products/commercial-doors/sliding/thumbnail.jpg' },],
  },
  'secret-doors': {
    name: 'Secret Door',
    description: "We are a distributor of Creative Home Engineering, the world's best engineering and customs manufacturer of secret passage systems and secret hidden doors. By turning bottles hanging on the wall, the secret hidden passage swings open. The secret door possibilities are endless, please visit hiddenpassageway.com here for more examples.",
    types: [{ href: "/", label: 'Secret Door', thumbnail: '/products/secret-doors/thumbnail.jpg' }]
  },
  'shutter-doors': {
    name: 'Shutter Door',
    description: "The weight of the roller shutter is supported by an axial concealed inside a cell horizontally above the entrance. The gate opener only needs to overcome inertia and friction to move the gate. Gate can go up to 6 meter in length and 100 Kg in weight. Material can be stainless steel, wrought iron, brass, Aluminum or glass.",
    types: [{ href: "/roller", label: 'Roller Shutter', thumbnail: '/products/shutter-doors/roller/thumbnail.jpg' }, { href: "/fire", label: 'Fire Shutter', thumbnail: '/products/shutter-doors/fire/thumbnail.jpg' }],
  },
  'renlita-doors': {
    name: "Renlita Door",
    description: "Built by Renlita USA according to ANSI standard. Powered with electrically operated opener for remote control access.",
    types: [{ href: "/", label: 'Renlita Door', thumbnail: '/products/renlita-doors/thumbnail.jpg' }],
  },
  'avon-barriers': {
    name: "Avon Barrier",
    description: "Physically impact tested to PAS 68 criteria. Manufactured from heavy gauge materials. Variable height and clear widths. Manual operating override facility. High quality coating system(minimum galvanised). Shallow mounting less than 500mm overall depth. Hold to run operation(deadman mode)",
    types: [{ href: "/", label: 'PAS 68', thumbnail: '/products/avon-barriers/thumbnail.jpg' }],
  },
}

export default products;
