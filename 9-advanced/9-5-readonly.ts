{
  type ToDo = {
    title: string;
    descripton: string;
  };
  // 자주 사용하는 타입은 유틸리티 타입으로 정의 되어 있음.
  function display(todo: Readonly<ToDo>) {
    // todo.title = "jaja";
  }
}
