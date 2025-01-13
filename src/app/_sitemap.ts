// import { BlogArticleAttributes, BlogCategoriesAttributes } from '@/dashboard-features/blog/types';
// import { availableLanguages } from '@/lib/config';
// import { MetadataRoute } from 'next';
// import qs from 'qs'

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   // Define the supported languages

//   // Define the base URL
//   const baseUrl = process.env.DOMAIN

//   // Initialize arrays to store all routes
//   const allRoutes = [];

//   // Iterate over each language to fetch categories and articles
//   const mainLanguage = availableLanguages[0];
//   for (const language of availableLanguages) {
//     const prefix = language === mainLanguage ? '' : `/${language}`;
    
//     // Static routes for the current language
//     const staticRoutes = [
//       {
//         url: `${baseUrl}${prefix}`,
//         lastModified: new Date(),
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}${prefix}/airport-transfers`,
//         lastModified: new Date(),
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}${prefix}/hourly-charters`,
//         lastModified: new Date(),
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}${prefix}/private-tours`,
//         lastModified: new Date(),
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}${prefix}/corporations`,
//         lastModified: new Date(),
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}${prefix}/fleet-management`,
//         lastModified: new Date(),
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}${prefix}/strategic-partners`,
//         lastModified: new Date(),
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}${prefix}/travel-agencies`,
//         lastModified: new Date(),
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}${prefix}/about-us`,
//         lastModified: new Date(),
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}${prefix}/partnerships`,
//         lastModified: new Date(),
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}${prefix}/articles`,
//         lastModified: new Date(),
//         // changeFrequency: 'yearly',
//         priority: 1,
//       },
//     ];

//     allRoutes.push(...staticRoutes);

//     // Fetch categories for the current language
//     const categories = await getAllCategories(language);

//     // Create routes for each category and its blog posts
//     for (const category of categories) {
//       const categoryUrl = `${baseUrl}${prefix}/articles/category/${category.slug}`;
//       allRoutes.push({
//         url: categoryUrl,
//         lastModified: category.updated_at ? new Date(category.updated_at) : new Date(),
//         // changeFrequency: 'monthly',
//         priority: 1,
//       });

//       // Fetch blog posts for the current category
//       const blogPosts = await getAllBlogPosts(category.id.toString());

//       // Create routes for each blog post
//       for (const post of blogPosts) {
//         allRoutes.push({
//           url: `${baseUrl}${prefix}/articles/${post.slug}`,
//           lastModified: new Date(post.updated_at),
//           // changeFrequency: 'weekly',
//           priority: 1,
//         });
//       }
//     }
//   }

//   // Return all routes
//   return allRoutes;
// }

// const fetchData = async (endpoint: string, query: object) => {
//   const BASE_ROUTE = process.env.BASE_API_URL + endpoint;
//   const queryString = qs.stringify(query, { encodeValuesOnly: true });
//   const response = await fetch(BASE_ROUTE + "?" + queryString, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + process.env.API_KEY,
//     },
//     cache: "no-cache",
//   });

//   if (!response.ok) {
//     return []
//   }
//   const { data } = await response.json();
//   return data;
// }

// const getAllCategories = async (language: string) => {
//   const query = {
//     filters: {
//       language: {
//         $eq: language,
//       }
//     },
//   };
//   return await fetchData("/blog-categories", query) as BlogCategoriesAttributes[];
// }

// const getAllBlogPosts = async (categoryId: string) => {
//   const query = {
//     filters: {
//       blog_category_id: {
//         $eq: categoryId,
//       }
//     },
//   };
//   return await fetchData("/blog-posts", query) as BlogArticleAttributes[];
// }

export {}