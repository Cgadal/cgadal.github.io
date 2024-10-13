// TODO Add a couple lines about each project
const data = [
  {
    shorttitle: 'Sand dune patterns and dynamics',
    title: 'From a hydrodynamic instability to dune patterns shaping sand seas.',
    image: '/images/projects/DunePanorama_small.jpg',
    date: '',
    link: '/projects/dune',
    desc: 'Dunes gathering at the bottom of a small mountain in the Taklamacan desert, in China [@ClémentNarteau]',
    content: 'Sand seas are easily recognizable in our solar system thanks to the patterns resulting from the self-organization of the dunes that compose them. However, a quantitative description of the emergence and evolution of these patterns is only available in simplified situations (constant unidirectional wind, homogeneous spatial conditions, etc.). We therefore seek to improve these theoretical descriptions by integrating the influence of various external parameters, such as seasonal wind variations or dune field edge conditions. By doing so, a reliable interpretation of field data in many different situations can be achieved, leading for example to a better prediction of the evolution of dunes and sand seas, but also to the deduction of environmental parameters (wind regime, sediment properties) from observations of dunes on satellite images in places where direct observations are not possible, like Mars or Venus.',
    points: [
      'Theoretical description of dune morphodynamics (instabilities, non-linearities)',
      'Numerical work and experiments',
      'Brindging the gap between theory/lab work and field data (elevation, meteorological)',
    ],
  },
  {
    shorttitle: 'Particle-laden gravity currents.',
    title: 'Particle-laden gravity currents.',
    image: '/images/projects/avalanche_crop.jpg',
    date: '',
    link: '/projects/turbidity',
    desc: 'Powder snow avalanche at the Zinal ski station, in Switzerland.',
    content: 'Particle-laden gravity currents, or turbidity currents, are currents driven by a density difference induced by the presence of suspended particles (e.g. sand, snow, dust). They exist in a variety of environments, such as in the oceans, where sand mixes with water to generate currents capable of destroying underwater infrastructure, or near volcanoes, where hot ash released during eruptions becomes deadly pyroclastic currents. Their dynamics involve interactions on a range of spatial and temporal scales, from the particles to the turbulent structures of the flow, to the current itself and the topography of the underlying landscape.  In the laboratory, we study simplified situations, trying to isolate the impact of each process on the current dynamics. This allows us to create models (i.e. depth averages), which can then be used to assess the destructive potential in real/natural situations.',
    points: [
      'Experimental work, Ultrasound measurements',
      'Shallow water modelling',
      'Focus on the influence of particle buoyancy',
    ],
  },
  {
    shorttitle: 'Complex systems, patterns and morphogenesis',
    title: 'Spontaneous emergence of regular structures in complex systems.',
    image: '/videos/thumbnails/manip_video.jpg',
    date: '',
    link: '/projects/pattern',
    desc: 'Regular dune pattern emerging from a flat sand bed sheared by a turbulent flow.',
    content: <span> Complex systems consist of many components that interacts among them. These systems can also be multi-scales, meaning that each component of the system can also be a whole new complex system. This, in addition to the large number of components and/or interactions, often makes it difficult to study such systems and predict their future. However, these system can also self-organize, leading to the emergence of regular structures. This emergence can not be understood/predicted from the isolated components of the system only, but directly results from their interactions. Some examples are waves (regular structures at the water surface), cristals (regular arrangment of atoms) or the 'rosette' spots of a jaguar. <br />As for me, I mainly focused on the self-organisatin of sand grains in various regular structures names "dunes". Their obiquity in many different environments (underwater, deserts, snow, Mars, ...) suggests some universality in the mechanisms that leads to the emergence of specific shapes and patterns. Currently, I am focusing on patterns emerging from dense granular flows (e.g. avalanches of rocks) in the presence of additional processes, as cohesion between the grains or the presence of different grain sizes. <br /><br /> If you want to know more, the websites <a href="https://complexityexplained.github.io/">#Complexityexplained </a> and <a href="https://www.complexity-explorables.org/">Complexity Explorables </a> gives explanations and toy models for a large number of systems.</span>,
    points: [
      'Isolating the mechanisms at the origin of pattern emergence',
      'Coupling experiments, numerical simulations and mathematical modelling',
    ],
  },
];

export default data;
