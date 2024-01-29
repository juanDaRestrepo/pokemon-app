/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'
            }
        ]
    }
}

module.exports = nextConfig

/* Error: Invalid src prop (https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png) on `next/image`, hostname "raw.githubusercontent.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host */