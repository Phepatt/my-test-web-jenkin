web hook jenkin test

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint for testing
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server only if not required by tests
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

// Export app for testing
module.exports = app;


