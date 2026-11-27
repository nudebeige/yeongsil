# AI 실물 그림 구상서

## 원칙
- 글자·숫자 없이 만든다. 프롬프트 끝에 v2 꼬리말 T(blank unmarked surfaces)를 붙인다. 화면 숫자·이름표·번호는 HTML로 얹는다(`screens`, `badges`, `pins`).
- 한국 집 기준: 콘센트는 둥근 구멍 2개 + 양옆 금속 접지 클립(Type F), 220V, 아파트 실내.
- 사람 손이 나오면 마른 손, 침은 보호 턱 뒤. 위험한 자세는 그리지 않는다.
- 기호·글자가 핵심인 것(다이얼 기호, 명판, 고지서)은 AI가 틀리므로 **직접 그림이나 HTML 양식**으로 만든다.
- 저장: `public/img/<그림번호>.webp` → 쪽 데이터의 `img`(맨 위 큰 그림) 또는 `photos`(순서 아래 추가 그림)에 넣고 번호 위치(%)를 적는다.
- 하루 무료 한도는 쓸 만한 그림 5~6장 정도. 아래 '날짜 묶음' 순서로 만든다.

## 진행 기록
- 2026-11-20 (8번 시도, 한도 남음 불확실): **완료** G13-1(2-2 부품, `public/img/g13-1.webp`), G12(2-1 검전기, `g12.webp`) — `content/patch8.js`.
  한도: 8번째 시도 뒤 막힘 → 하루 약 8번으로 계획.
  다음 날 고친 프롬프트(11-21 v2로 바뀜, 기록용):
  - G13-2: `Realistic photo, three-quarter side angle view of a white European schuko wall socket on a white wall. Two thin metal test probes, one red and one black, are each pushed into one of the two round holes so that the metal tips disappear inside the holes, the red and black plastic probe handles sticking out at an angle, held at the grips by a dry hand. No multimeter in the frame. Soft daylight, shallow depth of field. No text, no letters, no numbers.`
  - G13-3: `Split image with two equal halves, realistic photo on a light wooden table. Left half: a single AA battery lying flat, a red test probe tip pressing on its positive end button and a black test probe tip pressing on its flat negative end. Right half: the round European plug (two round metal pins, schuko style) of an unplugged white extension cord lying on the table, a red test probe tip touching one round pin and a black test probe tip touching the other round pin. Soft daylight. No text, no letters, no numbers.`
  - G14: `Realistic product photo on a white desk: a handheld digital clamp meter with a blank screen, its curved jaw fully closed in a ring around one single white insulated power cord. The cord runs from a small white line splitter adapter that is plugged into a white power strip. All wires are fully insulated, no bare copper visible. A hand holds the meter body. Soft daylight. No text, no letters, no numbers.`
  - G15: `Realistic close-up photo inside an open white home electrical distribution panel: a row of small white circuit breakers with their front cover in place, a yellow handheld insulation resistance tester with a blank screen resting on the panel ledge, its red and black test leads ending in small alligator clips that are clipped onto the screw terminals at the top of one breaker. No people, no hands. Soft indoor light. No text, no letters, no numbers.`
  **다시 할 것(이유)** G13-2(침이 구멍이 아닌 면·가운데 나사에 닿음 ×2) → 다음엔 "probe tips inside holes" 대신 콘센트를 옆에서 비스듬히 찍는 구도로. G13-3(미국식 납작 플러그) → "round-pin European plug" 명시. G14(턱이 열리고 맨 전선이 나옴) → "jaw fully closed around one insulated cord, no bare wire". G15(손 세 개, 집게가 단자에 안 물림) → 손 빼고 "only the tester and clips attached to breaker screws".
