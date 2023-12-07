/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"slp-statics.astockcdn.net",
                
            },
            {
                protocol:"https",
                hostname:"www.google.com"
            },
            {
                protocol:"https",
                hostname:"www.themoviedb.org"
            },
            {
                protocol:"https",
                hostname:"www.apple.com"
            },
            {
                protocol:"https",
                hostname:"images.unsplash.com"
            },
        ]
    }
}

module.exports = nextConfig
