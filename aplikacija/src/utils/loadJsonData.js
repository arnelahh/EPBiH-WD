export const loadJsonData = async () => {
    try {
        const response = await fetch('http://localhost:3001/server/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        localStorage.setItem('userData', JSON.stringify(data));
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
};
