const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    const response = await fetch(
      'https://api.cloudflare.com/client/v4/zones/67055aa3c502d36f673b8a15b3ffd6fa/analytics/dashboard',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer 3510236cf3480e78a5dbbc35f2bb78e35c26a',
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
