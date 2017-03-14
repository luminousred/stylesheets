// ==UserScript==
// @id             what-cd-css-switch
// @name           What.CD : CSS Day-To-Night Switch
// @version        2.0
// @namespace      hateradio)))
// @description    Switch your default stylesheet automatically for day or night.
// @icon           data:image/png;base64,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8uMn+PyjExSBqF7CdWfzcghYD75xrY/0k/mj23jnlg794a5Nw1v69u0l1eGhaitIrYhoF5UZRuV3IHaOoLhCZWacyvQVqvPTBOUSYRDEUo9TJygErRS26+B4WZK9g3gD20j2b8bxMqiggCxfjjdqSYhys4iTpbS4wuyZ5yhMzFwaLZhPfuwXfPNCgUodZDvw8JUSsF4Ba8joSOB87A6OHenno51d2WNdu3Y6nds247hAbRUJKoiyUInO+AcPXh/YmXhPRM0nqpaIaj4SBnGFjovlJrASHtpNoLVAsIqUZ6E0Ec/q6rvEcTLUfEPh8gssjI7VCoXSYz+b5JN/cpynquEaq4c3uJaXIuC6GHCDs37vCMPv2Mk7B3PWu/J93Zs7d2wjO9CL46r4FyJBBSRElI2yPXCz4GZRTjr+rY22aSRfiWpIUIrXJYNVJCzHewssG2WnwE4RVCNWpmYojI3L8tzi2LVl8zdfPs/ffvUiM3XLbiT59eeXjAGNw2or68E3iu7zSPzBIQ7c1s87u9L267M9nf25TUMq099DIpOMB0+mhoS1xsJEffWmvXppNae+qqNsN96fEMVbaoszc6xcmzSrC8tT86XoB49P8rX/8jTPLfsEbeDbga4Hb3iZQXC9Eiw2JqNJAqD3dOF9YIR9B3r4jQ5Pv8ZLp7amezoTXncXqc4cbjqFZVvUl/9ZG5TjhQkRMEaIgohasUJlaZny/CLlhaVKqVS5UijLoydn+bvPnuHclRUq9Rc0wLb7/fqyIfiXQ0DjGX0DMqy2+xpQm7Mk3rWbTccGONrvcYfnqlsSSXfYTSXTbippO14SO5lA2zbasuKRYBhhwojQ96mVKwSValgrV1erfnCt7Mu5qRKPPz7Fqa9dYnK6hF9vV8Pq7dZ/2cBfCQHtzzbI2Ah8e0Er9L5uUq/fRM+BHnb0pNiZdtiUsBiyLDq0UkmtSMbjIfGNUAkjCn7IZCnk2myZS0/NceXH11g4v0iltfYbDw7bAK4nonFPXi6oX+ZoJ+NGRbW9XwGqM4k90oXb55HoSGBnXBwRWA0Iln2CqRK15xaprfhronX7zMrcoAivAPSvgoAbEdJOzPrPr7S+9cA3+gy/BOh/CAJe6v1qg3svBX49uL8X0P9/3OD4P2YwoaB80jEqAAAAJXRFWHRjcmVhdGUtZGF0ZQAyMDA5LTEyLTA4VDEyOjUxOjE1LTA3OjAw+EApOgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMC0wMS0xMVQwOToxMTo1Mi0wNzowMLl9/7oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTAtMDEtMTFUMDk6MTE6NTItMDc6MDDIIEcGAAAANHRFWHRMaWNlbnNlAGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL0dQTC8yLjAvbGoGqAAAACV0RVh0bW9kaWZ5LWRhdGUAMjAwOS0xMi0wOFQxMjo1MToxNS0wNzowMKfxXw4AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAF3RFWHRTb3VyY2UAR05PTUUgSWNvbiBUaGVtZcH5JmkAAAAgdEVYdFNvdXJjZV9VUkwAaHR0cDovL2FydC5nbm9tZS5vcmcvMuSReQAAAABJRU5ErkJggg==
// @icon64         data:image/png;base64,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8uMn+PyjExSBqF7CdWfzcghYD75xrY/0k/mj23jnlg794a5Nw1v69u0l1eGhaitIrYhoF5UZRuV3IHaOoLhCZWacyvQVqvPTBOUSYRDEUo9TJygErRS26+B4WZK9g3gD20j2b8bxMqiggCxfjjdqSYhys4iTpbS4wuyZ5yhMzFwaLZhPfuwXfPNCgUodZDvw8JUSsF4Ba8joSOB87A6OHenno51d2WNdu3Y6nds247hAbRUJKoiyUInO+AcPXh/YmXhPRM0nqpaIaj4SBnGFjovlJrASHtpNoLVAsIqUZ6E0Ec/q6rvEcTLUfEPh8gssjI7VCoXSYz+b5JN/cpynquEaq4c3uJaXIuC6GHCDs37vCMPv2Mk7B3PWu/J93Zs7d2wjO9CL46r4FyJBBSRElI2yPXCz4GZRTjr+rY22aSRfiWpIUIrXJYNVJCzHewssG2WnwE4RVCNWpmYojI3L8tzi2LVl8zdfPs/ffvUiM3XLbiT59eeXjAGNw2or68E3iu7zSPzBIQ7c1s87u9L267M9nf25TUMq099DIpOMB0+mhoS1xsJEffWmvXppNae+qqNsN96fEMVbaoszc6xcmzSrC8tT86XoB49P8rX/8jTPLfsEbeDbga4Hb3iZQXC9Eiw2JqNJAqD3dOF9YIR9B3r4jQ5Pv8ZLp7amezoTXncXqc4cbjqFZVvUl/9ZG5TjhQkRMEaIgohasUJlaZny/CLlhaVKqVS5UijLoydn+bvPnuHclRUq9Rc0wLb7/fqyIfiXQ0DjGX0DMqy2+xpQm7Mk3rWbTccGONrvcYfnqlsSSXfYTSXTbippO14SO5lA2zbasuKRYBhhwojQ96mVKwSValgrV1erfnCt7Mu5qRKPPz7Fqa9dYnK6hF9vV8Pq7dZ/2cBfCQHtzzbI2Ah8e0Er9L5uUq/fRM+BHnb0pNiZdtiUsBiyLDq0UkmtSMbjIfGNUAkjCn7IZCnk2myZS0/NceXH11g4v0iltfYbDw7bAK4nonFPXi6oX+ZoJ+NGRbW9XwGqM4k90oXb55HoSGBnXBwRWA0Iln2CqRK15xaprfhronX7zMrcoAivAPSvgoAbEdJOzPrPr7S+9cA3+gy/BOh/CAJe6v1qg3svBX49uL8X0P9/3OD4P2YwoaB80jEqAAAAJXRFWHRjcmVhdGUtZGF0ZQAyMDA5LTEyLTA4VDEyOjUxOjE1LTA3OjAw+EApOgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMC0wMS0xMVQwOToxMTo1Mi0wNzowMLl9/7oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTAtMDEtMTFUMDk6MTE6NTItMDc6MDDIIEcGAAAANHRFWHRMaWNlbnNlAGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL0dQTC8yLjAvbGoGqAAAACV0RVh0bW9kaWZ5LWRhdGUAMjAwOS0xMi0wOFQxMjo1MToxNS0wNzowMKfxXw4AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAF3RFWHRTb3VyY2UAR05PTUUgSWNvbiBUaGVtZcH5JmkAAAAgdEVYdFNvdXJjZV9VUkwAaHR0cDovL2FydC5nbm9tZS5vcmcvMuSReQAAAABJRU5ErkJggg==
// @include        http*://*what.cd/*
// ==/UserScript==
// Icon from the Open Icon Library

