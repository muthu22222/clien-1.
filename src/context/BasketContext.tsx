
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Meal } from '../data/meals';

export interface BasketItem {
    meal: Meal;
    quantity: number;
}

interface BasketContextType {
    items: BasketItem[];
    addToBasket: (meal: Meal) => void;
    removeFromBasket: (mealId: string) => void;
    updateQuantity: (mealId: string, quantity: number) => void;
    clearBasket: () => void;
    total: number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error('useBasket must be used within a BasketProvider');
    }
    return context;
};

export const BasketProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<BasketItem[]>([]);

    const addToBasket = (meal: Meal) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.meal.id === meal.id);
            if (existing) {
                return prev.map((item) =>
                    item.meal.id === meal.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { meal, quantity: 1 }];
        });
    };

    const removeFromBasket = (mealId: string) => {
        setItems((prev) => prev.filter((item) => item.meal.id !== mealId));
    };

    const updateQuantity = (mealId: string, quantity: number) => {
        if (quantity < 1) {
            return;
        }
        setItems((prev) =>
            prev.map((item) =>
                item.meal.id === mealId ? { ...item, quantity } : item
            )
        );
    };

    const clearBasket = () => {
        setItems([]);
    };

    const total = items.reduce(
        (acc, item) => acc + item.meal.price * item.quantity,
        0
    );

    return (
        <BasketContext.Provider
            value={{ items, addToBasket, removeFromBasket, updateQuantity, clearBasket, total }}
        >
            {children}
        </BasketContext.Provider>
    );
};
