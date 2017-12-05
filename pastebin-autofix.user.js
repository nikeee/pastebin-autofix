// ==UserScript==
// @name        Pastebin-Autofix
// @namespace   Niklas Mollenhauer
// @description Autosets default expiration/exposure
// @include     http://pastebin.com/
// @include     https://pastebin.com/
// @version     1.2.0
// @updateURL	https://nikeee.github.io/pastebin-autofix/pastebin-autofix.user.js
// @downloadURL https://nikeee.github.io/pastebin-autofix/pastebin-autofix.user.js
// @icon        http://pastebin.com/i/fb2.jpg
// @grant       none
// ==/UserScript==

(function(){
	var defaultExpire = "1D";
	var defaultUnlisted = true;

	$(function(){
		var $select = $("select[name=paste_expire_date]")[0];
		if($select)
		{
			$select.value = defaultExpire;
		}
		if(defaultUnlisted)
		{
			var $privateStatus = $("select[name=paste_private]")[0];
			if($privateStatus)
			{
				$privateStatus.value = 1;
			}
		}
	});
})();
