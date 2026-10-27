// Central registry of every media asset (posters = original Stitch images,
// videos = royalty-free Mixkit clips matched to each image's description).
const P = (name, ext = 'jpg') => `/media/posters/${name}.${ext}`;
const V = (name) => `/media/video/${name}.mp4`;

export const LOGO = P('logo', 'png');
export const EMBLEM = P('emblem', 'png');

export const media = {
  monitor: { poster: P('monitor-tokyo'), src: V('monitor-tokyo'), alt: 'Tokyo at night in heavy rain, neon reflections on wet asphalt' },

  binShibuya: { poster: P('bin-shibuya'), src: V('bin-shibuya'), alt: 'Neon Shibuya crossing at night' },
  binAlley: { poster: P('bin-alley'), src: V('bin-alley'), alt: 'Cyberpunk alley with glowing Japanese neon signs' },
  binPortrait: { poster: P('bin-portrait'), src: V('bin-portrait'), alt: 'Portrait lit by pink neon light' },
  binTunnel: { poster: P('bin-tunnel'), src: V('bin-tunnel'), alt: 'Car speeding through an illuminated tunnel' },

  stageTimeline: { poster: P('stage-timeline'), src: V('stage-timeline'), alt: 'Video editing timeline with waveforms and playhead' },
  stageColor: { poster: P('stage-color'), src: V('stage-color'), alt: 'Color grading flat footage into a cinematic look' },
  stageExport: { poster: P('stage-export'), src: V('stage-export'), alt: 'Exporting a finished edit on a workstation' },

  gNordic: { poster: P('g-nordic'), src: V('g-nordic'), alt: 'Icelandic black sand beach with dramatic mountains' },
  gFashion: { poster: P('g-fashion'), src: V('g-fashion'), alt: 'High fashion studio shoot' },
  gDesk: { poster: P('g-desk'), src: V('g-desk'), alt: 'Tech creator desk setup' },
  gWatch: { poster: P('g-watch'), src: V('g-watch'), alt: 'Macro shot of a luxury watch' },
  gRain: { poster: P('g-rain'), src: V('g-rain'), alt: 'Woman looking out a rain-spattered window' },
  gMtb: { poster: P('g-mtb'), src: V('g-mtb'), alt: 'Mountain biker catching air on a forest ridge' },

  tTitle: { poster: P('t-title'), src: V('t-title'), alt: 'Cinematic title over misty mountains' },
  tDoc: { poster: P('t-doc'), src: V('t-doc'), alt: 'Documentary-style behind the scenes footage' },
  tReel: { poster: P('t-reel'), src: V('t-reel'), alt: 'Vertical social reel of a creator talking to camera' },
  tProduct: { poster: P('t-product'), src: V('t-product'), alt: 'Sleek product showcase with neon lasers' },

  compareAfter: { poster: P('compare-after'), src: V('compare'), alt: 'Color graded night city street' },
  compareBefore: { poster: P('compare-before'), src: V('compare'), alt: 'Flat, ungraded log footage of the same street' },
};
