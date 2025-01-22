import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use((req, res, next) => {
	console.log(`Incoming request: ${req.method} ${req.url}`);
	next();
});

app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
	})
);

const PORT = process.env.PORT || 3000;
const TARGET_URL = process.env.TARGET_URL || 'https://2ch.hk';

const proxyOptions = {
	target: TARGET_URL,
	changeOrigin: true,
	onProxyReq: (proxyReq, req, res) => {
		console.log(`Proxying request to: ${TARGET_URL}${req.url}`);
	},
	onProxyRes: (proxyRes, req, res) => {
		console.log(`Proxy response status: ${proxyRes.statusCode}`);
	},
	onError: (err, req, res) => {
		console.error('Proxy error:', err);
		res.status(500).send({
			error: 'Proxy Error',
			message: err.message
		});
	}
};

const proxy = createProxyMiddleware(proxyOptions);

app.use('/', proxy);

app.get('/health', (req, res) => {
	res.send({
		status: 'ok',
		timestamp: new Date().toISOString()
	});
});

app.listen(PORT, () => {
	console.log(`Proxy server is running on port ${PORT}`);
	console.log(`Proxying requests to: ${TARGET_URL}`);
});

process.on('uncaughtException', (err) => {
	console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
	console.error('Unhandled Rejection:', err);
});
