
const Process = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-3 lg:space-y-4 text-center">
                <div className="mx-auto rounded-full border border-black text-lg font-bold w-12 h-12 flex flex-col justify-center items-center bg-rose-200">
                    1
                </div>
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium text-slate-700">Accede desde cualquier lugar</h3>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-500">Ingresa a tu propio espacio gracias a Contentful y accede a todas las funciones que te provee esta aplicación desde donde quieras.</p>
            </div>
            <div className="space-y-3 lg:space-y-4 text-center">
                <div className="mx-auto rounded-full border border-black text-lg font-bold w-12 h-12 flex flex-col justify-center items-center bg-rose-200">
                    2
                </div>
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium text-slate-700">Personaliza tu contenido</h3>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-500">Crea tus propios formularios con preguntas que se ajusten a tus necesidades, con una funcionalidad fascinante.</p>
            </div>
            <div className="space-y-3 lg:space-y-4 text-center">
                <div className="mx-auto rounded-full border border-black text-lg font-bold w-12 h-12 flex flex-col justify-center items-center bg-rose-200">
                    3
                </div>
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium text-slate-700">Compartelo fácilmente</h3>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-500">Comparte tus formularios de forma práctica y rápida en tus redes sociales favoritas.</p>
            </div>
        </div>
    );
};

export default Process;