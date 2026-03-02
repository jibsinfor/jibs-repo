import type {fileDoc} from '../main.ts'
import { ref } from 'vue' 

const gotoId = import.meta.env.VITE_GOTO; 
const tSchedulerId = import.meta.env.VITE_TS; 
const gitId = import.meta.env.VITE_GIT
const linkedinId = import.meta.env.VITE_LINKEDIN
const pdfReaderId = import.meta.env.VITE_PDFREADER 

export const myProyectFiles = ref<fileDoc[]>([
    {
        winId: gotoId,
        name: "Go-To",
        fullName:"Go-To.website", 
        src: {url:"/src/assets/app-icons/goto-website.png", alt:"goto-website-icon"}, 
        datas: {
            description: "Go-To is a web application to short cut long URLs. It allows users to create custom short links for their long URLs, making them easier to share and remember. The application also provides features such as link management, analytics, and QR code generation for the created short links.",
            functionality: "Users can create custom links, create a QR code for links, add passwords to links, and organize them into categories. The application also offers a search feature, allowing users to quickly find and access their saved websites.",
            Tecnologies: "The application is vanilla PHP for backend and simple HTML/CSS and JavaScript for frontend.",
            links: [
                {name:"GitHub Repository", url:"https://go-to.website/"}
            ]   
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
            Tecnologies: "The frontend of TSchedule is built using React offering a dynamic and responsive user interface. The backend is developed with Node.js and Express, handling user authentication (JWT), schedule management, and real-time updates. PSGSQL is used as the database to store user information and scheduling data.",
            links: [
                {name:"GitHub Repository", url:"https://team-scheduler-omega.vercel.app/inicio"}]
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