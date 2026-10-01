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
        src: { url: new URL("../assets/app-icons/internet-exporer(32x32).png", import.meta.url).href, alt: "ie-icon" }
    },
    {
        winId: 'mail',
        name: "E-mail",
        fullName: "Correo electronico",
        src: { url: new URL("../assets/app-icons/e-mail.png", import.meta.url).href, alt: "mail-icon" }
    }
]

export const windowAppList : Array<fileDoc> = [
    {
        winId: notePadId,
        name: "NotePad",
        fullName: "",
        src: { url: new URL("../assets/app-icons/notePad.png", import.meta.url).href, alt: "notepad-icon" }
    },
    {
        winId: 'paint',
        name: "Paint",
        fullName: "",
        src: { url: new URL("../assets/app-icons/paint.png", import.meta.url).href, alt: "paint-icon" }
    },
    {
        winId: calculatorId,
        name: "Calculadora",
        fullName: "",
        src: { url: new URL("../assets/app-icons/calculator-icon(32x32).png", import.meta.url).href, alt: "calculator-icon" }
    },
    {
        winId: gitId,
        name: "Git",
        fullName: "",
        src: { url: new URL("../assets/app-icons/github-logo.png", import.meta.url).href, alt: "github-logo" }
    },
    {
        winId: pdfReaderId,
        name: "PDF Reader",
        fullName: "",
        src: { url: new URL("../assets/app-icons/adobe-reader(100x90).webp", import.meta.url).href, alt: "github-logo" }
    },
]

export const folderList : Array<fileDoc> = [
    {
        winId: MyProyectsId,
        name: "Mis Proyectos",
        fullName: "",
        src: { url: new URL("../assets/windows-icons/MyProyects(32x32).png", import.meta.url).href, alt: "myProyect-icon" }
    }, 
    {
        winId: MyDocsId,
        name: "Mis Documentos",
        fullName: "",
        src: { url: new URL("../assets/windows-icons/docFolder.png", import.meta.url).href, alt: "mydocs-icon" }
    },
    {
        winId: 'nets',
        name: "Redes",
        fullName: "",
        src: { url: new URL("../assets/windows-icons/web-net(32x32).png", import.meta.url).href, alt: "mypics-icon" }
    },
    {
        winId: myPCID,
        name: "Mi PC",
        fullName: "",
        src: { url: new URL("../assets/windows-icons/MyPC(32x32).png", import.meta.url).href, alt: "mydocs-icon" }
    },
]; 

export const systemAppList : Array<fileDoc> = [ 
    {
        winId: 'panelControl',
        name: "Panel de Control",
        fullName: "",
        src: { url: new URL("../assets/windows-icons/controlPanel(32x32).png", import.meta.url).href, alt: "mydocs-icon" }
    },
]
