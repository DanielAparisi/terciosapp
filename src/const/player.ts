export const PORTERO = [
  { id: "Cocera", name: "Asier Cocera", role: "Portero" },
];
export const PRESIDENTE = [
  { id: "Presi", name: "Hugo Albert", role: "Presidente" },
];
export const DEFENSAS = [
  { id: "Iker", name: "Iker López", role: "Defensa" },
  { id: "Samuel", name: "Samuel Sanz", role: "Defensa" },
  { id: "Priego", name: "Pablo Priego", role: "Defensa" },
  { id: "Antonio", name: "Antonio Muñoz", role: "Defensa" },
  { id: "Marco", name: "Marco García", role: "Defensa" },
  { id: "Hugo", name: "Hugo Martínez", role: "Defensa" },
  { id: "Manuel", name: "Manuel Plata", role: "Defensa" },
  { id: "Gabi", name: "Gabriel Pereira", role: "Defensa" },
];
export const MEDIOCENTRO = [
  { id: "Crespo", name: "Adrián Crespo", role: "MedioCentro" },
  { id: "Sergio", name: "Sergio Rodriguez", role: "MedioCentro" },
  { id: "Charlie", name: "Carlos Villa", role: "MedioCentro" },
];
export const DELANTERO = [
  { id: "Capi", name: "Alejandro González", role: "Delantero" },
  { id: "Marcos", name: "Marcos Albert", role: "Delantero" },
  { id: "Héctor", name: "Héctor González", role: "Delantero" },
  { id: "Apa", name: "Daniel Aparisi", role: "Delantero" },
  { id: "Risco", name: "Pablo Risco", role: "Delantero" },
];
export const JUGADORES = [
  { id: "Presi", name: "Hugo Albert", role: "Presidente" },
  { id: "Capi", name: "Alejandro González", role: "Delantero" },
  { id: "Cocera", name: "Asier Cocera", role: "Portero" },
  { id: "Sergio", name: "Sergio Rodriguez", role: "MedioCentro" },
  { id: "Apa", name: "Daniel Aparisi", role: "Delantero" },
  { id: "Manuel", name: "Manuel Plata", role: "Defensa" },
  { id: "Iker", name: "Iker López", role: "Defensa" },
  { id: "Samuel", name: "Samuel Sanz", role: "Defensa" },
  { id: "Risco", name: "Pablo Risco", role: "Delantero" },
  { id: "Gabi", name: "Gabriel Pereira", role: "Defensa" },
  { id: "Marcos", name: "Marcos Albert", role: "Delantero" },
  { id: "Héctor", name: "Héctor González", role: "Delantero" },
  { id: "Crespo", name: "Adrián Crespo", role: "MedioCentro" },
  { id: "Hugo", name: "Hugo Martínez", role: "Defensa" },
  { id: "Charlie", name: "Carlos Villa", role: "Defensa" },
  { id: "Priego", name: "Pablo Priego", role: "Defensa" },
  { id: "Antonio", name: "Antonio Muñoz", role: "Defensa" },
  { id: "Marco", name: "Marco García", role: "Defensa" },
];

export const STATS: Record<string, { partidos: number; goles: number; asistencias: number; amarillas: number; rojas: number }> = {
  Presi:   { partidos: 0,  goles: 0,  asistencias: 0, amarillas: 0, rojas: 0 },
  Cocera:  { partidos: 18, goles: 0,  asistencias: 1, amarillas: 1, rojas: 0 },
  Iker:    { partidos: 16, goles: 2,  asistencias: 3, amarillas: 2, rojas: 0 },
  Samuel:  { partidos: 15, goles: 1,  asistencias: 2, amarillas: 1, rojas: 0 },
  Priego:  { partidos: 14, goles: 0,  asistencias: 1, amarillas: 3, rojas: 0 },
  Antonio: { partidos: 17, goles: 1,  asistencias: 0, amarillas: 2, rojas: 1 },
  Marco:   { partidos: 12, goles: 0,  asistencias: 1, amarillas: 1, rojas: 0 },
  Hugo:    { partidos: 16, goles: 2,  asistencias: 2, amarillas: 0, rojas: 0 },
  Manuel:  { partidos: 18, goles: 3,  asistencias: 4, amarillas: 1, rojas: 0 },
  Gabi:    { partidos: 13, goles: 1,  asistencias: 2, amarillas: 2, rojas: 0 },
  Crespo:  { partidos: 17, goles: 5,  asistencias: 6, amarillas: 1, rojas: 0 },
  Sergio:  { partidos: 18, goles: 4,  asistencias: 7, amarillas: 2, rojas: 0 },
  Charlie: { partidos: 15, goles: 3,  asistencias: 5, amarillas: 1, rojas: 0 },
  Capi:    { partidos: 18, goles: 12, asistencias: 8, amarillas: 2, rojas: 0 },
  Marcos:  { partidos: 16, goles: 9,  asistencias: 5, amarillas: 1, rojas: 0 },
  Héctor:  { partidos: 14, goles: 7,  asistencias: 3, amarillas: 0, rojas: 0 },
  Apa:     { partidos: 17, goles: 10, asistencias: 6, amarillas: 1, rojas: 0 },
  Risco:   { partidos: 15, goles: 8,  asistencias: 4, amarillas: 2, rojas: 0 },
};
