// formating data , currency , numbers, names, etc

export const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(`${year}-${month}-${day}`);
};