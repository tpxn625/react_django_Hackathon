import {Swiper, SwiperSlide} from 'swiper/react';
import style from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
//import img1 from '../../assets/img_slider'

const SwiperWrap = style.div`
    width: 90vw;
    height: 20vw;

`;

const Img = style.img`
    background-color: ${props=>props.color};
    width: 90vw;
    height: 20vw;
    border-radius: 4vw;
`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ImgSliderComponent = () => {
    return(
        <>
            <SwiperWrap>
                <Swiper
                    spaceBetween={0}
                    slidesPerview={1}
                    scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={true}
                >
                    <SwiperSlide><Img color={'red'}/></SwiperSlide>
                    <SwiperSlide><Img color={'blue'}/></SwiperSlide>
                    <SwiperSlide><Img color={'green'}/></SwiperSlide>
                </Swiper>
            </SwiperWrap>
        </>
    );
}

export default ImgSliderComponent;