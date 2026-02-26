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
        src: {url:"/src/assets/app-icons/goto-website.png", alt:"goto-website-icon"} 
    }, 
    {
        winId: tSchedulerId,
        name: "TSchedule",
        fullName:"Team Schedule", 
        src: {url:"/src/assets/app-icons/ts-schedule-icon.png", alt:"TSchedule-icon"} 
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