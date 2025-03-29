async function fetchData() {
    const url = 'http://localhost:3000/products';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Ошибка сервера: ' + response.status);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        throw new Error('Не удалось получить данные');
    }
}

export default fetchData;