- 2026-11-21 밤 (v2 프롬프트, 8번 시도 → 8장 모두 사용, 9번째에 한도): **완료** G39(5-7) · G35(5-3, 위쪽 이상한 부품 잘라냄) · G37(5-5) · G36(5-4) · G40(5-8) · G46(5-10) · G10(1-8, 멀티탭에 멀티탭은 안 나옴 — 나중에 다시 해 볼 만) · G27(3-8) — `content/patch10.js`.
  - **다시 보니 뺀 3장**(사용자 지적): G39 플러그가 콘센트 옆 공중에 뜸 · G35 스탠드가 큰 콘센트 대신 엉뚱한 작은 상자에 꽂힘 · G27 콘센트가 수납장 벽 없이 공중에 뜸. → 쓰는 그림 5장(G37·G36·G40·G46·G10). 남은 1순위: G39·G35·G27·G43.
  - **교훈(규칙 3)**: 플러그를 "꽂힌 모습"으로 요구하면 옆에 떠 버린다. 플러그가 꼭 필요 없으면 빼고, 필요하면 `the plug is pushed fully into the socket, its face flush against the socket` + 콘센트는 `mounted flat on the wall surface`. 판정은 "물리적으로 가능한가(뜨지 않았나, 어디에 붙었나)"를 먼저 본다.
  - 다시 할 프롬프트: G39 `Close-up of [콘센트] mounted flat on light beige wallpaper. Dark brown scorch marks spread around the left round hole and onto the white plastic face. A grey smoke stain fans upward on the wallpaper above the socket.`(+T, 플러그 없음) · G27 `... the cabinet back wall has exactly one [콘센트] mounted flat on it, with exactly one thick grey plug pushed fully into it, its face flush against the socket ...` · G35 `... exactly two [콘센트] mounted flat on the wall at knee height. Each desk lamp cord goes straight into one of these two sockets, plugs pushed fully in, flush ...`
- 2026-11-23 (8번 시도 → 4장 사용, 9번째에 한도): **완료** G39(5-7, 플러그 빼고 콘센트 옆 벽 그을음) · G27(3-8, 벽 콘센트에 플러그 끝까지) · G35(5-3, 콘센트 안 보이게 장 위 스탠드 두 개로 구도 바꿈) · G43(3-9). **실패** G35 첫 시도(화살표·플러그 매달림) · G08 ×2(옛 콘센트에도 접지 클립이 생김 → AI로는 "클립 없는 콘센트"를 못 그림, SVG로 직접 그리기로) · G29(파란 것이 레버로 나오고 위에 막대가 솟음 → 분전반 그림은 실패 잦음). 남은: 2순위 G11·G29·G32·G14·G15(G08은 SVG), 3순위 11장.
- 2026-11-24 (9번 시도 → 7장 사용, 10번째에 한도): **완료** G15(2-4, 첫 시도는 멀티테스터처럼 나와 버림 → "주황 상자형·끈·큰 버튼"으로 다시) · G14(2-3, 라인 분리기가 중국식 어댑터로 나와 잘라 내고 양옆 여백 채움) · G32(4-5) · G11(1-9, 옛 분전반 하나만) · G22(3-3) · G23(3-4) · G45(3-12) — `content/patch12.js`. 남은: G29(4-2 T 버튼) · G08(1-6, SVG로) · G13-2 · G13-3 · G18 · G20 · G24 · G17 · G42 · G44.
- 2026-11-25 (9번 시도 → 5장 사용, 10번째에 한도): **완료** G24(3-5, 첫 시도는 전선형 난방에 콘센트 꽂음 → "넓은 탄소 필름·구리 띠·연결 상자"로 다시) · G17(2-6, 첫 시도는 관이 덕트처럼 굵음 → "손가락 굵기"로 다시, 위 선 끝 잘라 냄) · G42(1-10) · G44(3-11, 왼쪽 미국식 콘센트 잘라 냄) · G18(2-7) — `content/patch13.js`. **실패** G20(선이 나사 단자가 아니라 구멍에 꽂힘). 남은: G29(4-2) · G20(3-1) · G13-2 · G13-3(2-2) · G08(1-6, SVG로).
- 2026-11-27 (7번 시도 → 4장 사용): **완료** G29(4-2, 레버와 파란 T 버튼을 따로 묘사하니 성공) · G13-2(2-2, 첫 시도는 선 없는 탐침 → 선을 감아 둔 모습으로 다시) · G13-3(2-2) · G20(3-1, "뒷면만·구멍 안 보이게"로 4번째에 성공) — `content/patch14.js`. **AI 그림 끝.** 남은 것: G08(1-6 옛 콘센트)은 SVG로 직접 그리기.