(function () {
	'use strict';
	var css24 = {
		post: {
			styleurl: '',
			userid: (function () {
				if (/(?:id=(\d+))/.test(document.querySelector('.username').href)) {
					return RegExp.lastParen;
				}
			}()),
			editLink: function () {
				return '/user.php?action=edit&userid=' + this.userid + '#cssRedir=' + document.location;
			}
		},
		time: {
			now : (new Date()).getHours(),
			eve : 18, // 24-hour clock. 6pm
			day : 7 // 7am
		},
		css: { // Do not leave eve or day blank as they may cause an endless redirect.
			eve : '', // Style for night
			day : '', // Style for day
			now : document.querySelector('link[title="External CSS"]').href
		},
		rout: function () {
			if (/(?:cssRedir\=(.+))/i.test(document.location.hash.substring(1))) {
				document.location = RegExp.lastParen;
			} else {
				this.init();
			}
		},
		init: function () {
			var h = this.time.now;

			this.post.styleurl = h < this.time.eve && h >= this.time.day ? this.css.day : this.css.eve;

			if (this.post.styleurl !== this.css.now && this.post.userid > 0 && this.css.eve && this.css.day) {
				h = new XMLHttpRequest();
				h.link = this.post.editLink();
				h.open('get', h.link, true);
				h.onload = this.reform;
				h.onerror = function () {
					console.log('xhr error');
				};
				h.send(null);
			}
		},
		reform: function () {
			var d = document.implementation.createHTMLDocument(''),
				e = document.createElement('div'),
				f,
				x;

			d.documentElement.innerHTML = this.responseText;

			e.innerHTML = d.getElementById('content').innerHTML;
			e.style.display = 'none';
			document.body.appendChild(e);

			document.getElementById('styleurl').value = css24.post.styleurl;

			f = document.getElementById('userform');

			if (typeof (FormData) === 'function') {
				x = new XMLHttpRequest();
				x.open('post', this.link, true);
				x.send(new FormData(f));
				x.onload = function () {
					document.location.reload();
				};
			} else {
				f.action = this.link;
				f.submit();
			}
		}
	};
	css24.rout();
}(this));