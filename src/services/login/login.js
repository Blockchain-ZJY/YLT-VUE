import { vgriRequest } from "../index";

export function register(data) {
  return vgriRequest.post({
    url: "/Register",
    data,
  });
}

export function login(data) {
  return vgriRequest.post({
    url: "/Login",
    data,
  });
}

export function getUserInfo(data) {
  return vgriRequest.post({
    url: "/GetMyInf",
    data,
  });
}

// 用户头像上传
export function avatarUpload(data) {
  return vgriRequest.post({
    url: "/UploadImg",
    data,
  });
}

// 修改密码
export function editPassword(data) {
  return vgriRequest.post({
    url: "/Modify",
    data,
  });
}

// 获取所有用户
export function getAllUser(data) {
  return vgriRequest.post({
    url: "/GetAllUser",
    data,
  });
}
