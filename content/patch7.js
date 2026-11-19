// HTML 양식 2장 (2026-11-20): 1-7 가전 명판, 4-6 전기요금 고지서
const fs = require("fs"), path = require("path");
const r = f => fs.readFileSync(path.join(__dirname, f), "utf8");
module.exports = function (P) {
  Object.assign(P["1-7"], { rawH: "가전 뒷면 명판은 이렇게 생겼어요", raw: r("nameplate.html") });
  Object.assign(P["4-6"], { rawH: "고지서에서 이 두 칸을 찾아요", raw: r("bill.html") });
};
