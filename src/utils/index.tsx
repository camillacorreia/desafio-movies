export function formatDate (date: string) {
    if (date) {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`
    }
}

export function formatTime (time: number) {
    const hours = Math.floor(time / 60);
    const minutes = time - (hours * 60);
    return hours > 0 ? hours + 'h  ' + minutes + 'min' : minutes + 'min';
}

export function formatValue (value: number) {
    let result = value+'';
    result = result.replace(/([0-9]{2})$/g, ",$1");
    if (result.length > 6)
        result = result.replace(/([0-9]{3}),([0-9]{2})$/g, ".$1,$2");

    if( result.length > 9)
        result = result.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,".$1.$2,$3");
        
    return result
}