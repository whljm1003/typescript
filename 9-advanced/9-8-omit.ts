{
  // omit = Pick과는 반대로 빼고 싶은 key를 넣어주면 됨.
  // type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Video에 없는 key 도 가능
  type VideoMetadata = Omit<Video, "url" | "data" | "hi">;

  function getVideo2(id: string): Video {
    return {
      id,
      title: "video",
      url: "https//..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata2(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
