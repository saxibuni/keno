(function () {
	function UserGuide (opt,num) {
		IMDialog.call(this, (opt || {}));
		this.el = this.initDom();
	}

	UserGuide.prototype = new IMDialog();

	UserGuide.prototype.initDom = function () {
		var temp;

		temp = 	'<div class="user-guide">' +
					'<div class="dialog-wrapper">' +
						this.getContent() +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay1"></div>';

		return temp;
	};

	UserGuide.prototype.getDom = function () {
		return this.el;
	};

	UserGuide.prototype.getContent = function () {
		if (i18next.language === 'zh') {
			return '<table class="zh-table" width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td height="2%" colspan="3" bgcolor="#FFF">&nbsp;</td></tr><tr><td width="22" bgcolor="#FFF">&nbsp;</td><td width="96%"><table width="98%" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td><br class="clear-both"></td></tr><tr><td><p class="titles">规则</p><p class="subTitles">快乐彩</p><p>快乐彩以中国（北京）、加拿大、加拿大西部、俄勒冈及斯洛伐克地区的官方结果为准。由1至80的号码中随机摇出20个数字作为开奖号码，依这20个号码变化成各式不同的玩法，在根据猜中的号码个数或玩法可以获得不同等级的奖金。此游戏的开奖时间和相对应地区的KENO完全同步。</p><p>您可连串投注不同市场的盘口。</p><p>KENO游戏分为七种玩法，分别是“大小”、“单双”、“奇偶”、“上下”、“五行”、“珠仔”和“大小单双过关”。各种玩法如下：</p><ol><li><a href="#1">大小，即总数大小</a></li><li><a href="#2">单双，即总数单双</a></li><li><a href="#3">奇偶</a></li><li><a href="#4">上下</a></li><li><a href="#5">五行, 即总数五行</a></li><li><a href="#6">珠仔，即选号玩法</a></li><li><a href="#7">大小单双过关，即总数大小单双过关</a></li></ol><div class="faqQuestion">1. 大小，即总数大小<a name="1" id="currencies"></a></div><br><div class="faqAnswer"><p>投注20个号码的总和。        当20个号码总和为810时，游戏将自动退还投注在“大”、“小”、“大单”、“小单”、“大双”、“小双”这六个选项的注金；当过关注单中包含以上六个选项中的一项或几项时，此过关注单将被自动取消，投注本金将被自动退还。</p><p>大小玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="300" border="0"><tbody><tr class="rowHeader"><td>-</td><td>大</td><td>810</td><td>小</td></tr><tr class="row1"><td>赔率</td><td>1.95</td><td>108</td><td>1.95</td></tr></tbody></table><p>例如：开彩号码为01、04、05、10、11、13、20、27、30、32、33、36、40、47、54、59、61、64、67、79，总和是693，则总数小。下注“小”为赢，反之则输。<br></p></div><div class="backToTop"><a href="#top">返回顶部</a></div><div class="faqQuestion">2. 单双，即总数单双<a name="2" id="deposit"></a></div><br><div class="faqAnswer"><p>开出的20个号码的总和为奇数，则为总单；这一总和为偶数，则为总双。<br>    下表是单双玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="300" border="0"><tbody><tr class="rowHeader"><td>-</td><td>单</td><td>双</td></tr><tr class="row1"><td>赔率</td><td>1.95</td><td>1.95</td></tr></tbody></table><p>例如：开奖号码为01、04、05、10、11、13、20、27、30、32、33、36、40、47、54、59、61、64、67、79，总和是奇数693，则是总单。下注“单”为赢，反之则输。</p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div><div class="faqQuestion">3. 奇偶<a name="3" id="withdraw"></a></div><br><div class="faqAnswer"><p>开出的20个中奖号码中，如奇数号码数目占多数（超过10个），则为奇盘，投注“奇”者中奖；偶数号码占多数（超过10个），则为偶盘，投注“偶”者中奖；如果奇数和偶数号码数目相同时（均为   10个），则为和，投注“和”者中奖。<br>              奇偶玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="300" border="0"><tbody><tr class="rowHeader"><td>-</td><td>奇</td><td>和</td><td>偶</td></tr><tr class="row1"><td>赔率</td><td>2.3</td><td>4.3</td><td>2.3</td></tr></tbody></table><br><p>例如：开奖号码为1，3，5，7，9，11，13，15，17，19，21，22，24，26，28，30，32，34，46，68，   其中奇数11个偶数9个，此期为奇盘。下注“奇”为赢，反之则输</p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div><div class="faqQuestion">4. 上下<a name="4" id="receive"></a></div><br><div class="faqAnswer"><p>号码1至40为上盘号码，41至80为下盘号码。开出的20个开奖号码中：如上盘号码占多数（超过10个）时，此局为上盘；下盘号码占多数时为下盘；上下盘号码在此局开出的数目相同时（各10个数字），此局为和盘。<br>    上下玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="300" border="0"><tbody><tr class="rowHeader"><td>-</td><td>上</td><td>和</td><td>下</td></tr><tr class="row1"><td>赔率</td><td>2.3</td><td>4.3</td><td>2.3</td></tr></tbody></table><p>例如：此局开出1，2，3，4，5，6，7，8，9，10，11，12，13，14，15，16，17，18，19，20。此局为上盘。下注“上”为赢，反之则输。</p><p>&nbsp;</p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div><div class="faqQuestion">5. 五行，即总数五行<a name="5" id="receive"></a></div><br><div class="faqAnswer"><p>开出的20个号码的总和分在5个段，以金、木、水、火、土命名：金（210～695）、木（696～763）、水（764～855）、火（856～923）和土（924～1410）。<br>    五行玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="500" border="0"><tbody><tr class="rowHeader"><td>-</td><td>金</td><td>木</td><td>水</td><td>火</td><td>土</td></tr><tr class="row1"><td>赔率</td><td>9.2</td><td>4.6</td><td>2.4</td><td>4.6</td><td>9.2</td></tr></tbody></table><p>例如：开奖号码为01、04、05、10、11、13、20、27、30、32、33、36、40、47、54、59、61、64、67、79，总和是693，则总分数在210－695段内，则开出的是“金”。下注“金”为赢，反之则输。</p><p>&nbsp;</p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div><div class="faqQuestion">6. 珠仔，即选号玩法<a name="6" id="receive"></a></div><div class="faqAnswer"><p>珠仔玩法是在80个号码中选出1至5个号码组合成一组进行的投注。对照投注号码与中奖号码，根据所选号码与中奖号码相符的个数多少（顺序不限）而知中奖等级。<br>    珠仔玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="600" border="0"><tbody><tr class="rowHeader"><td>-</td><td>选5</td><td>选4</td><td>选3</td><td>选2</td><td>选1</td></tr><tr class="row1"><td>中 5</td><td>251</td><td>无</td><td>无</td><td>无</td><td>无</td></tr><tr class="row2"><td>中 4</td><td>21</td><td>51</td><td>无</td><td>无</td><td>无</td></tr><tr class="row1"><td>中 3</td><td>3.0</td><td>6.0</td><td>20.3</td><td>无</td><td>无</td></tr><tr class="row2"><td>中 2</td><td>无</td><td>2.0</td><td>2.3</td><td>10.3</td><td>无</td></tr><tr class="row1"><td>中 1</td><td>无</td><td>无</td><td>无</td><td>无</td><td>3.3</td></tr><tr class="row2"><td>中 0</td><td>无</td><td>无</td><td>无</td><td>无</td><td>无</td></tr></tbody></table><br><p>例如：投注1，2，3 三个号码为一个组合，该期开奖号码中包含1，2，3 三个数字，则视为投注‘3中3’的玩法者中奖；若开出号码中只有1，2则视为投注‘3中2’的玩法者中奖。<br></p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div><div class="faqQuestion">7. 大小单双过关，即总数大小单双过关<a name="7" id="receive"></a></div><br><div class="faqAnswer"><p>开出的20个号码的总和的游戏，分为“大单”，“小单”，“大双”和“小双”。<br>    总和大于810为“总数大”,小于810为“总数小”；<br>    总和为偶数叫“双”，奇数叫“单”；<br>    通过大小和单双组合产生“大单”，“小单”，“大双”和“小双”四种结果。<br>    五行玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="400" border="0"><tbody><tr class="rowHeader"><td>-</td><td>大单</td><td>小单</td><td>大双</td><td>小双</td></tr><tr class="row1"><td>赔率</td><td>3.7</td><td>3.7</td><td>3.7</td><td>3.7</td></tr></tbody></table><br><p>例如：开奖号码为01、04、05、10、11、13、20、27、30、32、33、36、40、47、54、59、61、64、67、79，总和是693，总和小于810，并且是奇数，则为“小单”。下注“小单”为赢，反之则输。</p><br><p><strong>市场连串投注</strong><br>    连串指的是同一个投注单中有最少2个选择的投注。所有所选择的投注取得胜利，则连串胜利，也将按照赔率进行支付。如果有一个或者多个所选择的投注输掉，则输掉整个连串。“大/小”中的“和”和“五行”不参与连串投注。期号结果如果发生任何形式的暂停，终止或者取消，则连串投注无效。</p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div></td></tr></tbody></table></td><td width="22" bgcolor="#FFF">&nbsp;</td></tr><tr><td colspan="3" bgcolor="#FFF" height="20">&nbsp;</td></tr></tbody></table>';
		} else {
			return '<table class="en-table" border=0 cellpadding=0 cellspacing=0 width="100%" align=center><tr><td bgcolor=#FFF colspan=3 height=2%><tr><td bgcolor=#FFF width=2%><td width=96%><table border=0 cellpadding=0 cellspacing=0 width=98% align=center><tr><td><br class=clear-both><tr><td><p class=titles>Rules<p class=subTitles>Keno<p>Keno results are currently based on Chinese (Beijing), Canadian, West Canadian, Oregon & Slovakian Keno official results. KENO is played with 20 numbered balls drawn randomly from 80 numbered balls ranging from 01 to 80. The combination of these 20 numbers were divided and segregated into several variations and different kinds of bet type each with their own payout calculations and rates.<br><br>The official result timing strictly corresponds with each region the game was extracted from.<br><br>KENO is divided into several types namely:<br><strong>BIG/SMALL<br>ODD/EVEN<br>ODDS/EVENS<br>UP/DOWN<br>FIVE RANGES<br>PEARL BALL</strong><br><strong>BIG/SMALL & ODD/EVEN Parlay</strong><br><br>On top of placing single bets in each market location, you can choose to place bet across different markets simultaneously and make a parlay bet in the lobby screen.<p>Each bet types can be explained in detail as follows.<ol><li><a href=#1>BIG, SMALL, ACTUAL/EXACT SCORE</a><li><a href=#2>ODD, EVEN</a><li><a href=#3>ODDS, EVENS, TIE</a><li><a href=#4>UP, DOWN, TIE</a><li><a href=#5>Five Ranges (GOLD, WOOD, WATER, FIRE & EARTH)</a><li><a href=#6>Pearl Ball</a><li><a href=#7>Big/Small & Odd/Even Parlay</a></ol><div class=faqQuestion>1. Bet Type: BIG, SMALL, ACTUAL/EXACT SCORE <a id=currencies></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=300><tr class=rowHeader><td><td>BIG<td>810<td>SMALL<tr class=row1><td>odds<td>1.95<td>108<td>1.95</table><br>When the sum of 20 numbered balls drawn is equal to 810, all the stake bets on market:"big", "small", "big odd", "small odd", "big even", "small even" will be automatically refunded; all the parlay bets will be cancelled if you choose any of above markets in combo bet and stakes will be refunded.<br><br><strong>BIG:</strong> The sum of the 20 numbered balls drawn is greater than 810.<br><strong>SMALL:</strong> The sum of the 20 numbered balls drawn is smaller than 810.<br><strong>EXACT SCORE:</strong> The sum of the 20 numbered balls drawn is equal to 810.<br><br><strong>Example Draw result</strong>: 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Total SUM :</strong> 693<br><strong>Bet Result:</strong> 693 are smaller than 810, therefore “SMALL” wins.<br><strong>Wager:</strong> USD 100<br><strong>Payout:</strong> USD 100 x 1.95 = USD 195.</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>2. Bet Type: ODD, EVEN <a id=deposit></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=300><tr class=rowHeader><td><td>ODD<td>EVEN<tr class=row1><td>odds<td>1.95<td>1.95</table><br><strong>ODD:</strong> The last digit from the total sum of the 20 numbered balls drawn resulting to an odd number.<br><strong>EVEN:</strong> The last digit from the total sum of the 20 numbered balls drawn resulting to an even number.<br><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Total SUM:</strong> 693<br><strong>Bet Result:</strong> Last digit from 693 is three(3). Three(3) is an odd number therefore “ODD” bet wins.<br><strong>Wager:</strong> USD 100 <strong>Payout:</strong> USD 100 x 1.95 = USD195.<br><br>* Number zero(0) is an even number and there are no draw/tie in this bet type.</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>3. Bet Type: ODDS, EVENS, TIE <a id=withdraw></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=300><tr class=rowHeader><td><td>ODD<td>Tie<td>EVENS<tr class=row1><td>odds<td>2.3<td>4.3<td>2.3</table><br><strong>ODDS:</strong> From the 20 numbered balls drawn, more than ten of these numbers are odd numbers.<br><strong>EVENS:</strong> From the 20 numbered balls drawn, more than ten of these numbers are even numbers.<br><strong>TIE:</strong> From the 20 numbered balls drawn, there are exactly ten odd numbers and ten even numbers.<br><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Bet Result:</strong> There are 11 odd numbers (01,05,11,13,27,33,47,59,61,67 & 79) and 9 even numbers (04,10,20,30,32,36,40,54 & 64). There are more odd numbers compared to even numbers, therefore “ODD NUMBERS” bet wins.<br><strong>Wager:</strong> USD 100 Payout: USD 100 x 2.3 = USD 230</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>4. Bet Type: UP, DOWN, TIE <a id=receive></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=300><tr class=rowHeader><td><td>UP<td>TIE<td>DOWN<tr class=row1><td>odds<td>2.3<td>4.3<td>2.3</table><p><strong>UP:</strong> From the 20 numbered balls drawn, more than ten of these numbers fall in the range of 01 - 40.<br><strong>DOWN:</strong> From the 20 numbered balls drawn, more than ten of these numbers fall in the range of 41 - 80.<br><strong>TIE:</strong> From the 20 numbered balls drawn, there are exactly ten numbers from the range 01 -40 and ten numbers from the range 41 – 80.<br><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Bet Result:</strong> There are 13 numbers (01,04,05,10,11,13,20,27,30,32,33,36 & 40) which ranges between 01 – 40 and 7 numbers (47,54,59,61,64,67 & 79) that ranges between 41 - 80. Therefore “UP” bet wins.<br><strong>Wager:</strong> USD 100<br><strong>Payout:</strong> USD 100 x 2.3 = USD 230</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>5. Bet Type: Five Ranges (GOLD, WOOD, WATER, FIRE & EARTH) <a id=receive></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=500><tr class=rowHeader><td><td>GOLD<td>WOOD<td>WATER<td>FIRE<td>EARTH<tr class=row1><td>odds<td>9.2<td>4.6<td>2.4<td>4.6<td>9.2</table><p><strong>GOLD:</strong> The sum of the 20 numbered balls drawn, ranges from 210-695.<br><strong>WOOD:</strong> The sum of the 20 numbered balls drawn, ranges from 696-763.<br><strong>WATER:</strong> The sum of the 20 numbered balls drawn, ranges from 764-855.<br><strong>FIRE:</strong> The sum of the 20 numbered balls drawn, ranges from 856-923.<br><strong>EARTH:</strong> The sum of the 20 numbered balls drawn, ranges from 924-1410<br><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79.<br><strong>Total sum:</strong> 693<br><strong>Bet Result:</strong> 693 falls between the range of 210 – 695. Therefore “GOLD” bet wins Wager: USD 100.<br><strong>Payout:</strong> USD 100 x 9.2 = USD 920</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>6. Bet Type: Pearl Ball <a id=receive></a></div><div class=faqAnswer><p>In Pearl Ball, player has the option to choose between 1 to 5 number selections from the range 01 to 80. System draws 20 numbers ranging from 01 – 80. The payout is based on the number of hits against the number of selections that the player has chosen. Sequence is not a factor for the payout.<br><br>The table below shows the payout rate:<table border=0 cellpadding=5 cellspacing=1 width=600><tr class=rowHeader><td><td>5 Selections<td>4 Selections<td>3 Selections<td>2 Selections<td>1 Selections<tr class=row1><td>Hit 5<td>251<td>non<td>non<td>non<td>non<tr class=row2><td>Hit 4<td>21<td>51<td>non<td>non<td>non<tr class=row1><td>Hit 3<td>3.0<td>6.0<td>20.3<td>non<td>non<tr class=row2><td>Hit 2<td>non<td>2.0<td>2.3<td>10.3<td>non<tr class=row1><td>Hits 1<td>non<td>non<td>non<td>non<td>3.3<tr class=row2><td>Hits 0<td>non<td>non<td>non<td>non<td>non</table><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Selections:</strong> 06, 20, 30 & 67<br><strong>Bet Result: </strong>4 selections, 3 Hits (20, 30 & 67) <strong>Wager: </strong>USD 100 <strong>Payout:</strong> USD 100 x 6.0 = USD 600</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>7. Bet Type: Big/Small & Odd/Even Parlay <a id=receive></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=400><tr class=rowHeader><td><td>BIG/ODD<td>SMALL/ODD<td>BIG/EVEN<td>SMALL/EVEN<tr class=row1><td>odds<td>3.7<td>3.7<td>3.7<td>3.7</table><br><strong>BIG/ODD:</strong> The sum of the 20 numbered balls drawn is greater than 810 and the last digit from the total sum of the 20 numbered balls resulting to an odd number.<br><strong>SMALL/ODD:</strong> The sum of the 20 numbered balls drawn is smaller than 810 and the last digit from the total sum of the 20 numbered balls resulting to an odd number.<br><strong>BIG/EVEN: </strong>The sum of the 20 numbered balls drawn is greater than 810 and the last digit from the total sum of the 20 numbered balls resulting to an even number.<br><strong>SMALL/EVEN:</strong> The sum of the 20 numbered balls drawn is smaller than 810 and the last digit from the total sum of the 20 numbered balls resulting to an even number<br><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Bet Result:</strong> The total sum is 693. 693 is smaller than 810 and the last digit 3 is an odd number. Therefore “SMALL/ODD” bet wins. <strong>Wager:</strong> USD 100 <strong>Payout:</strong> USD 100 x 3.7 = USD 370<br><p><strong>Parlay bets across markets</strong><br>Parlay refers to bets in a combination of a minimum of two selections placed as one wager. If all selections should win then the Parlay wins and will be paid at the odds as stated. If one (or more) selection should fail to win, then the Parlay loses. Parlay bets cannot be wagered on <strong>ExScore</strong> and <strong>Five Ranges</strong> bets. Parlay bets are deem void should a game result draw is cancelled due to any form of suspension, termination or cancellation of draw results.</div><div class=backToTop><a href=#top>Back to Top</a></div></table><td bgcolor=#FFF width=2%><tr><td bgcolor=#FFF colspan=3 height=20></table>';
		}
	};

	UserGuide.prototype.show = function () {
		this.zone.find('.dialog-wrapper').html(this.getContent());
		this.showContentOverlay();
	};

	UserGuide.prototype.hide = function (flag) {
		var that = this;

		this.hideContentOverlay();

		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.game-guide').removeClass('highlight');
				$('.keno > .header').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;
			}, 300);
		} else {
			$('.game-guide').removeClass('highlight');
		}
	};

	UserGuide.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};

	UserGuide.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}

		return false;
	};

	UserGuide.prototype.refresh = function () {
		this.zone.find('.dialog-wrapper').html(this.getContent());
	};

	UserGuide.prototype.bindEvents = function () {
		this.zone = $('.user-guide');
		this.bindOverlayEvents();
	};

	window.UserGuide = UserGuide;
}());
