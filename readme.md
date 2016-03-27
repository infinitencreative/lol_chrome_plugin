# Chrome Plugin - LPL Match Information

---

### API
###### Get team score (Desc)
* URL: http://lol.qq.com/cms/match2/data/LOL_MATCH2_LPL_GROUP_TEAM_SCORE_TOP_6.js?_=1459069568660
* Parameters: 1459069568660: Date.now()
* Json: 
* ```
{
  "status": "0",
  "msg": {
  "groupA": [
  {
  "GameId": "16",
  "TeamId": "7",
  "TeamName": "QG",
  "Rank": "1",
  "Score": "10",
  "Value1": "10",
  "Value2": "0",
  "Value3": "2"
},
{
    "GameId": "16",
    "TeamId": "12",
    "TeamName": "WE",
    "Rank": "4",
    "Score": "7",
    "Value1": "7",
    "Value2": "0",
    "Value3": "4"
},
{
    "GameId": "16",
    "TeamId": "9",
    "TeamName": "Snake",
    "Rank": "7",
    "Score": "6",
    "Value1": "6",
    "Value2": "0",
    "Value3": "5"
},
{
    "GameId": "16",
    "TeamId": "4",
    "TeamName": "LGD",
    "Rank": "9",
    "Score": "4",
    "Value1": "4",
    "Value2": "0",
    "Value3": "8"
},
{
    "GameId": "16",
    "TeamId": "5",
    "TeamName": "M3",
    "Rank": "10",
    "Score": "3",
    "Value1": "3",
    "Value2": "0",
    "Value3": "8"
},
{
    "GameId": "16",
    "TeamId": "37",
    "TeamName": "EPA",
    "Rank": "11",
    "Score": "2",
    "Value1": "2",
    "Value2": "0",
    "Value3": "10"
}
],
"groupB": [
{
    "GameId": "16",
    "TeamId": "8",
    "TeamName": "RNG",
    "Rank": "2",
    "Score": "10",
    "Value1": "10",
    "Value2": "0",
    "Value3": "2"
},
{
    "GameId": "16",
    "TeamId": "1",
    "TeamName": "EDG",
    "Rank": "3",
    "Score": "9",
    "Value1": "9",
    "Value2": "0",
    "Value3": "4"
},
{
    "GameId": "16",
    "TeamId": "2",
    "TeamName": "IG",
    "Rank": "5",
    "Score": "7",
    "Value1": "7",
    "Value2": "0",
    "Value3": "6"
},
{
    "GameId": "16",
    "TeamId": "6",
    "TeamName": "OMG",
    "Rank": "6",
    "Score": "7",
    "Value1": "7",
    "Value2": "0",
    "Value3": "5"
},
{
    "GameId": "16",
    "TeamId": "11",
    "TeamName": "VG",
    "Rank": "8",
    "Score": "6",
    "Value1": "6",
    "Value2": "0",
    "Value3": "7"
},
{
    "GameId": "16",
    "TeamId": "36",
    "TeamName": "HYG",
    "Rank": "12",
    "Score": "1",
    "Value1": "1",
    "Value2": "0",
    "Value3": "12"
}
]
}
}
```

