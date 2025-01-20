
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

// Create an instance of the URL builder
const builder = imageUrlBuilder(client);

// Export a function to generate URLs
export function urlFor(source: any) {
  return builder.image(source);
}
