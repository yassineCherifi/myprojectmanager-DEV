const env = process.env.NODE_ENV || 'development';
if (env === 'test') {
    process.env.MONGO_URL = 'mongodb://localhost:27017/cdp2019Test';
}
process.env.JWT_SECRET = process.env.JWT_SECRET || 'CODESECRET5225';
process.env.JWT_EXP = process.env.JWT_EXP || '1h';

