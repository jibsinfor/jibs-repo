import type { windowFrame, desktopIcon } from "../main";
import FileExplorer from "../aplications/FileExplorer.vue";
import InternetExplorer from "../aplications/InternetExplorer.vue";
import { markRaw, ref } from "vue";
import Calculator from "../aplications/Calculator.vue";
import NotePad from "../aplications/NotePad.vue";
import PdfReader from "../aplications/PdfReader.vue";
import MyDocs from "../aplications/MyDocs.vue";
import MyProyects from "../aplications/MyProyects.vue";
import Properties from "../aplications/Properties.vue";

const calculatorId = import.meta.env.VITE_CALCULATOR; 
const myPCID = import.meta.env.VITE_MYPC; 
const internetID = import.meta.env.VITE_EXPLORER;
const notePadId = import.meta.env.VITE_NOTEPAD; 
const pdfReaderId = import.meta.env.VITE_PDFREADER
const MyDocsId = import.meta.env.VITE_MYDOCS; 
const MyProyectsId = import.meta.env.VITE_MYPROYECTS; 

export const windowContents = ref<windowFrame[]>([
    {
        id: calculatorId,
        x:400, 
        y:200,
        isOpen: false,
        windowState: 'default',
        selected:false,
        showWinTools:false,
        directionText:null,
        showMenubar:false,
        menuBarOptions: null, 
        componentToShow: markRaw(Calculator),
        headerData: {
            headerName: "Calculadora",
            headerIcon: { url: "./src/assets/app-icons/calculator-icon(16x16).png", alt: "calculator-icon" }, 
            allowMaximize: false,
            isMaximized: false,
        } 
    },
    {
        id: calculatorId,
        x:400, 
        y:200,
        isOpen: true,
        windowState: 'default',
        selected:false,
        showWinTools:false,
        directionText:null,
        showMenubar:false,
        menuBarOptions: null, 
        componentToShow: markRaw(Properties),
        headerData: {
            headerName: "Propiedades",
            headerIcon: { url: "./src/assets/app-icons/properties-icon(16x16).png", alt: "properties-icon" }, 
            allowMaximize: false,
            isMaximized: false,
        } 
    },
    {
        id: myPCID,
        x: 400,
        y: 80,
        isOpen: true,
        windowState: 'default',
        selected:true, 
        showWinTools:true,
        directionText:'C:/',
        showMenubar:true,
        menuBarOptions: ['close'], 
        componentToShow: markRaw(FileExplorer),
        headerData: {
            headerName: "Mi PC",
            headerIcon: { url: "/src/assets/windows-icons/MyPC(32x32).png", alt: "my-pc-icon" },
            isMaximized: false,
            allowMaximize: true
        }
    }, 
    {
        id: internetID,
        x: 150,
        y: 24,
        isOpen: true,
        windowState: 'default', 
        selected:false,
        showWinTools:true,
        directionText:'https://www.google.com/',
        showMenubar:true,
        menuBarOptions: ['share', 'close'], 
        componentToShow: markRaw(InternetExplorer),
        headerData: {
            headerName: "Internet Explorer",
            headerIcon: { url: "/src/assets/app-icons/internet-exporer(32x32).png", alt: "internet-explorer-icon" },
            isMaximized: false,
            allowMaximize: true
        }
    }, 
    {
        id: notePadId,
        x: 850,
        y: 90,
        isOpen: false,
        windowState: 'default', 
        selected:true,
        showWinTools:false,
        directionText:null,
        showMenubar:true,
        menuBarOptions: ['save', 'close'], 
        componentToShow: markRaw(NotePad),
        headerData: {
            headerName: "NotePad",
            headerIcon: { url: "/src/assets/app-icons/notePad.png", alt: "internet-explorer-icon" },
            isMaximized: false,
            allowMaximize: true
        }
    }, 
    {
        id: pdfReaderId,
        x: 850,
        y: 90,
        isOpen: false,
        windowState: 'default', 
        selected:false,
        showWinTools:false,
        directionText:null,
        showMenubar:true,
        menuBarOptions: ['save', 'print', 'close', 'open'], 
        componentToShow: markRaw(PdfReader),
        headerData: {
            headerName: "Adobe Reader",
            headerIcon: { url: "/src/assets/app-icons/adobe-reader(100x90).webp", alt: "adobe-reader-icon" },
            isMaximized: false,
            allowMaximize: true
        }
    },
    {
        id: MyDocsId,
        x: 850,
        y: 90,
        isOpen: false,
        windowState: 'default', 
        selected:false,
        showWinTools:true,
        directionText:'c:/Mis Documentos',
        showMenubar:true,
        menuBarOptions: ['close', 'open'], 
        componentToShow: markRaw(MyDocs),
        headerData: {
            headerName: "Mis Documentos",
            headerIcon: { url: "/src/assets/windows-icons/docFolder(32x32).png", alt: "myDocs-icon" },
            isMaximized: false,
            allowMaximize: true
        }
    },
    {
        id: MyProyectsId,
        x: 850,
        y: 90,
        isOpen: false,
        windowState: 'default', 
        selected:false,
        showWinTools:true,
        directionText:'c:/Mis Proyectos',
        showMenubar:true,
        menuBarOptions: ['close', 'open'], 
        componentToShow: markRaw(MyProyects),
        headerData: {
            headerName: "Mis Proyectos",
            headerIcon: { url: "/src/assets/windows-icons/MyProyects(32x32).png", alt: "myProyects-icon" },
            isMaximized: false,
            allowMaximize: true
        }
    }
]); 

export const desktopIcons = ref<desktopIcon[]>([
    {
        winId:myPCID, 
        x: 20,
        y: 20,
        docName: "Mi PC",
        img: { url: "/src/assets/windows-icons/MyPC(32x32).png", alt: "my-pc-icon" }
    }, 
    {
        winId:internetID,
        x: 20,
        y: 120,
        docName: "internet Explorer",
        img: { url: "/src/assets/app-icons/internet-exporer(32x32).png", alt: "ie-icon" }
    }, 
    {
        winId: MyProyectsId,
        x: 20,
        y: 220,
        docName: "Mis Proyectos",
        img: { url: "/src/assets/windows-icons/MyProyects(32x32).png", alt: "my-proyectss-icon" }
    }, 
    {
        winId:pdfReaderId, 
        x: 20,
        y: 320,
        docName: "Mi CV",
        img: { url: "/src/assets/app-icons/pdf-icon(32x32).png", alt: "my-cv-icon" }
    }

]); 
