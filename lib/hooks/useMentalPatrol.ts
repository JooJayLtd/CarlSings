'use client';

/**
 * Mental Patrol Hook
 * Custom React hook for managing Mental Patrol state with localStorage persistence
 */

import { useState, useEffect, useCallback } from 'react';
import { MentalPatrolState, PetType } from '@/lib/types/mental-patrol';

const STORAGE_KEY = 'mental-patrol-state';

/**
 * Initial state for Mental Patrol
 */
const initialState: MentalPatrolState = {
  selectedPet: null,
  clickCount: 0,
  firstUsedAt: undefined,
  lastUsedAt: undefined,
};

/**
 * Custom hook for Mental Patrol state management
 * Handles localStorage persistence and state updates
 */
export function useMentalPatrol() {
  const [state, setState] = useState<MentalPatrolState>(initialState);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Load state from localStorage on mount
   */
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as MentalPatrolState;
        setState(parsed);
      }
    } catch (error) {
      console.error('Failed to load Mental Patrol state:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Save state to localStorage whenever it changes
   */
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error('Failed to save Mental Patrol state:', error);
      }
    }
  }, [state, isLoading]);

  /**
   * Select a pet
   */
  const selectPet = useCallback((petId: PetType) => {
    setState((prev) => {
      const now = new Date().toISOString();
      return {
        ...prev,
        selectedPet: petId,
        firstUsedAt: prev.firstUsedAt || now,
        lastUsedAt: now,
      };
    });
  }, []);

  /**
   * Increment click count
   */
  const incrementClicks = useCallback(() => {
    setState((prev) => ({
      ...prev,
      clickCount: prev.clickCount + 1,
      lastUsedAt: new Date().toISOString(),
    }));
  }, []);

  /**
   * Reset all state (useful for debugging or user preference)
   */
  const resetState = useCallback(() => {
    setState(initialState);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to reset Mental Patrol state:', error);
    }
  }, []);

  /**
   * Check if user has selected a pet
   */
  const hasPet = state.selectedPet !== null;

  /**
   * Get days since first use
   */
  const daysSinceFirstUse = state.firstUsedAt
    ? Math.floor(
        (Date.now() - new Date(state.firstUsedAt).getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : 0;

  return {
    // State
    selectedPet: state.selectedPet,
    clickCount: state.clickCount,
    firstUsedAt: state.firstUsedAt,
    lastUsedAt: state.lastUsedAt,
    isLoading,
    hasPet,
    daysSinceFirstUse,

    // Actions
    selectPet,
    incrementClicks,
    resetState,
  };
}
