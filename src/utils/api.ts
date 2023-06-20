const URL = 'https://gist.githubusercontent.com/GlennMiller1991/152583a1bf1e057e8db06f5949ae3dda/raw/f84adf51092706ae0e7c0abc7589ad49800d8112/trains.json';

export const fetchData = async () => {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    console.log('Ошибка при загрузке данных:', error);
  }
};
