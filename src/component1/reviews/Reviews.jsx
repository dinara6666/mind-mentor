import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Reviews.css';

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

                    </div>
                    <div
                        className="custom-button-next"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >

                    </div>
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                slidesPerView={3.3}
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
