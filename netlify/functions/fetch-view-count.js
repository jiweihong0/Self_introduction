const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    const response = await fetch(
      'https://api.cloudflare.com/client/v4/zones/YOUR_ZONE_ID/analytics/dashboard',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer e47b50b9c28a4cb082b4236b4bc11440',
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error fetching view count:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch view count' }),
    };
  }
};
