import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Vids() {
    const Vids = useSelector((store) => store.youtube.data);
    console.log(Vids);
    return (
        <section id='vids' className='myScroll'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides={true}
                autoplay={{ delay: 2000, disableOnInteraction: true }}
                pagination={{ clickable: true }}
                navigation={true}
            >                {Vids.map((vid, idx) => {
                if (idx >= 5) return null;

                return (
                    <SwiperSlide key={idx}>
                        <div className='inner'>
                            <div className='pic'>
                                <img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
                            </div>
                            <h2>{vid.snippet.title}</h2>
                        </div>
                    </SwiperSlide>
                );
            })}
            </Swiper>
        </section>
    );
}

export default memo(Vids);