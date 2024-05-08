import { navState } from "../atoms/nav";
import { selector } from "recoil"; 

export const isNavOpen = selector({ 
    key: 'navDetailsState', 
    get: ({get}) => {
        const state = get(navState); 
        return state.isOpen; 
    },  
}); 