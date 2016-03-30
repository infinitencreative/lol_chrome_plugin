# Chrome Plugin - LoL Match Information
All API is from [Riot API](https://developer.riotgames.com/) or <http://lol.qq.com>.

---

### 安装
* 方法1：此方法适合多数使用者。
  * [从release中下载源码](https://github.com/infinitencreative/lol_chrome_plugin/releases)
  * 解压后找到crx文件
  * 在Chrome中打开菜单 > 更多工具 > 扩展程序
  * 将crx文件拖入浏览器安装并启用即可
* 方法2：此方法更适合开发者，方便开发调试。
  * [从release中下载源码](https://github.com/infinitencreative/lol_chrome_plugin/releases)
  * 在Chrome中打开菜单 > 更多工具 > 扩展程序
  * 开启开发者模式
  * 选择加载已解压的扩展程序 > 选择下载的源码文件夹
  * 找到LoL Match Info，开启插件即可

---

### Todo
* Language: English, Chinese
* Add LPL, LMS, LCK, NA, EU

---

### API
###### Get match info
* URL: <http://apps.game.qq.com/lol/match/apis/searchBMatchInfo.php?p1=16&p5=1&p7=110&r1=BMatchLists&pagesize=50&_=1459150265038>
  * 修改p7参数，控制赛程

###### Get team score (Desc)
* URL: <http://lol.qq.com/cms/match2/data/LOL_MATCH2_LPL_GROUP_TEAM_SCORE_TOP_6.js?_=1459069568660>

###### Get top 10 bp
* URL: <http://lol.qq.com/cms/match2/data/LOL_MATCH2_GAME_16_BAN_PICK_TOP_TEN.js>

###### Get LPL Spring Game Info
* url: <http://lol.qq.com/cms/match2/data/LOL_MATCH2_GAME_GAME16_INFO.js>