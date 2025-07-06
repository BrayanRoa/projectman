import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

type Project = {
    name: string;
    path: string;
    runCommand?: string
};

type Data = {
    projects: Project[];
};

const adapter = new JSONFile<Data>('projects.json');
const defaultData: Data = { projects: [] };
const db = new Low<Data>(adapter, defaultData);

await db.read();
db.data ||= defaultData;

export default db;
