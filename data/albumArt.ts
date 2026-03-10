// data/albumArt.ts: Ethiopiques album art tiles for cultural side panels

export interface AlbumTile {
  id: string;
  title: string;
  artist: string;
  image: string;
  year: string;
}

export const albumTiles: AlbumTile[] = [
  { id: 'eth-1', title: 'Ethiopiques Vol. 1', artist: 'Mahmoud Ahmed', image: '/images/ethiopiques/placeholder.svg', year: '1997' },
  { id: 'eth-2', title: 'Ethiopiques Vol. 3', artist: 'Golden Years', image: '/images/ethiopiques/placeholder.svg', year: '1998' },
  { id: 'eth-3', title: 'Ethiopiques Vol. 4', artist: 'Ethio Jazz', image: '/images/ethiopiques/placeholder.svg', year: '1998' },
  { id: 'eth-4', title: 'Ethiopiques Vol. 7', artist: 'Ere Mela Mela', image: '/images/ethiopiques/placeholder.svg', year: '1999' },
  { id: 'eth-5', title: 'Ethiopiques Vol. 10', artist: 'Tezeta', image: '/images/ethiopiques/placeholder.svg', year: '2001' },
  { id: 'eth-6', title: 'Ethiopiques Vol. 13', artist: 'Ethiopian Groove', image: '/images/ethiopiques/placeholder.svg', year: '2003' },
  { id: 'eth-7', title: 'Ethiopiques Vol. 15', artist: 'Jump to Addis', image: '/images/ethiopiques/placeholder.svg', year: '2004' },
  { id: 'eth-8', title: 'Ethiopiques Vol. 21', artist: 'Piano Solo', image: '/images/ethiopiques/placeholder.svg', year: '2006' },
  { id: 'eth-9', title: 'Ethiopiques Vol. 24', artist: 'Vintage Club', image: '/images/ethiopiques/placeholder.svg', year: '2008' },
  { id: 'eth-10', title: 'Ethiopiques Vol. 30', artist: 'Mistakes on Purpose', image: '/images/ethiopiques/placeholder.svg', year: '2017' },
];
