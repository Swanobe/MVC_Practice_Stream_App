require('dotenv').config();

const api = require('./api');

api.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
