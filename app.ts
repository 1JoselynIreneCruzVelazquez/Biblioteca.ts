import { Autor } from './Autor';
import { Copia } from './Copia';
import { Libro } from './Libro';
import { Lector } from './Lector';

const Joselyn = new Autor("Joselyn Cruz","Mexicana","20/10/2006");
console.log(Joselyn);

const java=new Libro("Java","PROGRAMACION","TRILLAS",1995);
console.log(java);

const Natalia = new Lector("45","Natalia Cabos","528364","Guillermo Prieto","74375");
console.log(Natalia);

const copiaa = new Copia("25/10/2022","proceso");
copiaa.agregarCopia(7,java,Natalia);
copiaa.listaCopias();










