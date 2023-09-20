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
        gate-types --- fold & slide & swing
        slide --- uphill & curved & telescopic & cantilever
        swing --- arm-type & underground
    end
    products --- commercial-doors:::page
    commercial-door --- revolving-door
    commercial-door --- slide-door
    commercial-door --- swing-door
    products --- secret-door
    products --- roller-shutter
    products --- fire-shutter
    products --- renlita-doors
    products --- avon-pas-68
    products --- entrance-gate
    entrance-gate --- sectional-garage-door
    sectional-garage-door --- martin-copper-garage-door
    services --- safety-standard
    services --- design-install
    services --- after-sales-services
    services --- maintenance-services
    services --- diy-repair
    legal --- disclaimer
    legal --- privacy-policy

    classDef section fill:#005500
    classDef page fill:#000055
```
