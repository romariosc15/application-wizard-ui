
const Process = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-6">
            <div className="space-y-3 lg:space-y-4 text-center">
                <div className="mx-auto rounded-full border border-black text-lg font-bold w-12 h-12 flex flex-col justify-center items-center bg-rose-200">
                    1
                </div>
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium">Regístrate</h3>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-600">Ingresa a la sección de registro y con solo tu dirección de correo, accede a toda la funcionalidad que te provee esta aplicación.</p>
            </div>
            <div className="space-y-3 lg:space-y-4 text-center">
                <div className="mx-auto rounded-full border border-black text-lg font-bold w-12 h-12 flex flex-col justify-center items-center bg-rose-200">
                    2
                </div>
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium">Personaliza</h3>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-600">Crea tus propios formularios con preguntas que se ajusten a tus necesidades, con una funcionalidad fascinante.</p>
            </div>
            <div className="space-y-3 lg:space-y-4 text-center">
                <div className="mx-auto rounded-full border border-black text-lg font-bold w-12 h-12 flex flex-col justify-center items-center bg-rose-200">
                    3
                </div>
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium">Comparte</h3>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-600">Comparte tus formularios con la seguridad y confiabilidad mas top de la industria. Nos aseguraremos que tus formularios se encuentren disponibles 24/7</p>
            </div>
        </div>
    );
};

export default Process;