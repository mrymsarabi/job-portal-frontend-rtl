export const getDateRange = () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 6);
  
    const day_two = new Date();
    day_two.setDate(endDate.getDate() - 5);
    const day_three = new Date();
    day_three.setDate(endDate.getDate() - 4);
    const day_four = new Date();
    day_four.setDate(endDate.getDate() - 3);
    const day_five = new Date();
    day_five.setDate(endDate.getDate() - 2);
    const day_six = new Date();
    day_six.setDate(endDate.getDate() - 1);

    return {
      day_one: startDate.toISOString().split('T')[0],
      day_two: day_two.toISOString().split('T')[0],
      day_three: day_three.toISOString().split('T')[0],
      day_four: day_four.toISOString().split('T')[0],
      day_five: day_five.toISOString().split('T')[0],
      day_six: day_six.toISOString().split('T')[0],
      day_seven: endDate.toISOString().split('T')[0]
    };
};
  