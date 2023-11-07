export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Wonderlee-Crew.jpg","Wonderlee-Crew.png","animations/34_1.gif","animations/canopy_garage.gif","animations/fold_gate_button.gif","animations/sectional_garage.gif","favicon.png","fonts/Roboto/LICENSE.txt","fonts/Roboto/Roboto-Black.ttf","fonts/Roboto/Roboto-BlackItalic.ttf","fonts/Roboto/Roboto-Bold.ttf","fonts/Roboto/Roboto-BoldItalic.ttf","fonts/Roboto/Roboto-Italic.ttf","fonts/Roboto/Roboto-Light.ttf","fonts/Roboto/Roboto-LightItalic.ttf","fonts/Roboto/Roboto-Medium.ttf","fonts/Roboto/Roboto-MediumItalic.ttf","fonts/Roboto/Roboto-Regular.ttf","fonts/Roboto/Roboto-Thin.ttf","fonts/Roboto/Roboto-ThinItalic.ttf","fonts/TASA-Collection/.DS_Store","fonts/TASA-Collection/TASA Explorer/.DS_Store","fonts/TASA-Collection/TASA Explorer/OFL.txt","fonts/TASA-Collection/TASA Explorer/README.pdf","fonts/TASA-Collection/TASA Explorer/otf (static)/.DS_Store","fonts/TASA-Collection/TASA Explorer/otf (static)/TASAExplorer-Black.otf","fonts/TASA-Collection/TASA Explorer/otf (static)/TASAExplorer-Bold.otf","fonts/TASA-Collection/TASA Explorer/otf (static)/TASAExplorer-Medium.otf","fonts/TASA-Collection/TASA Explorer/otf (static)/TASAExplorer-Regular.otf","fonts/TASA-Collection/TASA Explorer/otf (static)/TASAExplorer-SemiBold.otf","fonts/TASA-Collection/TASA Explorer/woff2 (VF)/.DS_Store","fonts/TASA-Collection/TASA Explorer/woff2 (VF)/TASAExplorerVF.woff2","fonts/TASA-Collection/TASA-Orbiter/.DS_Store","fonts/TASA-Collection/TASA-Orbiter/OFL.txt","fonts/TASA-Collection/TASA-Orbiter/README.pdf","fonts/TASA-Collection/TASA-Orbiter/otf/.DS_Store","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterDeck-Bold.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterDeck-Medium.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterDeck-Regular.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterDeck-SemiBold.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterDisplay-Black.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterDisplay-Bold.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterDisplay-Medium.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterDisplay-Regular.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterDisplay-SemiBold.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterText-Bold.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterText-Medium.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterText-Regular.otf","fonts/TASA-Collection/TASA-Orbiter/otf/TASAOrbiterText-SemiBold.otf","fonts/TASA-Collection/TASA-Orbiter/woff2 (VF)/.DS_Store","fonts/TASA-Collection/TASA-Orbiter/woff2 (VF)/TASAOrbiterVF.woff2","fonts/publicasans/PublicaSans-Black.otf","fonts/publicasans/PublicaSans-BlackItalic.otf","fonts/publicasans/PublicaSans-Bold.otf","fonts/publicasans/PublicaSans-BoldItalic.otf","fonts/publicasans/PublicaSans-ExtraBold.otf","fonts/publicasans/PublicaSans-ExtraBoldItalic.otf","fonts/publicasans/PublicaSans-ExtraLight.otf","fonts/publicasans/PublicaSans-ExtraLightItalic.otf","fonts/publicasans/PublicaSans-Italic.otf","fonts/publicasans/PublicaSans-Light.otf","fonts/publicasans/PublicaSans-LightItalic.otf","fonts/publicasans/PublicaSans-Medium.otf","fonts/publicasans/PublicaSans-MediumItalic.otf","fonts/publicasans/PublicaSans-Thin.otf","fonts/publicasans/PublicaSans-ThinItalic.otf","fonts/publicasans/PublicaSans-UltraLight.otf","fonts/publicasans/PublicaSans-UntraLightItalic.otf","fonts/publicasans/ZPublicaSans.otf","images/146_Waterloo.jpg","images/2013-07-17 16.43.45.jpg","images/2_Beacon_Hill_Road.jpg","images/75_Deep_Water_Bay.jpg","images/BD_Class-1-1.jpg","images/Crew_2021.jpg","images/Crew_2021_clip.jpeg","images/DB_Phase_17_B.jpg","images/Devon_Road .jpg","images/Dragon_F.jpeg","images/EMSD_REC.jpg","images/Holiday_Inn_Dundas_Street.jpg","images/Hong_Lok_Yuen(1).jpg","images/Patent-01.png","images/Patent-02.png","images/Patent-03.png","images/Patent-04.png","images/Shiu Fai Terrace Aluminum Slide Gate.jpg","images/Sino Main Entrance.jpg","images/Sun_Hung_Kai_Riva_slide_gates.jpg","images/Sun_Hung_Kai_Riva_swing_gates.jpg","images/Telescopic Gate King_s Garden.jpg","pre_mockup_designs/chosen designs/design_1.png","pre_mockup_designs/chosen designs/design_2.png","pre_mockup_designs/chosen designs/design_3.png","pre_mockup_designs/chosen designs/design_4.png","pre_mockup_designs/chosen designs/merged_designs.png","pre_mockup_designs/design_3 (2).png","pre_mockup_designs/design_4 (2).png","pre_mockup_designs/garage_ref.png","products/avon-barriers/65750-2568855.jpg","products/avon-barriers/PAS68_test_scenes.jpg","products/avon-barriers/PAS68_test_scenes_1.jpg","products/avon-barriers/SB970CR-Scmitar-Bollards-automatic-1.jpg","products/avon-barriers/SG1100CR_1.jpg","products/avon-barriers/thumbnail.jpg","products/commercial-doors/33_1.gif","products/commercial-doors/35_3.gif","products/commercial-doors/37_1.gif","products/commercial-doors/re1.gif","products/commercial-doors/re2.gif","products/commercial-doors/revolving/thumbnail.jpg","products/commercial-doors/slide_1.gif","products/commercial-doors/sliding/thumbnail.jpg","products/commercial-doors/swinging/thumbnail.jpg","products/commercial-doors/teraoka.gif","products/garage-doors/canopy/1-piece_ani.gif","products/garage-doors/canopy/canopy1.jpg","products/garage-doors/canopy/canopybig_200.gif","products/garage-doors/canopy/thumbnail.jpg","products/garage-doors/martin/Garage-Door-Inside-100.gif","products/garage-doors/martin/Martin-Logo-1936.gif","products/garage-doors/martin/UL-Logo_BK.gif","products/garage-doors/martin/martin.gif","products/garage-doors/martin/multi-layer-coating.jpg","products/garage-doors/martin/thumbnail.jpg","products/garage-doors/sectional/3-d-GARAGE.gif","products/garage-doors/sectional/Garage-door-GIF.gif","products/garage-doors/sectional/img13.jpg","products/garage-doors/sectional/thumbnail.jpg","products/renlita-doors/floataway-1.jpg","products/renlita-doors/floataway-2.jpg","products/renlita-doors/foldaway-1.jpg","products/renlita-doors/foldaway-2.jpg","products/renlita-doors/frameless-glass-1.jpg","products/renlita-doors/frameless-glass-2.jpg","products/renlita-doors/hingeway-1.jpg","products/renlita-doors/hingeway-2.jpg","products/renlita-doors/nufold-1.jpg","products/renlita-doors/nufold-2.jpg","products/renlita-doors/sovereign-1.jpg","products/renlita-doors/sovereign-2.jpg","products/renlita-doors/thumbnail.jpg","products/residential-gates/folding/thumbnail.jpg","products/residential-gates/folding/typical_fold.gif","products/residential-gates/sliding/Cantilever_gate_1.gif","products/residential-gates/sliding/Cantilever_gate_2.gif","products/residential-gates/sliding/Catalog-3-slide-gate.gif","products/residential-gates/sliding/SSW-110-1.gif","products/residential-gates/sliding/TELESCOPIC.gif","products/residential-gates/sliding/Telescopic_button.gif","products/residential-gates/sliding/ssw_curved.gif","products/residential-gates/sliding/thumbnail.jpg","products/residential-gates/sliding/uphill_button.gif","products/residential-gates/swinging/180.gif","products/residential-gates/swinging/DB-Phase-17-House-A-photo.gif","products/residential-gates/swinging/Swing-arms.gif","products/residential-gates/swinging/Swing_arm.gif","products/residential-gates/swinging/ani-gate.gif","products/residential-gates/swinging/ped2159.gif","products/residential-gates/swinging/thumbnail.jpg","products/residential-gates/swinging/underground.gif","products/secret-doors/secret_door1.gif","products/secret-doors/secret_door2.gif","products/secret-doors/thumbnail.jpg","products/shutter-doors/fire/Westwood-Fire-Shutters.jpg","products/shutter-doors/fire/fire-shutter.jpg","products/shutter-doors/fire/thumbnail.jpg","products/shutter-doors/roller/roller-shutter.gif","products/shutter-doors/roller/roller_ani.gif","products/shutter-doors/roller/thumbnail.jpg","projects/images/Balanced-slide-gate.gif","projects/images/Balanced-slide-gate.webp","projects/images/Cantilever-gate-Repulse-Bay.gif","projects/images/Cantilever-gate-Repulse-Bay.webp","projects/images/Curved_20Slide_20Gate_20Stanley.webp","projects/images/HKJC_20curved_20slide_20gate.webp","projects/images/K4_20elevation.webp","projects/images/Museum_S-3000.webp","projects/images/Renlita_20Stacking_20Door.webp","projects/images/Shek-O_20Slide_20Gate.webp","projects/images/Tai_20Kwun_202.webp","projects/images/Telescopic-Gate-1-Tai-Hang-Road.gif","projects/images/Telescopic-Gate-1-Tai-Hang-Road.webp","projects/images/Telescopic-Gate-King's-Garden.gif","projects/images/Telescopic-Gate-King's-Garden.webp","projects/images/Telescopic_20Gate.webp","projects/images/Up-hill.webp","projects/images/Uphill_20slide_20gate.webp","projects/new_images/1-pc_wood_2.webp","projects/new_images/1-piece_20tilt_20door.webp","projects/new_images/228.webp","projects/new_images/75_DWBR_1.webp","projects/new_images/Beacon_Hill_On_Slope.webp","projects/new_images/CNC_20slide_20gate.webp","projects/new_images/Devon_20Road_201.webp","projects/new_images/Grand_Garden.webp","projects/new_images/HKDI_3-leaf_telescopic_1.webp","projects/new_images/Julia1.webp","projects/new_images/Lung_20Ha_20Wan.webp","projects/new_images/Martin_20Athena.webp","projects/new_images/Moorsom_20Drive.webp","projects/new_images/Pharmaceutical.webp","projects/new_images/Riva.webp","projects/new_images/Royal_20Castle.webp","projects/new_images/Royal_20Crest.webp","projects/new_images/SHK-slide_20gate.webp","projects/new_images/Singapore_20school.webp","projects/new_images/Square_Mile_Renlita_1.webp","projects/new_images/St._Paul.webp","projects/new_images/Sunny_20Hills.webp","projects/new_images/Wood_20gate.webp","projects/new_images/acacia.webp","projects/new_images/before-psd.webp","projects/new_images/before_glass-psd.webp","projects/new_images/before_swing_en.webp","projects/new_images/belleview.gif","projects/new_images/belleview.webp","projects/new_images/bi-part_swing.webp","projects/new_images/bipart_4.gif","projects/new_images/bipart_4.webp","projects/new_images/canopy.webp","projects/new_images/clem1.webp","projects/new_images/factory-psd.webp","projects/new_images/fold_20gate_202.webp","projects/new_images/folding_20gate_201.webp","projects/new_images/holidayInn.webp","projects/new_images/img6.webp","projects/new_images/mantak.webp","projects/new_images/martin_20at_20constellation.webp","projects/new_images/palm.webp","projects/new_images/sectional_alu_glass.webp","projects/new_images/sectional_door_flush_panel_wood.webp","projects/new_images/sheko.webp","projects/new_images/t1.webp","projects/new_images/tinted_20glass_201.webp","projects/new_images/waterloo_20copper_20slide_20gate_201.webp","projects/new_images/wishing_tree.gif","projects/new_images/wishing_tree.webp","projects/new_images/wmy.webp","projects/new_images/wood_slide_gate.gif","projects/new_images/wood_slide_gate.webp","projects/new_images/ytlane1.gif","projects/new_images/ytlane1.webp","wonderlee_sitemap-1.pdf","wonderlee_sitemap-1.svg","wonderlee_sitemap.md"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".gif":"image/gif",".txt":"text/plain",".ttf":"font/ttf",".pdf":"application/pdf",".otf":"font/otf",".woff2":"font/woff2",".jpeg":"image/jpeg",".webp":"image/webp",".svg":"image/svg+xml",".md":"text/markdown"},
	_: {
		client: {"start":"_app/immutable/entry/start.f1ee582d.js","app":"_app/immutable/entry/app.79f56a83.js","imports":["_app/immutable/entry/start.f1ee582d.js","_app/immutable/chunks/scheduler.aefdcbfb.js","_app/immutable/chunks/singletons.bd2da450.js","_app/immutable/entry/app.79f56a83.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.aefdcbfb.js","_app/immutable/chunks/index.98882bb9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/legal/licenses",
				pattern: /^\/legal\/licenses\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/legal/privacy",
				pattern: /^\/legal\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/legal/terms",
				pattern: /^\/legal\/terms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/our-work",
				pattern: /^\/our-work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/products/avon-barriers",
				pattern: /^\/products\/avon-barriers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/products/commercial-doors",
				pattern: /^\/products\/commercial-doors\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/products/garage-doors/canopy",
				pattern: /^\/products\/garage-doors\/canopy\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/products/garage-doors/martin",
				pattern: /^\/products\/garage-doors\/martin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/products/garage-doors/sectional",
				pattern: /^\/products\/garage-doors\/sectional\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/products/renlita-doors",
				pattern: /^\/products\/renlita-doors\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/products/residential-gates/folding",
				pattern: /^\/products\/residential-gates\/folding\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/products/residential-gates/sliding",
				pattern: /^\/products\/residential-gates\/sliding\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/products/residential-gates/swinging",
				pattern: /^\/products\/residential-gates\/swinging\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/products/secret-doors",
				pattern: /^\/products\/secret-doors\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/products/shutter-doors/fire",
				pattern: /^\/products\/shutter-doors\/fire\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/products/shutter-doors/roller",
				pattern: /^\/products\/shutter-doors\/roller\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
