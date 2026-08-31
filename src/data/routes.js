// Approximate one-way drive times (per direction). All trips are quoted as
// round-trip outstation unless the customer specifically asks otherwise.
export const routeCategories = ['All', 'Pilgrimage', 'Heritage', 'Cities', 'Hill Stations']

export const routes = [
   { id: 'pune', to: 'Pune', category: 'Cities', hours: '4.5–5 hrs' },
  { id: 'mumbai', to: 'Mumbai', category: 'Cities', hours: '6.5–7 hrs' },
  { id: 'nashik', to: 'Nashik', category: 'Cities', hours: '3.5 hrs' },
  { id: 'shirdi', to: 'Shirdi', category: 'Pilgrimage', hours: '2.5–3 hrs' },
  { id: 'ajanta-route', to: 'Ajanta Caves', category: 'Heritage', hours: '2 hrs' },
  { id: 'ellora-route', to: 'Ellora Caves', category: 'Heritage', hours: '45 min' },
  { id: 'daulatabad-route', to: 'Daulatabad Fort', category: 'Heritage', hours: '30 min' },
  { id: 'paithan', to: 'Paithan', category: 'Heritage', hours: '1 hr' },
  { id: 'lonavala', to: 'Lonavala', category: 'Hill Stations', hours: '5.5 hrs' },
  { id: 'ahilyanagar', to: 'Ahilyanagar', category: 'Cities', hours: '2.5 hrs' },
  { id: 'trimbakeshwar', to: 'Trimbakeshwar', category: 'Pilgrimage', hours: '4 hrs' },
  { id: 'bhimashankar', to: 'Bhimashankar', category: 'Pilgrimage', hours: '4.5 hrs' },
  { id: 'tuljapur', to: 'Tuljapur', category: 'Pilgrimage', hours: '3.5 hrs' },
  { id: 'pandharpur', to: 'Pandharpur', category: 'Pilgrimage', hours: '4.5 hrs' },
  { id: 'aundhanagnath', to: 'Aundha Nagnath', category: 'Pilgrimage', hours: '4.5 hrs' },
  { id: 'parlivaijnath', to: 'Parli Vaijnath', category: 'Pilgrimage', hours: '4 hrs' },
  { id: 'akkalkot', to: 'Akkalkot', category: 'Pilgrimage', hours: '5.5 hrs' },
  { id: 'lonar', to: 'Lonar Lake', category: 'Heritage', hours: '3 hrs' },
  { id: 'nagpur', to: 'Nagpur', category: 'Cities', hours: '8.5 hrs' },
  { id: 'jalna', to: 'Jalna', category: 'Cities', hours: '1.5 hrs' },
  { id: 'beed', to: 'Beed', category: 'Cities', hours: '2.5 hrs' },
  { id: 'nanded', to: 'Nanded', category: 'Cities', hours: '5.5 hrs' },
  { id: 'dhule', to: 'Dhule', category: 'Cities', hours: '3 hrs' },
  { id: 'kolhapur', to: 'Kolhapur', category: 'Cities', hours: '8 hrs' },
  { id: 'mahabaleshwar', to: 'Mahabaleshwar', category: 'Hill Stations', hours: '6.5 hrs' },
  { id: 'panchgani', to: 'Panchgani', category: 'Hill Stations', hours: '6.5 hrs' },
  { id: 'matheran', to: 'Matheran', category: 'Hill Stations', hours: '6 hrs' },
]
