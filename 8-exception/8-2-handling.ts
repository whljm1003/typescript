{
  class NetworkClient {
    tryConnect(): void {
      throw new Error("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }
  // 에러 처리를 할 땐 가능한 에러 처리 후 무언가 할 수 있는 곳에서 처리하는 곳이 좋음.
  // 그래서 UserService 보단 App에서 에러 처리가 더 우아하게 처리할 수 있음.
  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }
  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
