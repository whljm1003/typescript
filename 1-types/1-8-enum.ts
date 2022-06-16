{
  /**
   * Enum
   * TypeScript Enum은 왠만하면 사용 안함
   * 타입이 정확하게 보장되지 않는다.
   * 상수들을 묶을 수 있는 방법이 Enum말고도 대부분의 케이스에서 union 타입을 활용할 수 있음.
   * 안드로이드 & Ios 네이티브 프로그래밍 언어에서 union 타입을 표헌 방법이 없어서 enum을 쓰지만, 이 경우 외엔 타입을 사용하는 것을 추천
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "Monday" | "TuesDay" | "Wednesday";
  enum Days {
    Monday = 1, // 기본은 0부터 시작하지만 할당해서 시작 숫자를 바꿀 수 있음, 문자열도 가능 (대신 수동적으로 다 할당 해줘야 함)
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Satarday, // 5
    Sunday, // 6
  }
  console.log(Days.Monday);
  let day: Days = Days.Satarday;
  day = Days.Thursday;
  day = 1; //Enum의 단점 💩
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}
