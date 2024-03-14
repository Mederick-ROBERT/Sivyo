import { Config } from 'ziggy-js';

export interface User {
    id: string;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Recipe {
    id: string;
    name: string;
    content: string;
    prep_time: string;
    cook_time: string;
    picture: string;
    servings: number;
    category_id: string;
    user_id: string;
    created_at: string;
    updated_at: string;

    slug?: string;
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

    popularRecipes: Recipe;

    allRecipes: {
        data: Recipe[];
    };
};
