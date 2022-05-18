/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Avyansh0001',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/avyanshralph',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/Avyansh',
        permanent: true,
      },
      {
        source: '/juicewrld',
        destination: 'https://juicewrld.com/',
        permanent: true,
      },
    ]
  },
}