## 면접용 일주일 우선순위 (2026-11-21 정함, 11-28까지)
하루 약 8번 × 7일 ≈ 56번, 건지는 비율 40% 안팎 → 약 20장 목표. 첫 화면 동그라미·증상 쪽부터.
1. **증상 쪽 (첫 화면에서 바로 눌리는 곳)**: G39 5-7 그을린 콘센트 · G35 5-3 콘센트 하나 · G37 5-5 전자레인지 · G36 5-4 깜빡임 · G40 5-8 감지기 · G46 5-10 천장 누수 · G10 1-8 문어발 멀티탭 · G27 3-8 인덕션 · G43 3-9 안전점검
2. **기초 쪽**: G08 1-6 접지 콘센트 · G11 1-9 옛·새 분전반 · G29 4-2 T 버튼 · G32 4-5 SPD · G14 2-3 클램프미터 · G15 2-4 메거
3. **남으면**: G18 · G20 · G22 · G23 · G24 · G17 · G42 · G44 · G45 · G13-2 · G13-3
- G38(5-6 단자함)은 뺌: 5-11 장비 사진 6장으로 대신하고 5-6에서 링크.
- Qwen이 막히면 같은 계정 Z-Image-Turbo도 한도를 같이 씀(11-21 둘 다 거절 확인).

## 고친 프롬프트 v2 (2026-11-21) — 이것부터 쓴다
아래 날짜별 항목의 프롬프트는 옛 버전(참고용). 만들 때는 이 표의 순서와 문장을 쓴다.

**규칙 1 · 어려운 건 AI에게 안 맡긴다**
- 손·손가락·사람 얼굴·탐침이 구멍에 들어간 모습·집게가 무는 모습은 그리지 않는다. 물건만 놓인 사진을 받는다.
- "어디에 대요, 여기를 눌러요"는 HTML로 얹는다: `rings`(동그라미) + `pins`(말풍선) + `badges`(번호).
- 한 장에 한 장면. 두 칸 나눈 그림은 한 장면으로 줄이거나, 두 물건을 한 탁자 위에 나란히 놓는다.

**규칙 2 · 원하는 모습만 긍정문으로**
- "no ~"를 쓰지 않는다(이 모델은 부정어를 무시하고 오히려 그 단어를 그린다).
- 개수를 박는다: exactly one / exactly two / exactly four.
- 배경을 단순하게: plain white / light grey background, 빈 방, 빈 조리대.
- 모든 프롬프트 끝에 같은 꼬리말 **T** 를 붙인다:
  `Realistic photo, sharp focus, soft even daylight. Clean unbranded objects with blank unmarked surfaces.`
- 구도가 좋은데 한 군데만 틀리면: 그 그림의 seed를 적어 두고 `randomize_seed:false`로 한 단어만 바꿔 다시.
- 기본 단계 수(8) 그대로. 크게 뽑지 않는다(한도는 GPU 시간이라).

콘센트 말 고정 — 아래 **[콘센트]** 자리에 이 문장을 풀어 넣는다:
`a white European Type F wall socket with exactly two round holes and two shiny metal grounding clips at the top and bottom edges`

### 1순위 · 증상 쪽 (첫 화면)
| 그림 | 쪽 | 프롬프트 (끝에 T) | 비율 | HTML로 얹기 |
|---|---|---|---|---|
| G39 | 5-7 | `Close-up of [콘센트] on light beige wallpaper. Dark brown scorch marks spread around the left round hole. Exactly one white round-pin plug is half inserted, its plastic body melted and deformed. A grey smoke stain fans upward on the wallpaper above the socket.` | 4:3 | badges ①그을음(hot) ②녹은 플러그(hot) |
| G35 | 5-3 | `A white living room wall with exactly two [콘센트] mounted one meter apart at knee height. Exactly two identical white desk lamps stand on the wooden floor, each plugged into its own socket. The right lamp glows warm and bright, the left lamp is dark and switched off. Plain empty room.` | 16:9 | pins "안 켜짐", "옆은 켜짐" · ring 왼쪽 콘센트 |
| G37 | 5-5 | `A clean Korean apartment kitchen counter with exactly one white microwave oven, its door closed, its power cord plugged into a [콘센트] on the tiled wall behind it. The microwave interior light glows. Empty counter around it.` | 4:3 | pins "켜는 순간", "큰 차단기가 탁" · note로 5-1쪽 연결 |
| G36 | 5-4 | `Looking up at a white living room ceiling with exactly four round flat LED ceiling lights in a row. Three lights shine bright white, the second light from the left is dim and greyish. A white wall light switch plate is visible on the wall at the lower right.` | 16:9 | badges ①이 등만 어두움(hot) ②스위치 |
| G40 | 5-8 | `A modern white kitchen. Exactly one round white smoke detector is mounted on the flat white ceiling, its small red indicator light glowing. Directly below on the stove, exactly one frying pan sends a thin wisp of light white cooking steam rising toward the detector.` | 4:3 | badges ①감지기 ②요리 김·연기 |
| G46 | 5-10 | `A Korean apartment ceiling with exactly one round flush-mounted ceiling light. A brown water stain spreads across the ceiling around the light, and clear water drops fall from the edge of the light. Exactly one blue plastic bucket stands on the wooden floor directly below catching the drops.` | 4:3 | badges ①물 떨어지는 등(hot) · pin "그 갈래 차단기부터" |
| G10 | 1-8 | `Top-down view of a light wooden floor. Exactly one white power strip with four sockets lies on the floor, and a second white power strip is plugged into it. Thick black plugs from an electric heater, a hair dryer and an electric kettle fill the sockets, their cords tangled. The plastic around one socket is browned by heat.` | 16:9 | badges ①멀티탭에 멀티탭(hot) ②열 내는 기기 몰림 ③누렇게 변색(hot) |
| G27 | 3-8 | `A modern Korean kitchen with a black built-in induction cooktop on a white counter. Below it the cabinet door is open, showing exactly one [콘센트] inside the cabinet with exactly one thick grey plug plugged straight into it. Tidy empty cabinet.` | 4:3 | badges ①인덕션 ②전용 콘센트 · pin "멀티탭 ✕" |
| G43 | 3-9 | `The front door of a Korean apartment standing open. On the grey entrance floor sit exactly one dark grey canvas tool bag and exactly one clipboard, and exactly one plain white ID card on a blue lanyard hangs from the door handle. Empty hallway.` | 4:3 | pin "신분증부터 확인" · badge ①점검 가방 |

