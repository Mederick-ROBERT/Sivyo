import { Config } from 'ziggy-js';

export interface User {
    id: string;
    username: string;
    email: string;
    email_verified_at: string;
}

export interface Recipe {
    id: string;
    name: string;
    content: string | null;
    prep_time: string | null;
    cook_time: string | null;
    picture: string | null;
    servings: number | null;
    user_id: string | null;
    created_at: string;
    updated_at: string;

    ingredients?: [];

    slug?: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface MealPlanRecipe {
    id: string;
    name: string;
    prep_time: string;
    picture: string;
}

export interface Ingredient {
    id: string;
    name: string;
    symbol: string;
    picture: string;

    quantity?: number;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };

    ziggy: Config & { location: string };

    errors: {
        email: string;
        password: string;
    }

    flash: {
      success: string;
    }

    popularRecipes: Recipe;

    allRecipes: {
        data: Recipe[];
        next_page_url: string;
        prev_page_url: string;
    };

    categories: Category[];

    ingredients: Ingredient[];
};
