export const isAuthenticated = (data) => {
    if(typeof window !== undefined) {
        localStorage.setItem('sessionToken', JSON.stringify(data));
    }
}