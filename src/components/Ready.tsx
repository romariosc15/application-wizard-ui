import Link from 'next/link';
const Ready = () => {
    return (
        <div className="bg-white flex flex-col lg:flex-row items-center justify-around">
            <div className="hidden lg:block mt-8">
                <img src="/image/wizard/thinking.png" width="200px"/>
            </div>
            <div className="basis-6/12">
                <h2 className="font-bold text-2xl lg:text-4xl">¿Estás listo?</h2>
                <p className="font-normal text-sm lg:text-base mt-4">
                    Es momento de que crees tus propios formularios enlazando tu propia cuenta de Contentful de forma segura. <br className="block lg:hidden" /> <br className="block lg:hidden" /> ¡No te preocupes! Tus credenciales las estarás validando directamente con Contentful, nosotros no las veremos ni almacenaremos.
                </p>
                <Link href={`/login`}>
                    <a className="inline-flex justify-center py-2 px-4 mt-6 border border-transparent shadow-sm text-xs xl:text-base font-medium rounded-md text-white bg-black hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">Iniciar</a>
                </Link>
            </div>
            <div className="block lg:hidden mt-10 lg:mt-0">
                <img src="/image/wizard/thinking.png" width="175px"/>
            </div>
        </div>
    );
};

export default Ready;