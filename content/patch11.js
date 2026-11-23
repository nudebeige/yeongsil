// 2026-11-24 초보자·안전 검토 반영
// ① 직접 손대는 쪽 맨 위 '시작 전에' 상자(handsOn)  ② 단계마다 보기만 / 직접 조작 / 멈춤·연락 표시(stepKinds)
// 등급 문구는 0-2쪽 내용(경미한 전기공사 = 같은 자리 부품 교체·퓨즈 갈기, 차단기 올리고 내리기)과 맞춤. 법 조항을 새로 단정하지 않음.
const MEASURE = "고치는 일이 아니라 확인하는 일이에요(0-2쪽). 다만 전기가 살아 있는 콘센트에 대는 일이라 아래 경우엔 멈춰요.";
const HANDS = {
  "1-4": { level: "작은 차단기를 내리고 올리는 일은 0-2쪽 기준 <b>직접 해도 되는 일</b>이에요. 큰 차단기(T 버튼 있는 것)는 그대로 둬요." },
  "2-1": { level: MEASURE },
  "2-2": { level: MEASURE, extra: "리드선 껍질이 갈라졌거나 침 끝이 휘었어요" },
  "2-3": { level: MEASURE, extra: "라인 분리기가 없어 전선을 벗겨야 할 것 같아요" },
  "3-1": { level: "같은 자리에서 같은 콘센트로 바꾸는 것은 0-2쪽 기준 <b>직접 해도 되는 작은 공사</b>예요. 새로 늘리기·옮기기는 업체 몫이에요.", extra: "커버를 열었더니 선이 세 가닥보다 많거나 색이 섞여 있어요" },
  "3-2": { level: "같은 자리 스위치 교체는 0-2쪽 기준 직접 해도 되는 일이지만, 두 곳에서 켜는 3로 스위치는 <b>할 수 있어도 조심할 일</b>이에요.", extra: "선이 세 가닥 넘게 연결돼 있어요" },
  "4-2": { level: "T 버튼 누르기와 레버 올리기는 0-2쪽 기준 <b>직접 해도 되는 일</b>이에요." },
  "4-4": { level: "같은 숫자(A) 퓨즈로 갈아 끼우기는 0-2쪽 기준 <b>직접 해도 되는 작은 공사</b>예요. 왜 끊어졌는지 찾는 건 기사님 몫이에요.", extra: "갈자마자 또 끊어져요" }
};
const STOP = ["탄 냄새·그을음·녹은 자국이 보여요", "손·바닥·벽에 물기가 있어요", "커버나 전선이 낡아 부서지거나 누렇게 변했어요(오래된 집)", "차단기가 계속 떨어지거나 올라가지 않아요", "순서 중 하나라도 확신이 없어요"];

// v 보기만 · h 직접 조작 · c 멈춤·연락
const KINDS = {
  "1-4": "vhhhh", "2-1": "hhh", "2-2": "vhhhv", "2-3": "hhv", "3-1": "hhhhh", "4-2": "vhhv",
  "5-3": "hhvhc", "5-5": "hhc", "5-6": "hvvc", "5-7": "chhcc", "5-8": "vvhc", "5-9": "chhch", "5-10": "hccc", "5-11": "vvhhc"
};

module.exports = function (P) {
  for (const [id, o] of Object.entries(HANDS)) P[id].handsOn = { level: o.level, stop: o.extra ? [...STOP.slice(0, 4), o.extra, STOP[4]] : STOP };
  for (const [id, k] of Object.entries(KINDS)) {
    if (!P[id].steps || P[id].steps.length !== k.length) throw new Error(`stepKinds 개수 안 맞음: ${id}`);
    P[id].stepKinds = k.split("");
  }
};
