{
  // Pick = 기존의 타입에서 원하는 속성과 값만 뽑아서 사용 가능함.
  // type Pick<T, K extends keyof T> = { [P in K]: T[P] };

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https//..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
