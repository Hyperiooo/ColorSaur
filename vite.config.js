import { sveltekit } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess' 

const config = {
	plugins: [sveltekit({
		
		preprocess: sveltePreprocess()
	})],
};

export default config;
