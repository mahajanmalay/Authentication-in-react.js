import axios from 'axios';
const URL = "http://localhost:8080/api/video";
class videoService {

    getVideos(){
        return axios.get(URL);
    }

    createVideo(video){
        return axios.post(URL, video);
    }

    getVideoById(videoId){
        return axios.get(URL + '/' + videoId);
    }

    updateVideo(video, videoId){
        return axios.put(URL + '/' + videoId, video);
    }

    deleteVideo(videoId){
        return axios.delete(URL + '/' + videoId);
    }
}

export default new videoService()