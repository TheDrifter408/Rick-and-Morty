/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
        {   protocol:"https",
            hostname:'rickandmortyapi.com',
            port:'',
            pathname:'/api/character/avatar/**'
        },
        {   protocol:"https",
            hostname:'placehold.co'
        }
        ] 
    }
};

export default nextConfig;
