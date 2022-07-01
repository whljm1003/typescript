{
  type Video = {
    title: string;
    author: string;
  };
  // [1,2].map(item => item * item); // [1, 4]

  // 맵 타입으로 재사용성을 올려줄 수 있다.
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for..in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };
  // type VideoReadonly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type Nullalbe<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullalbe<Video> = {
    title: "hi",
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
