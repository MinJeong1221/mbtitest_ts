import { IQuestion } from './types';

export const QuestionData: IQuestion[] = [
  {
    id: 1,
    title: '새로운 강아지를 데려왔다! 나의 반응은?',
    answera: '어때? 이름은 뭐로 지을까? 자꾸 말을 걸고싶다.',
    answerb: '혼자만의 시간이 필요하지? 적응할 시간을 준다.',
    type: 'EI',
  },
  {
    id: 2,
    title: '강아지에대한 모든것이 궁금해졌다. 나의 행동은?',
    answera:
      '강아지 관련 커뮤니티에 들어 다른 사람들과 소통을 하여 지식을 쌓는다.',
    answerb:
      '커뮤니티에 가입은 하지만 눈으로 참고만 하고 혼자 찾아보는게 편하다',
    type: 'EI',
  },
  {
    id: 3,
    title: '강아지가 너무 이쁜것 같다. 나의 행동은?',
    answera:
      '사람들에게 자랑해야지!!하며 강아지계정 인트타를 만들어서 사람들과 소통한다.',
    answerb: '이쁜모습을 사진 찍어 사진첩에 간직한다.',
    type: 'EI',
  },
  {
    id: 4,
    title: '강아지 유튜브를 시작하려고 한다. 나는 어떤 유튜브를 만들고 싶은가?',
    answera: '다른 유튜버들을 가이드 삼아 비슷하게 만든다.',
    answerb: '새롭거나 자유로운 방식으로 만들기 위해 생각한다.',
    type: 'SN',
  },
  {
    id: 5,
    title: '강아지에 대해 모르는 부분을 검색하고 있다. 내가 글을 읽는 방법은?',
    answera: '꼼꼼 정확하게 읽는다.',
    answerb: '전체적인 의미를 파악하며 읽는다.',
    type: 'SN',
  },
  {
    id: 6,
    title: '강아지 밥을 주려고한다. 나의 방법은?',
    answerb: '저울이나 스푼으로 정확한 계량을 해서 준다.',
    answera: '눈대중으로 대충 이정도면 되겠지? 하고 준다.',
    type: 'SN',
  },
  {
    id: 7,
    title: '부모님이 갑자기 강아지를 입양해왔다. 나의 반응은?',
    answera: '강아지 필요한 물품은 다 준비했어? 라며 물어본다.',
    answerb: '어머 너무 귀엽자나~~라며 감탄한다.',
    type: 'TF',
  },
  {
    id: 8,
    title: '강아지가 아파서 병원을 고르려고 리qb를 보았다. 내가 갈 병원은?',
    answera: '성과가 중요하지! 좋은 성과를 낸 병원',
    answerb: '사람이 중요하지! 원장님의 성격이 좋다고 되어있는 병원',
    type: 'TF',
  },
  {
    id: 9,
    title:
      '친구가 키우는 강아지가 많이 아픈거 같아 슬퍼하고 있다. 나의 반응은?',
    answera:
      '병원 데리고 가봤어? 더 좋은 병원있는지 알아봐 줄까?라며 해결책을 먼저 찾아본다.',
    answerb: '헐..얼마나 아픈거야?? 라며 공감해 준다.',
    type: 'TF',
  },
  {
    id: 10,
    title: '강아지 간식이 생겼다. 간식을 지급하는 방법은?',
    answera: '밥먹고 간식시간을 정해서 정해진 시간에 준다.',
    answerb: '내가 주고싶을때 준다.',
    type: 'JP',
  },
  {
    id: 11,
    title: '자기전 나는?',
    answera: '내일 할일을 계획을 세우고 잔다.',
    answerb: '그냥 아무 생각없이 누어있다가 잔다.',
    type: 'JP',
  },
  {
    id: 12,
    title:
      '친구가 자기 강아지 새끼 낳았어 한마리 입양해~ 라고 물었을때 나의 반응은?',
    answera:
      '잠깐만 혹시 강아지 필요한게 뭐가 있을까? 아직 준비가 안되서 준비 다되면 입양할게라고 말한다.',
    answerb: '오오 진짜? 오늘 입양해도 될까? 라며 바로 데리고 온다.',
    type: 'JP',
  },
];
