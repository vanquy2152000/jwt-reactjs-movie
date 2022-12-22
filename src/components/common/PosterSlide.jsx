import { Box } from '@mui/material'
import { SwiperSlide } from "swiper/react"
import tmdbConfigs from '../../api/configs/tmdb.configs'
import AutoSwiper from './AutoSwiper'

const PosterSlide = ({ posters }) => {
    return (
        <AutoSwiper>
            {posters.slice(0, 10).map((item, index) => (
                <SwiperSlide key={`backdrop-${index}`}>
                    <Box sx={{
                        paddingTop: "160%",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage: `url(${tmdbConfigs.posterPath(item.file_path)})`
                    }} />
                </SwiperSlide>
            ))}
        </AutoSwiper>
    )
}

export default PosterSlide