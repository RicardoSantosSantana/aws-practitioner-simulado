module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/faq',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/api/exercicio',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      }
    ] 
  }
}