### 2순위 · 기초 쪽
| 그림 | 쪽 | 프롬프트 (끝에 T) | 비율 | HTML로 얹기 |
|---|---|---|---|---|
| G08 | 1-6 | `Product photo on a plain light grey background. Exactly two wall sockets side by side. Left: [콘센트], bright white. Right: an old yellowed wall socket with exactly two round holes and a plain flat plastic face around them.` | 16:9 | badges ①금속 접지 클립 ②클립 없음(hot) · pins "접지형", "옛날형" |
| G11 | 1-9 | `Exactly two home electrical panels mounted side by side on a white wall. Left: a small old beige metal box with exactly four old black lever switches and dusty aged wires. Right: a clean modern white panel with its door open, showing exactly one wide main breaker with a small blue button and a row of exactly eight narrow white breakers, all levers up.` | 16:9 | pins "옛 분전반", "새 분전반" · badges ①T 버튼 없음 ②T 버튼 |
| G29 | 4-2 | `Close-up of the inside of a white home electrical panel. Exactly one wide white residual current breaker on the left with a small round blue push button on its front and its lever up, next to a row of narrow white breakers with levers up.` | 4:3 | badges ①T 버튼 ②레버 · ring 파란 버튼 · pin "한 달에 한 번, 누르면 '탁'" |
| G32 | 4-5 | `Close-up of the inside of a white home electrical panel. A row of narrow white breakers, and at the right end exactly one grey surge protection module of the same height with a small green status window on its front.` | 4:3 | badges ①SPD ②상태 창(초록 = 정상) |
| G14 | 2-3 | `On a plain white desk lie exactly two objects side by side: on the left a yellow handheld digital clamp meter with a blank screen and its curved jaw closed into a ring; on the right a small white plug-in line splitter adapter with one white insulated cord coming out of it.` | 4:3 | badges ①집게 ②라인 분리기 · pin "선 한 가닥만 집게 안으로" · screens `3.5 A` |
| G15 | 2-4 | `On a plain grey workbench lies exactly one yellow handheld insulation resistance tester with a blank screen, its red lead and black lead neatly coiled beside it, each ending in a small metal alligator clip.` | 4:3 | badges ①측정기 ②집게 · screens `500 MΩ` · 캡션 "기사님이 쓰는 측정기예요" |

