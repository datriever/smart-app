import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';

export const ssr = false

export const load: PageLoad = async ({ params, fetch }) => {
  const url = `${base}/strategies/${params.id}.md`
  try {
    console.log('Fetching', url)
    const r = await fetch(url)
    const markdown = await r.text()
    return { markdown }
  }
  catch (e) {
    console.error('Erorr fetching', url, e)
    error(404, 'Strategy not found');
  }
};