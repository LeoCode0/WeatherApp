
const Time = () => {
    let date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const printDayName = (numberDay) => {
        return days[numberDay];
    };

    const dateId = date.getDay()
    const name = printDayName(dateId)

    return{
        date,
        name
    }
};

export default Time;