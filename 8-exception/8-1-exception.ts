// Java: Exception
// JavaScript: Error
// const array = new Array(10000000000000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!๐ฉ") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents๐งพ";
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = "not exist!๐ฉ";

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    // ์๋ฌ๊ฐ ๋ฐ์ํ๊ณ  catch๊ฐ ๋์ด๋ ํญ์ ์คํ๋๊ธฐ ๋๋ฌธ์ ๊ผญ ์คํ ํด์ผ ํ๋ ์ฝ๋๋ finally์ ์ฌ์ฉํ๋ ๊ฒ ์ข์!
    closeFile(fileName);
    console.log(`closed!`);
  }
}

run();
