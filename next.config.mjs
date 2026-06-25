/** @type {import('next').NextConfig} */

  /* config options here */
  const nextConfig = {
    webpack:(config)=>{
      config.module.rules.push({
        test:/\.(glb|gltf)$/,
        type:'asset/resource'
      })
      return config
    },
    turbopack: {
      resolveAlias: {
        '@': './src',
      },
    }
};

export default nextConfig;
