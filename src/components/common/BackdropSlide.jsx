import { Box } from '@mui/material'
import { SwiperSlide } from "swiper/react"
import tmdbConfigs from '../../api/configs/tmdb.configs'
import NavigationSwiper from './NavigationSwiper'

const BackdropSlide = ({ backdrops }) => {
    return (
        <NavigationSwiper>
            {backdrops.slice(0, 10).map((item, index) => (
                <SwiperSlide key={`backdrop-${index}`}>
                    <Box sx={{
                        paddingTop: "60%",
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        backgroundImage: `url(${tmdbConfigs.backdropPath(item.file_path)})`
                    }} />
                </SwiperSlide>
            ))}
        </NavigationSwiper>
    )
}

export default BackdropSlide