export const getPrriceQueryParams = ( searchParams , key , value ) =>{
    const hasVlaueInParams = searchParams.has(key);

    if(value && hasVlaueInParams) {
        searchParams.set(key,value);
    } else if(value) {
        searchParams.append(key,value);
    }else if(hasVlaueInParams) {
        searchParams.delete(key);
    }

    return searchParams;
};