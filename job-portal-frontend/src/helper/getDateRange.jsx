export const getDateRange = (startDate = new Date()) => {
    const formatDate = (date) => {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    const day_seven = new Date(startDate);
    const day_six = new Date(startDate.setDate(startDate.getDate() - 1));
    const day_five = new Date(startDate.setDate(startDate.getDate() - 1));
    const day_four = new Date(startDate.setDate(startDate.getDate() - 1));
    const day_three = new Date(startDate.setDate(startDate.getDate() - 1));
    const day_two = new Date(startDate.setDate(startDate.getDate() - 1));
    const day_one = new Date(startDate.setDate(startDate.getDate() - 1));

    return {
        day_one: formatDate(day_one),
        day_two: formatDate(day_two),
        day_three: formatDate(day_three),
        day_four: formatDate(day_four),
        day_five: formatDate(day_five),
        day_six: formatDate(day_six),
        day_seven: formatDate(day_seven),
    };
};
