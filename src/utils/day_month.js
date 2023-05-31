
import dayjs from 'dayjs';

export const getMonth=(month=dayjs().month()+1)=>{
    month=Math.floor(month);
    const year=dayjs().year();
    const firstDayofMonth=dayjs(new Date(year,month,1)).day();
    let currentMonthCount=0-firstDayofMonth;

    const daysField=new Array(24).fill([]).map(day=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++;
            return dayjs(new Date(year,month,currentMonthCount));
        })
    });
    return daysField;
}

export const daysOfMonth=(month=Math.floor(dayjs().month()+1))=>{
    const year=dayjs().year();
    const firstDayofMonth=dayjs(new Date(year,month,1)).day();
    let currentMonthCount=0-firstDayofMonth;

    const daysField=new Array(7).fill([]).map(day=>{
        currentMonthCount++;
        return dayjs(new Date(year,month,currentMonthCount));
    });
    return daysField;
}
