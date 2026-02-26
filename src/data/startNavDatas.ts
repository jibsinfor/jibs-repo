import type { fileDoc } from "../main";

const calculatorId = import.meta.env.VITE_CALCULATOR; 
const myPCID = import.meta.env.VITE_MYPC; 
const internetID = import.meta.env.VITE_EXPLORER;
const gitId = import.meta.env.VITE_GIT;
const notePadId = import.meta.env.VITE_NOTEPAD; 
const pdfReaderId = import.meta.env.VITE_PDFREADER
const MyDocsId = import.meta.env.VITE_MYDOCS;
const MyProyectsId = import.meta.env.VITE_MYPROYECTS; 

export const InternetAppList:  Array<fileDoc> = [
    {
        winId: internetID,
        name: "Explorer",
        fullName: "Internet Explorer",
        src: { url: "./src/assets/app-icons/internet-exporer(32x32).png", alt: "ie-icon" }
    },
    {
        winId: 'mail',
        name: "E-mail",
        fullName: "Correo electronico",
        src: { url: "./src/assets/app-icons/e-mail.png", alt: "mail-icon" }
    }
]

export const windowAppList : Array<fileDoc> = [
    {
        winId: notePadId,
        name: "NotePad",
        fullName: "",
        src: { url: "./src/assets/app-icons/notePad.png", alt: "notepad-icon" }
    },
    {
        winId: 'paint',
        name: "Paint",
        fullName: "",
        src: { url: "./src/assets/app-icons/paint.png", alt: "paint-icon" }
    },
    {
        winId: calculatorId,
        name: "Calculadora",
        fullName: "",
        src: { url: "./src/assets/app-icons/calculator-icon(32x32).png", alt: "calculator-icon" }
    },
    {
        winId: gitId,
        name: "Git",
        fullName: "",
        src: { url: "./src/assets/app-icons/github-logo.png", alt: "github-logo" }
    },
    {
        winId: pdfReaderId,
        name: "PDF Reader",
        fullName: "",
        src: { url: "./src/assets/app-icons/adobe-reader(100x90).webp", alt: "github-logo" }
    },
]

export const folderList : Array<fileDoc> = [
    {
        winId: MyProyectsId,
        name: "Mis Proyectos",
        fullName: "",
        src: { url: "./src/assets/windows-icons/MyProyects(32x32).png", alt: "myProyect-icon" }
    }, 
    {
        winId: MyDocsId,
        name: "Mis Documentos",
        fullName: "",
        src: { url: "src/assets/windows-icons/docFolder.png", alt: "mydocs-icon" }
    },
    {
        winId: 'nets',
        name: "Redes",
        fullName: "",
        src: { url: "src/assets/windows-icons/web-net(32x32).png", alt: "mypics-icon" }
    },
    {
        winId: myPCID,
        name: "Mi PC",
        fullName: "",
        src: { url: "src/assets/windows-icons/MyPC(32x32).png", alt: "mydocs-icon" }
    },
]; 

export const systemAppList : Array<fileDoc> = [ 
    {
        winId: 'panelControl',
        name: "Panel de Control",
        fullName: "",
        src: { url: "src/assets/windows-icons/controlPanel(32x32).png", alt: "mydocs-icon" }
    },
]
