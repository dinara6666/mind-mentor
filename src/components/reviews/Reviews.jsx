import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Reviews.css';
import ButtonPrev from '../../assets/icons/button-prev.svg';
import ButtonNext from '../../assets/icons/button-next.svg';

const Reviews = () => {
    const swiperRef = useRef(null);

    return (
        <div className="reviews-container">
            <div className="reviews-header">
                <h2>Отзывы</h2>

                <div className="custom-navigation">
                    <div
                        className="custom-button-prev"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                        <img src={ButtonNext} alt=""/>
                    </div>
                    <div
                        className="custom-button-next"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                        <img src={ButtonPrev} alt=""/>
                    </div>
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                // slidesPerView={3.3}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3.3,
                    },
                }}

                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                pagination={{clickable: true}}
                // modules={[Pagination]}
                className="mySwiper"
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide className={"SwiperSlide"} key={index}>
                        <div className="swiper-card">
                            <div className="user-name">
                                <img src="" alt="img"/>
                                <h3>Канатов Рахим</h3>
                            </div>
                            <p>“Ваш сайт помог нам улучшить навыки и получить новых клиентов 😀❤️”</p>
                        </div>
                    </SwiperSlide>
                ))}

                {/*<SwiperSlide className={"slide"}>*/}
                {/*    <div className="swiper-card">*/}
                {/*        <div className="user-name">*/}
                {/*            <img src="" alt="Avatar"/>*/}
                {/*            <h3>Канатов Рахим</h3>*/}
                {/*        </div>*/}
                {/*        <p>“Ваш сайт помог нам улудшить мои навыки к нашему бизнесу и получить новых клиентов😀❤️”</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <div className="swiper-card">*/}
                {/*        <div className="user-name">*/}
                {/*            <img src="" alt="Avatar"/>*/}
                {/*            <h3>Канатов Рахим</h3>*/}
                {/*        </div>*/}
                {/*        <p>““Ваш сайт помог нам улудшить мои навыки к нашему 🤗бизнесу и получить новых клиентов””</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <div className="swiper-card">*/}
                {/*        <div className="user-name">*/}
                {/*            <img src="" alt="Avatar"/>*/}
                {/*            <h3>Канатов Рахим</h3>*/}
                {/*        </div>*/}
                {/*        <p>“Ваш сайт помог нам улудшить мои навыки к нашему бизнесу и получить новых клиентов😀❤️”</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}

                {/*<SwiperSlide>*/}
                {/*    <div className="swiper-card">*/}
                {/*        <div className="user-name">*/}
                {/*            <img src="" alt="Avatar"/>*/}
                {/*            <h3>Канатов Рахим</h3>*/}
                {/*        </div>*/}
                {/*        <p>“Ваш сайт помог нам улудшить мои навыки к нашему бизнесу и получить новых клиентов😀❤️”</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}

                {/*<SwiperSlide>*/}
                {/*    <div className="swiper-card">*/}
                {/*        <div className="user-name">*/}
                {/*            <img src="" alt="Avatar"/>*/}
                {/*            <h3>Канатов Рахим</h3>*/}
                {/*        </div>*/}
                {/*        <p>“Ваш сайт помог нам улудшить мои навыки к нашему бизнесу и получить новых клиентов😀❤️”</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
            </Swiper>
        </div>
    );
};

export default Reviews;
