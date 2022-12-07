import scpClient from "scp2";
import path from "path";
import ora from "ora";
const dir = path.resolve("./src", "./.vuepress/dist/");

const server = {
  host: "43.136.131.248", //服务器IP
  port: 22, //服务器端口
  username: "root", //服务器ssh登录用户名
  password: "Laf1474625330", //服务器ssh登录密码
  path: "/usr/local/nginx/html/blog", //服务器web目录
};
const loading = ora("正在部署至 " + server.host);
loading.start();
scpClient.scp(dir, server, (err) => {
  loading.stop();
  if (err) {
    console.log("部署失败");
    throw err;
  } else {
    console.log("部署成功");
  }
});
