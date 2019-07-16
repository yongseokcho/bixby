module.exports.sports = [
  {
    title: "테니스",
    calorie: 588,
    time: 0,
    url: "/img/tennis-64.png"
  },
  {
    title: "러닝(10km/h)",
    calorie: 735,
    time: 0,
    url: "/img/running-64.png"
  },
  {
    title: "축구",
    calorie: 588,
    time: 0,
    url: "/img/football-64.png"
  },
  {
    title: "탁구",
    calorie: 294,
    time: 0,
    url: "/img/ping-pong-64.png"
  },
  {
    title: "줄넘기",
    calorie: 735,
    time: 0,
    url: "/img/skipping-rope-64.png"
  },
  {
    title: "헬스",
    calorie: 588,
    time: 0,
    url: "/img/fitness-64.png"
  },
  {
    title: "에어로빅",
    calorie: 514,
    time: 0,
    url: "/img/zumba-64.png"
  },
  {
    title: "수영(평영)",
    calorie: 585,
    time: 0,
    url: "/img/swimmer-64.png"
  }
]

module.exports.guides = [
  {
    dialogDescription : "요리보고 대표발화",
    parameterStructures : [
      {
        parameterName : "입력",
        parameterDescription : "입력에 대한 설명"        
      }
    ],
    dialogExample : "발화 예시"
  },
  {
    dialogDescription : "재료명을 이용한 레시피 검색",
    parameterStructures : [
      {
        parameterName : "재료명",
        parameterDescription : "1~5개, 재료들을 구분해서 말해야한다"        
      }
    ],
    dialogExample : "쇠고기랑 미역 레시피 보여줘"
  },
  {
    dialogDescription : "요리명을 이용한 레시피 검색",
    parameterStructures : [
      {
        parameterName : "요리명",
        parameterDescription : "1개"        
      }
    ],
    dialogExample : "김치찌개 요리법 찾아줘"
  },
  {
    dialogDescription : "칼로리를 이용한 레시피 검색",
    parameterStructures : [
      {
        parameterName : "최저 칼로리",
        parameterDescription : "원하는 레시피의 칼로리 최저 범위"  
      },
      {
        parameterName : "최고 칼로리",
        parameterDescription : "원하는 레시피의 칼로리 최고 범위"  
      }
    ],
    dialogExample : "300칼로리 이상 500칼로리 이하 레시피 보여줘"
  }
]