###### Get top 10 bp
* URL: http://lol.qq.com/cms/match2/data/LOL_MATCH2_GAME_16_BAN_PICK_TOP_TEN.js
* Json: ```
{
  "status": "0",
  "msg": {
  "ban": [
  {
  "sGameId": "16",
  "ChampionId": "41",
  "ban": "84",
  "pick": "11",
  "win": "4",
  "lose": "7",
  "win_rate": "36",
  "pick_rate": "10",
  "ban_rate": "77"
},
{
    "sGameId": "16",
    "ChampionId": "13",
    "ban": "79",
    "pick": "5",
    "win": "1",
    "lose": "4",
    "win_rate": "20",
    "pick_rate": "4",
    "ban_rate": "73"
},
{
    "sGameId": "16",
    "ChampionId": "117",
    "ban": "59",
    "pick": "39",
    "win": "20",
    "lose": "19",
    "win_rate": "51",
    "pick_rate": "36",
    "ban_rate": "54"
},
{
    "sGameId": "16",
    "ChampionId": "42",
    "ban": "37",
    "pick": "44",
    "win": "21",
    "lose": "23",
    "win_rate": "47",
    "pick_rate": "40",
    "ban_rate": "34"
},
{
    "sGameId": "16",
    "ChampionId": "12",
    "ban": "36",
    "pick": "70",
    "win": "32",
    "lose": "38",
    "win_rate": "45",
    "pick_rate": "64",
    "ban_rate": "33"
},
{
    "sGameId": "16",
    "ChampionId": "7",
    "ban": "33",
    "pick": "26",
    "win": "12",
    "lose": "14",
    "win_rate": "46",
    "pick_rate": "24",
    "ban_rate": "30"
},
{
    "sGameId": "16",
    "ChampionId": "127",
    "ban": "32",
    "pick": "35",
    "win": "16",
    "lose": "19",
    "win_rate": "45",
    "pick_rate": "32",
    "ban_rate": "29"
},
{
    "sGameId": "16",
    "ChampionId": "78",
    "ban": "28",
    "pick": "58",
    "win": "23",
    "lose": "35",
    "win_rate": "39",
    "pick_rate": "53",
    "ban_rate": "25"
},
{
    "sGameId": "16",
    "ChampionId": "133",
    "ban": "25",
    "pick": "19",
    "win": "10",
    "lose": "9",
    "win_rate": "52",
    "pick_rate": "17",
    "ban_rate": "23"
},
{
    "sGameId": "16",
    "ChampionId": "429",
    "ban": "24",
    "pick": "54",
    "win": "28",
    "lose": "26",
    "win_rate": "51",
    "pick_rate": "50",
    "ban_rate": "22"
}
],
"pick": [
{
    "sGameId": "16",
    "ChampionId": "12",
    "ban": "36",
    "pick": "70",
    "win": "32",
    "lose": "38",
    "win_rate": "45",
    "pick_rate": "64",
    "ban_rate": "33"
},
{
    "sGameId": "16",
    "ChampionId": "78",
    "ban": "28",
    "pick": "58",
    "win": "23",
    "lose": "35",
    "win_rate": "39",
    "pick_rate": "53",
    "ban_rate": "25"
},
{
    "sGameId": "16",
    "ChampionId": "81",
    "ban": "3",
    "pick": "57",
    "win": "26",
    "lose": "31",
    "win_rate": "45",
    "pick_rate": "52",
    "ban_rate": "2"
},
{
    "sGameId": "16",
    "ChampionId": "104",
    "ban": "16",
    "pick": "57",
    "win": "25",
    "lose": "32",
    "win_rate": "43",
    "pick_rate": "52",
    "ban_rate": "14"
},
{
    "sGameId": "16",
    "ChampionId": "48",
    "ban": "10",
    "pick": "55",
    "win": "25",
    "lose": "30",
    "win_rate": "45",
    "pick_rate": "50",
    "ban_rate": "9"
},
{
    "sGameId": "16",
    "ChampionId": "429",
    "ban": "24",
    "pick": "54",
    "win": "28",
    "lose": "26",
    "win_rate": "51",
    "pick_rate": "50",
    "ban_rate": "22"
},
{
    "sGameId": "16",
    "ChampionId": "201",
    "ban": "2",
    "pick": "50",
    "win": "25",
    "lose": "25",
    "win_rate": "50",
    "pick_rate": "46",
    "ban_rate": "1"
},
{
    "sGameId": "16",
    "ChampionId": "421",
    "ban": "10",
    "pick": "49",
    "win": "27",
    "lose": "22",
    "win_rate": "55",
    "pick_rate": "45",
    "ban_rate": "9"
},
{
    "sGameId": "16",
    "ChampionId": "236",
    "ban": "0",
    "pick": "45",
    "win": "22",
    "lose": "23",
    "win_rate": "48",
    "pick_rate": "41",
    "ban_rate": "0"
},
{
    "sGameId": "16",
    "ChampionId": "42",
    "ban": "37",
    "pick": "44",
    "win": "21",
    "lose": "23",
    "win_rate": "47",
    "pick_rate": "40",
    "ban_rate": "34"
}
]
}
}
```