### 3순위 · 남으면
| 그림 | 쪽 | 프롬프트 (끝에 T) | 비율 | HTML로 얹기 |
|---|---|---|---|---|
| G13-2 | 2-2 | `A white wall with exactly one [콘센트] at eye level, seen straight on. On a small white shelf directly below lies exactly one yellow digital multimeter with a blank screen, its red probe and black probe lying side by side in front of it.` | 4:3 | rings 두 구멍 · pins "검정 먼저", "빨강 다음" · screens `221V` |
| G13-3 | 2-2 | `On a light wooden table lie exactly three objects in a row: exactly one AA battery, exactly one yellow digital multimeter with a blank screen and its red and black probes, and the round-pin European plug end of a white extension cord with exactly two round metal pins.` | 16:9 | rings 건전지 두 끝·플러그 두 핀 · pins "1.6V = 새 것", "삐- = 이어짐" |
| G18 | 2-7 | `Product photo on a plain light grey background, exactly four white wall sockets in one row: first [콘센트]; second the same socket under a hinged clear splash cover; third a round pop-up floor socket set into a wooden floor panel; fourth the same socket with two small USB ports below the holes.` | 16:9 | badges ①접지형 ②욕실 방적형 ③바닥 매입형 ④USB 겸용 |
| G20 | 3-1 | `Exactly one white wall socket lying face down on a plain white table, its back showing three screw terminals. Exactly three short insulated wires are attached, one to each terminal: one solid brown wire, one solid blue wire, one green-and-yellow striped wire. Each wire keeps a single color from end to end.` | 4:3 | badges ①갈색 ②파랑 ③초록노랑 · pin "풀기 전에 먼저 사진" |
| G22 | 3-3 | `Exactly two identical white table lamps stand side by side on a white shelf against a white wall. The left lamp glows warm yellow, the right lamp glows cool bluish white. Each lamp lights the wall behind it in its own color.` | 16:9 | pins "3000K 노란빛", "5000K 하얀빛" |
| G23 | 3-4 | `A modern Korean apartment living room at night. The ceiling has a recessed cove around its edge where a hidden LED strip casts a soft warm glow. Exactly one small square white access hatch sits in the flat ceiling.` | 16:9 | badges ①LED 숨은 자리 ②점검구 |
| G24 | 3-5 | `A bare room floor during renovation, before the flooring goes on. Thin black heating film sheets lie in parallel strips on white insulation boards, short black cables are joined at the strip ends along one wall, and exactly one small round temperature sensor is taped between two strips.` | 16:9 | badges ①필름 ②가장자리 배선 ③온도 센서 |
| G17 | 2-6 | `An apartment interior wall opened up during renovation. Exactly one orange corrugated conduit runs straight down inside the wall to a square metal outlet box, and grey corrugated conduits run along the ceiling. A yellow measuring tape is stretched along the wall, held by tape.` | 4:3 | badges ①주황 주름관(CD관) ②회색 주름관 ③콘센트 박스 · pin "줄자 대고 사진" |
| G42 | 1-10 | `A sunny Korean living room. On the wooden floor a small brown puppy lies resting. Along the white baseboard runs exactly one white plastic cable cover channel, and above it exactly one [콘센트] with a clear plastic safety cover clipped over its holes.` | 4:3 | badges ①안전 덮개 ②전선 보호관 |
| G44 | 3-11 | `A clean home garage. Exactly one white electric car is parked with its charging cable plugged into its side port. The cable runs to a portable charging control box and then to exactly one grey weatherproof wall socket with a hinged lid on the garage wall.` | 16:9 | pin "전용 콘센트 ○" · note "릴선·멀티탭 ✕"(HTML) |
| G45 | 3-12 | `Outside view of a Korean apartment balcony railing under blue sky. Exactly one small rectangular solar panel is mounted on the railing with sturdy metal brackets, and a short black cable runs neatly along the rail into the balcony to exactly one small white inverter box.` | 4:3 | badges ①고정 브래킷 ②선 정리 ③인버터 |

G38(5-6 단자함)은 5-11 사진으로 대신해서 v2는 26장.

## 참고 인포그래픽에서 가져올 구도 (2026-11-20)
사용자가 보여 준 「분전반의 이해」「배전반의 이해」「접지 플러그의 이해」「누전 vs 합선」「콘센트의 구조」「일반 멀티탭 vs 서지보호 멀티탭」 카드뉴스. 남이 만든 이미지라 그대로 쓰거나 따라 그리지 않고, **설명 구도만** 참고한다.
- 실물 그림 + 부품마다 번호 콜아웃 → 이미 쓰는 방식. 분전반·콘센트에 더 촘촘히.
- 가로 흐름 띠(한전 → 계량기 → 메인 → 분기 → 콘센트·조명) → 1-1·1-3에 직접 그림(svg)으로 추가 후보.
- 두 개를 나란히 놓고 차이를 표로(누전 vs 합선, 일반 vs 서지 멀티탭, 접지 vs 비접지 플러그) → 4-3·4-5·1-6에 HTML 비교표 후보.
- 단면(콘센트를 잘라 속 접점·단자·접지 클립을 보여 주기) → 2-7·3-1에 AI 실물 그림 후보: `Cutaway cross-section illustration of a European schuko wall socket showing internal brass contacts, screw terminals with brown, blue and green-yellow wires, and grounding clips, clean technical render on white, no text`.
- 맨 아래 빨간 주의 띠 → 이미 주의 박스로 있음.

