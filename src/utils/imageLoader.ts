import { ImageLoader } from 'next/image';

/**
 * Custom image loader for Next.js Image component
 * This can be used to load images from custom CDNs or apply transformations
 */
export const imageLoader: ImageLoader = ({ src, width, quality }) => {
  // Base URL for images (change this to your CDN or API endpoint if needed)
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_CDN_URL || '';
  
  // For local images that start with '/', just return the path
  if (src.startsWith('/')) {
    return src;
  }
  
  // For external URLs, return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For other images, apply the base URL with width and quality params
  const params = new URLSearchParams({
    w: width.toString(),
    q: (quality || 75).toString(),
  });
  
  return `${baseUrl}/${src}?${params.toString()}`;
};

export default imageLoader;
