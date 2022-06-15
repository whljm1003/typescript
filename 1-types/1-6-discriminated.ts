{
  // function: login -> success, fail ⏱
  // result라는 공통적인 프로퍼티를 가지고 있으므로써 포인트를 잡기 쉬워지고, 가독성이 좋아진다
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginSate = SuccessState | FailState;

  function login(): LoginSate {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginSate) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
