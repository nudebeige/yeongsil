# AI 실물 그림 구상서

원칙
- 글자·숫자 없이 만든다(`no text, no letters, no numbers, blank LCD`). 한글 이름표·번호·화면 숫자는 HTML로 얹는다.
- 한국 집 기준: 콘센트는 둥근 구멍 2개 + 양옆 금속 접지 클립(Type F), 220V.
- 손이 나오면 손가락은 침의 보호 턱 뒤, 마른 손. 위험한 자세(맨손으로 금속 침 잡기)는 그리지 않는다.
- 기호가 중요한 부분(다이얼 기호, 단자 이름)은 AI가 틀리기 쉬워서 직접 그린 그림(svg)을 함께 둔다.
- 만든 그림은 `public/img/<번호>.webp`로 저장하고, 번호 위치(%)를 쪽 데이터에 적는다.

## 2-2 멀티테스터 (3장)

### G13-1 부품 이름 — 쪽 맨 위 큰 그림
- 구도: 흰 바탕 위에 노란 테두리 + 검은 몸체의 손바닥만 한 디지털 멀티테스터를 정면에서. 위 화면, 가운데 큰 원형 다이얼, 아래 단자 3개. 검은 선은 가운데 단자, 빨간 선은 오른쪽 단자에 꽂혀 테스터 아래로 늘어짐.
- 프롬프트: `Product photo, front view of a handheld digital multimeter with yellow rubber bumper and black body on a plain white background, blank LCD screen at top, large round rotary dial in the center, three input jacks at the bottom, black test lead plugged into the middle jack and red test lead plugged into the right jack, probes lying below, soft studio light. No text, no letters, no numbers, no symbols, blank screen.`
- 얹을 것: ① 화면 ② 다이얼 ③ COM(검정) ④ VΩ(빨강) ⑤ 10A(쓰지 않기, 빨간 X) — 화면 자리에 HTML로 `221.4 V` 표시.

### G13-2 콘센트 전압 재는 장면 — '콘센트 전압 재기' 순서 옆
- 구도: 흰 벽의 한국식 2구 콘센트에 빨강·검정 침이 각각 한 구멍씩 꽂혀 있고, 마른 손이 침의 손잡이(보호 턱 뒤)를 잡고 있음. 옆 선반에 테스터.
- 프롬프트: `Realistic close-up photo, a white Korean wall socket with two round holes and metal grounding clips (Type F), red and black multimeter probes inserted into the two holes, a dry hand holding the probe handles behind the finger guards, a handheld multimeter with blank screen on a shelf beside it, soft daylight. No text, no letters, no numbers.`
- 얹을 것: 테스터 화면 자리에 `221V`, 침에 "검정 먼저", "빨강 다음" 라벨.

### G13-3 건전지·전선 끊김 — '집에서 이렇게 써요' 옆 (2컷)
- 왼쪽: AA 건전지 양 끝에 빨강(+)·검정(-) 침. 오른쪽: 콘센트에서 뽑아 둔 연장선(릴선) 플러그와 끝 콘센트에 침을 대는 모습.
- 프롬프트: `Split image, two halves. Left: red and black multimeter probes touching the two ends of an AA battery on a wooden table. Right: multimeter probes touching the plug pins of an unplugged white extension cord on a wooden table. Realistic, soft light. No text, no letters, no numbers.`
- 얹을 것: 왼쪽 "1.6V = 새 것 / 1.2V 아래 = 교체", 오른쪽 "삐- = 이어짐".

## 나머지 쪽
- `memory`의 영실 그림 목록 순서대로 같은 형식(구도 · 프롬프트 · 얹을 것)으로 이 문서에 이어서 적는다.