## 날짜 묶음 (AI 29장 + HTML 양식 2장)
| 묶음 | 그림 |
|---|---|
| 1일차 (장비) | G13-1, G13-2, G13-3, G12 검전기, G14 클램프미터, G15 메거 |
| 2일차 (1부) | G08 접지 콘센트, G10 문어발 멀티탭, G11 옛·새 분전반, G42 아이·반려동물, G17 벽 속 주름관 |
| 3일차 (공사) | G18 콘센트 4종, G20 콘센트 교체, G22 색온도, G23 간접조명, G24 필름 난방, G27 인덕션 전용 |
| 4일차 (점검·보호) | G43 안전점검, G44 전기차 충전, G45 베란다 태양광, G29 T 버튼, G32 SPD |
| 5일차 (고장) | G35 콘센트 하나, G36 깜빡임, G37 전자레인지, G38 단자함, G39 그을린 콘센트, G40 감지기와 연기, G46 천장 누수 |
| 한도 없이 | H1 가전 명판(1-7, HTML), H2 전기요금 고지서(4-6, HTML) |
| 선택 | 2-5 전선 단면, 4-1 차단기 앞면 (직접 그린 그림이 이미 있음) |

---

## 1일차 — 장비
> 여기부터 아래는 옛 프롬프트(기록용). 만들 때는 위 **v2** 표를 쓴다.

### G13-1 · 2-2 멀티테스터 부품 이름 (img, 맨 위)
`Product photo, front view of a handheld digital multimeter with yellow rubber bumper and black body on a plain white background, blank empty LCD screen at top, large round black rotary dial in the center, three round input jacks in a row at the bottom, black test lead plugged into the middle jack and red test lead plugged into the right jack, the left jack empty, probes lying below, soft studio light. No text, no letters, no numbers, no symbols, completely blank screen.` (4:3)
얹기: screens 화면 `221.4 V` · badges ①화면 ②다이얼 ③COM ④VΩ ⑤10A(hot, "쓰지 않기")

### G13-2 · 2-2 콘센트 재는 장면 (photos, 순서 아래)
`Realistic close-up photo of a white Korean wall socket with two round holes and metal grounding clips on the sides (Type F schuko), a red multimeter probe in one hole and a black probe in the other, a dry hand holding the probe handles behind the finger guards, a yellow digital multimeter with blank screen on a shelf beside it, soft daylight, white wall. No text, no letters, no numbers.` (4:3)
얹기: screens `221V` · pins "검정 먼저", "빨강 다음"

### G13-3 · 2-2 건전지·릴선 두 컷 (photos)
`Split image with two halves side by side, realistic photo on a wooden table. Left: red and black multimeter probe tips touching the two ends of a single AA battery. Right: red and black probe tips touching the two metal pins of the plug of an unplugged white extension cord. Soft daylight. No text, no letters, no numbers.` (16:9)
얹기: 왼쪽 pin "1.6V = 새 것", 오른쪽 pin "삐- = 이어짐"

### G12 · 2-1 검전기 (img)
`Realistic close-up photo of a hand holding a pen-shaped non-contact voltage tester, its tip touching a white Korean Type F wall socket hole, the tester tip glowing red, soft light, white wall. No text, no letters, no numbers.` (4:3)
얹기: badges ①끝 불빛 ②손잡이(손은 여기) · 직접 그린 '세 번 확인' 그림은 그대로 아래에

### G14 · 2-3 클램프미터 (img)
`Realistic photo of a hand holding a digital clamp meter whose open jaw is closed around a single insulated wire coming out of a small plug-in line splitter adapter plugged into a wall socket, blank screen, soft light. No text, no letters, no numbers.` (4:3)
얹기: screens `3.5 A` · badges ①집게 ②한 가닥 ③라인 분리기

### G15 · 2-4 메거 측정 (img)
`Realistic photo of an electrician's gloved hands using a handheld insulation resistance tester (megger) with test leads clipped to the terminals of a breaker in an open home distribution panel, blank screen, soft light. No text, no letters, no numbers.` (4:3)
얹기: screens `500 MΩ` · badges ①측정기 ②차단기 단자 · 캡션 "기사님이 하는 측정이에요"

## 2일차 — 1부

