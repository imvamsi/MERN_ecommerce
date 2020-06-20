export const isAuthenticated = (data) => {
    if(typeof window !== undefined) {
        localStorage.setItem('sessionToken', JSON.stringify(data));
    } 
}

export const showNavLinks = () => {
    if(typeof window == undefined){
        return false;
    }
    if(localStorage.getItem('sessionToken')) {
        return JSON.parse(localStorage.getItem('sessionToken'));
        
    } else {
        return false;
    }
}