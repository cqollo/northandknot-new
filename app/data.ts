import { Project, Testimonial, Stat, ProcessStep } from './types';

export const projects: Project[] = [
  { id:1, name:'Long grain dining table', cat:'tables', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', desc:'An eight-seater in solid Mvule with hand-cut mortise-and-tenon legs. Finished in raw linseed oil to deepen the grain.', wood:'Mvule', time:'10 weeks', size:'220 × 100 cm' },
  { id:2, name:'Low lounge chair', cat:'chairs', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', desc:'A reclining lounge chair in European Walnut with Danish-cord seating. Joints are wedged tenons — no hardware.', wood:'European Walnut', time:'6 weeks', size:'Single' },
  { id:3, name:'Workshop cabinet', cat:'storage', img:'https://images.unsplash.com/photo-1595515106969-1ce1a7c9d8c4?w=800&q=80', desc:'A tall workshop cabinet for a home studio. Solid Pine carcass with Walnut-faced doors. Piano hinges throughout.', wood:'Pine / Walnut', time:'5 weeks', size:'180 × 80 × 45 cm' },
  { id:4, name:'Platform bed frame', cat:'beds', img:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80', desc:'A low-profile platform bed in Elgon Olive. Headboard with integrated lighting channel. Ships in four sections.', wood:'Elgon Olive', time:'8 weeks', size:'Queen / King' },
  { id:5, name:'Stool trio', cat:'chairs', img:'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80', desc:'Three stools in varying heights, Ash and Podo. Angled legs with wedged tenons. Made for a Westlands coffee shop.', wood:'Ash & Podo', time:'4 weeks', size:'Set of 3' },
  { id:6, name:'Heirloom keepsake box', cat:'objects', img:'https://images.unsplash.com/photo-1576082657766-b5f2c65c0b30?w=800&q=80', desc:'A small keepsake box in figured Maple with hand-cut dovetails and a brass latch. A wedding commission.', wood:'Figured Maple', time:'2 weeks', size:'30 × 20 × 15 cm' },
  { id:7, name:'Round coffee table', cat:'tables', img:'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80', desc:'Book-matched Walnut top on three tapered legs at 8° for visual lightness. Oil-and-wax finish.', wood:'Walnut', time:'4 weeks', size:'Ø 90 cm' },
  { id:8, name:'Floating shelf series', cat:'storage', img:'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80', desc:'Five floating shelves in Mvule with a concealed bracket system. Installed in a residential library in Runda.', wood:'Mvule', time:'3 weeks', size:'Various lengths' },
  { id:9, name:'Nursery rocking chair', cat:'chairs', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', desc:'A classic nursing rocker in White Oak with a cushioned linen seat. Curved back slats steam-bent over a form.', wood:'White Oak', time:'7 weeks', size:'Single' },
  { id:10, name:'Console & mirror', cat:'objects', img:'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80', desc:'A slender hallway console in Podo with a bespoke mirror frame. Splined mitre corners on the mirror surround.', wood:'Podo', time:'4 weeks', size:'120 × 35 × 80 cm' },
  { id:11, name:'Bunk bed with ladder', cat:'beds', img:'https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=800&q=80', desc:'A solid Mvule bunk bed for two children. Safety rail and ladder integrated into the design from the start.', wood:'Mvule', time:'9 weeks', size:'Twin / Twin' },
  { id:12, name:'Writing desk', cat:'tables', img:'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80', desc:'English Oak writing desk on turned legs. Thin top, single full-width drawer with hand-cut dovetails.', wood:'English Oak', time:'6 weeks', size:'140 × 65 cm' },
  { id:13, name:'Kitchen island', cat:'tables', img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', desc:'Walnut top on a painted MDF carcass. Integrated knife block and towel rail. Overhang for bar seating.', wood:'Walnut / MDF', time:'6 weeks', size:'180 × 90 cm' },
  { id:14, name:'Corner bookcase', cat:'storage', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', desc:'Floor-to-ceiling corner bookcase built into a Victorian alcove. Adjustable shelving throughout.', wood:'Pine', time:'5 weeks', size:'Bespoke fit' },
  { id:15, name:'Serving board set', cat:'objects', img:'https://images.unsplash.com/photo-1556040220-4096d522378d?w=800&q=80', desc:'End-grain serving boards in Walnut, Maple, and Cherry from offcuts. Juice groove routed by hand.', wood:'Mixed hardwoods', time:'1 week', size:'Set of 3' },
  { id:16, name:'Wardrobe with sliding doors', cat:'storage', img:'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80', desc:'Fitted wardrobe in Elgon Olive veneer ply with solid timber edging. Soft-close sliding doors on top-hung hardware.', wood:'Elgon Olive', time:'8 weeks', size:'Bespoke fit' },
];

export const categories = ['all', 'tables', 'chairs', 'storage', 'beds', 'objects'];

export const stats: Stat[] = [
  { num: '12', label: 'Years crafting' },
  { num: '200+', label: 'Pieces made' },
  { num: '8', label: 'Wood species' },
  { num: '100%', label: 'Hand-finished' },
];

export const processSteps: ProcessStep[] = [
  { numeral: 'I', title: 'Consultation', desc: 'We talk about the space, the use, and the feel you\'re after. We land on a brief together before anything else happens.' },
  { numeral: 'II', title: 'Design & drawing', desc: 'Hand-drawn sketches, then technical drawings. You see exactly what you\'re getting before I touch a single board.' },
  { numeral: 'III', title: 'Wood selection', desc: 'I source timber personally — often from mills I\'ve worked with for a decade. The wood rests and settles before work begins.' },
  { numeral: 'IV', title: 'Build', desc: 'Traditional joinery, hand tools alongside machines where it matters. Progress photos keep you in the loop.' },
  { numeral: 'V', title: 'Finish & deliver', desc: 'Multiple coats, hand-rubbed between each one. Delivery and placement handled personally. Nothing leaves early.' },
];

export const testimonials: Testimonial[] = [
  { quote: 'The dining table James made for us is the most admired piece in the house. Three years on and it looks better than the day it arrived.', author: 'Amina Waweru', role: 'Homeowner, Karen, Nairobi' },
  { quote: 'We commissioned a full home office suite. His process is meticulous, his communication excellent, and the outcome exceeded our brief considerably.', author: 'David Muchiri', role: 'Architect, DMA Studios' },
  { quote: 'One of the very few craftspeople in Nairobi who truly understands how wood behaves long-term. I recommend him to every client.', author: 'Njeri Kamau', role: 'Interior Designer, Studio Kamau' },
];
