	function urlparam(name) {
		var rx = new RegExp('[\&|\?]' + name + '=([^\&\#]+)');
		var val = window.location.search.match(rx);
		return !val ? '':val[1];
	}
	function filltext() {
		if(textbutton.innerHTML === langus) {
			texttitle.innerHTML = titleid;
			divisi.innerHTML = divid;
		} else {
			texttitle.innerHTML = titleus;
			divisi.innerHTML = divus;
		}
	}
	function swaptext() {
		if(textbutton.innerHTML === langid) {
			textbutton.innerHTML = langus;
		} else {
			textbutton.innerHTML = langid;
		}
		filltext();
	}
	function langdefault() {
		if(urlparam('lang') === qsid) {
			textbutton.innerHTML = langus;
		} else {
			textbutton.innerHTML = langid;
		}
		filltext();
	}
	function replace() {
		divus = divus.replace(new RegExp('NAMAAPK', 'g'), namaapk);
		divid = divid.replace(new RegExp('NAMAAPK', 'g'), namaapk);
		divus = divus.replace(new RegExp('NAMARTF', 'g'), namartf);
		divid = divid.replace(new RegExp('NAMARTF', 'g'), namartf);
		divus = divus.replace(new RegExp('EMAILRTF', 'g'), emailrtf);
		divid = divid.replace(new RegExp('EMAILRTF', 'g'), emailrtf);
	}
	function replacetitle() {
		divus = divus.replace(new RegExp('JUDUL', 'g'), titleus);
		divid = divid.replace(new RegExp('JUDUL', 'g'), titleid);
	}
	function replacelinkpptnc() {
		divus = divus.replace(new RegExp('LINKPPTNC', 'g'), titlehrefus);
		divid = divid.replace(new RegExp('LINKPPTNC', 'g'), titlehrefid);
		divus = divus.replace(new RegExp('HREFPPTNC', 'g'), hrefpptnc + qsus);
		divid = divid.replace(new RegExp('HREFPPTNC', 'g'), hrefpptnc + qsid);
	}
	replace();
	replacetitle();
	replacelinkpptnc();
	langdefault();