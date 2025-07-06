"use client"

import { GameProvider } from '@/contexts/GameContext';

export default function GameProviderWrapper({ children }: { children: React.ReactNode }) {
    return (
        <GameProvider>
            {children}
        </GameProvider>
    );
} 