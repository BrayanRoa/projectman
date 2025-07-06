import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
const adapter = new JSONFile('projects.json');
const defaultData = { projects: [] };
const db = new Low(adapter, defaultData);
await db.read();
db.data || (db.data = defaultData);
export default db;
