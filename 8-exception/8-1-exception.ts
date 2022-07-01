// Java: Exception
// JavaScript: Error
// const array = new Array(10000000000000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents🧾";
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = "not exist!💩";

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    // 에러가 발생하고 catch가 되어도 항상 실행되기 때문에 꼭 실행 해야 하는 코드는 finally에 사용하는 게 좋음!
    closeFile(fileName);
    console.log(`closed!`);
  }
}

run();
