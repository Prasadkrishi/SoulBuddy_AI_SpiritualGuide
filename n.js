const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all origins
app.use(cors());

app.use(express.json());

app.post('/proxy', async (req, res) => {
    const langflowUrl = 'https://api.langflow.astra.datastax.com';
    const applicationToken = 'AstraCS:FmteogWlfBlDFThrgdcARoFi:ea92ce06bd552118713df704b344f8a67390c8f870e6b5a935d25e188741177a';

    try {
        // Dynamically import node-fetch
        const { default: fetch } = await import('node-fetch');

        const response = await fetch(langflowUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${applicationToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
