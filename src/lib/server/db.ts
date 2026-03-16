import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';

const url = env.TURSO_DB_URL;
const authToken = env.TURSO_DB_TOKEN;

export const db =
	url && authToken
		? createClient({ url, authToken })
		: null;

export async function initDb() {
	if (!db) return;
	await db.execute(`
		CREATE TABLE IF NOT EXISTS contacts (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			email TEXT NOT NULL,
			message TEXT NOT NULL,
			created_at TEXT DEFAULT (datetime('now'))
		)
	`);
}
