import request from "@/services";

export function getHomeGoodPriceData() {
  return request.get({
    url: "/home/goodprice",
  });
}
