console.log('크라운 앵커 도박 게임');

function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}
function randomCard() {
  return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][
    randomNumber(0, 6)
  ];
}
function initRoundBets() {
  return { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
}
let funds = 50;
let round = 1;
const hands = [];

// eslint-disable-next-line no-unmodified-loop-condition
while (funds > 0 && funds < 100) {
  debugger;
  console.log(`${round} 라운드 시작입니다.`);
  console.log(`현재 잔고: ${funds} 원`);
  const roundBets = initRoundBets();
  // 1. 이번 라운드에 걸 판돈을 정한다.
  let roundBet = randomNumber(1, funds);
  console.log('roundBet:', roundBet);
  if (roundBet === 7) {
    roundBet = funds;
    roundBets.heart = roundBet;
  } else {
    // 2. 이번 라운드에 걸 카드에 분배한다.
    let remaining = roundBet;
    do {
      const bet = randomNumber(1, remaining);
      const card = randomCard();
      roundBets[card] += bet;
      remaining -= bet;
    } while (remaining > 0);
  }
  console.log('카드 분배 결과 : ', roundBets);
  funds -= roundBet;
  console.log(`- ${roundBet} 잔고차감`);

  // 3. 주사위 던지기 결과 담기
  for (let roll = 0; roll < 3; roll++) {
    hands[roll] = randomCard();
  }
  console.log('hands 결과 :', hands.toString());

  // 4. 맞춘 결과가 있는지 확인 후 정산 하기
  for (let i = 0; i < hands.length; i++) {
    const card = hands[i];
    const value = roundBets[card];
    if (value > 0) {
      console.log(`도박에서 땃다! ${card} : ${value}`);
      funds += value;
    }
  }
  console.log(`${round} 라운드 결과 잔고 : fund => ${funds}`);
  round++;
}
