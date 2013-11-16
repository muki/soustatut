var clanki = [
		{ 'title': 'SUM KORUPCIJE V ŠOU: KATJA ŠOBA O PODKUPOVANJU NE VE NIČ, JI JE PA MILOVANOVIĆ GROZIL.', 'url': 'http://www.google.jp' },
		{ 'title': 'Yo mama so fat it\'s not even funny. No really, she should go se a doctor.', 'url': 'http://www.google.com' },
		{ 'title': 'I don\'t know if Hitler was such a bad guy. He did kill Hitler after all.', 'url': 'http://www.google.com' },
		{ 'title': '"There\'s no eye in team." - Pharaoh to hieroglyphist.', 'url': 'http://www.google.com' },
		{ 'title': 'Hungarian doctors who delivered a baby to a brain-dead mother say this is only the third case in the world.', 'url': 'http://www.google.com' }
]
var texting = 0;

function popMeAnArticle(num) {
	
	if (texting == 0) {
	
		texting = 1;
		$('.slide.one.left h1 span').text('');
		
		num = num || parseInt(Math.random() * (5));
		var clanek = clanki[num];
		
		$('.slide.one.left .box a').attr('href', clanek.url);
		
		$.each(clanek.title.split(''), function(i, letter) {
			texting = setTimeout(function() {
				$('.slide.one.left h1 span').text($('.slide.one.left h1 span').text() + letter);
				if (i == clanek.title.length - 1) {
					texting = 0;
				}
			}, 100*i);
		});
	}
}