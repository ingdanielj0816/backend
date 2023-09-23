module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    parser: {
      enabled: true,
      // Aumenta el límite de tamaño de carga aquí
      multipart: true,
      formLimit: '500mb',
      jsonLimit: '500mb',
      textLimit: '500mb',
    },
  },

});