### G08 · 1-6 접지 콘센트 비교 (img)
`Realistic product photo on light grey background, two wall sockets side by side: left a modern white Type F socket with two round holes and shiny metal grounding clips on the left and right edges; right an old yellowed socket with two round holes and no metal clips. Soft even light. No text, no letters, no numbers.` (16:9)
얹기: badges ①접지 클립 ②클립 없음(hot) · pins "접지형", "옛날형"

### G10 · 1-8 문어발 멀티탭 (img)
`Realistic photo on a wooden floor of an overloaded white power strip with a second power strip plugged into it, plugs of an electric heater, hair dryer and kettle crammed in, tangled cords, one socket area slightly scorched brown. Warm indoor light. No text, no letters, no numbers.` (16:9)
얹기: badges ①멀티탭에 멀티탭 ②열 내는 기기 몰림 ③그을음(hot)

### G11 · 1-9 옛 분전반 · 새 분전반 (img)
`Two electrical breaker panels side by side on a wall, realistic photo. Left: an old yellowed small panel with old switches, aged wires, dusty. Right: a clean modern white panel with door open showing one large main breaker with a small blue test button and eight small white breakers in a row. Even light. No text, no letters, no numbers, no labels.` (16:9)
얹기: pins "옛 분전반", "새 분전반" · badges ①T 버튼 없음 ②T 버튼

### G42 · 1-10 아이·반려동물 (img)
`Realistic home photo, a white wall socket with a clear plastic child safety plug cover inserted, beside it on the floor a puppy sniffing a cable that runs inside a white plastic cable cover channel along the wall, soft daylight. No text, no letters, no numbers.` (4:3)
얹기: badges ①안전 덮개 ②전선 보호관

### G17 · 2-6 벽 속 주름관 (img)
`Realistic construction-site photo of an opened interior wall during apartment renovation, an orange corrugated conduit running vertically down to a wall outlet box, grey corrugated conduits along the ceiling, a measuring tape held against the wall. No text, no letters, no numbers.` (4:3)
얹기: badges ①주황 주름관(CD관) ②회색 주름관 ③콘센트 박스 · pin "줄자 대고 사진"

## 3일차 — 공사

### G18 · 2-7 콘센트 4종 (img)
`Realistic product photo, four wall sockets in a row on light grey background: a standard white Type F grounded socket, a bathroom socket with a hinged splash-proof lid, a floor pop-up socket, a socket with USB ports. Even light. No text, no letters, no numbers.` (16:9)
얹기: badges ①접지형 ②욕실 방적형 ③바닥 매입형 ④USB 겸용

### G20 · 3-1 콘센트 교체 (img)
`Realistic close-up photo, a wall socket pulled slightly out of its wall box with the cover removed, showing brown, blue and green-yellow wires each connected to its own terminal, a hand holding a screwdriver and a smartphone taking a photo of the wiring, soft light. No text, no letters, no numbers.` (4:3)
얹기: pins "먼저 사진", badges ①갈색 ②파랑 ③초록노랑
⚠ 선 색이 섞여 이어진 그림(갈색 선이 중간에 파랑이 되는 등)이 나오면 버린다.

### G22 · 3-3 색온도 (img)
`Realistic interior photo of the same living room split vertically in half: left half lit with warm yellow 3000K light, right half lit with cool white 5000K light, same sofa and table continuing across. No text, no letters, no numbers.` (16:9)
얹기: pins "3000K 노란빛", "5000K 하얀빛"

### G23 · 3-4 간접조명 (img)
`Realistic interior photo of a modern Korean apartment living room at night with a recessed cove ceiling where hidden LED strips glow softly, a small square access hatch visible in the ceiling. No text, no letters, no numbers.` (16:9)
얹기: badges ①LED 바 숨은 자리 ②점검구

### G24 · 3-5 필름 난방 (img)
`Realistic construction photo of a room floor during installation of electric heating film: thin black heating film sheets laid on insulation board, wires connected at the edges, a small floor temperature sensor, before flooring is installed. No text, no letters, no numbers.` (16:9)
얹기: badges ①필름 ②가장자리 배선 ③온도 센서

### G27 · 3-8 인덕션 전용 콘센트 (img)
`Realistic photo of a modern Korean kitchen, a built-in induction cooktop on the counter, below it inside the open cabinet a dedicated grounded wall socket with a single thick plug plugged in, soft light. No text, no letters, no numbers.` (4:3)
얹기: badges ①인덕션 ②전용 콘센트 · pin "멀티탭 ✕"

