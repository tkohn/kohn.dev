type Props = {
    date: string;
    locale?: string;
};

const germanMonths = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
];

const getDate = (dateToConvert: string, locale = 'de_DE'): string => {
    const date = new Date(dateToConvert);

    return `${date.getDate()}. ${germanMonths[date.getMonth()]} ${date.getFullYear()}`;
};

const DateLayout = ({ date, locale }: Props): JSX.Element => {
    return <>{getDate(date, locale)} </>;
};

export default DateLayout;