###### Get LPL Spring Game Info
* url: http://lol.qq.com/cms/match2/data/LOL_MATCH2_GAME_GAME16_INFO.js
* Json: ```
{
    "status": "0",
    "msg": {
    "baseInfo": {
    "GameId": "16",
    "GameName": "2016赛季春季常规赛",
    "bGameId": "5",
    "GameLogo": "http://shp.qpic.cn/lolwebvideo/201501/c3814421581bf9a7a1de9d23b18906c3/0",
    "GameYear": "2016",
    "sDate": "2016-01-14",
    "eDate": "2016-04-24",
    "GamePlace": "上海虹桥天地演艺中心3F",
    "GameTraffic": "上海市闵行区绍虹路33号",
    "GameRule": "常规赛BO3同组双循环异组单循环",
    "BuyName": "微票",
    "BuyUrl": "lol.qq.com/lpl",
    "MapIMG": "http://shp.qpic.cn/lolwebvideo/201501/752a5a47e392b1e0553a0574c8e950d4/0",
    "MapUrl": "http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D%E4%B8%8A%E6%B5%B7%E8%99%B9%E6%A1%A5%E5%A4%A9%E5%9C%B0%E6%BC%94%E8%89%BA%E4%B8%AD%E5%BF%833F",
    "RankNo1": "0",
    "RankNo2": "0",
    "RankNo3": "0",
    "GameExt1": "周四-周日",
    "GameExt2": "",
    "GameExt3": ""
},
"gameTeam": [
{
    "TeamId": "4"
},
{
    "TeamId": "1"
},
{
    "TeamId": "2"
},
{
    "TeamId": "7"
},
{
    "TeamId": "9"
},
{
    "TeamId": "11"
},
{
    "TeamId": "6"
},
{
    "TeamId": "5"
},
{
    "TeamId": "8"
},
{
    "TeamId": "12"
},
{
    "TeamId": "37"
},
{
    "TeamId": "36"
}
],
"gameAward": [
{
    "Rank": "1",
    "RankDesc": "冠军",
    "AwardIMG": "",
    "AwardDesc": "{\"award\":\"1500000\",\"currency\":\"人民币\"}"
},
{
    "Rank": "2",
    "RankDesc": "亚军",
    "AwardIMG": "",
    "AwardDesc": "{\"award\":\"800000\",\"currency\":\"人民币\"}"
},
{
    "Rank": "3",
    "RankDesc": "季军",
    "AwardIMG": "",
    "AwardDesc": "{\"award\":\"500000\",\"currency\":\"人民币\"}"
},
{
    "Rank": "4",
    "RankDesc": "殿军",
    "AwardIMG": "",
    "AwardDesc": "{\"award\":\"300000\",\"currency\":\"人民币\"}"
},
{
    "Rank": "5",
    "RankDesc": "第五名",
    "AwardIMG": "",
    "AwardDesc": "{\"award\":\"200000\",\"currency\":\"人民币\"}"
},
{
    "Rank": "6",
    "RankDesc": "第六名",
    "AwardIMG": "",
    "AwardDesc": "{\"award\":\"200000\",\"currency\":\"人民币\"}"
}
]
}
}
```

###### Get Match
* Get matches from local.
* URL: http://lol.qq.com/match/match_news_detail.shtml?nid=344