import './bootstrap';
import '../css/app.css';

import Layout from '../js/Layouts/app/app';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ChakraProvider } from '@chakra-ui/react'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: async (name) => {
        const page: any = await resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        );
        page.default.layout = page.default.layout || ((page: any) => <Layout children={page} />)
        return page;
    },

    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ChakraProvider>
                <App {...props} />
            </ChakraProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
