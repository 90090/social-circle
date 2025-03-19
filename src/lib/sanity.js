import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '4r33cqp7',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2023-08-01', // Use a date that makes sense for your project
  useCdn: true, // Set to false if you want fresh data every time
});
