const chart = {
  Normal: {
    strengths: '',
    weakness: 'Rock, Ghost, Steel',
    color: ''
  },
  Fire: {
    strengths: 'Bug, Steel, Grass, Ice',
    weakness: 'Rock, Fire, Water, Dragon',
    color: ''
  },
  Water: {
    strengths: 'Ground, Rock, Fire',
    weakness: 'Water, Grass, Dragon',
    color: ''
  },
  Grass: {
    strengths: 'Ground, Rock, Water',
    weakness: 'Flying, Poison, Bug, Steel, Fire, Grass, Dragon',
    color: ''
  },
  Electric: {
    strengths: 'Flying, Water',
    weakness: 'Ground, Grass, Electric, Dragon',
    color: ''
  },
  Ice: {
    strengths: 'Flying, Ground, Grass, Dragon',
    weakness: 'Steel, Fire, Water, Ice',
    color: ''
  },
  Fighting: {
    strengths: 'Normal, Rock, Steel, Ice, Dark',
    weakness: 'Flying, Poison, Psychic, Bug, Ghost, Fairy',
    color: ''
  },
  Poison: {
    strengths: 'Grass, Fairy	',
    weakness: 'Poison, Ground, Rock, Ghost, Steel',
    color: ''
  },
  Ground: {
    strengths: '	Poison, Rock, Steel, Fire, Electric',
    weakness: 'Flying, Bug, Grass',
    color: ''
  },
  Flying: {
    strengths: 'Fighting, Bug, Grass',
    weakness: 'Rock, Steel, Electric',
    color: ''
  },
  Psychic: {
    strengths: 'Fighting, Poison',
    weakness: 'Steel, Psychic, Dark',
    color: ''
  },
  Bug: {
    strengths: 'Grass, Psychic, Dark',
    weakness: 'Fighting, Flying, Poison, Ghost, Steel, Fire, Fairy',
    color: ''
  },
  Rock: {
    strengths: 'Flying, Bug, Fire, Ice',
    weakness: 'Fighting, Ground, Steel',
    color: ''
  },
  Ghost: {
    strengths: 'Ghost, Psychic',
    weakness: 'Normal, Dark',
    color: ''
  },
  Dark: {
    strengths: 'Ghost, Psychic',
    weakness: 'Fighting, Dark, Fairy',
    color: ''
  },
  Dragon: {
    strengths: 'Dragon',
    weakness: 'Steel, Fairy',
    color: ''
  },
  Steel: {
    strengths: 'Rock, Ice, Fairy',
    weakness: 'Steel, Fire, Water, Electric',
    color: ''
  },
  Fairy: {
    strengths: 'Fighting, Dragon, Dark',
    weakness: 'Poison, Steel, Fire',
    color: ''
  }
}

export const getTypes = (types, strWeak) => {
  const res = types.map(type => chart[type.type.name][strWeak]).join(', ').split(', ');
  if (res[0] === '') return res.slice(1);
  return res;
}
