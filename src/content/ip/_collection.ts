import * as ac from 'astro:content';
import * as s from '../../governance/information-model/schemas';
import autoRoutes from "./_routes.auto.json";
export type AutoRouteKey = keyof typeof autoRoutes;

const collectionIdentity = 'ip' as const;
type CollectionEntry = ac.CollectionEntry<typeof collectionIdentity>;

export const intellectualPropertyCollection = ac.defineCollection({ schema: s.intellectualPropertySchema });

export default intellectualPropertyCollection;