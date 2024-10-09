'use client';

import React, { useEffect, useState } from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { Game } from '@/data/games';

interface GameSelectProps {
  games: Game[];
}

const GameSelect: React.FC<GameSelectProps> = ({ games }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedGame, setSelectedGame] = useState('');

  useEffect(() => {
    const savedGame = localStorage.getItem('selectedGame');
    if (savedGame && !pathname.includes('/game/')) {
      setSelectedGame(savedGame);
      router.push(`/game/${encodeURIComponent(savedGame)}`);
    } else if (pathname.startsWith('/game/')) {
      const game = decodeURIComponent(pathname.split('/')[2]);
      setSelectedGame(game);
    }
  }, [pathname, router]);

  const handleGameChange = (event: SelectChangeEvent<string>) => {
    const game = event.target.value;
    setSelectedGame(game);
    localStorage.setItem('selectedGame', game);
    if (game) {
      router.push(`/game/${encodeURIComponent(game)}`);
    } else {
      router.push('/');
    }
  };

  return (
    <Select value={selectedGame} onChange={handleGameChange} displayEmpty sx={{ minWidth: 120 }}>
      <MenuItem value="">
        <em>SELECT A GAME</em>
      </MenuItem>
      {games.map((game) => (
        <MenuItem key={game.id} value={game.id}>
          {game.displayName.toUpperCase()}
        </MenuItem>
      ))}
    </Select>
  );
};

export default GameSelect;
