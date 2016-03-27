$.ajax({
  method: "get",
  url: "http://lol.qq.com/cms/match2/data/LOL_MATCH2_GAME_GAME16_INFO.js",
  // url: "http://lol.qq.com/cms/match2/data/LOL_MATCH2_LPL_GROUP_TEAM_SCORE_TOP_6.js?_=" + Date.now(),
  dataType: 'json',
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

$('#ticketMapUrl').on('click', 'a', function(){
  chrome.tabs.create({url: $(this).attr('href')});
  return false;
});
$('#ticketBuyUrl').on('click', 'a', function(){
  chrome.tabs.create({url: $(this).attr('href')});
  return false;
});