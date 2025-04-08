import logo from "../../assets/logo.svg"
import face1 from "../../assets/face1.svg"
import face2 from "../../assets/face2.svg"
import face3 from "../../assets/face3.svg"
import face4 from "../../assets/face4.svg"

const Footer = () => {
    return (
        <footer className="w-full bg-white">
            {/* Desktop и Tablet версия (выше 768px) */}
            <div className="hidden md:block max-w-7xl mx-auto px-4 py-6">
                <div className=" rounded-lg p-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg mb-4">Ссылки</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        Правила
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        Лицензия
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        Обратная связь
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center py-4 mb-6">
                            <div className="flex items-center mb-4">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="flex space-x-3">
                                <img src={face1} alt=""/>
                                <img src={face2} alt=""/>
                                <img src={face3} alt=""/>
                                <img src={face4} alt=""/>
                            </div>
                        </div>

                        <div className="text-right">
                            <h3 className="font-bold text-lg mb-4">Вопросы</h3>
                            <ul className="space-y-3 text-right">
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        О нас
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        Частые вопросы
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        Политика конфиденциальности
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Мобильная версия (ниже 768px) */}
            <div className="md:hidden px-4 py-6">
                <div className="  rounded-lg p-4">
                    <div className="flex flex-col">
                        {/* Ссылки */}
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-3">Ссылки</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        Правила
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        Лицензия
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        Обратная связь
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center py-4 mb-6">
                            {/* Логотип */}
                            <div className="flex items-center mb-4">
                                <img src={logo} alt=""/>
                            </div>

                            <div className="flex space-x-3">
                                <img src={face1} alt=""/>
                                <img src={face2} alt=""/>
                                <img src={face3} alt=""/>
                                <img src={face4} alt=""/>
                            </div>
                        </div>

                        <div className={"flex flex-col items-end text-right"}>
                            <h3 className="font-bold text-lg mb-3">Вопросы</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        О нас
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        Частые вопросы
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-600">
                                        Политика конфиденциальности
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

