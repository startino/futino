
type ProjectProps = {
  name: string;
  date: number;
  thumbnail: string;
  description: string[];
};

export class Project {
  name: string;
  thumbnail: string;
  date: number;
  description: string[];

  public constructor(project: ProjectProps) {
    this.name = project.name;
    this.date = project.date;
    this.thumbnail = project.thumbnail;
    this.description = project.description
  }
}

export type Projects = {
  [key: string]: Project;
};

const projects: Projects = {
  'hkdi-3-leaf-telescopic': new Project({
    name: "HKDI 3-leaf telescopic",
    date: 2022,
    thumbnail: "/projects/new_images/HKDI_3-leaf_telescopic_1.jpg",
    description: [
      'Proprietary 3-leaf telescopic design.', '9m wide x 2.5m high, 1,800 Kg in weight.', 'Motorized by Tousek VFD operator.', 'Completely open in 16 seconds.', 'View footage on YouTube.'
    ]
  }),

  'beacon-hill-mont-verra': new Project({
    name: "Beacon Hill Mont Verra",
    date: 2022,
    thumbnail: "/projects/new_images/Beacon_Hill_On_Slope.jpg",
    description: [
      'Proprietary On-Slope fold gate.', 'Trapezoidal shape to match the sloped entrance.', 'Motorized by FAAC hydraulic operator.', '7.3m drive-through width for EVA compliance.', 'Completely open in 10 seconds.'
    ]
  }),

  'square-mile-renlita-vertical-bifold': new Project({
    name: "Square Mile Renlita Vertical Bifold",
    date: 2021,
    thumbnail: "/projects/new_images/Square_Mile_Renlita_1.jpg",
    description: [
      'Counter weight balanced vertical bifold door.', 'Proprietary Renlita door made in USA.', 'Motorized by LiftMaster shaft operator.', '16m vertical lift from street to 3/F with RB crane.', 'Weights 1 ton 5m wide x 4.2m high.'
    ]
  }),

  'hi-speed-slide-gate': new Project({
    name: "Hi-speed slide gate",
    date: 2020,
    thumbnail: "/projects/new_images/75_DWBR_1.jpg",
    description: [
      'Class gate design withe bronze decos.', 'Motorized by Tousek TPS 40Pro Hi-speed motor.', 'Mechanical brake, force sensor and safety edge.', 'Weights 2 ton.', 'Chain-cable system for intercom and wicket door.'
    ]
  }),

  'swing-+-telescopic-slide-gate': new Project({
    name: "Swing + Telescopic Slide gate",
    date: 2020,
    thumbnail: "/projects/new_images/Grand_Garden.jpg",
    description: [
      'Cantilever system designed for 7m opening width.', 'To open, the telescopic slide gate retracts into the swing gate, then \tthe swing gate powered by 2 Tousek Swing X arms opens the gate.', 'Swing gate supported by LiftMaster hinges designed for swing gate\xa0 \tupto 3,000 Lbs.', 'Tousek SafeLock system with Ø23 shaft.'
    ]
  }),

  'k11-renlita-vertical-bifold': new Project({
    name: "K11 Renlita Vertical Bifold",
    date: 2019,
    thumbnail: "/projects/images/Museum_S-3000.jpg",
    description: [
      'Counter weight balanced vertical bifold door.', 'Proprietary Renlita door made in USA.', 'Motorized by LiftMaster shaft operator.', 'Weights 4 ton at 8.1m wide x 6.2m high.', 'This is one of the largest automatic vertical bifold door in Hong Kong.'
    ]
  }),

  'jockey-club-cong-hua-curved-gate': new Project({
    name: "Jockey Club Cong Hua curved gate",
    date: 2018,
    thumbnail: "projects/images/HKJC_20curved_20slide_20gate.jpg",
    description: [
      'High speed curved slide gate for 8m wide driveway.', 'Proprietary design Ø30 stainless steel curved rail.', 'Tousek motor controlled by frequency convertor for high speed operation.', 'Equipped with mechanical brake, absolute encoder and safety edges.', 'Design-and-build in record breaking 2-month lead time.'
    ]
  }),

  'proprietary-uphill-slide-gate': new Project({
    name: "Proprietary uphill slide gate",
    date: 2018,
    thumbnail: "projects/images/Up-hill.jpg",
    description: [
      'Trapezoidal shape, even gap at bottom to fit 6m wide \tdriveway.', 'Proprietary 1-way reduction gear to balance the gate in manual mode.', 'Driven by 3-phase Aprimatic motor for smooth operation.', 'Equipped with mechanical travel limits and safety edge.', 'UHF radar for automatic access control.'
    ]
  }),

  'jockey-club-tai-kwun': new Project({
    name: "Jockey Club Tai Kwun",
    date: 2018,
    thumbnail: "/projects/images/Tai_20Kwun_202.jpg",
    description: [
      'BD approval superstructure (Metal Gate).', '9m(w)x5m(h), powered by 2 Aprimatic hydraulic arms on each side.', 'The larger leaf is over 2.5T in weight.', 'This is one of the largest automatic gates in Hong Kong.', 'Built-in door-in-door for pedestrian access.'
    ]
  }),

  'k4-rated-security-gate': new Project({
    name: "K4 rated security gate",
    date: 2017,
    thumbnail: "/projects/images/K4_20elevation.jpg",
    description: [
      '7m(w)x2.4m(h) slide gate powered by 3-phase motor at \ta high-security data center in TKO.', 'K4 rated designed and built by Avon UK, our partner in rated security barriers.', 'Ideal for embassy, bank, data center.', 'GMS frame, powder coat finished.'
    ]
  }),

  'uphill-slide-gate': new Project({
    name: "Uphill slide gate",
    date: 2017,
    thumbnail: "/projects/images/Uphill_20slide_20gate.jpg",
    description: [
      'Uphill slide gate \ton 4° incline, no hang rail, 5m(w)x2.7m(h) opening.', 'Powered by Tousek frequency-converter motor for remote control access.', 'Mechanical brake holds the gate in stop position.', 'Aluminium cladded GMS frame, double-layer aluminiumtree pattern.'
    ]
  }),

  'curved-slide-gate': new Project({
    name: "Curved slide gate",
    date: 2017,
    thumbnail: "/projects/images/Curved_20Slide_20Gate_20Stanley.jpg",
    description: [
      'On-track curved slide gate, no hang rail, 5m(w)x3.2m(h) opening.', 'Powered by Tousek frequency conventer motor for remote control access.', 'Ideal for car park with no side room for normal slide gate.', 'Aluminium cladded GMS frame, aluminium grille construction.'
    ]
  }),

  '19-meter-cantilever-gate': new Project({
    name: "19 meter cantilever gate",
    date: 2017,
    thumbnail: "/projects/images/Cantilever-gate-Repulse-Bay.gif",
    description: [
      'On-slope cantilever gate, no hang rail, no ground \trail, 10m(w)x3.2m(h) opening.', 'Powered by Aprimatic 3-phase motor for remote control access.', 'Ideal for sloped car park entrance with adequate side room.', 'GMS frame, aluminium cladding inside, skew fins outside, dual color.'
    ]
  }),

  '8-meter-telescopic-gate': new Project({
    name: "8 meter telescopic gate",
    date: 2016,
    thumbnail: "/projects/images/Telescopic_20Gate.jpg",
    description: [
      'Patented telescopic gate, both leaves driven by a \tsingle motor.', 'Powered by Tousek frequency converter motor for remote control access.', 'Ideal for car park entrance with limited side room.', 'GMS frame, aluminium cladding, matching fence wall.'
    ]
  }),

  '6-meter-counter-balanced-slide-gate': new Project({
    name: "6 meter counter balanced slide gate",
    date: 2016,
    thumbnail: "/projects/images/Balanced-slide-gate.gif",
    description: [
      'On-slope slide gate, no hang rail, no ground rail, \tbalanced by counter weight.', 'Powered by Tousek frequency converter motor for remote control access.', 'Ideal for sloped car park entrance with limited side room.', 'GMS frame, aluminium cladding with operable louvers.'
    ]
  }),

  '6-meter-telescopic-gate-2': new Project({
    name: "6 meter telescopic gate",
    date: 2016,
    thumbnail: "/projects/images/Telescopic-Gate-1-Tai-Hang-Road.gif",
    description: [
      '6m slide gate GMS frame, GMS frame \twrought iron pattern, dual-color.', 'Powered by Aprimatic motor for remote control access.', 'Ideal for car park with limited side room.', '2 times faster than normal slide gate.'
    ]
  }),

  '6-meter-telescopic-gate-1': new Project({
    name: "6 meter telescopic gate",
    date: 2016,
    thumbnail: "/projects/images/Telescopic-Gate-King's-Garden.gif",
    description: [
      '6m slide gate GMS frame, aluminium double-layer \tpattern, dual-clor.', 'Powered by Aprimatic motor for remote control access.', 'Ideal for car park with limited side room.', '2 times faster than normal slide gate.'
    ]
  }),

  '8-meter-renlita-sovereign,-shek-o': new Project({
    name: "8 meter Renlita Sovereign, Shek-O",
    date: 2016,
    thumbnail: "/projects/images/Shek-O_20Slide_20Gate.jpg",
    description: [
      '8m slide gate GMS frame, aluminium double-layer \tpattern, tempered glass.', 'Powered by Aprimatic 3-phase motor for remote control access.', 'Aluminium frame and tempered glass construction for seaside salty environment.', 'Owner designed this beautiful pattern, we built the whole facade.'
    ]
  }),

  '5-meter-renlita-sovereign,-shek-o': new Project({
    name: "5 meter Renlita Sovereign, Shek-O",
    date: 2016,
    thumbnail: "/projects/images/Renlita_20Stacking_20Door.jpg",
    description: [
      'One of it kind Renlita stacking door for garage \twithout roof.', 'Powered by ZAP opener for remote control access.', 'Aluminium frame and tempered glass construction for seaside salty environment.', 'Owner designed this beautiful pattern, we built the whole facade.'
    ]
  }),

  '6-meter-fold-gates-at-holiday-inn': new Project({
    name: "6 meter fold gates at Holiday Inn",
    date: 2015,
    thumbnail: "/projects/new_images/holidayInn.jpg",
    description: [
      'Steel frame with aluminium computer-cut 3-D pattern.', 'Powered by FAAC openers for remote control access.', 'State-of-art rolling code transmission technology for remote controller ensures highest level of security.', 'We designed and built both run-in and run-out gates for this prestigious hotel.'
    ]
  }),

  '5-meter-auto-gates-at-riva': new Project({
    name: "5 meter auto gates at Riva",
    date: 2015,
    thumbnail: "/projects/new_images/Riva.jpg",
    description: [
      'Steel frame with double-layer aluminium computer-cut tree pattern.', 'Powered by LiftMaster openers for remote control access.', 'State-of-art rolling code transmission technology for remote controller ensures highest level of security.', 'We designed and built 160 sets of gate for this prestigious development.'
    ]
  }),

  'martin-doors-from-usa': new Project({
    name: "Martin Doors from USA",
    date: 2015,
    thumbnail: "/projects/new_images/Royal_20Castle.jpg",
    description: [
      'Aluminium section garage door with tempered glass top panel.', 'Matching side door with letter box.', 'Carriage style antique hardware.', 'Powered with electrically operated opener for remote control access.'
    ]
  }),

  'renlita-door-from-usa': new Project({
    name: "Renlita door from USA",
    date: 2015,
    thumbnail: "/projects/new_images/Sunny_20Hills.jpg",
    description: [
      'Balanced by count-weight, the whole door goes up as if float-away.', 'Built by Renlita USA according to ANSI standard.', 'Approved by BD.', 'Powered with electrically operated opener for remote control access.'
    ]
  }),

  '2-sets-of-swing-gates': new Project({
    name: "2 sets of swing gates",
    date: 2014,
    thumbnail: "/projects/new_images/Devon_20Road_201.jpg",
    description: [
      '6m swing gate for vehicle access.', '3m swing gate for pedestrian access.', 'Classic design in matted black.', 'Powered by underground opener for remote control access.'
    ]
  }),

  '6-meter-fold-gate-for-kadoorie-outlook': new Project({
    name: "6 meter fold gate for Kadoorie Outlook",
    date: 2014,
    thumbnail: "/projects/new_images/Julia1.jpg",
    description: [
      'Proprietary fold gate specially designed for tight space.', 'Double-layer aluminium wave pattern.', 'No hanging track required.', 'Powered by electrically operated opener for remote control access.'
    ]
  }),

  '14.5-meter-automatic-slide-gate': new Project({
    name: "14.5 meter automatic slide gate",
    date: 2014,
    thumbnail: "/projects/new_images/Pharmaceutical.jpg",
    description: [
      'Stainless steel gate 1.8T in weight approved BD.', 'Powered by LiftMaster SLY3500 for remote control access.', 'Rubber safety edge will reverse closing door when obstruction detected.', 'High tensile rail for heavy trucks.'
    ]
  }),

  '5-meter-martin-garage-doors-at-kam-sheung-road': new Project({
    name: "5 meter Martin garage doors at Kam Sheung Road",
    date: 2014,
    thumbnail: "/projects/new_images/Martin_20Athena.jpg",
    description: [
      'Martin Athena 5-section garage doors.', 'Stunningly modern with aluminium frame and tempered glass panels.', 'Powered by LiftMaster garage door opener for remote control access.', 'Metallic powder coat finish with matching louver for better ventilation.'
    ]
  }),

  '5-meter-wood-slide-gate': new Project({
    name: "5 meter wood slide gate",
    date: 2013,
    thumbnail: "/projects/new_images/Wood_20gate.jpg",
    description: [
      'Steel frame with real wood and stainless steel trim.', 'Powered by LiftMaster SLY500 opener for remote control access.', 'With matching frameless aluminium fence and GSM intercom system.'
    ]
  }),

  '5-meter-martin-garage-door-at-constellation-cove': new Project({
    name: "5 meter Martin garage door at Constellation Cove",
    date: 2013,
    thumbnail: "/projects/new_images/martin_20at_20constellation.jpg",
    description: [
      'Martin Cornerstone model 5-section garage door.', 'Windows in the top panel for better look and illumination.', 'Powered by LiftMaster garage door opener for remote control access.', '5-year warranty.'
    ]
  }),

  '8-meter-bipart-slide-gate': new Project({
    name: "8 meter bipart slide gate",
    date: 2013,
    thumbnail: "/projects/new_images/Lung_20Ha_20Wan.jpg",
    description: [
      'Steel frame with composite wood.', 'Matching pedestrian door with electric lock.', 'Powered by 2 LiftMaster SLY500 openers for remote control access.', 'Design and built in record 2-week lead time.'
    ]
  }),

  '5-meter-copper-slide-gate': new Project({
    name: "5 meter copper slide gate",
    date: 2013,
    thumbnail: "/projects/new_images/waterloo_20copper_20slide_20gate_201.jpg",
    description: [
      'Made of pure copper panel and steel frame.', 'Wicket side door for easy pedestrian access.', 'Powered by LiftMaster SLY500 opener for remote control access.'
    ]
  }),

  'slide-gates-at-valais': new Project({
    name: "Slide gates at Valais",
    date: 2013,
    thumbnail: "/projects/new_images/t1.jpg",
    description: [
      'Slide gates operated by mobile phone.', 'Rubber safety edge will reverse closing door when obstruction detected.', 'Powered by LiftMaster SLY500 opener for remote control access.'
    ]
  }),

  '4-meter-garage-door': new Project({
    name: "4 meter garage door",
    date: 2013,
    thumbnail: "/projects/new_images/Moorsom_20Drive.jpg",
    description: [
      'Automatic garage door for remote control access.', 'Wicket door for easy pedestrian access.', 'Even the wicket door is remote controlled.', 'Note the extremely small trip-free threshold.'
    ]
  }),

  '2-meter-swing-gate': new Project({
    name: "2 meter swing gate",
    date: 2013,
    thumbnail: "/projects/new_images/mantak.jpg",
    description: [
      'The gate pattern is mathematically generated and CNC cut from a 1-piece of stainless steel.', 'Wireless intercom based on GSM technology.', 'Owner can open the gate with a mobile phone.', 'Visitor using the intercom will be connected to the owner by mobile phone who can then open the gate even when he is not at phone.'
    ]
  }),

  '6-meter-swing-fold-gate': new Project({
    name: "6 meter swing-fold gate",
    date: 2013,
    thumbnail: "/projects/new_images/sheko.jpg",
    description: [
      'The architect came to Wonderlee for solution to build automatic gate at main entrance of a slope.', 'The trapezoidal middle panel folds right when open to avoid having a big gap on the downhill side if the gate were built in rectangular shape.', 'Powered by LiftMaster SUB300 opener for remote control access.'
    ]
  }),

  '4-meter-slide-gate-2': new Project({
    name: "4 meter slide gate",
    date: 2013,
    thumbnail: "/projects/new_images/CNC_20slide_20gate.jpg",
    description: [
      'The gate pattern is mathematically generated and CNC cut from a 1-piece of stainless steel.', 'The back side of the gate is covered by perforated screen to limit see-through.', 'Powered by LiftMaster SLY500 opener for remote control access.'
    ]
  }),

  '5-meter-slide-gate': new Project({
    name: "5 meter slide gate",
    date: 2013,
    thumbnail: "/projects/new_images/Royal_20Crest.jpg",
    description: [
      'We were contracted by developer to build a slide gate with matching pedestrian side gate', 'The slide gate is powered by LiftMaster SLY500 for remote-control access.', 'Mobile phone control is also installed.'
    ]
  }),

  '4-meter-slide-gate-1': new Project({
    name: "4 meter slide gate",
    date: 2013,
    thumbnail: "/projects/new_images/SHK-slide_20gate.jpg",
    description: [
      'We were contracted by Sun Hong Kai to build a mock-up slide gate for one of her development.', 'The slide gate is powered by LiftMaster SLY500 for remote-control access.', 'As-built shop-drawings were submitted for later tendering process.'
    ]
  }),

  '5-meter-fold-gate-2': new Project({
    name: "5 meter fold gate",
    date: 2013,
    thumbnail: "/projects/new_images/img6.jpg",
    description: [
      'We were contracted by Sun Hong Kai to build a mock-up fold gate for one of her development.', 'The resulting fold gate consists of 2.5 leaf on each side powered by LiftMaster SUB300 underground openers for remote-control access.', 'As-built shop-drawings were submitted for later tendering process.'
    ]
  }),

  '7-meter-fold-gate': new Project({
    name: "7 meter fold gate",
    date: 2012,
    thumbnail: "/projects/new_images/folding_20gate_201.jpg",
    description: [
      'Because of the geometry of the garden, we designed the system so that the left side folds in whilst the right side folds out.', 'The system is driven by LiftMaster SUB300 under-ground openers for remote-control access.', 'The left side can be controlled singly for pedestrian access.'
    ]
  }),

  '8-meter-slide-gate-at-singapore-international-school': new Project({
    name: "8 meter slide gate at Singapore International School",
    date: 2012,
    thumbnail: "/projects/new_images/Singapore_20school.jpg",
    description: [
      'This gate is driven by a LiftMaster SLY 1000 electric openers.', 'Security guard controls the gate with keyed switch for visitor access.', 'School personnel would access with remote control.', 'Infrared sensors, emergency-stop, flash and sounder are installed for safety compliance.'
    ]
  }),

  '5-meter-fold-gate-1': new Project({
    name: "5 meter fold gate",
    date: 2012,
    thumbnail: "/projects/new_images/fold_20gate_202.jpg",
    description: [
      'Steel framed fold gate with wood cladding and wicket door for easy pedestrian access.', 'The fold gate is powered by LiftMaster SUB500 for remote-control access.', 'The remote control can also open the wicket door separately.'
    ]
  }),

  '4-meter-1-piece-garage-door': new Project({
    name: "4 meter 1-piece garage door",
    date: 2012,
    thumbnail: "/projects/new_images/wmy.jpg",
    description: [
      'This is the first wood-looking aluminum 1-piece garage door installed in Hong Kong.', 'We designed and built this with LiftMaster LM-1000 top of the line belt drive garage door opener.', 'The frosted tempered glass panels on top of the door keep the garage well-illuminated by day.', 'The pedestrian small door makes access very easy.'
    ]
  }),

  '5-meter-bi-part-swing-gate': new Project({
    name: "5 meter bi-part swing gate",
    date: 2012,
    thumbnail: "/projects/new_images/acacia.jpg",
    description: [
      'Owners at this gated community in Lantau wanted an automatic gate to keep the cows away.', 'We designed a bi-part swing gate system with a LiftMaster SCS 300 openers.', 'Owners and tenants use remote control to control the gate with auto-close enabled.', 'The system also includes magnetic lock and keypad access side door. Please click here to see detail.'
    ]
  }),

  '4-meter-sectional-overhead-garage-door': new Project({
    name: "4 meter sectional overhead garage door",
    date: 2012,
    thumbnail: "/projects/new_images/sectional_door_flush_panel_wood.jpg",
    description: [
      'Architect contracted Wonderlee to design and build a garage door for a VIP customer.', 'The covered carport situated on a 1:18 slope.', 'We designed a level garage floor with sectional overhead garage door with wood pattern flush panel.', 'With LiftMaster garage door opener, the door operates smoothly and quietly by remote control.'
    ]
  }),

  '5-meter-bi-part-folding-gate': new Project({
    name: "5 meter bi-part folding gate",
    date: 2012,
    thumbnail: "/projects/new_images/belleview.gif",
    description: [
      'Wonderlee won the tender of this prestigious estate managed by Jones Lang LaSalle in Repulse Bay.', 'We designed a bi-part folding gate system with a LiftMaster SUB 300 openers.', 'Owners and tenants use remote control or mobile phone to control the gate.', 'The folding gate operates smoothly and quietly. Please click here to see footage.'
    ]
  }),

  '5-meter-bi-part-slide-gate': new Project({
    name: "5 meter bi-part slide gate",
    date: 2012,
    thumbnail: "/projects/new_images/wishing_tree.gif",
    description: [
      'The owner in Tai Po would like a have the gate in natural wood with matching pedestrian gate.', 'We designed a bi-part slide gate system with a LiftMaster SLY 500 openers.', 'By using a 3-button remote control, he controls the gate in car mode or either side individually.', 'We also wired up the garden light so that when the gate is activated at night with remote control, the garden light will be turned on too.'
    ]
  }),

  '5.2m-aluminum-glass-1-piece-garage-door': new Project({
    name: "5.2m Aluminum-glass 1-piece garage door",
    date: 2012,
    thumbnail: "/projects/new_images/clem1.jpg",
    description: [
      'Doors for slope are always a challenge to architects and installers.', 'We designed and built this 1-piece garage door on a 1:15 slope in Clear Water Bay.', 'The door is Aluminum frame, with Aluminum and tempered glasses infill panels.', 'Only 1-piece doors work well on a slope. Sectional garage doors and roller shutters sit on uneven ground would not work well.', 'We also built a small pedestrian door with keypad access with Aluminum frame and glasses.'
    ]
  }),

  '4.7m-aluminum-wood-like-1-piece-garage-door': new Project({
    name: "4.7m Aluminum-wood-like 1-piece garage door",
    date: 2012,
    thumbnail: "/projects/new_images/ytlane1.gif",
    description: [
      'To match the overall architecture of the buildings, the owner chose a wood looking 1-piece door for the garage on a slope.', 'The door is built with wood pattern Aluminum frame and Aluminum infill panels.', 'Only tilt doors work well on a slope. Sectional garage doors and roller shutters sit on uneven ground would not work well.', 'Tilt door opens 2 times faster than traditional garage door.'
    ]
  }),

  '4-meter-slide-gate': new Project({
    name: "4 meter slide gate",
    date: 2012,
    thumbnail: "/projects/new_images/wood_slide_gate.gif",
    description: [
      'The owner in Kam Sheung Road would like a have the gate in natural wood.', 'We designed a slide gate system with a LiftMaster SLY 300 openers.', 'By using a 3-button remote control, he controls the gate in car mode and pedestrian mode.', 'We also wired up the garden light so that when the gate is activated at night with remote control, the garden light will be turned on too.'
    ]
  }),

  '4.5m-aluminum-glass-1-piece-garage-door': new Project({
    name: "4.5m Aluminum-glass 1-piece garage door",
    date: 2012,
    thumbnail: "/projects/new_images/tinted_20glass_201.jpg",
    description: [
      'The owner in Hong Lok Yuen would like an unique garage door.', 'We designed and built this 1-piece garage door with tinted glasses.', 'The tinted glasses have a see-thru rate of 60_ from inside to outside, and about 20_ from outside to inside', 'LiftMaster LM800A garage door opener installed for quiet and smooth operation.'
    ]
  }),

  '2.7m-aluminum-wood-glass-garage-tilt-door': new Project({
    name: "2.7m Aluminum-wood-glass garage tilt door",
    date: 2012,
    thumbnail: "/projects/new_images/1-pc_wood_2.jpg",
    description: [
      'To match the stone architecture of the buildings, the developer chose a wood looking tilt door for the garages.', 'The 1-piece door is built with Aluminum frame, 1 row of frosted tempered glasses on top and 3 rows of wood infill below.', 'LiftMaster belt-drive opener is installed for smooth and quiet operation.', 'Tilt door opens 2 times faster than traditional garage door. Chick here to see more.'
    ]
  }),

  '7-meter-biparting-slide-gate': new Project({
    name: "7 meter biparting slide gate",
    date: 2011,
    thumbnail: "/projects/new_images/palm.jpg",
    description: [
      'The owner in Palm Springs would like a have the gate in natural wood.', 'We designed a biparting slide gate system with 2 LiftMaster SLY 500 openers.', 'By using a 3-button remote control, he controls the gate in car mode and pedestrian mode.', 'Tilt-proofing frame is built to ensure absolute safety.', 'Click here to see the biparting slide gate in action.'
    ]
  }),

  '4.5-meter-sectional-aluminum-glass-door': new Project({
    name: "4.5 meter sectional Aluminum-glass door",
    date: 2011,
    thumbnail: "/projects/new_images/sectional_alu_glass.jpg",
    description: [
      'The owner in Tai Po would like a trendsetting garage suitable for seaside.', 'He selected sectional Aluminum garage door with frosted tempered glass, and LiftMaster electrical opener.', 'The white Aluminum frame and frosted glass is the perfect match to the architecture of the house.', 'Click here to see it in action.'
    ]
  }),

  '2.6-meter-canopy-aluminum-glass-door': new Project({
    name: "2.6 meter canopy Aluminum-glass door",
    date: 2010,
    thumbnail: "/projects/new_images/canopy.jpg",
    description: [
      'The Owners Incorporation voted for Aluminum doors when they re-renovated the building for its aesthetic appeal.', 'Canopy doors are ideal for garages with ceiling obstruction.', 'The new doors became a landmark of the neighborhood.', 'Click here to see the canopy garage door in action.'
    ]
  }),

  '4.5-meter-aluminum-glass-garage-tilt-door': new Project({
    name: "4.5 meter Aluminum-glass garage tilt door",
    date: 2010,
    thumbnail: "/projects/new_images/1-piece_20tilt_20door.jpg",
    description: [
      'To match the architecture of the building, the owner chose matted black powder coated Aluminum frame with frosted tempered glasses.', 'The garage is well lit at day, and becomes an amazingly beautiful scene at night when light turned on inside.', 'LiftMaster belt-drive opener is installed for smooth and quiet operation.', 'Click here to see 1-piece tilt door in action.'
    ]
  }),

  '3.6-meter-bi-parting-wooden-swing-gate': new Project({
    name: "3.6 meter bi-parting wooden swing gate",
    date: 2009,
    thumbnail: "/projects/new_images/bi-part_swing.jpg",
    description: [
      'Because of wind load consideration, we designed this wooden swing gate with steel frame.', 'The gates are hinged into the ground as the 40cm x 40cm pillars would not be strong enough to support the heavy gates at 200 Kg per leaf.', 'LiftMaster LYN 400 swing gate opener is installed.', 'See how we painstakingly making the gate at our well lit factory'
    ]
  }),

  '3.8-meter-bi-parting-wrought-iron-swing-gate': new Project({
    name: "3.8 meter bi-parting wrought iron swing gate",
    date: 2009,
    thumbnail: "/projects/new_images/bipart_4.gif",
    description: [
      'Each leaf can be controlled independently or jointly with a 3-button remote control.', 'Top channel is added to ensure absolute safety', '2 LiftMaster SLY 300 slide gate opener is installed.', 'Click here to see it in action.'
    ]
  }),

  'steel-garage-door': new Project({
    name: "Steel garage door",
    date: 2009,
    thumbnail: "/projects/new_images/before-psd.jpg",
    description: [
      'The new owner in Happy Valley inherited a roller shutter when he moved in.', 'He ordered a galvanized steel sectional garage door with LiftMaster electrical opener.', 'The sectional garage door is also a good 2" higher than the roller shutter next door.', 'Click here to take an inside look.'
    ]
  }),

  'aluminum-glass-garage-door': new Project({
    name: "Aluminum-glass garage door",
    date: 2008,
    thumbnail: "/projects/new_images/before_glass-psd.jpg",
    description: [
      'The owner in Stanley would like a trendsetting garage suitable for seaside environment.', 'He selected Clopay Aluminum garage door with frosted tempered glass, and LiftMaster electrical opener.', 'Aluminum and glass stand up perfectly against salty sea wind.', 'The white Aluminum frame and frosted glass is the perfect match to the architecture of the house.'
    ]
  }),

  'stainless-steel-and-wood-sliding-gate': new Project({
    name: "Stainless steel and wood sliding gate",
    date: 2008,
    thumbnail: "/projects/new_images/factory-psd.jpg",
    description: [
      'The owner in Sai Kung ordered a 5 meter stainless steel and wood slide gate to match the architecture of her house.', 'LiftMaster automatic slide gate opener was deployed to move this 500 Kg heavy gate.', 'Rail and roller system was installed. Because the weight of the gate, the rail sank almost 5mm. During this inertial period of 3 months, adjustments were needed.', 'After the ground settled, the gate works smoothly.'
    ]
  }),

  'stainless-steel-and-glass-swing-gate': new Project({
    name: "Stainless steel and glass swing gate",
    date: 2007,
    thumbnail: "/projects/new_images/before_swing_en.jpg",
    description: [
      'The owner would like an automatic gate when he moved into his newly acquired house in Fairview Park.', 'We recommended LiftMaster swing gate opener and stainless steel-glass gate design.', 'He opens the gate with remote control in his car when he comes home. An envy of his neigbours on rainy days.', 'Click here to see how it works.'
    ]
  }),
};
export default projects;
