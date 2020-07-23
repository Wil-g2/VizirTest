const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'Telzir | Vizir', // Title (required)
      description: 'Vizir API Information',
      version: '1.0.0', // Version (required)
    },
  },
  // Path to the API docs
  apis: [path.resolve(__dirname, 'src', 'routes.js')],
};

module.exports = options;
