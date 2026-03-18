import type {fileDoc} from '../main.ts'
import { ref } from 'vue' 

const gotoId = import.meta.env.VITE_GOTO; 
const tSchedulerId = import.meta.env.VITE_TS; 
const gitId = import.meta.env.VITE_GIT
const linkedinId = import.meta.env.VITE_LINKEDIN
const pdfReaderId = import.meta.env.VITE_PDFREADER 

export const myProyectFilesEnglish = ref<fileDoc[]>([
    {
        winId: gotoId,
        name: "Go-To",
        fullName:"Go-To.website", 
        src: {url:"/src/assets/app-icons/goto-website.png", alt:"goto-website-icon"}, 
        datas: {
            description: "Go-To is a web application to short cut long URLs. It allows users to create custom short links for their long URLs, making them easier to share and remember. The application also provides features such as link management, analytics, and QR code generation for the created short links.",
            functionality: "Users can create custom links, create a QR code for links, add passwords to links, and organize them into categories. The application also offers a search feature, allowing users to quickly find and access their saved websites.",
            technologies: "The application is vanilla PHP for backend and simple HTML/CSS and JavaScript for frontend.",
            links: {readme:"https://github.com/jibsinfor/go-to.website/blob/main/README.md", url:"https://go-to.website/"}
        }
    }, 
    {
        winId: tSchedulerId,
        name: "TSchedule",
        fullName:"Team Schedule", 
        src: {url:"/src/assets/app-icons/ts-schedule-icon.png", alt:"TSchedule-icon"}, 
        datas: {
            description: "TSchedule is a web application designed to help teams manage their schedules and coordinate activities effectively.It provide checkIn/check out assistance, schedule management, permit users to set their availability for meetings,work permits and send notifications for upcoming events.",
            functionality: "log In, sign up,profile management, schedule management, availability settings, set permit Types and a user-friendly interface for easy navigation and interaction.", 
            technologies: "The frontend of TSchedule is built using React offering a dynamic and responsive user interface. The backend is developed with Node.js and Express, handling user authentication (JWT), schedule management, and real-time updates. PSGSQL is used as the database to store user information and scheduling data.",
            links: 
                {readme:"https://github.com/jibsinfor/team-scheduler/blob/main/README.md", url:"https://team-scheduler-omega.vercel.app/inicio"}
        }
    }, 
])

export const myDocsFiles = ref<fileDoc[]>([
    {
        winId: pdfReaderId,
        name: "Mi CV",
        fullName:"Mi curriculum vitae", 
        src: {url:"/src/assets/app-icons/pdf-icon(90x100).png", alt:"pdf-icon"} 
    }, 
])

export const ReposityFile = ref<fileDoc[]>([
    {
        winId: linkedinId,
        name: "LinkedIn",
        fullName:"LinkedIn", 
        src: {url:"/src/assets/app-icons/linkedin-logo.png", alt:"github-logo"} 
    },
    {
        winId: gitId,
        name: "Git",
        fullName:"Github", 
        src: {url:"/src/assets/app-icons/github-logo.png", alt:"github-logo"} 
    }, 
])

export const myProyectFiles = ref<fileDoc[]>([
    {
        winId: gotoId,
        name: "Go-To",
        fullName:"Go-To.website", 
        src: {url:"/src/assets/app-icons/goto-website.png", alt:"goto-website-icon"}, 
        datas: {
            description: "Go-To es una aplicación web para acortar URLs largas. Permite a los usuarios crear enlaces cortos personalizados para sus URLs largas, haciéndolos más fáciles de compartir y recordar. La aplicación también proporciona características como gestión de enlaces, análisis y generación de códigos QR para los enlaces cortos creados.",
            functionality: "Los usuarios pueden crear enlaces personalizados, generar códigos QR para los enlaces, agregar contraseñas a los enlaces.",
            technologies: "La aplicación está desarrollada en PHP para el backend y HTML/CSS y JavaScript para el frontend.",
            links: {readme:"https://github.com/jibsinfor/go-to.website/blob/main/README.md", url:"https://go-to.website/"}
        }
    }, 
    {
        winId: tSchedulerId,
        name: "TSchedule",
        fullName:"Team Schedule", 
        src: {url:"/src/assets/app-icons/ts-schedule-icon.png", alt:"TSchedule-icon"}, 
        datas: {
            description: "TSchedule es una aplicación web diseñada para ayudar a los equipos a gestionar sus horarios y coordinar actividades efectivamente. Proporciona asistencia para registro de entrada/salida, gestión de horarios, permite a los usuarios establecer su disponibilidad para reuniones, permisos de trabajo y envío de notificaciones para eventos próximos.",
            functionality: "Inicio de sesión, registro, gestión de perfil, gestión de horarios, configuración de disponibilidad, establecimiento de tipos de permisos y una interfaz amigable para una navegación e interacción sencilla.", 
            technologies: "La aplicación está desarrollada con Node.js y Express, manejando la autenticación de usuarios (JWT), gestión de horarios y actualizaciones en tiempo real. PSGSQL se utiliza como base de datos para almacenar la información de los usuarios y los datos de programación.",
            links: 
                {readme:"https://github.com/jibsinfor/team-scheduler/blob/main/README.md", url:"https://team-scheduler-omega.vercel.app/inicio"}
        }
    }, 
])