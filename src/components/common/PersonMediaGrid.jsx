import React, { useEffect, useState } from 'react'
import { Button, Grid } from "@mui/material"
import tmdbConfigs from '../../api/configs/tmdb.configs'
import personApi from '../../api/modules/person.api';
import MediaItem from './MediaItem'
import { toast } from 'react-toastify';

const PersonMediaGrid = ({ personId }) => {
    const [medias, setMedias] = useState([])
    const [filteredMedias, setFilteredMedias] = useState([])
    const [page, setPage] = useState(1)
    const skip = 8

    useEffect(() => {
        getMedias()
    }, [personId])

    const getMedias = async () => {
        const { response, err } = await personApi.medias({ personId })
        if (err) toast.error(err.message)
        if (response) {
            const mediasSorted = response.cast.sort((a, b) => getReleaseDate(b) - getReleaseDate(a))
            console.log("check get medias :", mediasSorted)
            setMedias([...mediasSorted])
            setFilteredMedias([...mediasSorted].splice(0, skip))
        }
    }

    const getReleaseDate = (media) => {
        const date = media.media_type === tmdbConfigs.mediaType.movie ? new Date(media.release_date) : new Date(media.first_air_date)
        // tra ve so mili giay tu 2017 ->>
        return date.getTime()
    }

    const onLoadMore = () => {
        setFilteredMedias([...filteredMedias, ...[...medias].splice(page * skip, skip)])
        setPage(page + 1)
    }
    console.log("check filtered people media grid:", filteredMedias)

    return (
        <>
            <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
                {filteredMedias.map((media, index) => (
                    <Grid item xs={6} sm={4} md={3} key={`personDetail-${index}`}>
                        <MediaItem media={media} mediaType={media.media_type} />
                    </Grid>
                ))}
            </Grid>
            {filteredMedias.length < medias.length && (
                <Button onClick={onLoadMore}>
                    load more
                </Button>
            )}
        </>
    )
}

export default PersonMediaGrid