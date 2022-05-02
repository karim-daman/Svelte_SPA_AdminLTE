import Home from './routes/Home.svelte';
import Lorem from './routes/Lorem.svelte';
import NotFound from './routes/NotFound.svelte';
import Dashboard from "./routes/Dashboard.svelte"

export default {
    '/': Home,
    '/Dashboard':Dashboard,





    '/lorem/:repeat': Lorem,
    // The catch-all route must always be last
    '*': NotFound
};
