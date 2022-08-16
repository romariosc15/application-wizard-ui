const getColspan = (columns:number):string => {
    let containerClasses = '';
    if(columns===1)
        containerClasses = 'col-span-1';
    if(columns===2)
        containerClasses = 'col-span-2';
    if(columns===3)
        containerClasses = 'col-span-3';
    if(columns===4)
        containerClasses = 'col-span-4';
    if(columns===5)
        containerClasses = 'col-span-5';
    if(columns===6)
        containerClasses = 'col-span-6';
    if(columns===7)
        containerClasses = 'col-span-7';
    if(columns===8)
        containerClasses = 'col-span-8';
    if(columns===9)
        containerClasses = 'col-span-9';
    if(columns===10)
        containerClasses = 'col-span-10';
    if(columns===11)
        containerClasses = 'col-span-11';
    if(columns===12)
        containerClasses = 'col-span-12';
    return containerClasses;
};

export { getColspan };