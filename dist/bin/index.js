#!/usr/bin/env node
import { Command } from 'commander';
import { addProject } from '../commands/add.js';
import { listProjects } from '../commands/list.js';
import { openProject } from '../commands/open.js';
import { removeProject } from '../commands/remove.js';
import { launchProject } from '../commands/launch.js';
import { renameProject } from '../commands/rename.js';
import { editProject } from '../commands/edit.js';
const program = new Command();
program.name('projectman').description('Gestor de proyectos locales').version('1.0.0');
program
    .command('add')
    .alias('a')
    .description('Agregar un nuevo proyecto')
    .action(addProject);
program
    .command('list')
    .alias('l')
    .description('Listar todos los proyectos')
    .action(listProjects);
program
    .command('remove')
    .alias('r')
    .description('Eliminar un proyecto')
    .action(removeProject);
program
    .command('open')
    .alias('o')
    .description('Abrir un proyecto en VSCode')
    .action(openProject);
program
    .command('launch')
    .alias('x')
    .argument('<name>', 'Nombre del proyecto')
    .description('Abre el proyecto en VS Code y ejecuta su comando')
    .action(launchProject);
program
    .command('rename')
    .argument('<name>', 'Nombre actual del proyecto')
    .description('renombrar un proyecto')
    .action(renameProject);
program
    .command("edit")
    .argument("<name>", 'Nombre del proyecto')
    .description('editar los datos de un proyecto')
    .action(editProject);
program.parse();
