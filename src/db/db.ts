import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import os from 'os';

type Project = {
    name: string;
    path: string;
    runCommand?: string;
};

type Data = {
    projects: Project[];
};

// 📁 Carpeta donde se guardará el archivo JSON
const folder = join(os.homedir(), '.project-manager');

// 📦 Si no existe, la creamos
if (!existsSync(folder)) {
    mkdirSync(folder, { recursive: true });
}

// 📄 Ruta fija al archivo JSON
const file = join(folder, 'projects.json');

// 🧠 LowDB setup
const adapter = new JSONFile<Data>(file);
const defaultData: Data = { projects: [] };
const db = new Low<Data>(adapter, defaultData);

await db.read();
db.data ||= defaultData;

export default db;
