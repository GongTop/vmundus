// ==UserScript==
// @name			vMundus Translation
// @version			0.1
// @description		Translation to vMundus web browser game
// @author			Gong
// @match			https://vmundus.com/*
// @include			https://vmundus.com/en
// @downloadURL			https://github.com/GongTop/vmundus/blob/master/vMundus%20Translation.user.js
// ==/UserScript==

$("li#economy").html('경제<ul class="submenu"><a href="calculator"><li class="subli">계산기</li></a><a href="companies"><li class="subli">공장</li></a><a href="company_market"><li class="subli">공장 시장</li></a><a href="corporations"><li class="subli">기업</li></a><a href="currency_exchange"><li class="subli">환전소</li></a><a href="gold_market"><li class="subli">골드 시장</li></a><a href="houses"><li class="subli">하우스</li></a><a href="job_offers"><li class="subli">직업 시장</li></a><a href="product_market"><li class="subli">제품 시장</li></a><a href="warehouse"><li class="subli">창고</li></a><a href="work"><li class="subli">일하기</li></a>');
$("li#military").html('군사<ul class="submenu"><a href="active_battles"><li class="subli">전쟁</li></a></ul>');
$("li#statistics").html('통계');
//<ul class="submenu"><li class="subli">경제(준비중)</li><li class="subli">커뮤니티(준비중)</li><li class="subli">군사(준비중)</li></ul>
$("li#politics").html('정치<ul class="submenu"><a href="country"><li class="subli">국가</li></a><a href="elections"><li class="subli">선거</li></a><a href="party_info"><li class="subli">정당 정보</li></a><a href="parties"><li class="subli">정당</li></a><a href="union_info"><li class="subli">연합 정보</li></a><a href="unions"><li class="subli">연합</li></a></ul>');
$("li#social").html('커뮤니티<ul class="submenu"><a href="blogs"><li class="subli">블로그</li></a><a href="chat"><li class="subli">채팅</li></a><a href="players"><li class="subli">플레이어</li></a></ul>');
$("li#map").html('지도<ul class="submenu"><a href="map?map_type=regular"><li class="subli">세계 지도</li></a><a href="map?map_type=unions"><li class="subli">연합 지도</li></a></ul>');
$("li#store").text('상점');
$("a#message > abbr").attr("title","메세지");
$("a#notification > abbr").attr("title","알림");
$("a#governor_link:contains('Greetings, President')").text('환영합니다, 대통령님');
$("input#search_input").attr("placeholder","검색");
$("p#search > abbr").attr("title","검색");
$("a#logout > abbr").attr("title","로그아웃");
$("p#usr_setting").html('<a href="settings"><span class="glyphicon glyphicon-wrench"></span>설정</a>');
$("div#economystat > p#econ_head").text('제품 가격 현황');

if(location.toString().match(/^https:\/\/vmundus\.com\/en\/calculator/)) {
    $("div#container > p#calc_head").text("계산기");
    $("div#container > p#calculate").text("계산");
    $("div#energy_types_menu_div > p#etmd_head").text("에너지 가격을 계산하는 데 사용되는 발전소 :");
    $("p.price_lbl").text("가격");
    $("p.calc_price_lbl").text("계산 된 가격");
    $("p.depends_lbl").text("생산에 필요한 제품:");
}