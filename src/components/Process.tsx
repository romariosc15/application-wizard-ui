
const Process = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-3 lg:space-y-4 text-center">
                <div className="mx-auto rounded-full text-lg font-bold w-12 h-12 flex flex-col justify-center items-center bg-yellow text-white">
                    1
                </div>
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium text-black">Accede desde cualquier lugar</h3>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-600">Ingresa a tu propio espacio de trabajo gracias a Contentful y utilizalo desde donde quieras.</p>
            </div>
            <div className="space-y-3 lg:space-y-4 text-center">
                <div className="mx-auto rounded-full text-lg font-bold w-12 h-12 flex flex-col justify-center items-center bg-green text-white">
                    2
                </div>
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium text-black">Personaliza tu contenido</h3>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-600">Crea tus propios formularios con preguntas que se ajusten a tus necesidades, con una funcionalidad fascinante.</p>
            </div>
            <div className="space-y-3 lg:space-y-4 text-center">
                <div className="mx-auto rounded-full text-lg font-bold w-12 h-12 flex flex-col justify-center items-center bg-rose text-white">
                    3
                </div>
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium text-black">Compartelo fácilmente</h3>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-600">Comparte tus formularios de forma práctica y rápida en tus redes sociales favoritas.</p>
            </div>
        </div>
    );
};

export default Process;