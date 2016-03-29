/**
 *
 * get data
 *
 */

// get game intro
$.ajax({
  method: "get",
  url: "http://lol.qq.com/cms/match2/data/LOL_MATCH2_GAME_GAME16_INFO.js",
  dataType: 'json',
  done: function(data) {
    console.log(data);
  },
  fail: function(data) {
    console.log(data);
  },
  success: function (data) {
    $('#gameTitle').html(data.msg.baseInfo.GameName);
    $('#gameRule').html(data.msg.baseInfo.GameRule);
    $('#ticketTitle').html(data.msg.baseInfo.GameName);
    $('#ticketDate').html(data.msg.baseInfo.sDate + ' - ' + data.msg.baseInfo.eDate);
    $('#ticketGameTraffic').html(data.msg.baseInfo.GameTraffic + '  ' + data.msg.baseInfo.GamePlace);
    $('#ticketMapUrl').html('<a href="' + data.msg.baseInfo.MapUrl + '" class="btn btn-primary">在百度地图中查看比赛地址</a>');
    $('#ticketBuyUrl').html('<a href="http://' + data.msg.baseInfo.BuyUrl + '" class="btn btn-primary">进入官网购票</a>');
  }
});

// get team score
$('#gameScoreBtn').on('click', function() {
  $.ajax({
    method: "get",
    url: "http://lol.qq.com/cms/match2/data/LOL_MATCH2_LPL_GROUP_TEAM_SCORE_TOP_6.js?=" + Date.now(),
    dataType: 'json',
    done: function(data) {
      console.log(data);
    },
    complete: function(data) {
      var dataObject = JSON.parse(data.responseText.slice(20, -1));
      var groupA = dataObject.msg.groupA;
      var groupB = dataObject.msg.groupB;
      var groupAHtml = '';
      var groupBHtml = '';

      for (var team in groupA) {
        groupAHtml += '<tr><td>' + groupA[team].TeamName + '</td><td>' + groupA[team].Rank + '</td><td>' + groupA[team].Score + '</td><td>' + groupA[team].Value1 + '</td><td>' + groupA[team].Value3 + '</td><td>' + (parseInt(groupA[team].Value1) + parseInt(groupA[team].Value3)) +'</td></tr>';
      }
      for (var team in groupB) {
        groupBHtml += '<tr><td>' + groupB[team].TeamName + '</td><td>' + groupB[team].Rank + '</td><td>' + groupB[team].Score + '</td><td>' + groupB[team].Value1 + '</td><td>' + groupB[team].Value3 + '</td><td>' + (parseInt(groupB[team].Value1) + parseInt(groupB[team].Value3)) +'</td></tr>';
      }

      $('#gameScore .group-a table tbody').html(groupAHtml);
      $('#gameScore .group-b table tbody').html(groupBHtml);
    },
    success: function (data) {
      console.log(data);
    }
  });
});

// get champions info
var championsInfo = null;
$.ajax({
  method: "get",
  url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?locale=zh_CN&champData=image&api_key=109f5057-289d-44cd-bccc-6ff8600b0926",
  dataType: 'json',
  done: function(data) {
    // console.log(data);
  },
  complete: function(data) {
    // console.log(data);
  },
  success: function (data) {
    championsInfo = data.data;
  }
});

// get game top 10 ban pick
$('#banPickBtn').on('click', function() {
  $.ajax({
    method: "get",
    url: "http://lol.qq.com/cms/match2/data/LOL_MATCH2_GAME_16_BAN_PICK_TOP_TEN.js",
    dataType: 'json',
    done: function(data) {
      // console.log(data);
    },
    complete: function(data) {
      // console.log(data);
    },
    success: function (data) {
      var banData = data.msg.ban;
      var pickData = data.msg.pick;

      var banHtml = '';
      var pickHtml = '';

      for (var ban in banData) {
        var champion = _.find(championsInfo, {'id': parseInt(banData[ban].ChampionId)});
        banHtml += '<tr><td>' + '<img src="' + 'http://ddragon.leagueoflegends.com/cdn/6.6.1/img/champion/' + champion.image.full + '">' + champion.name + ' ' + champion.title + '</td><td>' + banData[ban].ban + '</td><td>' + banData[ban].ban_rate + '%</td><td>' + banData[ban].win_rate + '%</td></tr>';
      }
      for (var pick in pickData) {
        var champion = _.find(championsInfo, {'id': parseInt(pickData[pick].ChampionId)});
        pickHtml += '<tr><td>' + '<img src="' + 'http://ddragon.leagueoflegends.com/cdn/6.6.1/img/champion/' + champion.image.full + '">' + champion.name + ' ' + champion.title + '</td><td>' + pickData[pick].pick + '</td><td>' + pickData[pick].pick_rate + '%</td><td>' + pickData[pick].win_rate + '%</td></tr>';
      }

      $('#gameBanpick .ban table tbody').html(banHtml);
      $('#gameBanpick .pick table tbody').html(pickHtml);
    }
  });
});

