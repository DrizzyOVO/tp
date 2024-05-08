import { atom } from "recoil"; 

export interface Nav { 
    isOpen: Boolean
}

export const navState = atom<Nav>({ 
    key: 'navState', 
    default: {
        isOpen: false
    }
}); 