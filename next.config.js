/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com'
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com',
      },
    ]
  }
}

module.exports = nextConfig
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//      images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**.pexels.com',
//       },
//     ],
//   },
// }

// module.exports = nextConfig