// game matches
var GameProcId = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
$('.game-week').on('click', function(elem) {
  var index = parseInt(this.dataset.toggle) - 1;
  $.ajax({
    method: "get",
    url: "http://apps.game.qq.com/lol/match/apis/searchBMatchInfo.php?p1=16&p5=1&p7=" + GameProcId[index] + "&r1=BMatchLists&pagesize=50&_=" + Date.now(),
    dataType: 'json',
    done: function(data) {
      console.log(data);
    },
    complete: function(data) {
      var dataObject = JSON.parse(data.responseText.slice(16, -1));
      var gameMatches = dataObject.msg.result;
      var html = '';

      for (game in gameMatches) {
        var ifGameDone = (new Date (gameMatches[game].MatchDate)) < new Date(new Date().getTime() - 12 * 60 * 60 * 1000);
        if (ifGameDone) {
          html += '比赛名称：' + gameMatches[game].GameName + '<br/>赛程：' + gameMatches[game].GameProcName + ' 比赛日期：' + gameMatches[game].MatchDate + '<br/>比赛队伍：' + gameMatches[game].bMatchName + '<br/>比赛结果：' + gameMatches[game].ScoreA + ' : ' + gameMatches[game].ScoreB + '<br/>战报：' + '<a href="http://lol.qq.com/match/match_data.shtml?bmid=' + gameMatches[game].bMatchId + '">点此进入</a><br/>图文直播：<a href="' + gameMatches[game].Chat2 + '">点此进入</a><br/>视频地址：<a href="' + 'http://lol.qq.com/match/match_video.shtml?nid=' + gameMatches[game].NewsId + '">点此进入</a><hr/>';
        } else {
          html = '比赛信息还未更新。';
          break;
        }
      }

      $('#GameMatch .game-content').html(html);
    },
    success: function (data) {
      console.log(data);
    }
  });
});
$('#gameMatchBtn').on('click', function() {
  var begin = new Date('2016-01-14 17:00:00');
  var index = Math.floor((Date.now() - begin.getTime())/ 1000 / 24 / 60 / 60 / 7 - 2) - 1;
  $.ajax({
    method: "get",
    url: "http://apps.game.qq.com/lol/match/apis/searchBMatchInfo.php?p1=16&p5=1&p7=" + GameProcId[index] + "&r1=BMatchLists&pagesize=50&_=" + Date.now(),
    dataType: 'json',
    done: function(data) {
      console.log(data);
    },
    complete: function(data) {
      var dataObject = JSON.parse(data.responseText.slice(16, -1));
      var gameMatches = dataObject.msg.result;
      var html = '';

      for (game in gameMatches) {
        var ifGameDone = (new Date (gameMatches[game].MatchDate)) < new Date(new Date().getTime() - 12 * 60 * 60 * 1000);
        if (ifGameDone) {
          html += '比赛名称：' + gameMatches[game].GameName + '<br/>赛程：' + gameMatches[game].GameProcName + ' 比赛日期：' + gameMatches[game].MatchDate + '<br/>比赛队伍：' + gameMatches[game].bMatchName + '<br/>比赛结果：' + gameMatches[game].ScoreA + ' : ' + gameMatches[game].ScoreB + '<br/>战报：' + '<a href="http://lol.qq.com/match/match_data.shtml?bmid=' + gameMatches[game].bMatchId + '">点此进入</a><br/>图文直播：<a href="' + gameMatches[game].Chat2 + '">点此进入</a><br/>视频地址：<a href="' + 'http://lol.qq.com/match/match_video.shtml?nid=' + gameMatches[game].NewsId + '">点此进入</a><hr/>';
        } else {
          html = '比赛信息还未更新。';
          break;
        }
      }

      $('#GameMatch .game-content').html(html);
    },
    success: function (data) {
      console.log(data);
    }
  });
});

/**
 *
 * tools
 *
 */

// new tab
$('#ticketMapUrl, #ticketBuyUrl, #githubBtn, #GameMatch .game-content').on('click', 'a', function(){
  chrome.tabs.create({url: $(this).attr('href')});
  return false;
});
