import { Message } from "element-ui";

let Api;

let initIp = () => {
  Api = JSON.parse(sessionStorage.ipConfig_auto).api;
  if (!Api) Message.error("请在ip-config.json中配置 访问ip地址！");
};

switch (process.env.context) {
  case "production":
    initIp();
    break;
  case "development":
    initIp();
    break;
  case "local":
    Api = "";
    break;
}

export default Api;
