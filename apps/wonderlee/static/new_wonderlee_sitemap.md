```mermaid
flowchart LR
    domain["wonderlee.com"] --- about-us & services & contact-us & legal & our-work & products
    products --- garage-doors:::page
    subgraph "Garage Doors"
        direction TB
        garage-doors --- garage-types
        garage-types --- sectional & canopy & martin-door
        garage-doors --- materials
        materials --- copper & steel & aluminium
    end
    products --- residential-gates:::page
    subgraph "Residential Gates"
        direction TB
        residential-gates --- gate-types
        gate-types --- fold & slide-gate & swing-gate
        slide-gate --- uphill & curved & telescopic & cantilever
        swing-gate --- arm-type & underground
    end
    products --- commercial-doors:::page
     subgraph "Residential Gates"
        direction TB
        commercial-doors --- door-types
        door-types ---  slide-door & swing-door & revolving
    end
    products --- bifold-door:::page
    products --- secret-door:::page
    products --- roller-shutter:::page
    products --- fire-shutter:::page
    products --- renlita-doors:::page
    products --- avon-pas-68:::page
    services --- design
    services --- install
    services --- maintenance
    services --- diy-repair
    legal --- disclaimer
    legal --- privacy-policy

    classDef section fill:#005500
    classDef page fill:#000055,color:#fff
```
