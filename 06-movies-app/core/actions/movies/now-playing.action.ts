import { movieApi } from "@/core/api/movie-api";
import { MoveDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";

export const nowPlayingAction = async () => {

  try {

    const { data } = await movieApi.get<MoveDBMoviesResponse>('/now_playing');

    // console.log(JSON.stringify(data, null, 2));

    return [];

  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
}