## 4일차 — 점검·보호

### G43 · 3-9 안전점검 (img)
`Realistic photo of an electrical safety inspector in a work vest showing an ID card at the front door of a Korean apartment, a homeowner holding the door, a toolbag on the floor. Faces turned away or out of focus. No text, no letters, no numbers.` (4:3)
얹기: pin "신분증 확인"

### G44 · 3-11 전기차 충전 (img)
`Split image. Left: an electric car in a home garage charging through a portable charging cable plugged directly into a dedicated weatherproof grounded wall socket with a lid. Right: the same charging cable plugged into a coiled extension reel, with a large red X drawn over it. No text, no letters, no numbers.` (16:9)
얹기: pins "전용 콘센트 ○", "릴선 ✕" (빨간 X가 AI로 안 나오면 HTML로 그린다)

### G45 · 3-12 베란다 태양광 (img)
`Realistic photo of a small solar panel firmly mounted with metal brackets on the outside railing of a Korean apartment balcony, a short cable running inside to a small inverter box, blue sky. No text, no letters, no numbers.` (4:3)
얹기: badges ①고정 브래킷 ②선 정리 ③인버터

### G29 · 4-2 T 버튼 (img)
`Realistic close-up photo of a finger pressing a small blue test button on a white residual current circuit breaker in an open home distribution panel, soft light. No text, no letters, no numbers.` (4:3)
얹기: badges ①T 버튼 ②레버 · pin "누르면 '탁'"

### G32 · 4-5 SPD (img)
`Realistic close-up photo inside an open home distribution panel, a surge protective device module with a small green status window mounted next to the breakers, soft light. No text, no letters, no numbers.` (4:3)
얹기: badges ①SPD ②상태 창(초록 = 정상)

## 5일차 — 고장

### G35 · 5-3 콘센트 하나만 (img)
`Realistic home photo, a desk lamp plugged into a white wall socket but not lit, a hand touching a pen-shaped voltage tester to the socket, the other socket on the same wall with a lit lamp. No text, no letters, no numbers.` (16:9)
얹기: pins "안 켜짐", "옆은 켜짐"

### G36 · 5-4 깜빡이는 조명 (img)
`Realistic photo of a living room ceiling with several round LED ceiling lights, one of them dim and flickering while the others are bright, a wall light switch in the foreground. No text, no letters, no numbers.` (16:9)
얹기: badges ①한 등만 ②스위치

### G37 · 5-5 전자레인지 켜면 (img)
`Two-panel realistic photo. Left: a hand pressing the start button of a microwave oven in a kitchen. Right: a home distribution panel with the large main breaker lever down in the off position. No text, no letters, no numbers.` (16:9)
얹기: pins "켜는 순간", "큰 차단기 탁"

### G38 · 5-6 통신 단자함 (img)
`Realistic photo of an open small network cabinet in a Korean apartment entrance closet, showing a modem and a Wi-Fi router with green and orange indicator lights, cables neatly connected. No text, no letters, no numbers.` (4:3)
얹기: badges ①모뎀 ②공유기 ③불빛

### G39 · 5-7 그을린 콘센트 (img)
`Realistic close-up photo of a white wall socket with brown scorch marks around one hole and a partially melted plug, slight smoke stain on the wallpaper. No text, no letters, no numbers.` (4:3)
얹기: badges ①그을음(hot) ②녹은 플러그(hot)

### G40 · 5-8 감지기와 연기 (img)
`Realistic photo of a white round smoke detector on a kitchen ceiling with a small red LED, light cooking smoke rising from a frying pan below toward it. No text, no letters, no numbers.` (4:3)
얹기: badges ①감지기 ②요리 연기

### G46 · 5-10 천장 누수 (img)
`Realistic photo of a ceiling light fixture in a Korean apartment with water dripping from it and a water stain spreading on the ceiling, a bucket on the floor below. No text, no letters, no numbers.` (4:3)
얹기: badges ①물 떨어지는 등(hot) · pin "그 갈래 차단기부터"

## 한도 없이 만드는 HTML 양식
- H1 · 1-7 가전 명판: 은색 스티커 모양 표(모델명, 정격전압 220V~ 60Hz, **소비전력 1,500W**, 제조연월) — 소비전력 칸에 번호.
- H2 · 4-6 전기요금 고지서: 종이 고지서 모양(사용기간, **계약전력 3kW**, 사용량 kWh, 청구금액) — 계약전력 칸에 번호. 금액은 예시 표시.
