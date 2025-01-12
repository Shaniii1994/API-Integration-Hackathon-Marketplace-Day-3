import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'your_project_id', // Sanity project ID
  dataset: 'production',       // Dataset name
  apiVersion: '2023-01-01',    // API version
  useCdn: true,                // For caching
});
