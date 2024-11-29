import { vgriRequest } from "../index";

// 获取所有的NFT
export function getAllNFT(data) {
  return vgriRequest.post({
    url: "/GetAllNFTOnSell",
    data,
  });
}

// 购买NFT
export function buyNFT(data) {
  return vgriRequest.post({
    url: "/BuyNFT",
    data,
  });
}

// 出售NFT
export function sellNFT(data) {
  return vgriRequest.post({
    url: "/SellNFT",
    data,
  });
}

// 上传新NFT
export function createNFT(data) {
  return vgriRequest.post({
    url: "/CreateNFT",
    data,
  });
}

// 获取当前用户的nft
export function getMyNFT(data) {
  return vgriRequest.post({
    url: "/GetMyNFT",
    data,
  });
}

// 获取所有的交易记录
export function getAllTrade(data) {
  return vgriRequest.post({
    url: "/GetAllOrder",
    data,
  });
}

// 获取我的交易记录
export function getMyTrade(data) {
  return vgriRequest.post({
    url: "/GetMyOrder",
    data,
  });
}

// 通过hash获取nft
export function getNFTByHash(data) {
  return vgriRequest.post({
    url: "GetNFTByHash",
    data,
  });
}
