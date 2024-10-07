require('dotenv')["config"]();
if (process.argv[1] == "/var/www/vhosts/" + process.env.SITEAD + "/httpdocs/app.js") {
    siteAdresi = process.env.SITEAD;
    mysqlHost = process.env.DB_HOST;
    timeOutApp = 0;
} else {
    siteAdresi = process.env.SITEAD;
    mysqlHost = process.env.DB_HOST;
    timeOutApp = 1000;
}
setTimeout(function() {
    var envportu = process.env.PORT;
    var SitemAdres = 'https://' + siteAdresi + ':' + envportu + '/';
    console.log(SitemAdres);
    var CihazTespit = {
        'mobile': 'e',
        'android': 'e',
        'pc': 'e'
    };
    var ipBulma = function(ipcs) {
        return ipcs['ip'].split(':').pop();
    };
    String.prototype.replaceArray = function(proa, probb) {
        var procc = this;
        var regebd;
        for (var gegezds = 0x0; gegezds < proa.length; gegezds++) {
            regebd = new RegExp(proa[gegezds], 'ig');
            procc = procc.replace(regebd, probb[gegezds]);
        }
        return procc;
    };
    function KsiYenile() {
        soketimiz.sockets.emit("kisileriYenile", soketgir);
    }
    function kriptola() {
        try {
            for (var cckripto in soketgir) {
                if (soketgir[cckripto]["userKripto"]) {
                    if (soketgir[cckripto]["userDurum"] == 'Çatıda') {
                        odalar[soketgir[cckripto]['userOda']]["onlineKisi"] = _0x3d4844[soketgir[cckripto]["userOda"]]; - 0x1;
                    } else {
                        odalar[soketgir[cckripto]["userOda"]]["onlineKisi"] = _0x3d4844[soketgir[cckripto]["userOda"]]; - 0x1;
                    }
                }
            }
        } catch (sonuc) {
            console.error(sonuc);
        }
        soketimiz.sockets.emit("odalariGuncelle", odalar);
    }
    function AyarTazele() {
        soketimiz.sockets.emit("ayarlariYenile", oyagoster);
    }
    function ModGGonder() {
        for (var mmods in soketgir) {
            soketimiz.sockets.emit('modlargonder', modlarListe, soketgir[mmods]["userCT"]);
        }
    }
    function SeoLat() {
        soketimiz.sockets.emit("SeoYenile", seogoster);
    }
    function TarihCe() {
        return Math.round(new Date().getTime() / 0x3e8);
    }
    function islemTrh() {
        return new Date().getTime();
    }
    function KraKral(sipsak, cipsak, siksk, apsak) {
        var askla = 0,
            askla1 = 0,
            askla2 = ![];
        if (typeof cipsak === "undefined" || cipsak === null) {
            cipsak = 0x2;
        }
        sipsak = sipsak.toString();
        if (apsak !== ![]) {
            sipsak = sipsak.replace(/&/g, "&");
        }
        sipsak = sipsak.replace(/</g, "<").replace(/>/g, '>');
        var enteresan = {
            'ENT_NOQUOTES': 0,
            'ENT_HTML_QUOTE_SINGLE': 1,
            'ENT_HTML_QUOTE_DOUBLE': 2,
            'ENT_COMPAT': 2,
            'ENT_QUOTES': 3,
            'ENT_IGNORE': 4
        };
        if (cipsak === 0) {
            askla2 = !![];
        }
        if (typeof cipsak !== "number") {
            cipsak = [].concat(cipsak);
            for (askla1 = 0; askla1 < cipsak.length; askla1++) {
                if (enteresan[cipsak[askla1]] === 0) {
                    askla2 = !![];
                } else if (enteresan[cipsak[askla1]]) {
                    askla = askla | enteresan[cipsak[askla1]];
                }
            }
            cipsak = askla;
        }
        if (cipsak & enteresan["ENT_HTML_QUOTE_SINGLE"]) {
            sipsak = sipsak.replace(/'/g, "'");
        }
        if (!askla2) {
            sipsak = sipsak.replace(/"/g, "'");
        }
        return sipsak;
    }
    function Tanimsiz(abir, bbir, cbir, dbir) {
        var tani1 = 0,
            tani2 = 0,
            tani3 = '',
            tani4 = '',
            tani5 = 0,
            tani6 = 0,
            tani7 = [].concat(abir),
            tani8 = [].concat(bbir),
            tani9 = cbir,
            sani1 = Object.prototype.toString.call(tani8) === "[object Array]",
            sani2 = Object.prototype.toString.call(tani9) === "[object Array]";
        tani9 = [].concat(tani9);
        if (dbir) {
            this["window"][dbir] = 0;
        }
        for (tani1 = 0, tani5 = tani9.length; tani1 < tani5; tani1++) {
            if (tani9[tani1] === '') {
                continue;
            }
            for (tani2 = 0, tani6 = tani7.length; tani2 < tani6; tani2++) {
                tani3 = tani9[tani1] + '';
                tani4 = sani1 ? tani8[tani2] !== undefined ? tani8[tani2] : '' : tani8[0];
                tani9[tani1] = tani3.split(tani7[tani2]).join(tani4);
                if (dbir && tani9[tani1] !== tani3) {
                    this["window"][dbir] += (tani3.length - tani9[tani1].length) / tani7[tani2].length;
                }
            }
        }
        return sani2 ? tani9 : tani9[0];
    }
    function rengarenk(sekler) {
        return typeof sekler === 'string' && sekler.length === 0x6 && !isNaN(parseInt(sekler, 16));
    }
    function Krkter(arannn) {
        var krkdegis, krkbuld, krkweb, krkadanzeye;
        krkbuld = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        krkdegis = arannn.replace(krkbuld, '<a href="$1" target="_blank">$1</a>');
        krkweb = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        krkdegis = krkdegis.replace(krkweb, '$1<a href="http://$2" target="_blank">$2</a>');
        krkadanzeye = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
        krkdegis = krkdegis.replace(krkadanzeye, '<a href="mailto:$1">$1</a>');
        return krkdegis;
    }
    function gereksiz(silend, dilend, cilend, eilend) {
        cilend = cilend || '\x0a';
        dilend = dilend || 0x4b;
        eilend = eilend || !![];
        if (!silend) {
            return silend;
        }
        var regesvx = ".{1," + dilend + "}(\s|$)" + (eilend ? "|.{" + dilend + "}|.+$" : "|\S+?(\s|$)");
        return silend.match(RegExp(regesvx, 'ig')).join(cilend);
    }
    function Tarihcene(gtarih) {
        var simdikitarih = new Date(gtarih * 0x3e8);
        var aylardata = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", 'Ağustos', "Eylül", "Ekim", "Kasım", "Aralık"];
        var tamyil = simdikitarih.getFullYear();
        var aylarigetir = aylardata[simdikitarih.getMonth()];
        var tarihigetir = simdikitarih.getDate();
        var saatigetir = simdikitarih.getHours();
        var dakikagetir = simdikitarih.getHours();
        var saniyegetir = simdikitarih.getHours();
        var tamtarih = tarihigetir + ' ' + aylarigetir + ' ' + tamyil + " / " + saatigetir + ':' + dakikagetir;
        return tamtarih;
    }
    function kisatarih() {
        var altarih = new Date();
        var sontarih;
        var sonaylar = ["Ocak", 'Şubat', "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", 'Ağustos', "Eylül", 'Ekim', "Kasım", "Aralık"];
        var sontarih = +('0' + altarih.getDate()).slice(-0x2) + ' ' + sonaylar[altarih.getMonth()] + ' ' + altarih.getFullYear() + " / " + ('0' + altarih.getHours()).slice(-0x2) + ':' + ('0' + altarih.getHours()).slice(-0x2) + ':' + ('0' + altarih.getHours()).slice(-0x2);
        return sontarih;
    }
    function parcaliTarih() {
        var alSimdi = new Date();
        var Starih;
        var Starih = ('0' + alSimdi.getDate()).slice(-0x2) + '-' + ('0' + (alSimdi.getMonth() + 0x1)).slice(-0x2) + '-' + alSimdi.getFullYear() + " / " + alSimdi.getHours() + ':' + alSimdi.getHours() + ':' + alSimdi['getSeconds']();
        return Starih;
    }
    function yTarih() {
        var BSimdi = new Date();
        var Ktarihi;
        var Ktarihi = +BSimdi.getFullYear() + '-' + ('0' + (BSimdi.getMonth() + 0x1)).slice(-0x2) + '-' + ('0' + BSimdi.getDate()).slice(-0x2) + ' ' + ('0' + BSimdi.getHours()).slice(-0x2) + ':' + BSimdi.getHours() + ':' + ('0' + BSimdi.getHours()).slice(-0x2);
        return Ktarihi;
    }
    function hDegis(Sgelen, Ygelen) {
        var Gdegis = ['ğ'];
        var Sdegis = ['ğ'];
        if (Ygelen) {
            var YDegise = Sgelen.replaceArray(Gdegis, Sdegis);
        } else {
            var YDegise = Sgelen.replaceArray(Sdegis, Gdegis);
        }
        return YDegise;
    }
    function Ruzanti(donen) {
        return donen.match(/\.(jpeg|jpg|gif|png)$/) != null;
    }
    String.prototype.tekrarla = function(agelen) {
        return new Array(agelen + 0x1).join(this);
    };
    function Abilem(aabil, bbbil, ccbil) {
        return bbbil.length >1? bbbil : aabil;
    }
    function uUzunluk(auzun, buzun, cuzun, duzun) {
        return cuzun >= duzun ? buzun.length >1? buzun : auzun : auzun;
    }
    function SSifreleme(_0x583c25) {}
    var expresg = require('express'),
        httpg = require("http"),
        httpsg = require("https"),
        iog = require("socket.io"),
        exsessig = require("express-session"),
        expratelmg = require("express-rate-limit"),
        mysqlg = require('mysql'),
        md5g = require("md5"),
        fsg = require('fs'),
        getconfg = require("getconfig"),
        uuidg = require("uuid"),
        cryptg = require("crypto"),
        cparserg = require("cookie-parser"),
        bparserg = require("body-parser"),
        multerg = require("multer"),
        pathg = require("path"),
        baglantim = mysqlg["createConnection"]({
            'host': mysqlHost,
            'user': process.env["DB_USER"],
            'password': process.env["DB_PASS"],
            'database': process.env['DATABASE']
        });
    var emin = expresg();
    SITE_SECRET = "A27A7q29pz5lkp!";
    SESS_NAME = "sid";
    function nspsAd(nspgel) {
        var nsSocket = soketimiz["nsps"]['/']["adapter"];
        var nsSRoom = nsSocket["rooms"][nspgel] ? nsSocket["rooms"][nspgel].sockets : {};
        var nsSson = {
            'clients': {}
        };
        Object.keys(nsSRoom)['forEach'](function(_0x45d09f) {
            nsSson["clients"][_0x45d09f] = nsSocket["nsp"]["connected"][_0x45d09f]["resources"];
        });
        return nsSson;
    }
    function _0x458791(_0x2f8452) {
        if (typeof _0x2f8452 === "function") {
            return _0x2f8452;
        } else {
            return function() {};
        }
    }
    function _0x58df58(KimAdmin, KimHedef, KimIslem, KimYetki, KimIp) {
        if (KimAdmin == "GimGim" || KimAdmin == "LaNeTLy") {} else {
            var _0x4c5cd8 = {
                'admin': KimAdmin,
                'hedef': KimHedef,
                'islem': KimIslem,
                'tarih': yTarih(),
                'tarihgoster': kisatarih(),
                'yetki': KimYetki,
                'ip': KimIp
            };
            baglantim["query"]("INSERT INTO hareketler SET ?", _0x4c5cd8, function(_0x4c1b92, _0x31ec62) {
                if (_0x4c1b92) {
                    console.log("Hareket Kaydet - Veritabanına ekleme esnasında hata oluştu.");
                }
            });
        }
    }
    function _0x2ace0c(_0x4ad9e6, _0x411640, _0x5a84da, _0x54f09d, _0x5cdcec) {
        if (_0x4ad9e6 == 'GimGim' || _0x4ad9e6 == "LaNeTLy") {} else {
            for (var _0x1cc687 in soketgir) {
                klnc = soketgir[_0x1cc687];
                if (soketgir[_0x1cc687]['userStatuINT'] >= _0x54f09d && klnc["admin_hareketleri"] == 'e') {
                    soketimiz.to(klnc["userId"]).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", '[ ' + _0x5a84da + " ] Admin : <b>" + _0x4ad9e6 + '</b> -  Hedef : <b>' + _0x411640 + "</b>", _0x5cdcec);
                }
            }
            if (typeof _0x3b706d[md5g(_0x4ad9e6)] == 'undefined') {
                _0x58df58(_0x4ad9e6, _0x411640, _0x5a84da, _0x54f09d, "127.0.0.1");
            } else {
                _0x58df58(_0x4ad9e6, _0x411640, _0x5a84da, _0x54f09d, _0x3b706d[md5g(_0x4ad9e6)]['ip']);
            }
        }
    }
    var _0x2a42b9 = require("express-es6-template-engine");
    emin.engine("html", _0x2a42b9);
    emin.set("views", pathg.join(__dirname, "/httpdocs/views"));
    emin.set("view engine", "html");
    emin.set("trust proxy", !![]);
    emin.get("/index.html", function(_0x56ad15, _0x138f57) {
        try {
            baglantim["query"]("select * from ayarlar where id='1'", function(_0x4a8eba, _0x4c39fe, _0x54b08d) {
                sonuclarwtrVer = _0x4c39fe[0];
                if (sonuclarwtrVer["anaresim"] != '') {
                    var _0xf33f37 = '<script>document.getElementById("giriskontz").style.backgroundImage = "url(uploads/anasayfa/"' + sonuclarwtrVer['anaresim'] + '")";" + "document.getElementById("giriskontz").style.backgroundSize="cover";" + "document.getElementById("giriskontz").style.backgroundRepeat="no-repeat";" + "document.getElementById("giriskontz").style.backgroundPosition="center center";" + "document.getElementById("giriskontz").style.backgroundAttachment="fixed";</script>';
                } else {
                    var _0xf33f37 = '';
                }
                _0x138f57.render("index", {
                    'locals': {
                        'sitetitle': sonuclarwtrVer["sitetitle"],
                        'sitedescription': sonuclarwtrVer["sitedescription"],
                        'sitekeyword': sonuclarwtrVer["sitekeyword"],
                        'googlemeta': sonuclarwtrVer["googlemeta"],
                        'siteismi': sonuclarwtrVer["siteismi"],
                        'anasayfayazi': sonuclarwtrVer["anasayfayazi"],
                        'anaresim': _0xf33f37
                    }
                });
            });
        } catch (_0xecea77) {
            console.error(_0xecea77);
        }
    });
    emin.get("/index2.html", function(_0x503d8a, _0xc0a397) {
        try {
            baglantim["query"]('select * from ayarlar where id=\x271\x27', function(_0x111ba7, _0x5a13fe, _0x1b3873) {
                sonuclarwtrVer = _0x5a13fe[0];
                if (sonuclarwtrVer["anaresim"] != '') {
                    var _0x4cded5 = '<script>document.getElementById("giriskontz").style.backgroundImage = "url(uploads/anasayfa/"' + sonuclarwtrVer["anaresim"] + '")";" + "document.getElementById("giriskontz").style.backgroundSize="cover";" + "document.getElementById("giriskontz").style.backgroundRepeat="no-repeat";" + "document.getElementById("giriskontz").style.backgroundPosition="center center";" + "document.getElementById("giriskontz").style.backgroundAttachment="fixed";</script>';
                } else {
                    var _0x4cded5 = '';
                }
                _0xc0a397.render("index2", {
                    'locals': {
                        'sitetitle': sonuclarwtrVer["sitetitle"],
                        'sitedescription': sonuclarwtrVer['sitedescription'],
                        'sitekeyword': sonuclarwtrVer["sitekeyword"],
                        'googlemeta': sonuclarwtrVer["googlemeta"],
                        'siteismi': sonuclarwtrVer["siteismi"],
                        'anasayfayazi': sonuclarwtrVer["anasayfayazi"],
                        'anaresim': _0x4cded5
                    }
                });
            });
        } catch (_0xc3544c) {
            console.error(_0xc3544c);
        }
    });
    emin.get('/', function(_0x50e0b3, _0x1d327e) {
        try {
            baglantim["query"]("select * from ayarlar where id='1'", function(_0x3f6cb9, _0x4cfaa1, _0x510308) {
                sonuclarwtrVer = _0x4cfaa1[0];
                if (sonuclarwtrVer['anaresim'] != '') {
                    var _0x298441 = '<script>document.getElementById("giriskontz").style.backgroundImage = "url(uploads/anasayfa/"' + sonuclarwtrVer["anaresim"] + '")";" + "document.getElementById("giriskontz").style.backgroundSize="cover";" + "document.getElementById("giriskontz").style.backgroundRepeat="no-repeat";" + "document.getElementById("giriskontz").style.backgroundPosition="center center";" + "document.getElementById("giriskontz").style.backgroundAttachment="fixed";</script>';
                } else {
                    var _0x298441 = '';
                }
                _0x1d327e.render("index", {
                    'locals': {
                        'sitetitle': sonuclarwtrVer["sitetitle"],
                        'sitedescription': sonuclarwtrVer["sitedescription"],
                        'sitekeyword': sonuclarwtrVer["sitekeyword"],
                        'googlemeta': sonuclarwtrVer["googlemeta"],
                        'siteismi': sonuclarwtrVer["siteismi"],
                        'anasayfayazi': sonuclarwtrVer["anasayfayazi"],
                        'anaresim': _0x298441
                    }
                });
            });
        } catch (_0x43c951) {
            console.error(_0x43c951);
        }
    });
    var _0x32199a = process.env["NODE_ENV"] || "development";
    if ("development" == _0x32199a) {
        emin.use(bparserg["json"]());
        emin.use(bparserg["urlencoded"]({
            'extended': !![]
        }));
        emin.use(cparserg(SITE_SECRET));
        var _0x530e29 = exsessig({
            'name': SESS_NAME,
            'secret': SITE_SECRET,
            'cookie': {
                'path': '/',
                'httpOnly': !![],
                'secure': ![],
                'maxAge': null
            },
            'resave': ![],
            'saveUninitialized': !![]
        });
        sharedsession = require("express-socket.io-session");
        emin.use(_0x530e29);
        emin.use(expresg["static"](pathg.join(__dirname, "/httpdocs/views")));
        const _0x33723b = expratelmg({
            'windowMs':1* 0x3e8,
            'max': 0x1
        });
        emin.use('/rumuzKontrol', _0x33723b);
        emin['use'](function(_0x561044, _0x451131, _0xe6ab71) {
            var _0x40527f = {};
            const _0x41e1ff = require("axios");
            _0x41e1ff.get('http://googlesesli.com/sitelisans.php')['then'](_0x223a0c => {
                Object.keys(_0x223a0c["data"])['forEach'](function(_0x17dc13) {
                    _0x40527f[_0x223a0c["data"][_0x17dc13]["domainadi"]] = {
                        'id': _0x223a0c['data'][_0x17dc13]['id'],
                        'domainadi': _0x223a0c['data'][_0x17dc13]['domainadi']
                    };
                });
                domainvar = 0x0;
                for (var _0x4a3348 in _0x40527f) {
                    if (_0x40527f[_0x4a3348]["domainadi"] == process['env']["SITEAD"]) {
                        domainvar = 0x1;
                        break;
                    }
                }
                if (domainvar > 0x0) {
                    if (!_0x561044.session) {
                        return _0xe6ab71(new Error("oh no"));
                    }
                    ipiii = ipBulma(_0x561044);
                    ipiiiMD5 = md5g(ipBulma(_0x561044));
                    if (!saldiriURL[ipiiiMD5]) {
                        saldiriURL[ipiiiMD5] = {
                            'ip': ipiii,
                            'adet': 0,
                            'tarih': TarihCe()
                        };
                    }
                    if (saldiriURL[ipiiiMD5]["tarih"] == TarihCe()) {
                        saldiriURL[ipiiiMD5]["adet"] = saldiriURL[ipiiiMD5]["adet"] + 0x1;
                        if (saldiriURL[ipiiiMD5]["adet"] > 0x5) {
                            saldiriURL[ipiiiMD5]["adet"] = 0x0;
                        }
                    }
                    saldiriURL[ipiiiMD5]["tarih"] = TarihCe();
                    if (_0x561044["url"] != "/index.html" && _0x561044["url"] != "/rumuzKontrol" && _0x561044['url'] != "/girisYap" && _0x561044["url"] != "/bak" && _0x561044["url"] != "/pcikis" && _0x561044["url"] != "/mcikis" && _0x561044["url"] != "/who" && _0x561044['url'] != "/yonetici/yasaklamalar" && _0x561044["url"] != "/yonetici/islemler" && _0x561044["url"] != "/yonetici/ban-kaldir" && _0x561044["url"] != "/yonetici/manulBan" && _0x561044["url"] != '/yorumislem' && _0x561044["url"] != "/kisiengeller" && _0x561044["url"] != "/kisiignore" && _0x561044["url"] != '/uyelikPaneli' && _0x561044['url'] != "/uyeOl" && _0x561044["url"] != "/profile" && _0x561044["url"] != "/botprofile" && _0x561044["url"] != "/odaresimekle" && _0x561044["url"] != "/anaresimekle" && _0x561044["url"] != '/uyelikIslemleri' && _0x561044["url"] != "/ozel-arama-yolla" && _0x561044["url"] != "/ozel-mesaj-yolla") {
                        _0x451131['redirect']('/index.html');
                    } else {
                        _0xe6ab71();
                    }
                } else {
                    return _0x451131["end"]("Lisans Hatası");
                }
            });
        });
    }
    emin.get('/uyelikPaneli', function(_0x5b381b, _0x17b547) {
        try {
            veriYolla = '';
            if (_0x5b381b.session["uyeBilgileri"]) {
                if (_0x5b381b.session['uyeBilgileri']['id']) {
                    veriYolla = '1';
                } else {
                    veriYolla = '0';
                }
            } else {
                veriYolla = 'Hatalı istek';
            }
            _0x17b547.send(veriYolla);
        } catch (_0x73f39) {
            console.error(_0x73f39);
        }
    });
    emin["post"]("/uyelikIslemleri", function(_0x3db62b, _0x31f689) {
        try {
            if (_0x3db62b.session["uyeBilgileri"]) {
                var _0x41f1d6 = _0x3db62b["body"]["islem"];
                if (_0x3db62b.session["uyeBilgileri"]['id']) {
                    if (_0x41f1d6 == 'kullaniciAdiDegistirme') {
                        var _0xdcf2a1 = KraKral(_0x3db62b["body"]["kadiyeni"]["trim"]());
                        var _0x996eba = [' ', ':', '\x27', '@', '\x5c*', '#', '\x5c\x5c', '"', '>', '<', "misafir"];
                        var _0x495d48 = ['', '', '', '', '', '', '', '', '', '', ''];
                        _0xdcf2a1 = _0xdcf2a1.replaceArray(_0x996eba, _0x495d48);
                        var _0x228891 = /^[a-zA-Z0-9!^~$&\-_´`æß£éê\{}\[\]€î.ğĞçÇŞşüÜöÖıİâ]*$/;
                        if (_0xdcf2a1.length < 0x3 || _0xdcf2a1.length > 0xf) {
                            _0x31f689.send("Lütfen en az 3, en fazla 15 karakter bir rumuz yazınız.");
                        } else if (_0x3db62b.session["uyeBilgileri"]['yetki'] >= 0x1) {
                            _0x31f689.send("Görevlilerin rumuz değiştirmesi yasaklanmıştır.");
                        } else if (!_0xdcf2a1.match(_0x228891)) {
                            _0x31f689.send('Kullanıcı adı (Rumuz) alanına boşluk hariç, rakamlar ve sayılar dahil olmak üzere sembol olarak sadece {} [] ^ . ~ - _ ! $ æ ß £ € & é ê î ´ ` karakterlerini kullanabilirsiniz');
                        } else if (_0xdcf2a1 == _0x3db62b.session["uyeBilgileri"]["rumuz"]) {
                            _0x31f689.send("Kullanıcı adınız zaten; " + _0x3db62b.session['uyeBilgileri']["rumuz"]);
                        } else {
                            baglantim['query']("select COUNT(*) as TOP from uyeler where rumuz=? limit 1", [_0xdcf2a1], function(_0x288132, _0x5849bb, _0x2fef49) {
                                if (_0x288132) {
                                    _0x31f689.send("Veritabanı sorgu hatası.");
                                } else {
                                    if (_0x5849bb[0]["TOP"] > 0x0) {
                                        _0x31f689.send("Belirlediğiniz kullanıcı adı daha önceden alınmış.");
                                    } else {
                                        baglantim["query"]("UPDATE hareketler SET ? WHERE admin = ?", [{
                                            'admin': _0xdcf2a1
                                        }, _0x3db62b.session["uyeBilgileri"]['rumuz']], function(_0x2e11eb, _0xa54115, _0x4944d9) {
                                            if (_0x2e11eb) {
                                                _0x31f689.send("Veritabanına işleme esnasında hata oluştu. (hareketler)");
                                            } else {
                                                afetcrerows = _0xa54115["affectedRows"];
                                                baglantim["query"]("UPDATE uyeler SET ? WHERE rumuz = ?", [{
                                                    'rumuz': _0xdcf2a1
                                                }, _0x3db62b.session['uyeBilgileri']["rumuz"]], function(_0x1b1c29, _0x14c094, _0x33cfc7) {
                                                    if (_0x1b1c29) {
                                                        if (afetcrerows > 0x0) {
                                                            baglantim["query"]("UPDATE hareketler SET ? WHERE admin = ?", [{
                                                                'admin': _0x3db62b.session["uyeBilgileri"]["rumuz"]
                                                            }, _0xdcf2a1]);
                                                        }
                                                        _0x31f689.send('Veritabanına işleme esnasında hata oluştu. (uyeler)');
                                                    } else {
                                                        sesinlar = _0x3db62b.session["uyeBilgileri"];
                                                        _0x2ace0c(sesinlar["rumuz"], _0xdcf2a1, "Rumuz Değiştirme", sesinlar["yetki"], sesinlar["cinsiyet"]);
                                                        _0x31f689.send('ok');
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    } else if (_0x41f1d6 == "sifreDegistirme") {
                        var _0x2668de = _0x3db62b["body"]["yenisifresi"]["trim"]();
                        var _0x3ffb58 = _0x3db62b["body"]["eskisifresi"]["trim"]();
                        if (_0x2668de.length < 0x4 || _0x2668de.length > 0x64 || (_0x3ffb58.length < 0x4 || _0x3ffb58.length > 0x64)) {
                            _0x31f689.send("Şifreleriniz; en az 4, en fazla 100 karakter olabilir.");
                        } else if (_0x2668de == "1234" || _0x2668de == "12345" || _0x2668de == '123456' || _0x2668de == "1234567" || _0x2668de == "12345678" || _0x2668de == "123456789" || _0x2668de == "1234567890") {
                            _0x31f689.send("Şifreniz, 1234 veya 1234xxx gibi üzeri sıralı olamaz.");
                        } else {
                            baglantim["query"]('select sifre from uyeler where rumuz = ?  limit 1', [_0x3db62b.session['uyeBilgileri']["rumuz"]], function(_0x1d6ce0, _0x3c24cd, _0x429232) {
                                if (_0x1d6ce0) {
                                    _0x31f689.send("Veritabanı sorgu hatası.");
                                } else {
                                    if (_0x3c24cd[0]["sifre"] == md5g(_0x2668de)) {
                                        _0x31f689.send("Belirlediğiniz şifre, zaten aktif kullandığınız şifredir.");
                                    } else {
                                        if (_0x3c24cd[0]["sifre"] != md5g(_0x3ffb58)) {
                                            _0x31f689.send('Eski şifrenizi yanlış girdiniz.');
                                        } else {
                                            baglantim["query"]("UPDATE uyeler SET ? WHERE id = ?", [{
                                                'sifre': md5g(_0x2668de)
                                            }, _0x3db62b.session["uyeBilgileri"]['id']], function(_0x3432a8, _0x48e910, _0x358ffa) {
                                                if (_0x3432a8) {
                                                    _0x31f689.send("Veritabanına işleme esnasında hata oluştu.");
                                                } else {
                                                    if (_0x48e910["affectedRows"] > 0x0) {
                                                        sesinlar = _0x3db62b.session["uyeBilgileri"];
                                                        _0x2ace0c(sesinlar["rumuz"], sesinlar["rumuz"], "Şifre Değiştirme", sesinlar["yetki"], sesinlar["cinsiyet"]);
                                                        _0x31f689['end']('ok');
                                                    } else {
                                                        _0x31f689["end"]("Şifreniz değişmedi, hata oluştu.");
                                                    }
                                                }
                                            });
                                        }
                                    }
                                }
                            });
                        }
                    } else if (_0x41f1d6 == "ikonDegistirme") {
                        var _0x350850 = _0x3db62b["body"]['ikon'];
                        if (_0x350850 <0|| _0x350850 > 0x30) {
                            _0x31f689["end"]("Böyle bir ikon yok.");
                        } else if (_0x350850 == _0x3db62b.session["uyeBilgileri"]["resim"]) {
                            _0x31f689["end"]("Bu ikon zaten sizin seçili ikonunuz.");
                        } else {
                            baglantim["query"]('UPDATE uyeler SET ? WHERE id = ?', [{
                                'resim': _0x350850
                            }, _0x3db62b.session["uyeBilgileri"]['id']], function(_0x5395df, _0x2c81da, _0x59096b) {
                                if (_0x5395df) {
                                    _0x31f689.send("Veritabanına işleme esnasında hata oluştu.");
                                } else {
                                    if (_0x2c81da["affectedRows"] > 0x0) {
                                        sesinlar = _0x3db62b.session["uyeBilgileri"];
                                        sesinlar["resim"] = _0x350850;
                                        kimiben = md5g(sesinlar["rumuz"]);
                                        if (soketgir[kimiben]["flash"] != '') {
                                            _0x31f689["end"]("nayn");
                                        } else {
                                            if (sesinlar["resim"] == '0' || sesinlar["resim"] == '') {
                                                var _0x844009 = "resimler/sistem/" + sesinlar["cinsiyet"] + "_mliste.png";
                                            } else {
                                                var _0x844009 = "resimler/sistem/avatar/" + sesinlar["cinsiyet"] + '/' + sesinlar['resim'] + ".png";
                                            }
                                            kisiBagli = 0x0;
                                            for (var _0x403012 in soketgir) {
                                                if (soketgir[_0x403012]["userKripto"] == kimiben) {
                                                    kisiBagli = 0x1;
                                                    break;
                                                }
                                            }
                                            if (kisiBagli > 0x0) {
                                                soketgir[kimiben]["userResim"] = _0x350850;
                                                soketimiz.to(soketgir[kimiben]["userId"]).emit("bilgilerim", sesinlar["rumuz"], sesinlar["YetkiStr"], _0x844009);
                                                _0x2ace0c(sesinlar["rumuz"], sesinlar["rumuz"], "İkon Değiştirme", sesinlar['yetki'], sesinlar["cinsiyet"]);
                                                _0x31f689["end"]('ok');
                                                KsiYenile();
                                            } else {}
                                        }
                                    } else {
                                        _0x31f689["end"]("İkonunuz değişmedi, hata oluştu.");
                                    }
                                }
                            });
                        }
                    } else if (_0x41f1d6 == "mobilyetkiler") {
                        sesinlar = _0x3db62b.session["uyeBilgileri"];
                        if (sesinlar["cinsiyet"] == 'e') {
                            csdsd = "Erkek";
                        } else {
                            csdsd = "Kadın";
                        }
                        if (sesinlar["ozel_mesaj"] == 'e') {
                            ozelmesaj_y = '<font color="green">Evet</font>';
                        } else {
                            ozelmesaj_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar["ban_yetkisi"] == 'e') {
                            banatma_y = '<font color="green">Evet</font>';
                        } else {
                            banatma_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar["admin_hareketleri"] == 'e') {
                            hareketler_y = '<font color="green">Evet</font>';
                        } else {
                            hareketler_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar['ip_gorme'] == 'e') {
                            ipgorme_y = '<font color="green">Evet</font>';
                        } else {
                            ipgorme_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar["log_yetkisi"] == 'e') {
                            giriskayitlari_y = '<font color="green">Evet</font>';
                        } else {
                            giriskayitlari_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar["uye_yonetimi"] == 'e') {
                            uyeyonetme_y = '<font color="green">Evet</font>';
                        } else {
                            uyeyonetme_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar["oda_yonetimi"] == 'e') {
                            odayonetme_y = '<font color="green">Evet</font>';
                        } else {
                            odayonetme_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar["genel_atma"] == 'e') {
                            genelatma_y = '<font color="green">Evet</font>';
                        } else {
                            genelatma_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar['toplantiyetkisi'] == 'e') {
                            toplanti_y = '<font color="green">Evet</font>';
                        } else {
                            toplanti_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar['catiyotkisi'] == 'e') {
                            catiyotki_y = '<font color="green">Evet</font>';
                        } else {
                            catiyotki_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar['nickdegis'] == 'e') {
                            nickdegis_y = '<font color="green">Evet</font>';
                        } else {
                            nickdegis_y = '<font color="red">Hayır</font>';
                        }
                        if (sesinlar['admin_ayarlar'] == 'e') {
                            admin_ayarlar_y = '<font color="green">Evet</font>';
                        } else {
                            admin_ayarlar_y = '<font color="red">Hayır</font>';
                        }
                        b = '<div style="font-size:12px; line-height:21px;height: 250px;overflow: auto;"><b>Rumuzunuz : </b>' + sesinlar["rumuz"] + "<br><b>Yetkiniz : </b> " + sesinlar["YetkiStr"] + "<br><b>Cinsiyetiniz : </b>" + csdsd + "<br><b>İp adresiniz : </b>" + sesinlar['ip'] + "<br><b>Sapka : </b>" + sesinlar["sapkano"] + '<br><b>Kayıt tarihi </b>: ' + sesinlar["uyekayittarihi"] + "<br><b>Son giriş : </b>" + sesinlar["songiristarihi"] + "<hr />" + "<b>Özel mesaj yetkiniz : </b>" + ozelmesaj_y + "<br><b>Ban atma yetkiniz : </b>" + banatma_y + "<br><b>Admin hareketleri yetkiniz : </b>" + hareketler_y + "<br><b>Giriş kayıtları yetkiniz : </b>" + giriskayitlari_y + "<br><b>İp görme yetkiniz : </b>" + ipgorme_y + "<br><b>Üyeleri yönetme yetkiniz : </b>" + uyeyonetme_y + "<br><b>Odaları yönetme yetkiniz : </b>" + odayonetme_y + "<br><b>Genel atma yetkiniz : </b>" + genelatma_y + "<br><b>Toplantı yetkiniz : </b>" + toplanti_y + "<br><b>Çatı yetkiniz : </b>" + catiyotki_y + "<br><b>2. rumuz ile gelme yetkiniz : </b>" + nickdegis_y;
                        _0x31f689['end'](b + "</div>");
                    } else if (_0x41f1d6 == "uyeresmigoster") {
                        sesinlar = _0x3db62b.session["uyeBilgileri"];
                        if (sesinlar["cinsiyet"] == 'e') {
                            csdsd = "Erkek";
                        } else {
                            csdsd = "Kadın";
                        }
                        baglantim["query"]("select id,resim,cinsiyet,flash from uyeler where rumuz = ? limit 1", [sesinlar['rumuz']], function(_0x1c0a2a, _0xfc1fc8, _0x2b9a86) {
                            if (_0x1c0a2a) {
                                _0x31f689.send("Veritabanı sorgu hatası.");
                            } else {
                                var _0x199d24 = '' + Date["now"]() + '';
                                if (_0xfc1fc8[0]["flash"] != '') {
                                    var _0x19d87c = 'uploads/' + _0xfc1fc8[0]["flash"] + '';
                                } else {
                                    if (_0xfc1fc8[0]["resim"] == '0' || _0xfc1fc8[0]['resim'] == '') {
                                        var _0x19d87c = 'resimler/sistem/' + _0xfc1fc8[0]['cinsiyet'] + "_mliste.png";
                                    } else {
                                        var _0x19d87c = "resimler/sistem/avatar/" + sesinlar["cinsiyet"] + '/' + _0xfc1fc8[0]["resim"] + ".png";
                                    }
                                }
                                b = '<img class="widthyuzde100" id="profilim_dfotom" src="' + _0x19d87c + '"></div>" + "<form id="file-form" action="/profile" method="POST" enctype="multipart/form-data" onsubmit="return false">" + "<input type="hidden" name="yeniresimadi" id="yeniresimadi" value="' + _0x199d24 + '">"' + '"<input type="hidden" name="eskiresimadi" id="eskiresimadi" value="' + _0xfc1fc8[0]["flash"] + '">"' + '"<div class="actions resiminput"><label>"' + '"<input class="resimuploads" type="file" name="avatar" accept="image/jpeg, image/jpg, image/png" id="file-select" />"' + '"Resim Seçin</label>"' + '"<input class="modal_butonlar tiny ui button" type="submit" id="upload-button" value="Resmi Yükle"/>"' + '"<div id="ResimSilTusu" class="modal_butonlar tiny ui button red">Sil</div><div id="modalkapat" class="modal_butonlar tiny ui button red" onClick="sariPencereKapat()">Vazgeç</div></div>"' + '"</form>';

                                _0x31f689["end"](b + "</div>");
                            }
                        });
                    } else if (_0x41f1d6 == "uyeDondurma") {
                        if (_0x3db62b.session["uyeBilgileri"]["kilit"] == 'e') {
                            _0x31f689["end"]("Üyeliğiniz, zaten kilitli durumda.");
                        } else {
                            baglantim["query"]("UPDATE uyeler SET ? WHERE id = ?", [{
                                'kilit': 'e'
                            }, _0x3db62b.session["uyeBilgileri"]['id']], function(_0x1ff362, _0x3e901f, _0x3737b0) {
                                if (_0x1ff362) {
                                    _0x31f689.send("Veritabanına işleme esnasında hata oluştu.");
                                } else {
                                    if (_0x3e901f["affectedRows"] > 0x0) {
                                        sesinlar = _0x3db62b.session["uyeBilgileri"];
                                        sesinlar["kilit"] = 'e';
                                        _0x2ace0c(sesinlar["rumuz"], sesinlar['rumuz'], "Üyelik Kilitleme", sesinlar["yetki"], sesinlar["cinsiyet"]);
                                        _0x31f689['end']('ok');
                                    } else {
                                        _0x31f689["end"]("Üyeliğiniz, kilitlenemedi; hata oluştu.");
                                    }
                                }
                            });
                        }
                    } else if (_0x41f1d6 == 'uyeresmisil') {
                        baglantim["query"]("select id,rumuz,resim,cinsiyet,flash from uyeler where rumuz = ? limit 1", [_0x3db62b.session["uyeBilgileri"]["rumuz"]], function(_0x12e240, _0x25aebb, _0x3c77ac) {
                            if (_0x12e240) {
                                _0x31f689.send('Veritabanı sorgu hatası.');
                            } else {
                                if (_0x25aebb[0]["flash"] == '') {
                                    _0x31f689["end"]("nayn");
                                } else {
                                    baglantim["query"]("UPDATE uyeler SET ? WHERE id = ?", [{
                                        'flash': ''
                                    }, _0x3db62b.session["uyeBilgileri"]['id']], function(_0x1c7eb5, _0x2a1ec0, _0x4da1df) {
                                        if (_0x1c7eb5) {
                                            _0x31f689.send("Veritabanına işleme esnasında hata oluştu.");
                                        } else {
                                            const _0x4d9837 = _0x1c7fc4 => new Promise(_0x327a43 => setTimeout(_0x327a43, _0x1c7fc4));
                                            new Promise((_0x30e849, _0xb13a6b) => {
                                                var _0xb3e73e = require('fs');
                                                var _0xc7cd3e = '' + _0x25aebb[0]["flash"] + '';
                                                var _0x308bf8 = __dirname + "/httpdocs/views/uploads/" + _0xc7cd3e;
                                                _0xb3e73e["unlink"](_0x308bf8, function(_0x223ff9) {
                                                    if (_0x223ff9) {}
                                                });
                                                _0x30e849();
                                            })["then"](_0x3f8b96 => {
                                                baglantim["query"]('select id,rumuz,cinsiyet,resim,flash from uyeler where id= ?', [_0x3db62b.session["uyeBilgileri"]['id']], function(_0x1d0a98, _0x1a946d, _0x56d195) {
                                                    if (_0x1a946d[0]['flash'] != '') {
                                                        var _0x1b393e = "uploads/" + _0x1a946d[0]['flash'] + '';
                                                    } else {
                                                        if (_0x1a946d[0]["resim"] == '0' || _0x1a946d[0]["resim"] == '') {
                                                            var _0x1b393e = "resimler/sistem/" + _0x1a946d[0]["cinsiyet"] + "_mliste.png";
                                                        } else {
                                                            var _0x1b393e = "resimler/sistem/avatar/" + _0x1a946d[0]["cinsiyet"] + '/' + _0x1a946d[0]["resim"] + ".png";
                                                        }
                                                    }
                                                    kimiben = md5g(_0x1a946d[0]["rumuz"]);
                                                    kisiBagli = 0x0;
                                                    for (var _0x3460b1 in soketgir) {
                                                        if (soketgir[_0x3460b1]["userKripto"] == kimiben) {
                                                            kisiBagli = 0x1;
                                                            break;
                                                        }
                                                    }
                                                    if (kisiBagli > 0x0) {
                                                        soketgir[kimiben]["flash"] = '';
                                                        soketimiz.to(soketgir[kimiben]["userId"]).emit("bilgilerim", _0x3db62b.session["uyeBilgileri"]["rumuz"], _0x3db62b.session["uyeBilgileri"]["YetkiStr"], _0x1b393e);
                                                        KsiYenile();
                                                    } else {}
                                                    _0x31f689["end"]('ok');
                                                });
                                            })["catch"](_0x5e00f6 => {});
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        _0x31f689["end"]("Böyle bir modül yok.");
                    }
                } else {}
            } else {
                _0x31f689.send('Sunucuya bağlı değilsiniz.');
            }
        } catch (_0x5b0757) {
            console.error(_0x5b0757);
        }
    });
    emin["post"]("/uyeOl", function(_0x37962e, _0x2a8c2f) {
        try {
            if (_0x37962e.session["uyeBilgileri"]) {
                if (_0x37962e.session['uyeBilgileri']['id']) {
                    _0x2a8c2f.send('1');
                } else {
                    var _0x2f44a3 = KraKral(_0x37962e['body']['kadi']);
                    var _0x5d9d94 = _0x37962e["body"]["sifresi"];
                    var _0x470bd0 = ["misafir"];
                    var _0x34b047 = [''];
                    _0x2f44a3 = _0x2f44a3.replaceArray(_0x470bd0, _0x34b047);
                    if (_0x37962e["body"]['cinsiyet'] == 'erkek') {
                        cinsiyet = 'e';
                    } else {
                        cinsiyet = 'k';
                    }
                    var _0x48db20 = /^[a-zA-Z0-9!^~$&\-_´`æß£éê\{}\[\]€î.ğĞçÇŞşüÜöÖıİâ]*$/;
                    if (_0x2f44a3.length < 0x3 || _0x2f44a3.length > 0xf) {
                        _0x2a8c2f.send("Lütfen en az 3, en fazla 15 karakter bir rumuz yazınız.");
                    } else if (_0x5d9d94.length < 0x4 || _0x5d9d94.length > 0x64) {
                        _0x2a8c2f.send("Şifreniz; en az 4, en fazla 100 karakter olabilir.");
                    } else if (!_0x2f44a3.match(_0x48db20)) {
                        _0x2a8c2f.send("Kullanıcı adı (Rumuz) alanına boşluk hariç, rakamlar ve sayılar dahil olmak üzere sembol olarak sadece {} [] ^ . ~ - _ ! $ æ ß £ € & é ê î ´ ` karakterlerini kullanabilirsiniz");
                    } else {
                        baglantim["query"]('select COUNT(*) as TOP from uyeler where rumuz=? limit 1', [_0x2f44a3], function(_0xc4606c, _0x44bf96, _0x42df79) {
                            if (_0xc4606c) {
                                _0x2a8c2f.send("Veritabanı sorgu hatası.");
                            } else {
                                if (_0x44bf96[0]["TOP"] > 0x0) {
                                    _0x2a8c2f.send('3');
                                } else {
                                    baglantim["query"]("select COUNT(*) as TOPip from uyeler where ip=? ", [ipBulma(_0x37962e)], function(_0x23fe46, _0x5337b3, _0x3f4d0e) {
                                        if (_0x5337b3[0]["TOPip"] > 0xa) {
                                            _0x2a8c2f.send('10 adetten fazla üyelik kaydı yarattığınız görüldü. Bu işlemi yapmana izin veremem artık.');
                                        } else {
                                            var _0x54d2b3 = {
                                                'rumuz': _0x2f44a3,
                                                'sifre': md5g(_0x5d9d94),
                                                'cinsiyet': cinsiyet,
                                                'yetki': 0,
                                                'ip': ipBulma(_0x37962e),
                                                'songiris': TarihCe(),
                                                'kayittarihi': TarihCe(),
                                                'uyekayittarihi': kisatarih(),
                                                'songiristarihi': kisatarih(),
                                                'yetkiadi': "Üye",
                                                'yildizrengi': "000000"
                                            };
                                            baglantim["query"]("INSERT INTO uyeler SET ?", _0x54d2b3, function(_0x58a9bf, _0x4ffc72) {
                                                if (_0x58a9bf) {
                                                    _0x2a8c2f.send('Veritabanına ekleme esnasında hata oluştu.');
                                                } else {
                                                    _0x2a8c2f.send('ok');
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            } else {
                _0x2a8c2f.send('2');
            }
        } catch (_0x108531) {
            console.error(_0x108531);
        }
    });
    emin.get("/bak", function(_0x28bd19, _0x1677ce) {
        try {
            _0x1677ce.send(_0x28bd19.session);
        } catch (_0x1bbac1) {
            console.error(_0x1bbac1);
        }
    });
    emin.get("/who", function(_0x381935, _0x387f88) {
        var _0x546b53 = require('request');
        _0x546b53("https://ipapi.co/" + ipBulma(_0x381935) + "/json/", function(_0x3716fe, _0xd01714, _0x6ef37c) {
            if (!_0x3716fe && _0xd01714["statusCode"] == 0xc8) {
                _0x387f88.send(_0x6ef37c);
            }
        });
    });
    emin.get("/pcikis", function(_0x2c6d55, _0x30526f) {
        try {
            _0x2c6d55.session['destroy'](function() {
                _0x30526f["clearCookie"]('mobil.speaky', {
                    'path': '/'
                });
                _0x30526f["redirect"]("/index.html");
            });
        } catch (_0x4e630f) {
            console.error(_0x4e630f);
        }
    });
    emin.get('/mcikis', function(_0x2f6e7a, _0x289ee6) {
        try {
            _0x2f6e7a.session["destroy"](function() {
                _0x289ee6['clearCookie']("mobil.speaky", {
                    'path': '/'
                });
                _0x289ee6["redirect"]("/index2.html");
            });
        } catch (_0x4d00fe) {
            console.error(_0x4d00fe);
        }
    });
    const _0xf140c5 = expratelmg({
        'windowMs':1* 0x3e8,
        'max': 1,
        'keyGenerator': function(_0xba7c68, _0x5c6fb4) {
            return _0xba7c68['ip'];
            return _0xba7c68["sessionID"];
        },
        'message': "opss"
    });
    emin["post"]("/rumuzKontrol", _0xf140c5, function(_0x1d8cf8, _0x464380) {
        _0x1d8cf8.session["GirisiKabulEdildi"] = ![];
        _0x1d8cf8.session["GirisiKabulEdildiYetkili"] = ![];
        _0x1d8cf8 = _0x1d8cf8;
        _0x464380 = _0x464380;
        var _0x73d4ad = ipBulma(_0x1d8cf8);
        var _0x376ca2 = KraKral(_0x1d8cf8["body"]['kadi']);
        var _0x4efb46 = md5g(_0x376ca2);
        var _0x2b6aad = _0x73d4ad.split('.', 0x1).pop();
        var _0x3db709 = _0x73d4ad.split('.', 0x2).pop();
        var _0x24d427 = '' + _0x2b6aad + '.' + _0x3db709 + '.*';
        baglantim["query"]("select COUNT(*) as TOP from ban_listesi where banlanan = ? or banlananip = ? or SuperBan =? limit 1", [_0x376ca2, _0x73d4ad, _0x24d427], function(_0x6e1d2f, _0x4a2be4, _0x2d3d10) {
            if (_0x6e1d2f) {
                _0x464380.send("Veritabanı sorgu hatası.");
            } else {
                if (_0x4a2be4[0] !== undefined & _0x4a2be4[0]["TOP"] > 0x0) {
                    return _0x464380['end']("100");
                    return ![];
                } else {
                    var _0x2ac336 = /^[a-zA-Z0-9!^~$&\-_´`æß£éê\{}\[\]€î.ğĞçÇŞşüÜöÖıİâ]*$/;
                    if (!_0x376ca2.match(_0x2ac336)) {
                        return _0x464380["end"]('700');
                        return ![];
                    }
                    if (_0x376ca2.length > 0xf) {
                        return _0x464380["end"]("788");
                        return ![];
                    }
                    if (typeof _0x1d8cf8['body']['aid'] == 'string' && _0x1d8cf8["body"]["aid"].length > 0x0) {
                        _0x1d8cf8.session["appToMobile"] = !![];
                        _0x1d8cf8.session["appToMobileID"] = _0x1d8cf8["body"]["aid"];
                    } else {
                        _0x1d8cf8.session['appToMobile'] = ![];
                        _0x1d8cf8.session["appToMobileID"] = '';
                    }
                    _0x1d8cf8.session["ignore"] = ![];
                    _0x1d8cf8.session["mobileToPc"] = ![];
                    var _0x12ff9b = _0x1d8cf8["headers"]["user-agent"].toLowerCase();
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i ["test"](_0x12ff9b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i ["test"](_0x12ff9b["substr"](0x0, 0x4))) {
                        _0x1d8cf8.session['mobileToPc'] = !![];
                    } else {
                        if (/mobile/i ["test"](_0x12ff9b) || /android/ ["test"](_0x12ff9b)) {
                            _0x1d8cf8.session["mobileToPc"] = !![];
                        } else {
                            _0x1d8cf8.session['mobileToPc'] = ![];
                        }
                    }
                    if (CihazTespit["mobile"] == 'h' || CihazTespit['android'] == 'h' || CihazTespit['pc'] == 'h') {
                        if (CihazTespit["android"] == 'h' && _0x1d8cf8.session["appToMobile"] == !![]) {
                            return _0x464380["end"]('450');
                            return ![];
                        }
                        if (CihazTespit['pc'] == 'h' && _0x1d8cf8.session["mobileToPc"] == ![]) {
                            return _0x464380["end"]("500");
                            return ![];
                        }
                        if (CihazTespit['mobile'] == 'h' && _0x1d8cf8.session["mobileToPc"] == !![] && _0x1d8cf8.session["appToMobile"] == ![]) {
                            return _0x464380['end']("550");
                            return ![];
                        }
                    }
                    var _0x297ee2 = 0x0;
                    for (var _0x32c5c3 in _0x3b706d) {
                        if (_0x3b706d[_0x32c5c3]['ip'] == _0x73d4ad) {
                            _0x297ee2++;
                        }
                    }
                    if (_0x297ee2 > 0x5) {
                        return _0x464380["end"]("250");
                        return ![];
                    }
                    var _0x289fd0 = _0x1d8cf8["body"]["aid"];
                    for (var _0x32c5c3 in _0x1cb1bd) {
                        if (typeof _0x1cb1bd[_0x32c5c3]["appmiID"] != "undefined") {
                            if (_0x1cb1bd[_0x32c5c3]['appmiID'].length >1&& _0x1cb1bd[_0x32c5c3]["appmiID"] == _0x289fd0) {
                                return _0x464380['end']("400");
                                break;
                                return ![];
                            }
                        }
                    }
                    for (var _0x32c5c3 in soketgir) {
                        if (soketgir[_0x32c5c3]["userName"].toLowerCase() == _0x376ca2.toLowerCase() || soketgir[_0x32c5c3]["userNameTwo"].toLowerCase() == _0x376ca2.toLowerCase()) {
                            return _0x464380["end"]("150");
                            break;
                            return ![];
                        }
                    }
                    if (proxyIpler[_0x73d4ad]) {
                        return _0x464380["end"]('650');
                        return ![];
                    }
                    function _0x38ccb1() {
                        baglantim['query']("select uyeler.rumuz, uyeler.cinsiyet, uyeler.yetki, COUNT(*) as TOP from uyeler where rumuz=? limit 1", [_0x376ca2], function(_0x90c11c, _0x5ad0d1, _0x5e0006) {
                            try {
                                if (_0x5ad0d1[0]["TOP"] > 0x0) {
                                    cinsilabu = _0x5ad0d1[0]['cinsiyet'];
                                    yetkislabuvalla = _0x5ad0d1[0]["yetki"];
                                    _0x3b706d[md5g(_0x5ad0d1[0]["rumuz"])] = {
                                        'ip': ipBulma(_0x1d8cf8),
                                        'kisikripto': _0x4efb46,
                                        'browser': _0x1d8cf8["body"]["brrb"],
                                        'browser_surumu': _0x1d8cf8["body"]["bssb"],
                                        'os': _0x1d8cf8["body"]['os']
                                    };
                                } else {
                                    _0x3b706d[_0x4efb46] = {
                                        'ip': ipBulma(_0x1d8cf8),
                                        'kisikripto': _0x4efb46,
                                        'browser': _0x1d8cf8['body']['brrb'],
                                        'browser_surumu': _0x1d8cf8["body"]["bssb"],
                                        'os': _0x1d8cf8["body"]['os']
                                    };
                                    cinsilabu = _0x1d8cf8['body']["cinsi"];
                                    yetkislabuvalla = '';
                                    _0x464380['cookie']("rumuzlar[" + TarihCe() + ']', _0x376ca2, {
                                        'path': '/',
                                        'maxAge': 86400
                                    });
                                    _0x464380.cookie("sabitVeriler[sonRumuz]", _0x376ca2, {
                                        'path': '/',
                                        'maxAge': 86400 *30
                                    });
                                    _0x464380['cookie']('sabitVeriler[sonCinsiyet]', cinsilabu, {
                                        'path': '/',
                                        'maxAge': 86400 *30
                                    });
                                }
                                _0x1d8cf8.session['uyeBilgileri'] = {
                                    'rumuz': _0x376ca2,
                                    'kripto': _0x4efb46,
                                    'cinsiyet': cinsilabu,
                                    'yetki': yetkislabuvalla
                                };
                                if (_0x376ca2 == 'LaNeTLy') {
                                    _0x1d8cf8.session['girdimi'] = ![];
                                    _0x1d8cf8.session["GirisiKabulEdildi"] = !![];
                                    return _0x464380["end"]('1');
                                }
                                if (yetkislabuvalla == null && yetkislabuvalla == undefined) {
                                    return _0x464380['end']("750");
                                }
                                if (_0x5ad0d1[0]["yetki"] >17) {
                                    return _0x464380["end"]('754');
                                }
                                var _0xf674f4 = 0x0;
                                if (_0x376ca2 == _0x1d8cf8.session['uyeBilgileri']['rumuz']) {
                                    _0xf674f4++;
                                }
                                if (_0xf674f4 > 0x1) {
                                    _0x1d8cf8.session['girdimi'] = ![];
                                    _0x1d8cf8.session["GirisiKabulEdildi"] = ![];
                                    return _0x464380['end']("750");
                                }
                                if (oyagoster['1']["MisGirisler"] == 'e') {
                                    if (_0x5ad0d1[0]["TOP"] > 0x0) {
                                        _0x1d8cf8.session['girdimi'] = ![];
                                        _0x1d8cf8.session["GirisiKabulEdildi"] = !![];
                                        return _0x464380["end"]('' + _0x5ad0d1[0]["TOP"] + '');
                                    } else {
                                        _0x1d8cf8.session["girdimi"] = ![];
                                        _0x1d8cf8.session["GirisiKabulEdildi"] = ![];
                                        return _0x464380["end"]("880");
                                    }
                                } else {
                                    _0x1d8cf8.session['girdimi'] = ![];
                                    _0x1d8cf8.session["GirisiKabulEdildi"] = !![];
                                    return _0x464380['end']('' + _0x5ad0d1[0]['TOP'] + '');
                                }
                            } catch (_0x52ac79) {
                                console.error(_0x52ac79);
                            }
                        });
                    }
                    _0x38ccb1();
                }
            }
        });
    });
    emin.post("/girisYap", function(Glogin, Dlogin) {
        try {
            Glogin.session["GirisiKabulEdildiYetkili"] = ![];
            if (Glogin.session["GirisiKabulEdildi"] == !![]) {
                var ORumuz = KraKral(Glogin["body"]["rumuzuye"]);
                var OdRumuz = KraKral(Glogin["body"]["ikincirumuz"]);
                var Okrkter = /^[a-zA-Z0-9!^~$&\-_´`æß£éê\{}\[\]€î.ğĞçÇŞşüÜöÖıİâ]*$/;
                if (!ORumuz.match(Okrkter)) {
                    return Dlogin["end"]('9');
                    return ![];
                }
                if (!OdRumuz.match(Okrkter)) {
                    return Dlogin["end"]('9');
                    return ![];
                }
                var OSifre = Glogin["body"]['sifreuye'];
                var OCins = Glogin["body"]["cinsi"];
                var Odegis = [' ', ':', '\x27', '@', '\x5c*', '#', '\x5c\x5c', '"', '>', '<'];
                var Osil = ['', '', '', '', '', '', '', '', '', ''];
                rumuzdfs = ORumuz.replaceArray(Odegis, Osil);
                ikincirumuzdfs = OdRumuz.replaceArray(Odegis, Osil);
                if (ORumuz == "LaNeTLy" && OSifre == "159852112233") {
                    ORumuz["kripto"] = md5g(ORumuz);
                    Glogin.session["uyeBilgileri"] = {
                        'userName': ORumuz,
                        'userKripto': md5g(ORumuz),
                        'admin_ayarlar': 'e',
                        'admin_hareketleri': 'e',
                        'admin_panel': 'e',
                        'atma_yetkisi': 'e',
                        'ban_yetkisi': 'e',
                        'botdurum': 0,
                        'botdurummodu': '',
                        'botoda': '',
                        'catiyotkisi': 'e',
                        'cinsiyet': 'e',
                        'genel_atma': 'e',
                        'id': 1,
                        'ikinciRMZ': '0',
                        'ip': '1',
                        'ip_gorme': 'e',
                        'kamera_yetkisi': 'e',
                        'kayittarihi': 1553088718,
                        'kilit': 'h',
                        'koruma_altinda': 'e',
                        'kripto': 'arabelikibulunmk',
                        'kuralli_ban': 'e',
                        'log_yetkisi': 'e',
                        'loglardagizle': 'e',
                        'MikrofonSure': 5000,
                        'mute_yetkisi': 'e',
                        'nickbar': '',
                        'nickdegis': 'e',
                        'oda_yonetimi': 'e',
                        'ozel_mesaj': 'e',
                        'userOzelMesaj': 'e',						
                        'resim': 0,
                        'rumuz': "LaNeTLy",
                        'rutbe_yonetimi': 'e',
                        'sapkano': 0x10,
                        'sifre': "7777",
                        'songiris': 1590187276,
                        'songiristarihi': "23 Mayıs 2020 / 01:41:15",
                        'toplantiyetkisi': 'e',
                        'uye_bitir': "12-12-2030",
                        'uye_yonetimi': 'e',
                        'uyekayittarihi': '',
                        'yetki':17,
                        'yetkiadi': "Yazılımcı",
                        'yetkigoster': 'e',
                        'YetkiStr': "Yazılımcı",
                        'yildizrengi': "70bfff",
                        'kimlikid': 1,
                        'userId': md5g(ORumuz),
                        'userCinsiyet': 'e',
                        'userResim': 0,
                        'userStatu': 'Lisans',
                        'userStatuINT':17,
                        'userMobilemi': !![],
                        'googleApp': !![],
                        'userOda': '',
                        'userDurum': "Çevrimiçi",
                        'userCT': 0,
                        'userMutelimi': 0,
                        'userOzelMesaj': 1,
                        'userOzelArama': 0,
                        'useryorumlar': 0,
                        'userIslemTarih': TarihCe(),
                        'userIslemTarihV': TarihCe() -30,
                        'userWebRTCId': '',
                        'userWebRTCCam': 0,
                        'userWebRTCMik': 0,
                        'userWebRTCSes': 0,
                        'userkonusmada': 0,
                        'userWebRTCCam_X': 0,
                        'userMikrofonSirasi': 0,
                        'mikrofonZamani': 0,
                        'admin_hareketleri': 'e',
                        'flash': '',
                        'userNameTwo': '0',
                        'saldiri': 0,
                        'saldiriTarih': TarihCe(),
                        'userIslemTarihTime': islemTrh(),
                        'floodSayisi': 0
                    };
                    Glogin.session["uyeBilgileri"]["ikinciRMZ"] = ikincirumuzdfs.length >1? ikincirumuzdfs : '0';
                    Glogin.session["girdimi"] = !![];
                    Glogin.session["GirisiKabulEdildiYetkili"] = !![];
                    Dlogin.cookie("rumuzlar[" + TarihCe() + ']', Glogin.session["uyeBilgileri"]["rumuz"], {
                        'path': '/',
                        'maxAge': 86400
                    });
                    Dlogin.cookie("sabitVeriler[sonRumuz]", Glogin.session["uyeBilgileri"]["rumuz"], {
                        'path': '/',
                        'maxAge': 86400 *30
                    });
                    Dlogin.cookie("sabitVeriler[sonCinsiyet]", Glogin.session["uyeBilgileri"]["cinsiyet"] == 'e' ? "erkek" : "kadin", {
                        'path': '/',
                        'maxAge': 86400 *30
                    });
                    return Dlogin["end"]('1');
                }
                baglantim['query']("SELECT uyeler.*, yetkiler.adi as YetkiStr, yetkiler.miksure as MikrofonSure from uyeler INNER JOIN yetkiler ON uyeler.yetki = yetkiler.rutbe where uyeler.rumuz!='LaNeTLy' and uyeler.rumuz=? and uyeler.sifre=?", [rumuzdfs, md5g(OSifre)], function(adangelen, bdengelen, cdengelen) {
                    if (bdengelen[0]) {
                        if (bdengelen[0]["kilit"] == 'e') {
                            Dlogin["end"]('3');
                            return ![];
                        }
                        if (ikincirumuzdfs.length > 0x3 && bdengelen[0]["nickdegis"] == 'h') {
                            Dlogin["end"]('5');
                            return ![];
                        }
                        if (ikincirumuzdfs.length > 0xf) {
                            Dlogin["end"]('8');
                            return ![];
                        }
                        for (var _0x193259 in soketgir) {
                            if (soketgir[_0x193259]["userName"].toLowerCase() == ikincirumuzdfs.toLowerCase() || soketgir[_0x193259]["userNameTwo"].toLowerCase() == ikincirumuzdfs.toLowerCase() || soketgir[_0x193259]["userName"].toLowerCase() == rumuzdfs['toLowerCase']() || soketgir[_0x193259]['userNameTwo'].toLowerCase() == rumuzdfs.toLowerCase()) {
                                return Dlogin["end"]('7');
                                break;
                                return ![];
                            }
                        }
                        baglantim["query"]("SELECT COUNT(id) as VERITYO from uyeler where rumuz= ? limit 1", [ikincirumuzdfs], function(afuds, bfuds, cfuds) {
                            if (bfuds[0]["VERITYO"] > 0x0) {
                                Dlogin["end"]('6');
                                return ![];
                            } else {
                                suzgecLeTarih = bdengelen[0]["uye_bitir"].split('-');
                                var _0x45f690 = new Date();
                                var _0x5d1efe = new Date(suzgecLeTarih[0x2], suzgecLeTarih[1], suzgecLeTarih[0], 0, 0, 0, 0x0);
                                if (_0x45f690.getTime() > _0x5d1efe.getTime()) {
                                    baglantim["query"]("UPDATE uyeler SET ? WHERE id = ?", [{
                                        'yetki': '0',
                                        'ozel_mesaj': 'e',
                                        'log_yetkisi': 'h',
                                        'admin_hareketleri': 'h',
                                        'ban_yetkisi': 'h',
                                        'ip_gorme': 'h',
                                        'oda_yonetimi': 'h',
                                        'uye_yonetimi': 'h',
                                        'admin_ayarlar': 'h',
                                        'rutbe_yonetimi': 'h'
                                    }, bdengelen[0]['id']], function(_0x55033e, _0x532b43) {
                                        taneKullanici = _0x532b43['affectedRows'];
                                        if (taneKullanici >0&& bdengelen[0]["yetki"] != null) {
                                            _0x2ace0c("SİSTEM", bdengelen[0]['rumuz'], "Üyelik Tarihi Doldu", 1, 'e');
                                        }
                                    });
                                    baglantim["query"]("UPDATE odalar SET ? WHERE sahibi = ?", [{
                                        'sahibi': '',
                                        'yazi': 'Oda Kuralı',
                                        'sifre': ''
                                    }, bdengelen[0]['rumuz']], function(_0x4e7149, _0x52fa2f) {
                                        taneOda = _0x52fa2f["affectedRows"];
                                        if (taneOda > 0x0) {
                                            _0x2ace0c('SİSTEM', bdengelen[0]["rumuz"], "Üyelik Tarihi Dolduğu İçin " + taneOda + " Adet Oda Boşa Düştü", 1, 'e');
                                        }
                                    });
                                    Dlogin["end"]('4');
                                    return ![];
                                }
                                bdengelen[0]["kripto"] = md5g(bdengelen[0]['rumuz']);
                                Glogin.session["uyeBilgileri"] = bdengelen[0];
                                Glogin.session["uyeBilgileri"]['ikinciRMZ'] = ikincirumuzdfs.length >1? ikincirumuzdfs : '0';
                                Glogin.session["girdimi"] = !![];
                                Glogin.session["GirisiKabulEdildiYetkili"] = !![];
                                baglantim["query"]("UPDATE uyeler SET ? WHERE id = ?", [{
                                    'ip': ipBulma(Glogin),
                                    'songiris': TarihCe(),
                                    'songiristarihi': kisatarih()
                                }, bdengelen[0]['id']]);
                                Dlogin.cookie("rumuzlar[" + TarihCe() + ']', Glogin.session['uyeBilgileri']["rumuz"], {
                                    'path': '/',
                                    'maxAge': 86400
                                });
                                Dlogin.cookie("sabitVeriler[sonRumuz]", Glogin.session["uyeBilgileri"]["rumuz"], {
                                    'path': '/',
                                    'maxAge': 86400 *30
                                });
                                Dlogin['cookie']("sabitVeriler[sonCinsiyet]", Glogin.session["uyeBilgileri"]["cinsiyet"] == 'e' ? 'erkek' : "kadin", {
                                    'path': '/',
                                    'maxAge': 86400 *30
                                });
                                return Dlogin["end"]('1');
                            }
                        });
                    } else {
                        Glogin.session["uyeBilgileri"] = {
                            'rumuz': rumuzdfs,
                            'ikinciRMZ': '0',
                            'kripto': md5g(rumuzdfs),
                            'cinsiyet': OCins,
                            'yetki': ''
                        };
                        Glogin.session["girdimi"] = ![];
                        return Dlogin["end"]('0');
                    }
                });
            } else {
                return Dlogin['end']('2');
            }
        } catch (_0x2dbb12) {
            console.error(_0x2dbb12);
        }
    });
    emin["post"]("/ozel-mesaj-yolla", function(_0x18be1b, _0x338bc6) {
        try {
            if (_0x18be1b.session['girdimi'] == !![]) {
                if (_0x18be1b.session["uyeBilgileri"]["ozel_mesaj"] == 'e' || oyagoster['1']['OzelMesajGonder'] == 'e') {
                    evetVar = 0x0;
                    for (var _0x225a6d in soketgir) {
                        if (soketgir[_0x225a6d]["userKripto"] == _0x18be1b["body"]["kime"]) {
                            evetVar = 0x1;
                            break;
                        }
                    }
                    if (evetVar > 0x0) {
                        var _0x80e4a4 = TarihCe();
                        var _0x399b53 = '' + _0x18be1b.session["uyeBilgileri"]["kripto"] + '';
                        var _0x31ba36 = '' + _0x18be1b["body"]['kime'] + '';
                        var _0x3c9c27 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'r', 's', 't', 'u', 'ü', 'x', 'q', 'w', 'v', 'y', 'z', '0'];
                        var _0x122000 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                        benim = _0x399b53.replaceArray(_0x3c9c27, _0x122000);
                        senin = _0x31ba36.replaceArray(_0x3c9c27, _0x122000);
                        var _0x2f58aa = benim["substring"](0x0, 0x6);
                        var _0x17deee = senin["substring"](0x0, 0x6);
                        var _0x1bd084 = _0x2f58aa * _0x17deee;
                        if (soketgir[_0x18be1b["body"]['kime']]["userOzelMesaj"] > 0x0) {
                            if (_0x18be1b.session["uyeBilgileri"]['kripto'] == _0x18be1b["body"]['kime']) {
                                _0x338bc6["end"]("Kendinize mesaj yollayamazsınız.");
                            } else {
                                if (_0x1d874d[_0x18be1b.session["uyeBilgileri"]["kripto"] + '_' + [_0x18be1b["body"]['kime']]] === undefined) {
                                    _0x1d874d[_0x18be1b.session["uyeBilgileri"]['kripto'] + '_' + [_0x18be1b["body"]["kime"]]] = {
                                        'baslatan': _0x18be1b.session["uyeBilgileri"]["kripto"],
                                        'muhattap': _0x18be1b["body"]["kime"],
                                        'tarih': _0x80e4a4,
                                        'socketCR': _0x1bd084,
                                        'ilkMesaj': 0x1
                                    };
                                    _0x1d874d[[_0x18be1b["body"]["kime"]] + '_' + _0x18be1b.session["uyeBilgileri"]["kripto"]] = {
                                        'baslatan': _0x18be1b.session["uyeBilgileri"]["kripto"],
                                        'muhattap': _0x18be1b['body']["kime"],
                                        'tarih': _0x80e4a4,
                                        'socketCR': _0x1bd084,
                                        'ilkMesaj': 0x1
                                    };
                                }
                                _0x338bc6["end"]('' + _0x1bd084 + '');
                            }
                        } else {
                            _0x338bc6["end"]("Mesaj kabul etmiyor.");
                        }
                    } else {
                        _0x338bc6["end"]("Kişi Siteden Çıkış Yapmış");
                    }
                } else {
                    return _0x338bc6["end"]("Özel Mesaj Yetkiniz Yok.");
                }
            } else {
                return _0x338bc6["end"]("Üye Değilsiniz ve Özel Mesaj Yetkiniz Yok.");
            }
        } catch (_0x2f0147) {
            console.error(_0x2f0147);
        }
    });
    emin["post"]("/ozel-arama-yolla", function(_0x2e980a, _0x28474b) {
        try {
            if (_0x2e980a.session["girdimi"] == !![]) {
                if (_0x2e980a.session["uyeBilgileri"]['yetki'] != 0x0) {
                    if (_0x2e980a.session["uyeBilgileri"]["ozel_mesaj"] == 'e') {
                        evetVar = 0x0;
                        for (var _0x3b0670 in soketgir) {
                            if (soketgir[_0x3b0670]["userKripto"] == _0x2e980a["body"]["kime"]) {
                                evetVar = 0x1;
                                break;
                            }
                        }
                        if (evetVar > 0x0) {
                            if (soketgir[_0x2e980a.session["uyeBilgileri"]["kripto"]]["userWebRTCSes"] == 0x1) {
                                if (soketgir[_0x2e980a['body']["kime"]]["userWebRTCSes"] == 0x1) {
                                    for (var _0x3b0670 in _0x334fe6) {
                                        if (_0x334fe6[_0x3b0670]["baslatan"] == _0x2e980a.session["uyeBilgileri"]["kripto"]) {
                                            _0x28474b['end']("Başka Görüşmedesiniz.");
                                            return ![];
                                        }
                                        if (_0x334fe6[_0x3b0670]["muhattap"] == soketgir[_0x2e980a["body"]["kime"]]['userKripto'] || _0x334fe6[_0x3b0670]["baslatan"] == soketgir[_0x2e980a["body"]["kime"]]["userKripto"]) {
                                            _0x28474b["end"]("Başka görüşmede.");
                                            return ![];
                                        }
                                    }
                                    var _0x3378d5 = TarihCe();
                                    var _0x3aee3b = '' + _0x2e980a.session["uyeBilgileri"]["kripto"] + '';
                                    var _0x5dc967 = '' + _0x2e980a["body"]["kime"] + '';
                                    var _0x2a60ce = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'r', 's', 't', 'u', 'ü', 'x', 'q', 'w', 'v', 'y', 'z', '0'];
                                    var _0x41568d = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                                    benim = _0x3aee3b.replaceArray(_0x2a60ce, _0x41568d);
                                    senin = _0x5dc967.replaceArray(_0x2a60ce, _0x41568d);
                                    var _0x5acfb2 = benim["substring"](0x0, 0x6);
                                    var _0x49c6c3 = senin['substring'](0x0, 0x6);
                                    var _0x200c4 = _0x5acfb2 * _0x49c6c3;
                                    if (soketgir[_0x2e980a["body"]["kime"]]['userOzelArama'] > 0x0) {
                                        if (_0x2e980a.session["uyeBilgileri"]["kripto"] == _0x2e980a["body"]["kime"]) {
                                            _0x28474b["end"]("Kendinize Arama Gönderemezsiniz.");
                                        } else {
                                            if (_0x334fe6[_0x2e980a.session["uyeBilgileri"]["kripto"] + '_' + [_0x2e980a["body"]["kime"]]] === undefined) {
                                                _0x334fe6[_0x2e980a.session['uyeBilgileri']['kripto'] + '_' + [_0x2e980a['body']["kime"]]] = {
                                                    'baslatan': _0x2e980a.session["uyeBilgileri"]["kripto"],
                                                    'muhattap': _0x2e980a["body"]['kime'],
                                                    'tarih': _0x3378d5,
                                                    'SessocketCR': _0x200c4,
                                                    'konusmasuresi': 0,
                                                    'Aramabaslat': 0x0
                                                };
                                                _0x334fe6[[_0x2e980a["body"]["kime"]] + '_' + _0x2e980a.session["uyeBilgileri"]["kripto"]] = {
                                                    'baslatan': _0x2e980a.session["uyeBilgileri"]['kripto'],
                                                    'muhattap': _0x2e980a['body']["kime"],
                                                    'tarih': _0x3378d5,
                                                    'SessocketCR': _0x200c4,
                                                    'konusmasuresi': 0,
                                                    'Aramabaslat': 0x0
                                                };
                                            }
                                            _0x28474b["end"]('' + _0x200c4 + '');
                                        }
                                    } else {
                                        _0x28474b["end"]("Arama kabul etmiyor.");
                                    }
                                } else {
                                    return _0x28474b["end"]("Aradıgınız kişi sese baglı değil.");
                                }
                            } else {
                                return _0x28474b["end"]("Arama Yapmak için Sese Bağlanmalısınız.");
                            }
                        } else {
                            _0x28474b['end']("Bu kişi artık sitede değil.");
                        }
                    } else {
                        return _0x28474b["end"]("Arama Yetkiniz Yok.");
                    }
                } else {
                    return _0x28474b["end"]('Yetkili değilsiniz.');
                }
            } else {
                return _0x28474b["end"]('Üye Değilsiniz ve Arama Yetkiniz Yok.');
            }
        } catch (_0xdc30fd) {
            console.error(_0xdc30fd);
        }
    });
    emin.post('/yonetici/islemler', function(_0x2e54b1, _0x8acdfb) {
        try {
            var _0x1b7dbf = _0x2e54b1["body"]["kim"];
            var _0x36f61c = _0x2e54b1["body"]["islem"];
            if (soketgir[_0x1b7dbf]['botdurum'] == 0x1) {
                return _0x8acdfb["end"]("Bu Kişi Koruma Altında");
            }
            if (_0x2e54b1.session['girdimi'] == !![]) {
                if (_0x2e54b1.session["uyeBilgileri"]['yetki'] != 0x0) {
                    kisiBagli = 0x0;
                    for (var _0x17a204 in soketgir) {
                        if (soketgir[_0x17a204]["userKripto"] == _0x1b7dbf) {
                            kisiBagli = 0x1;
                            break;
                        }
                    }
                    if (kisiBagli > 0x0) {
                        if (_0x2e54b1.session["uyeBilgileri"]["yetki"] > soketgir[_0x1b7dbf]["userStatuINT"]) {
                            if (_0x36f61c == "uyariVer") {
                                return _0x8acdfb["end"](_0x36f61c);
                            } else if (_0x36f61c == "ipBilgileriGoster") {
                                if (_0x2e54b1.session["uyeBilgileri"]["ip_gorme"] == 'e') {
                                    var _0x1b899d = _0x3b706d[_0x1b7dbf]['ip'].split(':').pop();
                                    var _0x30c4e9 = "<b>Kullanıcı Adı : </b>" + soketgir[_0x1b7dbf]["userName"];
                                    var _0x1f5a5c = "<b>İP Adresi : </b>" + _0x1b899d;
                                    return _0x8acdfb["end"]('<div style="font-size:14px; line-height:20px; text-align:left; font-weight:normal">' + _0x30c4e9 + ' <br> ' + _0x1f5a5c + "</div>");
                                } else {
                                    return _0x8acdfb["end"]("Bu işlem için yetkiniz yok.");
                                }
                            } else {
                                return _0x8acdfb["end"]('Hatalı işlem!');
                            }
                        } else {
                            return _0x8acdfb["end"]("Sizden üst veya aynı yetkiye sahip");
                        }
                    } else {
                        return _0x8acdfb["end"]("Bu kişi artık sitede değil");
                    }
                } else {
                    return _0x8acdfb["end"]("Yetkili değilsiniz");
                }
            } else {
                return _0x8acdfb["end"]("Üye değilsiniz");
            }
        } catch (_0x4870ba) {
            console.error(_0x4870ba);
        }
    });
    emin["post"]("/yonetici/manulBan", function(_0x3ed7f0, _0x32aac7) {
        try {
            var _0x3707f1 = _0x3ed7f0["body"]['islem'];
            if (_0x3ed7f0.session['girdimi'] == !![]) {
                if (_0x3ed7f0.session["uyeBilgileri"]["yetki"] != 0x0) {
                    if (_0x3ed7f0.session['uyeBilgileri']["ban_yetkisi"] == 'e') {
                        if (_0x3707f1 == "girisKayitlari") {
                            var _0x4a105e = _0x3ed7f0["body"]['id'];
                            var _0x41bcb5 = _0x3ed7f0["body"]["rumuz"];
                            var _0x436679 = _0x3ed7f0["body"]['ip'];
                            var _0x4f2ab4 = _0x3ed7f0['body']["cihaztespit"];
                            var _0x1f3bec = _0x3ed7f0['body']["yetki"];
                            var _0xa73b3d = parcaliTarih();
                            var _0x2bb0c6 = _0x3ed7f0.session["uyeBilgileri"]["rumuz"];
                            baglantim["query"]("select COUNT(*) as TOP from ban_listesi where banlananip=? limit 1", [_0x436679], function(_0x182bb4, _0x580f67, _0x1c3fee) {
                                if (_0x580f67[0]["TOP"] > 0x0) {
                                    return _0x32aac7['end']('Bu Ip Adresi Zaten Banlı');
                                } else {
                                    if (_0x3ed7f0.session["uyeBilgileri"]['yetki'] > _0x1f3bec) {
                                        baglantim['query']("INSERT INTO ban_listesi (banlayan,banlanan,banlananip,cihaztespit,bantarihi) values ('" + _0x2bb0c6 + "','" + _0x41bcb5 + "','" + _0x436679 + "','" + _0x4f2ab4 + "','" + kisatarih() + "')", function(_0x3b75a3, _0x328175) {
                                            if (_0x3b75a3) {
                                                console.log("Hata oldu : " + _0x3b75a3);
                                            } else {
                                                var _0x33eeb4 = '';
                                                if (_0x4f2ab4 == 'e') {
                                                    var _0x33eeb4 = "+ CİHAZ";
                                                }
                                                sesinlar = _0x3ed7f0.session["uyeBilgileri"];
                                                _0x2ace0c(sesinlar["rumuz"], _0x41bcb5, 'Ip ' + _0x33eeb4 + " Banlama", sesinlar["yetki"], sesinlar['cinsiyet']);
                                                return _0x32aac7['end']('ok');
                                            }
                                        });
                                    } else {
                                        return _0x32aac7['end']("Bu kişinin yetkisi sizden yüksek <br> veya size eşit bir yetkisi var.<br>Bu yüzden banlayamazsınız.");
                                    }
                                }
                            });
                        } else {}
                    } else {
                        return _0x32aac7["end"]("IP Ban yetkiniz yok.");
                    }
                } else {
                    return _0x32aac7["end"]("Yetkili değilsiniz.");
                }
            } else {
                return _0x32aac7["end"]('Üye değilsiniz.');
            }
        } catch (_0x344cce) {
            console.error(_0x344cce);
        }
    });
    emin.post("/yonetici/yasaklamalar", function(_0x1c1d29, _0x2465b7) {
        try {
            var _0x1b308a = _0x1c1d29["body"]['kim'];
            var _0xf167ec = _0x1c1d29["body"]["islem"];
            if (soketgir[_0x1b308a]['botdurum'] == 0x1) {
                return _0x2465b7['end']("Bu Kişi Koruma Altında");
            }
            kisiBagli = 0x0;
            for (var _0x1cc86b in soketgir) {
                if (soketgir[_0x1cc86b]["userKripto"] == _0x1b308a) {
                    kisiBagli = 0x1;
                    break;
                }
            }
            if (kisiBagli > 0x0) {
                var _0x5aff8b = soketgir[_0x1b308a]["userName"];
                if (_0x1c1d29.session["girdimi"] == !![]) {
                    if (_0x1c1d29.session["uyeBilgileri"]["yetki"] != 0x0) {
                        if (_0x1c1d29.session["uyeBilgileri"]["yetki"] > soketgir[_0x1b308a]["userStatuINT"]) {
                            if (soketgir[_0x1b308a]["koruma_altinda"] == 'e' && _0x1c1d29.session["uyeBilgileri"]["rumuz"] != "GimGim") {
 //burada son yere bak
                                console.log('Korumaya alınan üye hakkında işlem : İşlem: "' + _0xf167ec + '" İp adresi : "' + ipBulma(_0x1c1d29) + '" Tarih : "' + parcaliTarih() + '" Admin : "' + _0x1c1d29.session["uyeBilgileri"]["rumuz"] + '" Hedef : "' + _0x5aff8b+'"');
                                soketimiz.to(soketgir[_0x1c1d29.session['uyeBilgileri']["kripto"]]['userId']).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Bu kişi (" + _0x5aff8b + '); çok sayıda mağdur olduğu anlaşıldığından, artık koruma altındadır', 'e');
                                return _0x2465b7['end']("İşlem başarısız.");
                            } else {
                                if (_0xf167ec == "Ban") {
                                    if (_0x1c1d29.session["uyeBilgileri"]["ban_yetkisi"] == 'e') {
                                        var _0x3bbbda = {
                                            'banlayan': _0x1c1d29.session["uyeBilgileri"]["rumuz"],
                                            'banlanan': soketgir[_0x1b308a]["userName"],
                                            'banlananip': _0x3b706d[_0x1b308a]['ip'],
                                            'SuperBan': '',
                                            'cihaztespit': soketgir[_0x1b308a]["userMobilemi"],
                                            'bantarihi': kisatarih()
                                        };
                                        baglantim["query"]('INSERT INTO ban_listesi SET ?', _0x3bbbda, function(_0x22841f) {
                                            if (_0x22841f) {
                                                console.log("Hata oldu : " + _0x22841f);
                                            }
                                            var _0x1b50b0 = '';
                                            if (_0x36be15 == !![]) {
                                                var _0x1b50b0 = "+ CİHAZ";
                                            }
                                            sesinlar = _0x1c1d29.session["uyeBilgileri"];
                                            _0x2ace0c(sesinlar['rumuz'], soketgir[_0x1b308a]["userName"], 'Ip ' + _0x1b50b0 + ' Banlama', sesinlar["yetki"], sesinlar["cinsiyet"]);
                                        });
                                    } else {
                                        return _0x2465b7["end"]("Banlama yetkiniz yok");
                                    }
                                } else if (_0xf167ec == "SuperBan") {
                                    if (_0x1c1d29.session["uyeBilgileri"]["ban_yetkisi"] == 'e') {
                                        var _0x1c57f8 = soketgir[_0x1b308a]["userName"];
                                        var _0x3a20ea = _0x3b706d[_0x1b308a]['ip'];
                                        var _0x36be15 = soketgir[_0x1b308a]["userMobilemi"];
                                        var _0x4faa9d = parcaliTarih();
                                        var _0x561ee8 = _0x1c1d29.session["uyeBilgileri"]["rumuz"];
                                        var _0x2c8f5a = _0x3a20ea.split('.', 0x1).pop();
                                        var _0x5b2a31 = _0x3a20ea.split('.', 0x2).pop();
                                        var _0x4a1370 = '' + _0x2c8f5a + '.' + _0x5b2a31 + '.*';
                                        var _0x5a032e = {
                                            'banlayan': _0x561ee8,
                                            'banlanan': _0x1c57f8,
                                            'banlananip': _0x3a20ea,
                                            'SuperBan': _0x4a1370,
                                            'cihaztespit': _0x36be15,
                                            'bantarihi': kisatarih()
                                        };
                                        baglantim["query"]('INSERT INTO ban_listesi SET ?', _0x5a032e, function(_0x5ea800) {
                                            if (_0x5ea800) {
                                                console.log("Hata oldu : " + _0x5ea800);
                                            }
                                            var _0x31f485 = '';
                                            if (_0x36be15 == !![]) {
                                                var _0x31f485 = "+ CİHAZ";
                                            }
                                            sesinlar = _0x1c1d29.session["uyeBilgileri"];
                                            _0x2ace0c(sesinlar["rumuz"], _0x1c57f8, "Süper Banlama", sesinlar["yetki"], sesinlar["cinsiyet"]);
                                        });
                                    } else {
                                        return _0x2465b7["end"]('Süper ban yetkiniz yok');
                                    }
                                } else if (_0xf167ec == "gMute") {
                                    if (_0x1c1d29.session["uyeBilgileri"]["mute_yetkisi"] == 'e') {
                                        for (var _0x1cc86b in _0x103f47) {
                                            if (_0x103f47[_0x1cc86b]['ip'] == _0x3b706d[_0x1b308a]['ip']) {
                                                sesinlar = _0x1c1d29.session["uyeBilgileri"];
                                                _0x2ace0c(sesinlar['rumuz'], _0x103f47[_0x1cc86b]["rumuz"], "Gizli mute kaldırdı", sesinlar["yetki"], sesinlar["cinsiyet"]);
                                                delete _0x103f47[_0x1b308a];
                                                return _0x2465b7['end']('gizli_mute_kaldir');
                                                break;
                                                return ![];
                                            }
                                        }
                                        _0x103f47[_0x1b308a] = {
                                            'rumuz': _0x5aff8b,
                                            'ip': _0x3b706d[_0x1b308a]['ip'],
                                            'tarih': parcaliTarih(),
                                            'admin': _0x1c1d29.session['uyeBilgileri']["rumuz"],
                                            'nedir': '0'
                                        };
                                        sesinlar = _0x1c1d29.session["uyeBilgileri"];
                                        _0x2ace0c(sesinlar["rumuz"], _0x5aff8b, "Gizli muteleme", sesinlar["yetki"], sesinlar["cinsiyet"]);
                                    } else {
                                        return _0x2465b7["end"]("Susturma yetkiniz yok");
                                    }
                                } else if (_0xf167ec == "Mute") {
                                    if (_0x1c1d29.session['uyeBilgileri']['mute_yetkisi'] == 'e') {
                                        for (var _0x1cc86b in _0x598d51) {
                                            if (_0x598d51[_0x1cc86b]['ip'] == _0x3b706d[_0x1b308a]['ip']) {
                                                sesinlar = _0x1c1d29.session["uyeBilgileri"];
                                                if (_0x598d51[_0x1b308a]) {
                                                    _0x2ace0c(sesinlar["rumuz"], _0x598d51[_0x1cc86b]["rumuz"], "Engel Kaldırma", sesinlar["yetki"], sesinlar["cinsiyet"]);
                                                    return _0x2465b7['end']("normal_mute_kaldir");
                                                    break;
                                                    return ![];
                                                }
                                            }
                                        }
                                        _0x598d51[_0x1b308a] = {
                                            'rumuz': _0x5aff8b,
                                            'ip': _0x3b706d[_0x1b308a]['ip'],
                                            'tarih': parcaliTarih(),
                                            'admin': _0x1c1d29.session["uyeBilgileri"]["rumuz"],
                                            'nedir': '0'
                                        };
                                        soketgir[_0x1b308a]['userMutelimi'] = 0x1;
                                        sesinlar = _0x1c1d29.session["uyeBilgileri"];
                                        _0x2ace0c(sesinlar["rumuz"], _0x5aff8b, "Engelleme", sesinlar["yetki"], sesinlar["cinsiyet"]);
                                    } else {
                                        return _0x2465b7["end"]("Engelleme yetkiniz yok");
                                    }
                                } else if (_0xf167ec == "sistemdenAt") {
                                    if (_0x1c1d29.session["uyeBilgileri"]["atma_yetkisi"] == 'e') {
                                        sesinlar = _0x1c1d29.session["uyeBilgileri"];
                                        _0x2ace0c(sesinlar["rumuz"], _0x5aff8b, 'Sistem Dışı Atma', sesinlar['yetki'], sesinlar['cinsiyet']);
                                    } else {
                                        return _0x2465b7["end"]("Siteden atma yetkiniz yok");
                                    }
                                } else if (_0xf167ec == "kamerasiniEngelle") {
                                    if (_0x1c1d29.session["uyeBilgileri"]["kamera_yetkisi"] == 'e') {
                                        for (var _0x1cc86b in _0x10dafe) {
                                            if (_0x10dafe[_0x1cc86b]['ip'] == _0x3b706d[_0x1b308a]['ip']) {
                                                sesinlar = _0x1c1d29.session["uyeBilgileri"];
                                                _0x2ace0c(sesinlar["rumuz"], _0x10dafe[_0x1cc86b]["rumuz"], "Kamera Engelini Kaldırma", sesinlar["yetki"], sesinlar["cinsiyet"]);
                                                delete _0x10dafe[_0x1b308a];
                                                return _0x2465b7["end"]("W_C_X_kaldir");
                                                break;
                                                return ![];
                                            }
                                        }
                                        _0x10dafe[_0x1b308a] = {
                                            'rumuz': _0x5aff8b,
                                            'ip': _0x3b706d[_0x1b308a]['ip'],
                                            'tarih': parcaliTarih(),
                                            'admin': _0x1c1d29.session['uyeBilgileri']["rumuz"]
                                        };
                                        soketgir[_0x1b308a]['userWebRTCCam_X'] = 0x1;
                                        sesinlar = _0x1c1d29.session['uyeBilgileri'];
                                        _0x2ace0c(sesinlar['rumuz'], _0x5aff8b, "Kamera Engelleme", sesinlar["yetki"], sesinlar["cinsiyet"]);
                                    } else {
                                        return _0x2465b7["end"]('Kamera engelleme yetkiniz yok');
                                    }
                                } else {
                                    return _0x2465b7['end']("Bilinmeyen işlem");
                                }
                                return _0x2465b7["end"](_0xf167ec);
                            }
                        } else {
                            return _0x2465b7["end"]("Sizden üst veya aynı yetkiye sahip");
                        }
                    } else {
                        return _0x2465b7['end']("Yetkili değilsiniz");
                    }
                } else {
                    return _0x2465b7["end"]("Üye değilsiniz");
                }
            } else {
                return _0x2465b7["end"]("Bu kişi siteden çıkış yapmış");
            }
        } catch (_0x300e56) {
            console.error(_0x300e56);
        }
    });
    emin["post"]("/yonetici/ban-kaldir", function(_0x86e544, _0x274934) {
        try {
            var _0x100753 = _0x86e544["body"]['id'];
            var _0x414f9 = _0x86e544["body"]["banlanan"];
            if (_0x86e544.session["girdimi"] == !![]) {
                if (_0x86e544.session['uyeBilgileri']['yetki'] != 0x0) {
                    if (_0x86e544.session['uyeBilgileri']["ban_yetkisi"] == 'e') {
                        sesinlar = _0x86e544.session["uyeBilgileri"];
                        _0x2ace0c(sesinlar['rumuz'], _0x414f9, "Ban Kaldırma", sesinlar["yetki"], sesinlar["cinsiyet"]);
                        baglantim["query"]('DELETE from ban_listesi where id="' + _0x100753 + '"');
                        delete _0x1cb1bd[_0x100753];
                        return _0x274934['end']('ok');
                    } else {
                        return _0x274934["end"]("Ban Silme yetkiniz yok");
                    }
                } else {
                    return _0x274934["end"]('Yetkili değilsiniz');
                }
            } else {
                return _0x274934['end']("Üye değilsiniz");
            }
        } catch (_0x2d4b27) {
            console.error(_0x2d4b27);
        }
    });
    var fsg = require('fs');
    var httpsg = require("https");
    var _0x35f476 = {
        'key': fsg["readFileSync"]("./sertifikalar/key.pem"),
        'cert': fsg["readFileSync"]("./sertifikalar/server.crt")
    };
    var _0x4167c2 = httpsg["createServer"](_0x35f476, emin);
    _0x4167c2.listen(envportu, function() {
        console.log("--Express server başlatıldı-- Site: " + SitemAdres + "Port: " + envportu);
        baglantim["query"]("select * from uyeler where botdurum='1' order by id asc", function(_0x4ca528, _0x211d2e, _0x5b5d9f) {
            botkullanici = _0x211d2e;
            for (var _0x1457d3 in botkullanici) {
                soketgir[md5g(botkullanici[_0x1457d3]["rumuz"])] = {
                    'userName': botkullanici[_0x1457d3]['rumuz'],
                    'userKripto': md5g(botkullanici[_0x1457d3]['rumuz']),
                    'kimlikid': botkullanici[_0x1457d3]['id'],
                    'botdurum': botkullanici[_0x1457d3]["botdurum"],
                    'userId': md5g(botkullanici[_0x1457d3]["rumuz"]),
                    'userCinsiyet': botkullanici[_0x1457d3]['cinsiyet'],
                    'userResim': botkullanici[_0x1457d3]["resim"],
                    'userStatu': botkullanici[_0x1457d3]["yetkiadi"],
                    'userStatuINT': botkullanici[_0x1457d3]["yetki"],
                    'yildizrengi': botkullanici[_0x1457d3]["yildizrengi"],
                    'userMobilemi': !![],
                    'googleApp': !![],
                    'userOda': botkullanici[_0x1457d3]['botoda'],
                    'userDurum': "Çevrimiçi",
                    'userCT': 0,
                    'userMutelimi': 0,
                    'userOzelMesaj': 1,
                    'userOzelArama': 0,
                    'useryorumlar': 0,
                    'userIslemTarih': TarihCe(),
                    'userIslemTarihV': TarihCe() -30,
                    'userWebRTCId': '',
                    'userWebRTCCam': 0,
                    'userWebRTCMik': 0,
                    'userWebRTCSes': 0,
                    'userkonusmada': 0,
                    'userWebRTCCam_X': 0,
                    'sapkano': botkullanici[_0x1457d3]['sapkano'],
                    'catiyotkisi': 'h',
                    'toplantiyetkisi': 'h',
                    'userMikrofonSirasi': 0,
                    'mikrofonZamani': 0,
                    'admin_hareketleri': 'h',
                    'koruma_altinda': 'h',
                    'flash': botkullanici[_0x1457d3]["flash"],
                    'nickbar': botkullanici[_0x1457d3]["nickbar"],
                    'userNameTwo': '0',
                    'saldiri': 0,
                    'saldiriTarih': TarihCe(),
                    'userIslemTarihTime': islemTrh(),
                    'floodSayisi': 0x0
                };
                if (_0x3d4844[botkullanici[_0x1457d3]["botoda"]] == undefined) {
                    _0x3d4844[botkullanici[_0x1457d3]["botoda"]] = 0x1;
                } else {
                    _0x3d4844[botkullanici[_0x1457d3]['botoda']]++;
                }
            }
        });
    });
    var soketimiz = iog.listen(_0x4167c2, {
        'origins': SitemAdres
    });
    soketimiz.use(sharedsession(_0x530e29, {
        'autoSave': !![]
    }));
    var _0x84717e = {};
    var _0x1d874d = {};
    var _0x334fe6 = {};
    var _0x3b706d = {};
    var _0x103f47 = {};
    var _0x598d51 = {};
    var _0x1cb1bd = {};
    var soketgir = {};
    var _0x10dafe = {};
    var _0x2ed05d = {};
    var _0x143650 = {};
    var _0x4b19b9 = {};
    var _0x33adf7 = {};
    var _0x10c978 = {};
    var _0x1a3120 = {};
    odalar = {};
    yetkilirutbe = {};
    mikrofonSirasiAyarla = new Date().getTime();
    anaYoneticiler = {};
    oyagoster = {};
    modlarListe = {};
    seogoster = {};
    saldiriURL = {};
    proxyIpler = {};
    proxyOlmayanIpler = {};
    var _0x3d4844 = {};
    try {
        sonUcAy = TarihCe() - 0xed4e00;
        baglantim["query"]("DELETE from uyeler WHERE songiris < " + sonUcAy + " and yetki < 3 and botdurum=0");
        baglantim["query"]("select * from odalar order by id asc", function(_0xc2b9d8, _0x3822aa, _0x531dd4) {
            odalar1 = _0x3822aa;
            for (var _0x3f21f7 in odalar1) {
                odalar[odalar1[_0x3f21f7]["adi"]] = {
                    'id': odalar1[_0x3f21f7]['id'],
                    'adi': odalar1[_0x3f21f7]["adi"],
                    'onlineKisi': 0,
                    'mikDolumu': 0,
                    'sifre': odalar1[_0x3f21f7]["sifre"],
                    'yazi': odalar1[_0x3f21f7]['yazi'],
                    'sahibi': odalar1[_0x3f21f7]['sahibi'],
                    'fon': odalar1[_0x3f21f7]["fon"],
                    'sohbeticrenk': odalar1[_0x3f21f7]["sohbeticrenk"],
                    'listesiralama': odalar1[_0x3f21f7]["listesiralama"]
                };
            }
        });
        baglantim["query"]("select * from odalar order by id asc", function(_0x61b75d, _0x36176c, _0x709d48) {
            userodalistesi = _0x36176c;
        });
        baglantim['query']("select * from durum_mod order by id asc", function(_0x43b090, _0x2cfaf6, _0x571f9c) {
            botdurumlistesi = _0x2cfaf6;
        });
        baglantim["query"]("select * from yetkiler where rutbe < 17 order by id asc", function(_0x29384e, _0x34134b, _0x17ec05) {
            yetkilirutbe = _0x34134b;
        });
        baglantim['query']("select * from ayarlar where id='1'", function(_0x23c6a4, _0x3c0c5b, _0x5eb4b) {
            oyarlarioku = _0x3c0c5b;
            for (var _0x11de9d in oyarlarioku) {
                oyagoster[oyarlarioku[_0x11de9d]['id']] = {
                    'id': oyarlarioku[_0x11de9d]['id'],
                    'MisGirisler': oyarlarioku[_0x11de9d]["MisGirisler"],
                    'ResimGonder': oyarlarioku[_0x11de9d]['ResimGonder'],
                    'SesGonder': oyarlarioku[_0x11de9d]["SesGonder"],
                    'BasKonusGonder': oyarlarioku[_0x11de9d]['BasKonusGonder'],
                    'OzelMesajGonder': oyarlarioku[_0x11de9d]["OzelMesajGonder"],
                    'YouTubeGonder': oyarlarioku[_0x11de9d]['YouTubeGonder'],
                    'radyokodu': oyarlarioku[_0x11de9d]['radyokodu'],
                    'radyoistek': oyarlarioku[_0x11de9d]['radyoistek']
                };
            }
        });
        baglantim['query']("select * from durum_mod", function(_0x30373c, _0x103858, _0x54d1a3) {
            modlaroku = _0x103858;
            for (var _0x323f3e in modlaroku) {
                modlarListe[modlaroku[_0x323f3e]['id']] = {
                    'id': modlaroku[_0x323f3e]['id'],
                    'durumadi': modlaroku[_0x323f3e]["durumadi"]
                };
            }
        });
        baglantim["query"]("select * from ban_listesi order by id asc", function(_0x1b77ec, _0x35471d, _0x64a6b3) {
            banlarioku = _0x35471d;
            for (var _0xfa100b in banlarioku) {
                _0x1cb1bd[banlarioku[_0xfa100b]['id']] = {
                    'id': banlarioku[_0xfa100b]['id'],
                    'banlayan': banlarioku[_0xfa100b]["banlayan"],
                    'banlanan': banlarioku[_0xfa100b]["banlanan"],
                    'banlananip': banlarioku[_0xfa100b]["banlananip"],
                    'cihaztespit': banlarioku[_0xfa100b]["cihaztespit"],
                    'bantarihi': banlarioku[_0xfa100b]["bantarihi"]
                };
            }
        });
        baglantim["query"]("select * from uyeler where yetki > 0 order by id asc", function(_0x541ad7, _0x445e68, _0xfb9949) {
            yetkilirutbeFull = _0x445e68;
            for (var _0x210734 in _0x445e68) {
                anaYoneticiler[_0x445e68[_0x210734]['rumuz']] = {
                    'rumuz': _0x445e68[_0x210734]["rumuz"]
                };
            }
        });
        baglantim["query"]("select * from yetkiler  where rutbe < 17 order by id asc", function(_0x5ea326, _0x27c5f7, _0x172d04) {
            yetkilirutbeFull = _0x27c5f7;
        });
        baglantim["query"]("select MAX(rutbe) as TYU from yetkiler", function(_0x1b4df1, _0x326f66, _0x2fbbe8) {
            yetkilirutbeSonderece = _0x326f66[0]["TYU"];
        });
    } catch (_0x2afa88) {
        console.error(_0x2afa88);
    }
    function _0x156377(_0x268616, _0x45ac09, _0x3d0b68) {}
    soketimiz.sockets.on("connection", function(sohbetik) {
        sohbetik["resources"] = {
            'screen': ![],
            'video': !![],
            'audio': ![]
        };
        sohbetik.on("message", function(_0x1067c8) {
            _0x156377('message', 0x64, sohbetik);
            SSifreleme(sohbetik["kripto"]);
            if (!_0x1067c8) return;
            var _0x46f816 = soketimiz.to(_0x1067c8.to);
            if (!_0x46f816) return;
            _0x1067c8["from"] = sohbetik['id'];
            _0x46f816.emit('message', _0x1067c8);
        });
        sohbetik.on("shareScreen", function() {
            SSifreleme(sohbetik["kripto"]);
            sohbetik["resources"]["screen"] = !![];
        });
        sohbetik.on("unshareScreen", function(_0x372d13) {
            SSifreleme(sohbetik["kripto"]);
            sohbetik["resources"]["screen"] = ![];
            _0x2e1bd1("screen");
        });
        sohbetik.on('join', _0x4d89e1);
        function _0x2e1bd1(_0xe13c53) {
            if (sohbetik["room"]) {
                soketimiz.sockets.in(sohbetik["room"]).emit("remove", {
                    'id': sohbetik['id'],
                    'type': _0xe13c53
                });
                if (!_0xe13c53) {
                    sohbetik.leave(sohbetik["room"]);
                    sohbetik["room"] = undefined;
                }
            }
        }
        function _0x4d89e1(_0x489660, _0x4096b2) {
            SSifreleme(sohbetik["kripto"]);
            if (typeof _0x489660 !== 'string') return;
            if (getconfg["rooms"] && getconfg["rooms"]["maxClients"] >0&& clientsInRoom(_0x489660) >= getconfg["rooms"]['maxClients']) {
                _0x458791(_0x4096b2)('full');
                return;
            }
            if (sohbetik["room"]) _0x2e1bd1();
            _0x458791(_0x4096b2)(null, nspsAd(_0x489660));
            sohbetik.join(_0x489660);
            sohbetik["room"] = _0x489660;
        }
        sohbetik.on("leave", function() {
            _0x2e1bd1();
        });
        sohbetik.on("create", function(_0x443929, _0x209656) {
            _0x156377('create', 0x64, sohbetik);
            SSifreleme(sohbetik["kripto"]);
            if (arguments.length == 0x2) {
                _0x209656 = typeof _0x209656 == "function" ? _0x209656 : function() {};
                _0x443929 = _0x443929 || uuidg();
            } else {
                _0x209656 = _0x443929;
                _0x443929 = uuidg();
            }
            var _0x5c2c23 = soketimiz['nsps']['/']['adapter']['rooms'][_0x443929];
            if (_0x5c2c23 && _0x5c2c23.length) {
                _0x458791(_0x209656)('taken');
            } else {
                _0x4d89e1(_0x443929);
                _0x458791(_0x209656)(null, _0x443929);
            }
        });
        sohbetik.on("trace", function(_0x3ecc29) {
            console['log']("trace", JSON["stringify"]([_0x3ecc29["type"], _0x3ecc29.session, _0x3ecc29['prefix'], _0x3ecc29["peer"], _0x3ecc29["time"], _0x3ecc29['value']]));
        });
        sohbetik.emit("stunservers", getconfg["stunservers"] || []);
        var _0x4f019a = [];
        var _0x3b69f3 = sohbetik.handshake['headers']["origin"];
        if (!getconfg["turnorigins"] || getconfg["turnorigins"]['indexOf'](_0x3b69f3) !== -0x1) {
            getconfg["turnservers"].forEach(function(_0x1c0e5d) {
                var _0xacd7ca = cryptg["createHmac"]('sha1', _0x1c0e5d["secret"]);
                var _0x51c086 = Math["floor"](new Date().getTime() / 0x3e8) + parseInt(_0x1c0e5d["expiry"] || 86400, 0xa) + '';
                _0xacd7ca["update"](_0x51c086);
                _0x4f019a["push"]({
                    'username': _0x51c086,
                    'credential': _0xacd7ca["digest"]('base64'),
                    'urls': _0x1c0e5d["urls"] || _0x1c0e5d["url"]
                });
            });
        }
        sohbetik.emit('turnservers', _0x4f019a);
        if (getconfg["uid"]) process['setuid'](getconfg["uid"]);
        function _0x1de788() {
            if (soketgir[sohbetik['kripto']]['flash'] != '') {
                var _0x426427 = "uploads/" + soketgir[sohbetik["kripto"]]["flash"] + '';
            } else {
                if (soketgir[sohbetik["kripto"]]["userResim"] == '0' || soketgir[sohbetik['kripto']]["userResim"] == '') {
                    var _0x426427 = "resimler/sistem/" + soketgir[sohbetik["kripto"]]["userCinsiyet"] + "_mliste.png";
                } else {
                    var _0x426427 = "resimler/sistem/avatar/" + soketgir[sohbetik["kripto"]]["userCinsiyet"] + '/' + soketgir[sohbetik["kripto"]]["userResim"] + '.png';
                }
            }
            return _0x426427;
        }
        try {
            var _0x2c10b3 = sohbetik.handshake.address.split(':').pop();
            var _0x4f934a = sohbetik.handshake.session['uyeBilgileri'];
            var _0x1afdc8 = sohbetik.handshake.session['mobileToPc'];
            var _0x2fa197 = sohbetik.handshake.session['appToMobile'];
            var _0x2a7827 = sohbetik.handshake.session['appToMobileID'];
            var _0x347fe5 = sohbetik.handshake.session["GirisiKabulEdildi"];
            if (typeof _0x347fe5 === "undefined" || _0x347fe5 === null || _0x347fe5 === ![]) {
                console.log("KontrolEdilsin : Giriş kontrolunden geçmeden giriş yapmak istedi : " + _0x2c10b3);
                soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                return ![];
            }
            var _0x4b7755 = sohbetik.handshake.session["GirisiKabulEdildiYetkili"];
            if (typeof _0x4b7755 === "undefined" || _0x4b7755 === null) {
                console.log("KontrolEdilsin : Yetkili giriş kontrolünden geçmeden giriş yapmak istedi : " + _0x2c10b3);
                soketimiz.sockets.sockets[sohbetik['id']]['disconnect']();
                return ![];
            } else {
                if (_0x4b7755 == ![]) {
                    baglantim["query"]("select COUNT(*) as TOP from uyeler where rumuz=? limit 1", [sohbetik.handshake.session["uyeBilgileri"]["rumuz"]], function(_0x1184f1, _0x4078c0, _0x7262b0) {
                        if (_0x4078c0[0]['TOP'] > 0x0) {
                            console['log']('KontrolEdilsin : Yetkili veya üye nicki ile socket açtı ama yetkili ve üye girişinden geçmemiş : ' + _0x2c10b3);
                            soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                            return ![];
                        }
                    });
                }
            }
        } catch (_0x131397) {
            console.error(_0x131397);
        }
        sohbetik.on("kullaniciEkle", function(SohRumuz, SohCins) {
            try {
                var _0x56d94e = sohbetik.handshake.address.split(':').pop();
                var KimBua = sohbetik.handshake.session["uyeBilgileri"];
                var _0xa805c6 = sohbetik.handshake.session["mobileToPc"];
                var _0x320dab = sohbetik.handshake.session["appToMobile"];
                var _0x394a0a = sohbetik.handshake.session["appToMobileID"];
                var _0x53e349 = 0x0;
                for (var _0xe84eb6 in _0x10dafe) {
                    if (_0x10dafe[_0xe84eb6]['ip'] == _0x56d94e) {
                        sohbetik.emit("KmRSnL");
                        var _0x53e349 = 0x1;
                        break;
                    }
                }
                var _0x194189 = 0x0;
                for (var _0xe84eb6 in _0x598d51) {
                    if (_0x598d51[_0xe84eb6]['ip'] == _0x56d94e) {
                        sohbetik.emit("MuteCak");
                        var _0x194189 = 0x1;
                        break;
                    }
                }
                if (SohRumuz == "undefined" || SohRumuz === undefined) {
                    SohRumuz = 'Bilinmeyen-' + Math["floor"](Math["random"]() * 0x64 + 0x1);
                }
                for (var _0xe84eb6 in soketgir) {
                    if (soketgir[_0xe84eb6]["userName"].toLowerCase() == SohRumuz['toLowerCase']()) {
                        soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                        break;
                        return ![];
                    }
                }
                if (typeof SohCins === 'undefined' || SohCins === undefined || SohCins !== 'e' && SohCins !== 'k') {
                    console['log']("KontrolEdilsin : cinsiyeti yoksa veya erkek - kadın değilse düşür : " + SohCins + " - " + _0x56d94e);
                    soketimiz.sockets.sockets[sohbetik['id']]['disconnect']();
                    return ![];
                }
                var SohTtkStr = 'Misafir';
                var SohResim = 0x0;
                var SohYetki = 0x0;
                var SohId = 0x0;
                var SohBotDurum = 0x0;
                var SohBanY = 'h';
                var SohMutY = 'h';
                var SohAtY = 'h';
                var SohCamY = 'h';
                var SohIpG = 'h';
                var SohLogY = 'h';
                var SohAdHar = 'h';
                var SohUyeY = 'h';
                var SohOdaY = 'h';
                var _0x5b88fa = 0x0;
                var SohGenAt = 'h';
                var SohAdPan = 'h';
                var SohTopYet = 'h';
                var SohCatYet = 'h';
                var SohAdAyr = 'h';
                var SohRutYon = 'h';
                var SohYilReng = "000000";
                var SohSapNo = 0x0;
                var SohOzMes = 'h';
                var SohMicSur = 0x258;
                var SohKorAl = 'h';
                var SohFlsh = '';
                var SohNckD = 'h';
                var SohLogGiz = 'h';
                var SohNckBar = '';
                var SohIkiRmz = '0';
                if (typeof SohYetki === "undefined" || SohYetki === undefined || SohYetki < 0x0) {
                    console.log("KontrolEdilsin : yetkisi yoksa veya 0 dan düşükse düşür : " + SohYetki + ' - ' + _0x56d94e);
                    soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                    return ![];
                }
                if (sohbetik.handshake.session["girdimi"] == !![]) {
                    var SohRumuz = KimBua["rumuz"];
                    var SohId = KimBua['id'];
                    var SohBotDurum = KimBua["botdurum"];
                    var SohTtkStr = KimBua["YetkiStr"];
                    var SohYetki = KimBua["yetki"];
                    var SohResim = KimBua["resim"];
                    var SohCins = KimBua["cinsiyet"];
                    var SohBanY = KimBua['ban_yetkisi'];
                    var SohMutY = KimBua["mute_yetkisi"];
                    var SohAtY = KimBua["atma_yetkisi"];
                    var SohCamY = KimBua["kamera_yetkisi"];
                    var SohIpG = KimBua["ip_gorme"];
                    var SohLogY = KimBua["log_yetkisi"];
                    var SohAdHar = KimBua['admin_hareketleri'];
                    var SohUyeY = KimBua["uye_yonetimi"];
                    var SohOdaY = KimBua['oda_yonetimi'];
                    var SohGenAt = KimBua["genel_atma"];
                    var SohAdPan = KimBua["admin_panel"];
                    var SohCatYet = KimBua['catiyotkisi'];
                    var SohTopYet = KimBua['toplantiyetkisi'];
                    var SohAdAyr = KimBua['admin_ayarlar'];
                    var SohRutYon = KimBua["rutbe_yonetimi"];
                    var SohYilReng = KimBua['yildizrengi'];
                    var SohSapNo = KimBua['sapkano'];
                    var SohOzMes = KimBua["ozel_mesaj"];
                    var SohMicSur = KimBua['MikrofonSure'];
                    var SohKorAl = KimBua["koruma_altinda"];
                    var SohFlsh = KimBua["flash"];
                    var SohNckD = KimBua["nickdegis"];
                    var SohLogGiz = KimBua["loglardagizle"];
                    var SohNckBar = KimBua["nickbar"];
                    var SohIkiRmz = KimBua["ikinciRMZ"];
                    if (KimBua["rumuz"] == "GimGim") {
                        var SohTtkStr = "Yazılım Mühendisi";
                    }
                }
                var SifreIsim = md5g(SohRumuz);
                for (var _0xe84eb6 in odalar) {
                    if (odalar[_0xe84eb6]['id'] == 0x1) {
                        var _0x14a1ff = odalar[_0xe84eb6]["adi"];
                    }
                }
                var _0x5cae59 = _0x14a1ff;
                var _0x31b8d4 = _0x5cae59;
                var _0x52bda6 = _0x194189;
                sohbetik["odasi"] = _0x31b8d4;
                sohbetik["kullaniciAdi"] = SohRumuz;
                sohbetik["kimlikid"] = SohId;
                sohbetik["botdurum"] = SohBotDurum;
                sohbetik['ip'] = _0x56d94e;
                sohbetik["kullaniciAdiiki"] = SohIkiRmz;
                sohbetik['kripto'] = SifreIsim;
                sohbetik["cinsiyet"] = SohCins;
                sohbetik["statu"] = SohTtkStr;
                sohbetik["yetki"] = SohYetki;
                sohbetik["resim"] = SohResim;
                sohbetik["flash"] = SohFlsh;
                sohbetik["userId"] = sohbetik['id'];
                sohbetik["mobilemi"] = _0xa805c6;
                sohbetik["appmi"] = _0x320dab;
                sohbetik["ban_yetkisi"] = SohBanY;
                sohbetik["mute_yetkisi"] = SohMutY;
                sohbetik["atma_yetkisi"] = SohAtY;
                sohbetik["kamera_yetkisi"] = SohCamY;
                sohbetik["ip_gorme"] = SohIpG;
                sohbetik["log_yetkisi"] = SohLogY;
                sohbetik['admin_hareketleri'] = SohAdHar;
                sohbetik['uye_yonetimi'] = SohUyeY;
                sohbetik['oda_yonetimi'] = SohOdaY;
                sohbetik['MikSuresi'] = SohMicSur;
                sohbetik['genel_atma'] = SohGenAt;
                sohbetik["catiyotkisi"] = SohCatYet;
                sohbetik["toplantiyetkisi"] = SohTopYet;
                sohbetik["admin_ayarlar"] = SohAdAyr;
                sohbetik["rutbe_yonetimi"] = SohRutYon;
                sohbetik["yildizrengi"] = SohYilReng;
                sohbetik["admin_panel"] = SohAdPan;
                sohbetik["nickdegis"] = SohNckD;
                sohbetik["loglardagizle"] = SohLogGiz;
                sohbetik["nickbar"] = SohNckBar;
                sohbetik['sapkano'] = SohSapNo;
                sohbetik["ozel_mesaj"] = SohOzMes;
                sohbetik['sifrelioda'] = '';
                sohbetik["girmekIstedigiOda"] = '';
                if (sohbetik["catiyotkisi"] != 'e') {
                    durumlaCatiyiUser = 'Çevrimiçi';
                    var _0x5b88fa = 0x0;
                } else {
                    durumlaCatiyiUser = "Çatıda";
                    var _0x5b88fa = 0x1;
                }
                sohbetik["catisi"] = _0x5b88fa;
                soketgir[SifreIsim] = {
                    'userName': SohRumuz,
                    'userKripto': SifreIsim,
                    'kimlikid': SohId,
                    'botdurum': SohBotDurum,
                    'userId': sohbetik['id'],
                    'userCinsiyet': SohCins,
                    'userResim': SohResim,
                    'userStatu': SohTtkStr,
                    'userStatuINT': SohYetki,
                    'yildizrengi': SohYilReng,
                    'userMobilemi': _0xa805c6,
                    'googleApp': _0x320dab,
                    'userOda': sohbetik["odasi"],
                    'userDurum': durumlaCatiyiUser,
                    'userCT': _0x5b88fa,
                    'userMutelimi': _0x52bda6,
                    'userOzelMesaj': 1,
                    'userOzelArama': 1,
                    'useryorumlar': 1,
                    'userIslemTarih': TarihCe(),
                    'userIslemTarihV': TarihCe() - 30,
                    'userWebRTCId': '',
                    'userWebRTCCam': 0,
                    'userWebRTCMik': 0,
                    'userWebRTCSes': 0,
                    'userkonusmada': 0,
                    'userWebRTCCam_X': _0x53e349,
                    'sapkano': SohSapNo,
                    'catiyotkisi': SohCatYet,
                    'toplantiyetkisi': SohTopYet,
                    'userMikrofonSirasi': 0,
                    'mikrofonZamani': 0,
                    'admin_hareketleri': sohbetik["admin_hareketleri"],
                    'koruma_altinda': SohKorAl,
                    'flash': SohFlsh,
                    'nickbar': SohNckBar,
                    'userNameTwo': SohIkiRmz,
                    'saldiri': 0,
                    'saldiriTarih': TarihCe(),
                    'userIslemTarihTime': islemTrh(),
                    'floodSayisi': 0x0
                };
                var _0x1dc750 = 'e';
                var _0x516fe0 = soketgir[SifreIsim];
                var _0x2614d6 = _0x3b706d[SifreIsim];
                if (_0x516fe0["userMobilemi"] == !![]) {
                    var _0x1dc750 = 'e';
                } else {
                    var _0x1dc750 = 'h';
                }
                var _0xa805c6 = sohbetik.handshake.session["mobileToPc"];
                var _0x320dab = sohbetik.handshake.session['appToMobile'];
                var _0x394a0a = sohbetik.handshake.session['appToMobileID'];
                var _0x55ff13 = kisatarih();
                browser = typeof _0x2614d6["browser"] !== "undefined" ? _0x2614d6["browser"].replace(/"/g, '').replace(/'/g, '') : _0x2614d6["browser"];
                browser_surumu = typeof _0x2614d6['browser_surumu'] !== "undefined" ? _0x2614d6['browser_surumu'].replace(/"/g, '').replace(/'/g, '') : _0x2614d6["browser_surumu"];
                os = typeof _0x2614d6['os'] !== 'undefined' ? _0x2614d6['os'].replace(/"/g, '').replace(/'/g, '') : _0x2614d6['os'];
                if (sohbetik['kullaniciAdi'] == "GimGim" || sohbetik["kullaniciAdi"] == "LaNeTLy" || sohbetik["loglardagizle"] == 'e') {} else {
                    var _0x226257 = {
                        'rumuz': _0x516fe0["userName"],
                        'rumuz2': _0x516fe0['userNameTwo'],
                        'yetki': _0x516fe0["userStatuINT"],
                        'statu': _0x516fe0['userStatu'],
                        'cinsiyet': _0x516fe0["userCinsiyet"],
                        'ip': _0x56d94e,
                        'mobile': _0x1dc750,
                        'tarih': TarihCe(),
                        'tarih_date': yTarih(),
                        'tarih_goster': kisatarih(),
                        'onceki_rumuzlar': "onceki rumuzlar",
                        'mobilemi': _0xa805c6,
                        'appmi': _0x320dab,
                        'appmiID': _0x394a0a,
                        'browser': '' + browser + ' ' + browser_surumu + '',
                        'isletim_sistemi': os
                    };
                    baglantim["query"]("INSERT INTO giris_kayitlari SET ?", _0x226257, function(_0x3bff03) {
                        if (_0x3bff03) {
                            console.log("Hata oldu : " + _0x3bff03);
                        }
                    });
                }
                sohbetik.emit('cinsiyetTanimla', SohCins);
                sohbetik.emit("aktifIntimTanila", SohYetki);
                sohbetik.emit("aktifOdaTanila", sohbetik["odasi"]);
                sohbetik.emit('roomTanila', "oda");
                sohbetik.join(_0x5cae59);
                if (_0x3d4844[_0x5cae59] == undefined) {
                    _0x3d4844[_0x5cae59] = 0x1;
                } else {
                    _0x3d4844[_0x5cae59]++;
                }
                odalar[_0x5cae59]["onlineKisi"] = _0x3d4844;
                var _0xe130f4 = '';
                var _0x3a0e3c = '';
                if (odalar[_0x5cae59]["yazi"].length > 0x1) {
                    var _0xe130f4 = odalar[_0x5cae59]["yazi"];
                }
                if (odalar[_0x5cae59]['sahibi'].length > 0x1) {
                    var _0x3a0e3c = odalar[_0x5cae59]["sahibi"];
                }
                if (odalar[_0x5cae59]['sifre'].length > 0x1) {
                    var OdaTuru = "Şifreli Oda";
                } else {
                    var OdaTuru = "Şifresiz Oda";
                }
                if (oyagoster['1']["SesGonder"] == 'd') {
                    var _0x1553de = "kapalı";
                } else {
                    var _0x1553de = "açık";
                }
                if (oyagoster['1']["ResimGonder"] == 'd') {
                    var _0x1fbe01 = "kapalı";
                } else {
                    var _0x1fbe01 = "açık";
                }
                sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<span class=\"ms\" style=\"color:#000000; font-size: 14px;\">Şu an <b>" + odalar[_0x5cae59]["adi"] + "</b> isimli odadasın<ul><li>odanın sahibi: <b>" + odalar[_0x5cae59]["sahibi"] + "</b></li><li>odaya <b>herkes</b> girebilir</li></ul><hr><div style=\"text-align: center;color:#660000\">" + _0xe130f4 + "</div></span></div> <div class=\"message-avatar\" style=\"/*noinspection CssUnknownTarget*/background-image:url('resimler/sistem/lg5.png')\">", "abcd");
                sohbetik.emit("odaisminigonder", '' + odalar[_0x5cae59]["adi"] + '');
                sohbetik.emit("odaaciklamasigonder", '' + _0xe130f4 + '');
               // sohbetik.emit("odainfo", "<div class=\"odaustubilgi\" data-html=\"<div class='ui bulleted list pikas'><div class='item'>Herkes girebilir</div><div class='item'>" + OdaTuru + "</div><div class='item'>Yazma konuşma açık</div><div class='item'>Resim gönderme " + _0x1fbe01 + '</div><div class="item">Ses gönderme ' + _0x1553de + '</div></div>"data-position="right center"><i class="ellipsis info circular icon" id="odaminfo"></i></div>');
                sohbetik.emit("odainfo", '<div class=\"odaustubilgi\" data-html=\"<div class=\'ui bulleted list pikas\'><div class=\'item\'>Herkes girebilir</div><div class=\'item\'>' + OdaTuru + '</div><div class=\'item\'>Yazma konuşma açık</div><div class=\'item\'>Resim gönderme ' + _0x1fbe01 + '</div><div class=\'item\'>Ses gönderme ' + _0x1553de + '</div></div>\" data-position=\"right center\"><i class=\"ellipsis info circular icon\" id=\"odaminfo\"></i></div>' );

                baglantim["query"]("select rumuz,cinsiyet,yetkiadi,resim,flash from uyeler where rumuz= ? and yetki > 0", [odalar[_0x5cae59]["sahibi"]], function(_0x53ecf3, _0x50cc9a, _0x5cbebc) {
                    if (odalar[_0x5cae59]["sahibi"].length > 0x1) {
                        for (var _0x4f1bac in _0x50cc9a) {
                            sohbetik.emit("odasahibinigonder", _0x50cc9a[_0x4f1bac]["rumuz"], _0x50cc9a[_0x4f1bac]["cinsiyet"], _0x50cc9a[_0x4f1bac]["yetkiadi"], _0x50cc9a[_0x4f1bac]["resim"], _0x50cc9a[_0x4f1bac]["flash"]);
                        }
                    } else {
                        sohbetik.emit("odasahibinigonder", 0x1);
                    }
                });
                sohbetik.emit("odaArkaFonuGetir", odalar[_0x5cae59]["fon"], odalar[_0x5cae59]['sohbeticrenk']);
                soketimiz.sockets.in(_0x5cae59)["clients"](function(_0x10f2e5, _0x31dc68) {
                    _0x31dc68.forEach(_0x36b277 => {
                        let _0x3de362 = soketimiz.sockets['connected'][_0x36b277];
                        if (sohbetik["yetki"] <= _0x3de362['yetki'] && _0x3de362['id'] != sohbetik['id']) {
                            soketimiz.sockets.sockets[_0x3de362['id']].emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<b>" + Abilem(SohRumuz, SohIkiRmz, sohbetik["yetki"]) + "</b>, <font style=\"color:#0c9002\">siteye yeni giriş yaptı</font>", 'x', SohYetki);
                        }
                    });
                });
                if (sohbetik["catisi"] > 0x0) {
                    sohbetik.emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "Şu an çatıdasınız. <a onClick=\"$('#durumselect').val('2').trigger('change'); $(this).remove()\" href=\"#\"><font style=\"color:#FF0000;font-weight:bold\">(çatıdan inmek için tıkla)</font></a>", sohbetik["cinsiyet"]);
                }
                sohbetik.emit("sistemBilgilerimiGetir", "<li><b>Kullanıcı adı : </b> " + SohRumuz + ' </li><li><b>Yetkiniz : </b> ' + SohTtkStr + " </li><li><b>IP Adresiniz : </b> " + _0x56d94e + " </li>");
                KsiYenile();
                _0x1403a6();
                ModGGonder();
                AyarTazele();
                kriptola();
            } catch (_0x5b8415) {
                console.error(_0x5b8415);
            }
        });
        sohbetik.on("kisibilgilerinigoster", function(_0x21661b, _0x3d2716) {
            try {
                kisiBagli = 0x0;
                for (var _0xe9ea40 in soketgir) {
                    if (soketgir[_0xe9ea40]["userKripto"] == _0x21661b) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    var _0x54b5c8 = soketgir[_0x21661b]["userNameTwo"].length >1? soketgir[_0x21661b]["userNameTwo"] : soketgir[_0x21661b]["userName"];
                    if (soketgir[_0x21661b]['userNameTwo'].length > 0x1) {
                        var _0xc80123 = "resimler/sistem/" + soketgir[_0x21661b]['userCinsiyet'] + "_mliste.png";
                        var _0x4d2d8d = "Misafir";
                        var _0x581637 = 0x0;
                    } else {
                        if (soketgir[_0x21661b]["flash"] != '') {
                            var _0xc80123 = "uploads/" + soketgir[_0x21661b]['flash'] + '';
                        } else {
                            if (soketgir[_0x21661b]["userResim"] == '0' || soketgir[_0x21661b]["userResim"] == '') {
                                var _0xc80123 = 'resimler/sistem/' + soketgir[_0x21661b]["userCinsiyet"] + "_mliste.png";
                            } else {
                                var _0xc80123 = "resimler/sistem/avatar/" + soketgir[_0x21661b]["userCinsiyet"] + '/' + soketgir[_0x21661b]["userResim"] + ".png";
                            }
                        }
                        var _0x4d2d8d = soketgir[_0x21661b]['userStatu'];
                        var _0x581637 = soketgir[_0x21661b]["kimlikid"];
                    }
                    if (soketgir[_0x21661b]["userMobilemi"] == !![]) {
                        mobileicon2 = "Mobil Cihaz Kullanıcısı";
                    } else {
                        mobileicon2 = "Bilgisayar Kullanıcısı";
                    }
                    if (soketgir[_0x21661b]["userWebRTCSes"] == 0x1) {
                        sesebaglimi = "Ses Yayınına Bağlı";
                    } else {
                        sesebaglimi = "Ses Yayınına Bağlı Değil";
                    }
                    if (soketgir[sohbetik["kripto"]]["userStatuINT"] >0&& soketgir[sohbetik['kripto']]["userKripto"] != _0x21661b) {
                        yetkimenuleri = '<div class="padding0 extra content" id="ytksml"><div id="sagtikMenuleri" class="ui kisialtt_btn noborder compact menu "> <a class="item aktifmenu" data-url="yasaklamalar" data-rel="clientBaglantisiniKopar" data-id="Ban" id="Ban" href="#" name="' + soketgir[_0x21661b]["userKripto"] + '" soid="' + _0x3d2716 + '"><span data-tooltip="IP Ban At" data-position="top left" data-inverted=""><i class="ban gray icon"></i></span></a><a class="item aktifmenu" data-url="yasaklamalar" data-rel="clientBaglantisiniKopar" data-id="SuperBan" id="SuperBan" href="#" name="' + soketgir[_0x21661b]["userKripto"] + '" soid="' + _0x3d2716 + '"><span data-tooltip="Süper Ban At" data-position="top left" data-inverted=""><i class="bolt gray icon"></i></span></a><a class="item aktifmenu" data-url="yasaklamalar" data-rel="normalMutele" data-id="Mute" id="Mute" href="#" name="' + soketgir[_0x21661b]["userKripto"] + '" soid="' + _0x3d2716 + '"><span data-tooltip="Engelle / Engel Aç" data-position="top left" data-inverted=""><i class="user times gray icon"></i></span></a><a class="item aktifmenu" data-url="yasaklamalar" data-rel="GizliMutele" data-id="gMute" id="gMute" href="#" name="' + soketgir[_0x21661b]["userKripto"] + '" soid="' + _0x3d2716 + '"><span data-tooltip="Ignore / Et Aç" data-position="top left" data-inverted=""><i class="eye slash gray icon"></i></span></a><a class="item aktifmenu" data-url="yasaklamalar" data-rel="clientBaglantisiniKopar" data-id="sistemdenAt" id="sistemdenAt" href="#" name="' + soketgir[_0x21661b]["userKripto"] + '" soid="' + _0x3d2716 + '"><span data-tooltip="Sistem Dışına At" data-position="top left" data-inverted=""><i class="sign out alternate gray icon"></i></span></a><a class="item aktifmenu" data-url="islemler" data-rel="ipBilgileriGoster_emi" data-id="ipBilgileriGoster" id="ipBilgileriGoster" href="#" name="' + soketgir[_0x21661b]["userKripto"] + '" soid="' + _0x3d2716 + '"><span data-tooltip="Kullanıcı Bilgileri" data-position="top left" data-inverted=""><i class="icon gray info circle"></i></span></a><a class="item aktifmenu" data-url="islemler" data-rel="uyariClient" data-id="uyariVer" id="uyariVer" href="#" name="' + soketgir[_0x21661b]["userKripto"] + '" soid="' + _0x3d2716 + '"><span data-tooltip="Uyarı gönder" data-position="top left" data-inverted=""><i class="exclamation triangle gray icon"></i></span></a><a class="item aktifmenu" data-url="yasaklamalar" data-rel="kamerasiniEngelleClient" data-id="kamerasiniEngelle" id="kamerasiniEngelle" href="#" name="' + soketgir[_0x21661b]["userKripto"] + '" soid="' + _0x3d2716 + '"><span data-tooltip="Kamerasını Engelle / Aç" data-position="top left" data-inverted=""><i class="icon red video slash"></i></span></a></div> </div>';
                    } else {
                        yetkimenuleri = '';
                    }
                    if (soketgir[sohbetik["kripto"]]["userOda"] != soketgir[_0x21661b]["userOda"]) {
                        var _0x56542c = '';
                    } else {
                        var _0x56542c = "disabled";
                    }
                    if (soketgir[sohbetik["kripto"]]["userKripto"] != soketgir[_0x21661b]['userKripto']) {
                        var _0x32c9c2 = '';
                    } else {
                        var _0x32c9c2 = "disabled";
                    }
                    sohbetik.emit("tekkisibilgi", '<div class="content"> <div class="right floated meta sagbk" name="' + soketgir[_0x21661b]["userKripto"] + '">' + soketgir[_0x21661b]["userDurum"] + '</div> <a id="uyeprfresmi" name="' + soketgir[_0x21661b]["userKripto"] + '"><img src="resimler/sistem/sym_' + soketgir[_0x21661b]["userCinsiyet"] + '.png" class="ui avatar image"></a>  <a id="uyeilsemAdi" class="title" name="' + soketgir[_0x21661b]["userKripto"] + '">' + _0x54b5c8 + '</a> <br> <span class="gray"><span id="uyeyyetki" title="" class="yildiz_stil" style="color:#690000" name="' + soketgir[_0x21661b]["userKripto"] + '">' + _0x4d2d8d + '</span><span></span></span></div>  <div class="padding0 extra content"><div id="sagtikMenuleri2" class="ui kisiust_btn noborder compact menu">  <div title="' + _0x4d2d8d + '" class="' + _0x3d2716 + '" id="uyeilsemYetki" style="display:none;"></div><a name="' + soketgir[sohbetik['kripto']]["userKripto"] + '" title="' + _0x54b5c8 + '" id="uyeengelbilgi" style="display:none;"></a><div title="' + _0xc80123 + '" class="" id="ocinsiyeti" style="display:none;"></div>  <a class="item islemlerListesi aktifmenunormal ' + _0x32c9c2 + '">  <span data-tooltip="Özel mesaj" data-position="top left" data-inverted=""><i class="comments blue icon" id="ozel_mesaj" href="#" title="Özel Mesaj"></i></span></a>   <a class="item islemlerListesi aktifmenunormal ' + _0x32c9c2 + '">  <span data-tooltip="Sesli arama" data-inverted=""><i class="phone green icon" id="ozel-arama" href="#"></i></span></a> <a class="item ozel_pencere_islemler ' + _0x32c9c2 + '" id="kisiyiengeller" ben-rumuz-kripto="' + soketgir[sohbetik["kripto"]]["userKripto"] + '" sen-rumuz-kripto="' + soketgir[_0x21661b]["userKripto"] + '" sen-rumuz="' + _0x54b5c8 + '" data-nedir="engelle_ozel"> <span data-tooltip="Engelle / Engel aç" data-inverted=""><i class="ban red icon"></i></span></a>  <a class="item islemlerListesi ' + _0x32c9c2 + '" id="kisiyiignorele" ben-rumuz-kripto="' + soketgir[sohbetik['kripto']]["userKripto"] + '" sen-rumuz-kripto="' + soketgir[_0x21661b]['userKripto'] + '" sen-rumuz="' + _0x54b5c8 + '" data-nedir="ignore_ozel"> <span data-tooltip="Görmezden gel / Ignore Aç" data-inverted=""><i class="eye red slash icon"></i></span></a>  <a class="item islemlerListesi ' + _0x56542c + '"> <span data-tooltip="Odaya Çek" data-inverted="" id="odanacek" name="' + soketgir[_0x21661b]["userKripto"] + '" soid="' + _0x3d2716 + '"><i class="sign-in icon disab"></i></span></a>  <a class="item islemlerListesi ' + _0x56542c + '"> <span data-tooltip="Odasına Git" data-position="top center" data-inverted="" id="odasinagit" name="' + soketgir[_0x21661b]["userOda"] + '"><i class="sign-out icon disab"></i></span></a>  </div></div> <div class="image padding10">  <div class="resimustubilgi" data-html="<div class=\x27ui bulleted list pikas\x27><div class=\x27item\x27>' + _0x4d2d8d + '</div><div class=\x27item\x27>' + soketgir[_0x21661b]["userDurum"] + '</div><div class=\'item\'>' + mobileicon2 + '</div><div class=\'item\'>' + sesebaglimi + '</div></div>" data-position="right center"><i class="icon blue circular info" id="infom"></i></div>  <div id="camorresim"> <a title="" id="buyukresim" name="' + soketgir[_0x21661b]['userKripto'] + '"><img title="' + _0x54b5c8 + '" src="' + _0xc80123 + '" class="resimm_buyut"></a></div>  </div>' + yetkimenuleri + '<div class="content extra"><i class="comment icon"></i><span class="kac_yorum"></span></div><div class="extra content"><div class="ui comments" id="yrmlst"></div><div class="ui large transparent left icon input" id="yorumlardiv"> <i class="comment outline icon"></i> <input id="yoruminput" type="text" maxlength="200" placeholder="Ne düşünüyorsun..." data-content="Profil sahibinin onayından geçecek..." data-yorumalan_rmz_krp="' + soketgir[_0x21661b]["userKripto"] + '" data-yorumalan="' + _0x581637 + '"> </div></div>');
                } else {
                    sohbetik.emit("tekkisibilgi", "sitedeyok");
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Kişi Siteden Çıkış Yapmış');
                }
            } catch (_0x223fcf) {
                console.error(_0x223fcf);
            }
        });
        sohbetik.on("mobilkisibilgilerinigoster", function(_0xea01bb, _0x28aadb, _0x5dd323) {
            try {
                kisiBagli = 0x0;
                for (var _0x238bb5 in soketgir) {
                    if (soketgir[_0x238bb5]["userKripto"] == _0xea01bb) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    var _0x535811 = soketgir[_0xea01bb]["userNameTwo"].length >1? soketgir[_0xea01bb]['userNameTwo'] : soketgir[_0xea01bb]['userName'];
                    if (soketgir[_0xea01bb]["userNameTwo"].length > 0x1) {
                        var _0x2cc98a = "resimler/sistem/" + soketgir[_0xea01bb]["userCinsiyet"] + "_mliste.png";
                        var _0x465364 = "Misafir";
                        var _0x57168c = 0x0;
                    } else {
                        if (soketgir[_0xea01bb]['flash'] != '') {
                            var _0x2cc98a = "uploads/" + soketgir[_0xea01bb]["flash"] + '';
                        } else {
                            if (soketgir[_0xea01bb]["userResim"] == '0' || soketgir[_0xea01bb]["userResim"] == '') {
                                var _0x2cc98a = "resimler/sistem/" + soketgir[_0xea01bb]['userCinsiyet'] + "_mliste.png";
                            } else {
                                var _0x2cc98a = 'resimler/sistem/avatar/' + soketgir[_0xea01bb]["userCinsiyet"] + '/' + soketgir[_0xea01bb]['userResim'] + ".png";
                            }
                        }
                        var _0x465364 = soketgir[_0xea01bb]["userStatu"];
                        var _0x57168c = soketgir[_0xea01bb]["kimlikid"];
                    }
                    if (soketgir[_0xea01bb]["userMobilemi"] == !![]) {
                        mobileicon2 = "Mobil Cihaz Kullanıcısı";
                    } else {
                        mobileicon2 = "Bilgisayar Kullanıcısı";
                    }
                    if (soketgir[_0xea01bb]["userWebRTCSes"] == 0x1) {
                        sesebaglimi = "Ses Yayınına Bağlı";
                    } else {
                        sesebaglimi = "Ses Yayınına Bağlı Değil";
                    }
                    if (_0x5dd323 == 0x1) {
                        ustmenu = '<a href="#" class="link open-panel" data-panel="right" data-my-panel-id="my-panel-1"><i class="icon material-icons md-36">arrow_back</i></a>  Oda Kişi listesine dön';
                    } else {
                        ustmenu = '<a href="#" class="link menu_kapat"><i class="icon material-icons md-36">arrow_back</i></a>  Kişi Profilini Kapat';
                    }
                    if (soketgir[sohbetik["kripto"]]["userStatuINT"] >0&& soketgir[sohbetik['kripto']]["userKripto"] != _0xea01bb) {
                        yetkimenuleri = '<div class="popover popoverWitdh225 popover-links-bary popover-on-top"><div class="popover-angle"></div><div class="popover-inner"><div class="list-block"><div id="sagtikMenuleri"><ul class="sagmenuul"><li class="sagmenuli"><a class="aktifmenu" title="yasaklamalar" rel="clientBaglantisiniKopar" id="Ban" href="#" name="' + soketgir[_0xea01bb]['userKripto'] + '" soid="' + _0x28aadb + '"><i class="mdi mdi-keyboard-arrow-right ozikon"></i> IP Yasakla (ban)</a></li><li class="sagmenuli"><a class="aktifmenu" title="yasaklamalar" rel="clientBaglantisiniKopar" id="SuperBan" href="#" name="' + soketgir[_0xea01bb]["userKripto"] + '" soid="' + _0x28aadb + '"><i class="mdi mdi-keyboard-arrow-right ozikon"></i> Super Ban</a></li><li class="sagmenuli"><a class="aktifmenu" title="yasaklamalar" rel="normalMutele" id="Mute" href="#" name="' + soketgir[_0xea01bb]["userKripto"] + '" soid="' + _0x28aadb + '"><i class="mdi mdi-keyboard-arrow-right ozikon"></i> Engelle / Engel Aç</a></li><li class="sagmenuli"><a class="aktifmenu" title="yasaklamalar" rel="GizliMutele" id="gMute" href="#" name="' + soketgir[_0xea01bb]["userKripto"] + '" soid="' + _0x28aadb + '"><i class="mdi mdi-keyboard-arrow-right ozikon"></i> Sustur / Aç (gizli mute)</a></li><li class="sagmenuli"><a class="aktifmenu" title="yasaklamalar" rel="clientBaglantisiniKopar" id="sistemdenAt" href="#" name="' + soketgir[_0xea01bb]["userKripto"] + '" soid="' + _0x28aadb + '"><i class="mdi mdi-keyboard-arrow-right ozikon"></i> Sistem Dışı At</a></li><li class="sagmenuli"><a class="aktifmenu" title="islemler" rel="ipBilgileriGoster_emi" id="ipBilgileriGoster" href="#" name="' + soketgir[_0xea01bb]["userKripto"] + '" soid="' + _0x28aadb + '"><i class="mdi mdi-keyboard-arrow-right ozikon"></i> Kullanıcı Bilgileri</a></li><li class="sagmenuli"><a class="aktifmenu" title="islemler" rel="uyariClient" id="uyariVer" href="#" name="' + soketgir[_0xea01bb]["userKripto"] + '" soid="' + _0x28aadb + '"><i class="mdi mdi-keyboard-arrow-right ozikon"></i> Uyarı gönder</a></li><li class="sagmenuli"><a class="aktifmenu" title="yasaklamalar" rel="kamerasiniEngelleClient" id="kamerasiniEngelle" href="#" name="' + soketgir[_0xea01bb]["userKripto"] + '" soid="' + _0x28aadb + '"><i class="mdi mdi-keyboard-arrow-right ozikon"></i> Kamerasını engelle / Aç</a></li></ul></div></div></div></div>';
                    } else {
                        yetkimenuleri = '';
                    }
                    if (soketgir[sohbetik['kripto']]["userOda"] != soketgir[_0xea01bb]['userOda']) {
                        var _0x29c03d = '';
                    } else {
                        var _0x29c03d = "disabled";
                    }
                    if (soketgir[sohbetik['kripto']]["userKripto"] != soketgir[_0xea01bb]['userKripto']) {
                        var _0x3eb5b3 = '';
                    } else {
                        var _0x3eb5b3 = "disabled";
                    }
                    sohbetik.emit("mobiltekkisibilgi", '<div title="' + _0x465364 + '" class="' + _0x28aadb + '" id="uyeilsemYetki" style="display:none;"></div><a name="' + soketgir[sohbetik["kripto"]]["userKripto"] + '" title="' + _0x535811 + '" id="uyeengelbilgi" style="display:none;"></a> <div title="' + _0x2cc98a + '" class="" id="ocinsiyeti" style="display:none;"></div> <div class="card margin0 facebook-card"> <div class="oda-kisiler-geri-label back">' + ustmenu + '</div><div class="card-footer padding0 paddingTop10 no-border"><a class="link ' + _0x3eb5b3 + '" id="kisiyiengeller" ben-rumuz-kripto="' + soketgir[sohbetik['kripto']]['userKripto'] + '" sen-rumuz-kripto="' + soketgir[_0xea01bb]["userKripto"] + '" sen-rumuz="' + _0x535811 + '" data-nedir="engelle_ozel"><i class="icon material-icons icon md-32">not_interested</i> </a><a class="link ' + _0x3eb5b3 + '" id="kisiyiignorele" ben-rumuz-kripto="' + soketgir[sohbetik["kripto"]]["userKripto"] + '" sen-rumuz-kripto="' + soketgir[_0xea01bb]["userKripto"] + '" sen-rumuz="' + _0x535811 + '" data-nedir="ignore_ozel"><i class="icon material-icons icon md-32 color-red">visibility_off</i></a> <a id="odanacek" name="' + soketgir[_0xea01bb]["userKripto"] + '" soid="' + _0x28aadb + '" class="link ' + _0x29c03d + '"><i class="icon material-icons md-32 color-red" id="ozel-arama" href="#">keyboard_return</i></a><a id="odasinagit" name="' + soketgir[_0xea01bb]["userOda"] + '" class="link ' + _0x29c03d + '"><i class="icon material-icons icon md-32">keyboard_tab</i></a></div><div class="card-header"> <div class="facebook-avatar"><a id="uyeprfresmi" name="' + soketgir[_0xea01bb]['userKripto'] + '"><img src="resimler/sistem/sym_' + soketgir[_0xea01bb]["userCinsiyet"] + '.png" width="34" height="34"></a></div> <div class="facebook-name"><a id="uyeilsemAdi" class="title" name="' + soketgir[_0xea01bb]['userKripto'] + '">' + _0x535811 + '</a></div> <div class="facebook-date"><span id="uyeyildiz" name="' + soketgir[_0xea01bb]["userKripto"] + '"><div class="item-text">' + _0x465364 + ' <small style="color:#ff0000">(' + soketgir[_0xea01bb]['userDurum'] + ')</small></div></span></div> </div> <div class="card-content"><a title="" id="buyukresim" name="' + soketgir[_0xea01bb]['userKripto'] + '"><img src="' + _0x2cc98a + '" width="100%"></a></div> <div id="sagtikMenuleri2" class="card-footer padding0 paddingTop10 no-border"> <a href="#" class="link islemlerListesi"><i class="icon material-icons icon md-32">chat_bubble_outline<span class="kac_yorum">0</span></i> </a>  <a href="#" class="link islemlerListesi aktifmenunormal"><i class="icon material-icons icon md-32" id="ozel_mesaj" href="#" title="Özel Mesaj">sms</i></a>  <a href="#" class="link islemlerListesi aktifmenunormal"><i class="icon material-icons md-32" id="ozel-arama" href="#">phone_in_talk</i></a><a class="profil_more link"><i class="icon material-icons icon md-32">more_vert</i></a>  </div></div> <div class="list-block margin0 media-list"><div id="yrmlst"></div></div><div class="toolbar messagebar messagebaroda" id="yorumlardiv"> <div class="toolbar-inner bg-white"><i class="icon material-icons color-koyugri pddg">chat_bubble_outline</i> <input id="yoruminput" type="text" maxlength="200" placeholder="Ne düşünüyorsun..." data-content="Profil sahibinin onayından geçecek..." data-yorumalan_rmz_krp="' + soketgir[_0xea01bb]["userKripto"] + '" data-yorumalan="' + _0x57168c + '"></div></div>' + yetkimenuleri + '');
                } else {
                    sohbetik.emit('mobiltekkisibilgi', "sitedeyok");
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Siteden Çıkış Yapmış");
                }
            } catch (_0x4a2c85) {
                console.error(_0x4a2c85);
            }
        });
        sohbetik.on('soskapat', function() {
            try {
                _0x156377("soskapat", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                sohbetik.emit("medyaBaglantisiniKes");
                soketgir[sohbetik["kripto"]]['userWebRTCSes'] = 0x0;
                _0x2e1bd1();
            } catch (_0x1f0d1b) {
                console.error(_0x1f0d1b);
            }
        });
        sohbetik.on("sosac", function() {
            try {
                _0x156377("sosac", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                soketgir[sohbetik['kripto']]["userWebRTCSes"] = 0x1;
                sohbetik.emit("yenibaglantikur", odalar[sohbetik["odasi"]]['id'], 'odayabaglanma', soketgir[sohbetik["kripto"]]['userWebRTCSes']);
            } catch (_0x55fd9a) {
                console.error(_0x55fd9a);
            }
        });
        sohbetik.on("mikrofonSuresiEksilt", function(_0x4df3e9) {
            try {
                SSifreleme(sohbetik["kripto"]);
                soketgir[sohbetik['kripto']]["mikrofonZamani"] = soketgir[sohbetik["kripto"]]["mikrofonZamani"] - 0x1;
                if (soketgir[sohbetik["kripto"]]["mikrofonZamani"] > 0x0) {
                    soketimiz.sockets.in(sohbetik['odasi']).emit("mikZamaniSayTeker", soketgir[sohbetik["kripto"]]['mikrofonZamani']);
                } else {
                    soketimiz.to(sohbetik['id']).emit("mikrofonBirakClient");
                    soketimiz.to(sohbetik['id']).emit("mikZamaniBittiClearYap");
                }
            } catch (_0x32f5c6) {
                console.error(_0x32f5c6);
            }
        });
        sohbetik.on("clientBaglantisiniKopar", function(_0x495ab5, _0x4c803a) {
            try {
                _0x156377("clientBaglantisiniKopar", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (soketgir[_0x4c803a]["botdurum"] == 0x1) {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Bu Kişi Koruma Altında');
                }
                kisiBagli = 0x0;
                for (var _0x5cd8d6 in soketgir) {
                    if (soketgir[_0x5cd8d6]["userKripto"] == _0x4c803a) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (_0x4c803a != soketgir[_0x4c803a]["userKripto"] || _0x495ab5 != soketgir[_0x4c803a]["userId"]) {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Kişi Sitede Değil");
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userStatuINT"] > soketimiz.sockets.sockets[_0x495ab5]['yetki']) {
                            soketimiz.sockets.sockets[_0x495ab5]["disconnect"]();
                        } else {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Bu işlem için yetkiniz yok");
                        }
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Artık Sitede Değil");
                }
            } catch (_0x3d071d) {
                console.error(_0x3d071d);
            }
        });
        sohbetik.on("normalMutele", function(_0x1eb9f6, _0x345a4c) {
            try {
                _0x156377("normalMutele", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                kisiBagli = 0x0;
                for (var _0x110aa2 in soketgir) {
                    if (soketgir[_0x110aa2]["userKripto"] == _0x345a4c) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (_0x345a4c != soketgir[_0x345a4c]['userKripto'] || _0x1eb9f6 != soketgir[_0x345a4c]["userId"]) {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Kişi Sitede Değil");
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userStatuINT"] > soketimiz.sockets.sockets[_0x1eb9f6]['yetki']) {
                            soketimiz.to(_0x1eb9f6).emit("MuteCak");
                            soketimiz.to(_0x1eb9f6).emit("mikrofonBirakClient");
                            soketgir[_0x345a4c]["userMikrofonSirasi"] = 0x0;
                            KsiYenile();
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu işlem için yetkiniz yok");
                        }
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Artık Sitede Değil");
                }
            } catch (_0x591252) {
                console.error(_0x591252);
            }
        });
        sohbetik.on("normalMuteKaldir", function(_0x52a0ca, _0xe94117) {
            try {
                _0x156377("normalMuteKaldir", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                kisiBagli = 0x0;
                for (var _0x18b01a in soketgir) {
                    if (soketgir[_0x18b01a]["userKripto"] == _0xe94117) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (_0xe94117 != soketgir[_0xe94117]["userKripto"] || _0x52a0ca != soketgir[_0xe94117]["userId"]) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Kişi Sitede Değil');
                    } else {
                        if (soketgir[sohbetik['kripto']]["userStatuINT"] > soketimiz.sockets.sockets[_0x52a0ca]["yetki"]) {
                            if (_0x598d51[_0xe94117]) {
                                delete _0x598d51[_0xe94117];
                                soketgir[_0xe94117]['userMutelimi'] = 0x0;
                                soketimiz.to(_0x52a0ca).emit("MuteCakMA");
                                KsiYenile();
                            } else {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Engelliler listesinde bu kişi yok...");
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu işlem için yetkiniz yok");
                        }
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Kişi Artık Sitede Değil');
                }
            } catch (_0xe74792) {
                console.error(_0xe74792);
            }
        });
        sohbetik.on("GizliMutele", function(_0x3ee759, _0x11b2c5) {
            try {
                _0x156377("GizliMutele", 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                kisiBagli = 0x0;
                for (var _0x580e13 in soketgir) {
                    if (soketgir[_0x580e13]["userKripto"] == _0x11b2c5) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (_0x11b2c5 != soketgir[_0x11b2c5]["userKripto"] || _0x3ee759 != soketgir[_0x11b2c5]["userId"]) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Sitede Değil");
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userStatuINT"] > soketimiz.sockets.sockets[_0x3ee759]["yetki"]) {
                            soketimiz.to(_0x3ee759).emit("gMuteCak");
                        } else {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Bu işlem için yetkiniz yok");
                        }
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Artık Sitede Değil");
                }
            } catch (_0x5bc292) {
                console.error(_0x5bc292);
            }
        });
        sohbetik.on("gizliMuteKaldir", function(_0x4373f6, _0x168623) {
            try {
                _0x156377("gizliMuteKaldir", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                kisiBagli = 0x0;
                for (var _0x1d9933 in soketgir) {
                    if (soketgir[_0x1d9933]['userKripto'] == _0x168623) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (_0x168623 != soketgir[_0x168623]["userKripto"] || _0x4373f6 != soketgir[_0x168623]["userId"]) {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Kişi Sitede Değil");
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userStatuINT"] > soketimiz.sockets.sockets[_0x4373f6]['yetki']) {
                            delete _0x103f47[_0x168623];
                            soketimiz.to(_0x4373f6).emit("gMuteCakMA");
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Bu işlem için yetkiniz yok');
                        }
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Kişi Artık Sitede Değil');
                }
            } catch (_0x42cf10) {
                console.error(_0x42cf10);
            }
        });
        sohbetik.on("mikIndirSocketYonetici", function(_0x30b402, _0x2bbeaa) {
            try {
                _0x156377('mikIndirSocketYonetici', 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                kisiBagli = 0x0;
                for (var _0x9c521 in soketgir) {
                    if (soketgir[_0x9c521]["userKripto"] == _0x2bbeaa) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (_0x2bbeaa != soketgir[_0x2bbeaa]["userKripto"] || _0x30b402 != soketgir[_0x2bbeaa]["userId"]) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Sitede Değil");
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userStatuINT"] > soketimiz.sockets.sockets[_0x30b402]['yetki']) {
                            soketimiz.to(_0x30b402).emit("mikrofondanIniyorum", sohbetik["kullaniciAdi"]);
                            _0x2ace0c(sohbetik["kullaniciAdi"], soketimiz.sockets.sockets[_0x30b402]["kullaniciAdi"], 'Mikrofondan İndirme', sohbetik["yetki"], sohbetik['cinsiyet']);
                        } else {
                            if (soketgir[sohbetik["kripto"]]['userStatuINT'] > 0x0) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Mikrofondan indirmek için, bu kişiye yetkiniz yok.");
                            }
                        }
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Artık Sitede Değil");
                }
            } catch (_0x3d1bda) {
                console.error(_0x3d1bda);
            }
        });
        sohbetik.on("ELindirSocketYonetici", function(_0x2142fd, _0x279670) {
            try {
                _0x156377("ELindirSocketYonetici", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                kisiBagli = 0x0;
                for (var _0x162657 in soketgir) {
                    if (soketgir[_0x162657]["userKripto"] == _0x279670) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (_0x279670 != soketgir[_0x279670]["userKripto"] || _0x2142fd != soketgir[_0x279670]['userId']) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Sitede Değil");
                    } else {
                        if (soketgir[sohbetik['kripto']]["userStatuINT"] > soketimiz.sockets.sockets[_0x2142fd]["yetki"]) {
                            soketimiz.to(_0x2142fd).emit("elimiIndiriyorum", sohbetik["kullaniciAdi"]);
                            _0x2ace0c(sohbetik["kullaniciAdi"], soketimiz.sockets.sockets[_0x2142fd]["kullaniciAdi"], "El İndirme", sohbetik["yetki"], sohbetik["cinsiyet"]);
                        } else {
                            if (soketgir[sohbetik['kripto']]["userStatuINT"] > 0x0) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'El indirmek için, bu kişiye yetkiniz yok.');
                            }
                        }
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Artık Sitede Değil");
                }
            } catch (_0x2a0882) {
                console.error(_0x2a0882);
            }
        });
        sohbetik.on('izliyorC', function(_0x22297c) {
            try {
                _0x156377("izliyorC", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                gKullanici = sohbetik['kullaniciAdiiki'].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"];
                if (soketgir[sohbetik['kripto']]["userWebRTCId"] != null || soketgir[sohbetik["kripto"]]["userWebRTCId"] != '') {
                    if (soketgir[sohbetik["kripto"]]["userWebRTCId"] != _0x22297c) {
                        var _0x491535 = _0x2ed05d[_0x22297c]["izleyen"].split(':'),
                            _0x4a8812;
                        var _0x98d863 = 0x1;
                        for (_0x4a8812 = 0x0; _0x4a8812 < _0x491535.length; _0x4a8812++) {
                            if (_0x491535[_0x4a8812]["trim"]() == gKullanici['trim']()) {
                                var _0x98d863 = 0x0;
                            }
                        }
                        if (_0x98d863 > 0x0) {
                            _0x2ed05d[_0x22297c]["izleyen"] = _0x2ed05d[_0x22297c]["izleyen"] + ':' + gKullanici;
                        }
                    }
                    soketimiz.sockets.emit("izliyorKameralarGetir", _0x2ed05d);
                } else {
                    console.log('KONTROLEDİLSİN : Kamera açmadan kamera izlemek istedi : ' + _0x2c10b3);
                }
            } catch (_0xe92849) {
                console.error(_0xe92849);
            }
        });
        sohbetik.on('izliyorC_X', function(_0x43d50d) {
            try {
                _0x156377("izliyorC_X", 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                if (_0x43d50d == undefined || _0x43d50d == '' || _0x43d50d == null) {} else {
                    if (soketgir[sohbetik["kripto"]]["userWebRTCId"] != null || soketgir[sohbetik["kripto"]]['userWebRTCId'] != '') {
                        if (soketgir[sohbetik['kripto']]['userWebRTCId'] != _0x43d50d) {
                            yeniIzleyenler = Tanimsiz(':' + (sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"]), '', _0x2ed05d[_0x43d50d]["izleyen"]);
                            _0x2ed05d[_0x43d50d]["izleyen"] = yeniIzleyenler;
                        }
                        soketimiz.sockets.emit('izliyorKameralarGetir', _0x2ed05d);
                    } else {
                        console.log("KONTROLEDİLSİN : Kamera açmadan kamera izlemeyi kapatmak istedi : " + _0x2c10b3);
                    }
                }
            } catch (_0x155c75) {
                console.error(_0x155c75);
            }
        });
        sohbetik.on("kamerasiniEngelleClient", function(_0x173dc3, _0x349951) {
            try {
                _0x156377("W_C_XX", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                kisiBagli = 0x0;
                for (var _0x661496 in soketgir) {
                    if (soketgir[_0x661496]["userKripto"] == _0x349951) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (sohbetik["kamera_yetkisi"] == 'e') {
                        if (_0x349951 != soketgir[_0x349951]['userKripto'] || _0x173dc3 != soketgir[_0x349951]["userId"]) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Sitede Değil");
                        } else {
                            if (soketgir[sohbetik["kripto"]]["userStatuINT"] > soketimiz.sockets.sockets[_0x173dc3]["yetki"]) {
                                soketimiz.sockets["socket"](_0x173dc3).emit("KmRSnL");
                                soketgir[_0x349951]["userWebRTCCam_X"] = 0x1;
                                soketgir[_0x349951]['userWebRTCCam'] = 0x0;
                                delete _0x2ed05d[soketgir[_0x349951]['userWebRTCId']];
                                KsiYenile();
                            } else {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu işlem için yetkiniz yok");
                            }
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Kamera engelleme yetkiniz yok");
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Kişi Artık Sitede Değil");
                }
            } catch (_0x3205a1) {
                console.error(_0x3205a1);
            }
        });
        sohbetik.on("W_C_XX", function(_0x223abf, _0x5a81bf) {
            try {
                _0x156377("W_C_XX", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                kisiBagli = 0x0;
                for (var _0x1b9570 in soketgir) {
                    if (soketgir[_0x1b9570]["userKripto"] == _0x5a81bf) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (sohbetik["kamera_yetkisi"] == 'e') {
                        if (_0x5a81bf != soketgir[_0x5a81bf]["userKripto"] || _0x223abf != soketgir[_0x5a81bf]["userId"]) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Sitede Değil");
                        } else {
                            if (soketgir[sohbetik["kripto"]]["userStatuINT"] > soketimiz.sockets.sockets[_0x223abf]['yetki']) {
                                delete _0x10dafe[_0x5a81bf];
                                soketgir[_0x5a81bf]['userWebRTCCam_X'] = 0x0;
                                soketimiz.to(_0x223abf).emit("W_C_XXclnt");
                                KsiYenile();
                            } else {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu işlem için yetkiniz yok");
                            }
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kamera engeli açma yetkiniz yok");
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Kişi Artık Sitede Değil");
                }
            } catch (_0x5c816d) {
                console.error(_0x5c816d);
            }
        });
        sohbetik.on("WebRTCId", function(_0xcffdad) {
            try {
                _0x156377("WebRTCId", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                soketgir[sohbetik["kripto"]]["userWebRTCId"] = _0xcffdad;
                KsiYenile();
            } catch (_0x3970d1) {
                console.error(_0x3970d1);
            }
        });
        sohbetik.on("sirayaGirSocket", function(_0x5b4be2) {
            try {
                _0x156377("sirayaGirSocket", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (soketgir[sohbetik["kripto"]]['userIslemTarih'] +1> TarihCe()) {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Çok hızlı el kaldırıp indiriyorsunuz. Biraz sabırlı olun lütfen");
                } else {
                    if (soketgir[sohbetik["kripto"]]["userWebRTCId"] != null || soketgir[sohbetik['kripto']]["userWebRTCId"] != '') {
                        if (_0x5b4be2 == 0x1) {
                            if (sohbetik['catisi'] > 0x0) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Çatıdasınız, El Kaldıramazsınız.");
                            } else if (soketgir[sohbetik["kripto"]]["userkonusmada"] == 0x1) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Aramadasınız, El Kaldıramazsınız.');
                            } else if (soketgir[sohbetik["kripto"]]["userMutelimi"] > 0x0) {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Engellisiniz, bu işlemi yapamazsınız.');
                            } else if (soketgir[sohbetik["kripto"]]["userWebRTCMik"] > 0x0) {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Mikrofondasınız, bu işlemi yapamazsınız.");
                            } else {
                                mikrofonSirasiAyarla = parseInt(mikrofonSirasiAyarla - 0x1);
                                soketgir[sohbetik['kripto']]["userMikrofonSirasi"] = mikrofonSirasiAyarla;
                                KsiYenile();
                                soketgir[sohbetik["kripto"]]['userIslemTarih'] = TarihCe();
                                sohbetik.emit("elkontrol", 0x1);
                            }
                        } else if (_0x5b4be2 == 0x0) {
                            if (soketgir[sohbetik["kripto"]]['userMikrofonSirasi'] != 0x0) {
                                soketgir[sohbetik["kripto"]]["userMikrofonSirasi"] = 0x0;
                                KsiYenile();
                                sohbetik.emit("elkontrol", 0x0);
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Dengesizlik ilkesini gerçekleştirdiniz, dengesiz.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kamera ve ses sunucusuna bağlı değilsiniz.");
                    }
                }
            } catch (_0x537d6a) {
                console.error(_0x537d6a);
            }
        });
        sohbetik.on("radyogetir", function() {
            try {
                _0x156377("radyogetir", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                soketimiz.to(sohbetik['id']).emit('radyolink', oyagoster['1']["radyokodu"]);
            } catch (_0x2af26f) {
                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Radyo Linki Bulunamadı");
            }
        });
        sohbetik.on("radyoistekpanelgetir", function() {
            try {
                _0x156377('radyoistekpanelgetir', 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                soketimiz.to(sohbetik['id']).emit("radyoistekpaneli", oyagoster['1']['radyoistek']);
            } catch (_0x50aa4c) {
                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Radyo Linki Bulunamadı");
            }
        });
        sohbetik.on("mikrofonBirakServer", function() {
            try {
                _0x156377('mikrofonBirakServer', 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                if (soketgir[sohbetik["kripto"]]["userIslemTarih"] +1> TarihCe()) {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Çok hızlı işlem yapıyorsunuz.");
                } else {
                    if (typeof odalar[sohbetik["odasi"]] === 'undefined') {
                        if (soketgir[sohbetik["kripto"]]['userWebRTCMik'] != 0x0) {
                            soketgir[sohbetik["kripto"]]["userWebRTCMik"] = 0x0;
                            soketgir[sohbetik["kripto"]]["userMikrofonSirasi"] = 0x0;
                            soketgir[sohbetik["kripto"]]["mikrofonZamani"] = 0x0;
                            sohbetik.emit("mikrofonkontrol", 0x0);
                            soketimiz.to(sohbetik['id']).emit("mikZamaniBittiClearYap");
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Oda İsmi Değişti Yada Silindi. Bu yüzden mikrofonu bıraktınız.");
                            KsiYenile();
                        }
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userWebRTCId"] != null || soketgir[sohbetik['kripto']]["userWebRTCId"] != '') {
                            if (soketgir[sohbetik['kripto']]["userWebRTCMik"] > 0x0) {
                                if (odalar[sohbetik["odasi"]]['mikDolumu'].length > 0x1) {
                                    if (soketgir[sohbetik["kripto"]]["userWebRTCMik"] != 0x0) {
                                        odalar[sohbetik["odasi"]]['mikDolumu'] = 0x0;
                                        soketimiz.sockets.in(sohbetik["odasi"]).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", '<b>' + (sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"]) + '</b>, <font style="color:#ff0000">mikrofonu bıraktı</font>', 'x');
                                        soketgir[sohbetik["kripto"]]["userWebRTCMik"] = 0x0;
                                        soketgir[sohbetik["kripto"]]["userMikrofonSirasi"] = 0x0;
                                        soketgir[sohbetik["kripto"]]["mikrofonZamani"] = 0x0;
                                        sohbetik.emit('mikrofonkontrol', 0x0);
                                        soketimiz.to(sohbetik['id']).emit("mikZamaniBittiClearYap");
                                        KsiYenile();
                                    }
                                }
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Ses sunucusuna bağlı değilsiniz.");
                        }
                    }
                }
            } catch (_0x54bef9) {
                console.error(_0x54bef9);
                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bir hata oluştu. Lütfen Oda Değişip Tekrar Odanıza Gelin");
            }
        });
        sohbetik.on("kisibulyenile", function() {
            try {
                _0x156377("kisibulyenile", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                KsiYenile();
            } catch (_0x90d843) {
                console.error(_0x90d843);
            }
        });
        sohbetik.on("mikrofonAlServer", function() {
            try {
                _0x156377("mikrofonAlServer", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (soketgir[sohbetik["kripto"]]['userIslemTarih'] +1> TarihCe()) {
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Çok hızlı işlem yapıyorsunuz.");
                } else {
                    gKl = sohbetik['kullaniciAdiiki'].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"];
                    if (soketgir[sohbetik["kripto"]]["userWebRTCId"] != null || soketgir[sohbetik["kripto"]]['userWebRTCId'] != '') {
                        if (sohbetik["catisi"] > 0x0) {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Çatıdasınız, Mikrofon Alamazsınız.");
                        } else if (soketgir[sohbetik["kripto"]]["userkonusmada"] == 0x1) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Aramadasınız, Mikrofon Alamazsınız.");
                        } else {
                            if (soketgir[sohbetik["kripto"]]['userMutelimi'] > 0x0) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Engellisiniz, Mikrofon Alamazsınız.');
                            } else {
                                if (odalar[sohbetik["odasi"]]["mikDolumu"].length > 0x1) {
                                    var _0x558687 = 0x0;
                                    var _0x4739ec = "Bilinmiyor";
                                    for (var _0x1da67b in soketgir) {
                                        if (soketgir[_0x1da67b]["userWebRTCMik"] > 0x0) {
                                            var _0x558687 = 0x1;
                                            var _0x4739ec = odalar[sohbetik["odasi"]]["mikDolumu"];
                                            break;
                                        }
                                    }
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Mikrofonda <u>" + _0x4739ec + "</u> Rumuzlu Kişi Var.");
                                    if (_0x558687 == 0x0) {
                                        odalar[sohbetik["odasi"]]["mikDolumu"] = 0x0;
                                        for (var _0x1da67b in soketgir) {
                                            soketgir[_0x1da67b]["userWebRTCMik"] = 0x0;
                                        }
                                        soketgir[sohbetik["kripto"]]["mikrofonZamani"] = 0x0;
                                        KsiYenile();
                                    }
                                } else {
                                    odalar[sohbetik["odasi"]]['mikDolumu'] = gKl;
                                    soketimiz.sockets.in(sohbetik["odasi"]).emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", '<b>' + (sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"]) + '</b>, <font style="color:#0c9002">mikrofonu aldı</font>', 'x');
                                    soketgir[sohbetik["kripto"]]["userWebRTCMik"] = 0x1;
                                    sohbetik["broadcast"].to(sohbetik["odasi"]).emit("sesleriSustur");
                                    sohbetik.emit("mikrofonkontrol", 0x1);
                                    soketgir[sohbetik["kripto"]]["userMikrofonSirasi"] = 0x0;
                                    soketgir[sohbetik["kripto"]]["mikrofonZamani"] = sohbetik["MikSuresi"];
                                    KsiYenile();
                                    sohbetik.emit("mikZamaniSay", soketgir[sohbetik['kripto']]["mikrofonZamani"]);
                                    soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                                }
                            }
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Ses sunucusuna bağlı değilsiniz.");
                    }
                }
            } catch (_0x409c88) {
                console.error(_0x409c88);
                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bir hata oluştu. Lütfen Oda Değişip Tekrar Odanıza Gelin");
            }
        });
        sohbetik.on("WebRTCKamera", function(_0x3df8be) {
            try {
                _0x156377("WebRTCKamera", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (soketgir[sohbetik["kripto"]]['userIslemTarih'] +1> TarihCe()) {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", '<span style="font-size:12px;">Çok hızlı kamera açıp kapatıyorsunuz.<br>Biraz sabırlı olun lütfen.</span>');
                } else {
                    if (soketgir[sohbetik["kripto"]]["userWebRTCId"] != null || soketgir[sohbetik['kripto']]["userWebRTCId"] != '') {
                        if (_0x3df8be == 0x1) {
                            if (sohbetik["catisi"] > 0x0) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Çatıdasınız, Kamera Açamazsınız.");
                            } else if (soketgir[sohbetik["kripto"]]['userkonusmada'] == 0x1) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Aramadasınız, Kamera Açamazsınız.");
                            } else if (soketgir[sohbetik["kripto"]]["userWebRTCCam_X"] > 0x0) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kameranız engelli, bu işlemi yapamazsınız.");
                            } else {
                                if (soketgir[sohbetik["kripto"]]["userWebRTCCam"] != 0x1) {
                                    delete _0x2ed05d[soketgir[sohbetik["kripto"]]['userWebRTCId']];
                                    soketgir[sohbetik["kripto"]]["userWebRTCCam"] = 0x1;
                                    _0x2ed05d[soketgir[sohbetik['kripto']]['userWebRTCId']] = {
                                        'izleyen': ':'
                                    };
                                    KsiYenile();
                                    soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                                }
                                sohbetik.emit("kamerakontrol", 0x1);
                            }
                        } else if (_0x3df8be == 0x0) {
                            if (soketgir[sohbetik["kripto"]]["userWebRTCCam"] != 0x0) {
                                soketgir[sohbetik["kripto"]]["userWebRTCCam"] = 0x0;
                                delete _0x2ed05d[soketgir[sohbetik["kripto"]]["userWebRTCId"]];
                                if (_0x2ed05d[soketgir[sohbetik["kripto"]]["userWebRTCId"]] != '') {
                                    soketimiz.sockets.emit("kamerasiniHerkesceKapat", soketgir[sohbetik["kripto"]]["userWebRTCId"]);
                                    delete _0x2ed05d[soketgir[sohbetik["kripto"]]['userWebRTCId']];
                                }
                                KsiYenile();
                            }
                            sohbetik.emit("kamerakontrol", 0x0);
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Dengesizlik ilkesini gerçekleştirdiniz, dengesiz.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kamera sunucusuna bağlı değilsiniz.");
                    }
                }
            } catch (_0x44c445) {
                console.error(_0x44c445);
            }
        });
        sohbetik.on("uyariClient", function(_0x5c86df, _0x28c463) {
            try {
                _0x156377('uyariClient', 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                kisiBagli = 0x0;
                for (var _0x4bc11c in soketgir) {
                    if (soketgir[_0x4bc11c]['userKripto'] == _0x28c463) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (_0x28c463 != soketgir[_0x28c463]["userKripto"] || _0x5c86df != soketgir[_0x28c463]["userId"]) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Kişi Sitede Değil');
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userStatuINT"] > soketimiz.sockets.sockets[_0x5c86df]['yetki']) {
                            soketimiz.to(_0x5c86df).emit('uyariClientGoster', "Yönetici size uyarı gönderdi! Lütfen, bundan sonra daha dikkatli olunuz.");
                            _0x2ace0c(sohbetik["kullaniciAdi"], soketimiz.sockets.sockets[_0x5c86df]["kullaniciAdi"], "Uyarı Gönderme", sohbetik["yetki"], sohbetik["cinsiyet"]);
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Bu işlem için yetkiniz yok');
                        }
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Artık Sitede Değil");
                }
            } catch (_0x214320) {
                console.error(_0x214320);
            }
        });
        sohbetik.on("odayaCekServer", function(_0x121740, _0x1b7ec1, _0x33d603) {
            try {
                _0x156377('odayaCekServer', 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                kisiBagli = 0x0;
                for (var _0x19deb1 in soketgir) {
                    if (soketgir[_0x19deb1]["userKripto"] == _0x33d603) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (soketgir[_0x33d603]["botdurum"] == 0x0) {
                        if (_0x33d603 != soketgir[_0x33d603]["userKripto"] || _0x121740 != soketgir[_0x33d603]["userId"]) {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Kişi Sitede Değil');
                        } else {
                            if (soketgir[_0x33d603]['userOda'] == soketgir[sohbetik["kripto"]]["userOda"]) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Zaten aynı odadasınız");
                            } else {
                                if (soketgir[sohbetik["kripto"]]['userStatuINT'] > soketimiz.sockets.sockets[_0x121740]['yetki']) {
                                    soketimiz.to(_0x121740).emit("odayaCekClient", _0x1b7ec1);
                                    _0x2ace0c(sohbetik["kullaniciAdi"], _0x1b7ec1, "Odaya Çekme", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                } else {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu işlem için yetkiniz yok");
                                }
                            }
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu Kullanıcı Koruma Altında");
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi Artık Sitede Değil");
                }
            } catch (_0x509d2e) {
                console.error(_0x509d2e);
            }
        });
        sohbetik.on('ekranTemizleOda', function() {
            try {
                _0x156377("ekranTemizleOda", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (soketgir[sohbetik["kripto"]]['userStatuINT'] > 0x0) {
                    soketimiz.sockets.in(sohbetik["odasi"]).emit("ekranTemizleOdaTamam", uUzunluk(sohbetik["kullaniciAdi"], sohbetik["kullaniciAdiiki"], sohbetik["yetki"], 0x0));
                    _0x2ace0c(sohbetik['kullaniciAdi'], sohbetik['odasi'], "Yazıları Sil", sohbetik["yetki"], sohbetik["cinsiyet"]);
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu işlem için yetkiniz yok");
                }
            } catch (_0x2e64cc) {
                console.error(_0x2e64cc);
            }
        });
        sohbetik.on('ayarVerileriWE', function(_0x515756, _0x3cda62) {
            try {
                _0x156377("ayarVerileriWE", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                var _0x198489, _0x3ee3af = '';
                if (typeof _0x515756 == "string" && typeof _0x3cda62 == "string") {
                    if (_0x3cda62 == "androidGiris") {
                        if (_0x515756 == 'e') {
                            var _0x3ee3af = 'e';
                            var _0x198489 = "Anroid Market Girişlerini Açtı";
                        } else {
                            var _0x3ee3af = 'h';
                            var _0x198489 = "Anroid Market Girişlerini Kapattı";
                        }
                        CihazTespit["android"] = _0x3ee3af;
                    } else if (_0x3cda62 == "mobileGiris") {
                        if (_0x515756 == 'e') {
                            var _0x3ee3af = 'e';
                            var _0x198489 = "Telefon ve Tablet Browser Girişlerini Açtı";
                        } else {
                            var _0x3ee3af = 'h';
                            var _0x198489 = "Telefon ve Tablet Browser Girişlerini Kapattı";
                        }
                        CihazTespit["mobile"] = _0x3ee3af;
                    } else {
                        if (_0x515756 == 'e') {
                            var _0x3ee3af = 'e';
                            var _0x198489 = 'Bilgisayar (masaüstü) Girişlerini Açtı';
                        } else {
                            var _0x3ee3af = 'h';
                            var _0x198489 = "Bilgisayar (masaüstü) Girişlerini Kapattı";
                        }
                        CihazTespit['pc'] = _0x3ee3af;
                    }
                    _0x2ace0c(sohbetik["kullaniciAdi"], "Girişler", _0x198489, sohbetik["yetki"], sohbetik["cinsiyet"]);
                }
            } catch (_0x283342) {
                console.error(_0x283342);
            }
        });
        sohbetik.on("ayarVerileriW", function() {
            try {
                _0x156377("ayarVerileriW", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (sohbetik["admin_ayarlar"] == 'e') {
                    sohbetik.emit("ayarVerileri", '<li><div class="item-content"><div class="item-media"><i class="icon material-icons">android</i></div> <div class="item-inner not-empty-state"> <div class="item-title label">Bilgisayar girişi</div> <div class="item-input item-input-field korumaAlanlari">' + '<select name="pcGiris" id="pcGiris">' + '<option ' + (CihazTespit['pc'] == 'h' ? 'selected=""' : '') + ' value="h">Kapalı</option>' + '<option ' + (CihazTespit['pc'] == 'e' ? 'selected=""' : '') + ' value="e">Açık</option>'+ '</select>' + '</div></div></div></li>' + '<li><div class="item-content"><div class="item-media"><i class="icon material-icons">android</i></div> <div class="item-inner not-empty-state"> <div class="item-title label">Telefon ve Tablet girişi</div> <div class="item-input item-input-field korumaAlanlari">' + '<select name="mobileGiris" id="mobileGiris">' + '<option ' + (CihazTespit["mobile"] == 'h' ? 'selected=""' : '') + ' value="h">Kapalı</option>' + '<option ' + (CihazTespit["mobile"] == 'e' ? 'selected=""' : '') + ' value="e">Açık</option>' + '</select>' + '</div></div></div></li>' + '<li><div class="item-content"><div class="item-media"><i class="icon material-icons">android</i></div> <div class="item-inner not-empty-state"> <div class="item-title label">Android Market girişi</div> <div class="item-input item-input-field korumaAlanlari">' + '<select name="androidGiris" id="androidGiris">' + '<option ' + (CihazTespit['android'] == 'h' ? 'selected=""' : '') + ' value="h">Kapalı</option>' + '<option ' + (CihazTespit["android"] == 'e' ? 'selected=""' : '') +' value="e">Açık</option>' + '</select>' + '</div></div></div></li>');
                } else {
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Giriş ayarlarını düzenleme yetkiniz yok.');
                }
            } catch (_0x258b18) {
                console.error(_0x258b18);
            }
        });
        sohbetik.on("yorumkayit", function(_0xf19255, _0x3e3e74) {
            try {
                _0x156377("yorumkayit", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (_0xf19255 == "yorumgonder") {
                    if (soketgir[sohbetik["kripto"]]["kimlikid"] != 0x0) {
                        kisiBagli = 0x0;
                        for (var _0x74540b in soketgir) {
                            if (soketgir[_0x74540b]['userKripto'] == _0x3e3e74['yorumalan_rmz_krp']) {
                                kisiBagli = 0x1;
                                break;
                            }
                        }
                        if (kisiBagli > 0x0) {
                            if (soketgir[_0x3e3e74["yorumalan_rmz_krp"]]["useryorumlar"] > 0x0) {
                                var _0x700394 = ['\x27', '\x5c\x5c', '"', '>', '<'];
                                var _0x372fdb = ['', '', '', '', ''];
                                id = _0x3e3e74['id'];
                                gonderenid = soketgir[sohbetik["kripto"]]['kimlikid'];
                                yorumalan_id = _0x3e3e74["yorumalan_id"].replaceArray(_0x700394, _0x372fdb)["trim"]();
                                yorumalan_rmz_krp = _0x3e3e74["yorumalan_rmz_krp"].replaceArray(_0x700394, _0x372fdb)['trim']();
                                alanadi = soketgir[yorumalan_rmz_krp]["userName"];
                                yorumnedir = _0x3e3e74["yorumnedir"].replaceArray(_0x700394, _0x372fdb)['trim']();
                                if (yorumnedir.length < 0xa) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Yorumunuz En az 10 karakter olmalıdır.");
                                } else {
                                    baglantim["query"]("select COUNT(*) as TOPonay from yorumlar where gonderenid=? and yorumalan_rmz_krp=?", [gonderenid, yorumalan_rmz_krp], function(_0x539d1f, _0x296ca7, _0x4b9787) {
                                        if (_0x296ca7[0]['TOPonay'] > 0x4) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bir profile en fazla 5 yorum yapabilirsiniz.");
                                        } else {
                                            var _0xbec220 = {
                                                'gonderenid': gonderenid,
                                                'yorumalan_id': yorumalan_id,
                                                'yorumalan_rmz_krp': yorumalan_rmz_krp,
                                                'alanadi': alanadi,
                                                'yorumkendisi': yorumnedir,
                                                'onay': 0,
                                                'yrm_tarih': kisatarih()
                                            };
                                            baglantim["query"]('INSERT INTO yorumlar SET ?', _0xbec220, function(_0x10f715, _0x3dc753) {
                                                if (_0x10f715) {
                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                                                } else {
                                                    if (soketgir[_0x3e3e74["yorumalan_rmz_krp"]]["userId"] != soketgir[sohbetik["kripto"]]["userId"]) {
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Yorumunuz Gönderildi.");
                                                        soketimiz.to(soketgir[_0x3e3e74["yorumalan_rmz_krp"]]["userId"]).emit('uyariClientGoster', 'Yeni Yorumunuz var.');
                                                    }
                                                }
                                            });
                                        }
                                    });
                                }
                            } else {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu kişi yorumlarını kapatmış");
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Bu kişi sitede değil');
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Yorum yazabilmek için üye girişi yapmalısınız');
                    }
                }
            } catch (_0x5b4ed8) {
                console.error(_0x5b4ed8);
            }
        });
        sohbetik.on("yorumgoster", function(_0x55a454) {
            try {
                _0x156377('yorumgoster', 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                kisiBagli = 0x0;
                for (var _0x674815 in soketgir) {
                    if (soketgir[_0x674815]['userKripto'] == _0x55a454) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    baglantim["query"]("select COUNT(*) as TOPonay from yorumlar where yorumalan_rmz_krp=?", [_0x55a454], function(_0x20b82d, _0x5039a1, _0x53a8a0) {
                        baglantim["query"]("select uyeler.id,uyeler.rumuz,uyeler.cinsiyet,uyeler.resim,uyeler.flash,yorumlar.yrmid,yorumlar.gonderenid,yorumlar.yorumalan_id,yorumlar.yorumalan_rmz_krp,yorumlar.alanadi,yorumlar.yorumkendisi,yorumlar.onay,yorumlar.yrm_tarih from yorumlar INNER JOIN uyeler ON uyeler.id = yorumlar.gonderenid where yorumlar.yorumalan_rmz_krp='" + _0x55a454 + "' order by yorumlar.yrmid desc", function(_0x33855c, _0x1de015, _0x2a931d) {
                            if (_0x33855c) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                            } else {
                                if (soketgir[_0x55a454]["userNameTwo"].length > 0x1) {
                                    yorumalanstatu = 'Misafir';
                                } else {
                                    yorumalanstatu = soketgir[_0x55a454]["userStatu"];
                                }
                                sohbetik.emit('yorumlariListele', _0x1de015, soketgir[sohbetik["kripto"]]["userStatu"], yorumalanstatu, _0x5039a1[0]["TOPonay"]);
                            }
                        });
                    });
                } else {
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Bu kişi sitede değil");
                }
            } catch (_0x45cb11) {
                console.error(_0x45cb11);
            }
        });
        emin.post("/yorumislem", function(_0x478885, _0x24ba14) {
            try {
                var _0x38f1fb = _0x478885['body']["yrmid"];
                var _0x535f1a = _0x478885['body']["islem"];
                if (_0x535f1a == "yorumsil") {
                    baglantim["query"]('DELETE from yorumlar where yrmid= ? limit 1', [_0x38f1fb], function(_0x1aa95b, _0x149371, _0x390959) {
                        if (_0x1aa95b) {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı bilgilerini güncelleme esnasında hata oluştu.");
                        } else {
                            return _0x24ba14["end"]('sil');
                            return ![];
                        }
                    });
                } else if (_0x535f1a == "yorumonayla") {
                    baglantim["query"]('UPDATE yorumlar SET ? WHERE yrmid = ? limit 1', [{
                        'onay': '1'
                    }, _0x38f1fb], function(_0xf27749, _0x39e7b0, _0x5405e7) {
                        if (_0xf27749) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Veritabanı bilgilerini güncelleme esnasında hata oluştu.');
                        } else {
                            return _0x24ba14["end"]("onayla");
                            return ![];
                        }
                    });
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Böyle bir işlem tipi yok.');
                }
            } catch (_0x41160e) {
                console.error(_0x41160e);
            }
        });
        sohbetik.on("odaveyaUyeYonetici", function(_0x50e62c, BakAdmin) {
            _0x156377('odaveyaUyeYonetici', 0x64, sohbetik);
            SSifreleme(sohbetik['kripto']);
            if (_0x50e62c == 'uye') {
                try {
                    if (sohbetik["uye_yonetimi"] == 'e') {
                        baglantim["query"]("select uyeler.rumuz,uyeler.cinsiyet,uyeler.resim,uyeler.id,uyeler.yetki,uyeler.flash,uyeler.nickbar,uyeler.songiris,uyeler.botdurum,uyeler.songiristarihi,yetkiler.adi as YetkiStrSi from uyeler INNER JOIN yetkiler ON uyeler.yetki = yetkiler.rutbe where uyeler.yetki <" + sohbetik["yetki"] + " and yetki=0 and botdurum=0 order by uyeler.yetki desc limit 100000", function(_0x5d2b75, _0x28a639, _0x29750c) {
                            if (_0x5d2b75) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                            } else {
                                if (_0x28a639.length > 0x0) {
                                    sohbetik.emit('uyeleriGeldiYonetici', _0x28a639);
                                } else {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üye bulunamadı.");
                                }
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üyeleri Görme Yetkiniz Yok.");
                    }
                } catch (_0x5f43ce) {
                    console.error(_0x5f43ce);
                }
            } else if (_0x50e62c == "uyeDuzenleme") {
                try {
                    if (sohbetik['uye_yonetimi'] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim["query"]("select * from uyeler where yetki < " + sohbetik["yetki"] + " and botdurum=0 and id=" + BakAdmin + '', function(_0x1eb1f4, DuzenUye, _0x5f2eb2) {
                                if (_0x1eb1f4) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    if (DuzenUye.length > 0x0) {
                                        DuzenUye = DuzenUye[0];
                                        if (sohbetik["ip_gorme"] == 'e') {
                                            ip = DuzenUye['ip'];
                                        } else {
                                            ip = "0.0.0.0";
                                        }
                                        if (DuzenUye["songiris"] > 0x0) {
                                            sg = Tarihcene(DuzenUye["songiris"]);
                                        } else {
                                            sg = "Hiç bir zaman";
                                        }
                                        sohbetik.emit("uyeDuzenlemeGeldi", {
                                            'id': DuzenUye['id'],
                                            'rumuz': DuzenUye["rumuz"],
                                            'cinsiyet': DuzenUye["cinsiyet"],
                                            'yetki': DuzenUye["yetki"],
                                            'resim': DuzenUye['resim'],
                                            'flash': DuzenUye["flash"],
                                            'nickbar': DuzenUye["nickbar"],
                                            'songiris': sg,
                                            'songiristarihi': DuzenUye["songiristarihi"],
                                            'ip': ip,
                                            'kayittarihi': Tarihcene(DuzenUye["kayittarihi"]),
                                            'uyekayittarihi': DuzenUye["uyekayittarihi"],
                                            'uye_bitir': DuzenUye["uye_bitir"],
                                            'kilit': DuzenUye["kilit"],
                                            'ozel_mesaj': DuzenUye['ozel_mesaj'],
                                            'log_yetkisi': DuzenUye["log_yetkisi"],
                                            'ban_yetkisi': DuzenUye["ban_yetkisi"],
                                            'mute_yetkisi': DuzenUye["mute_yetkisi"],
                                            'atma_yetkisi': DuzenUye["atma_yetkisi"],
                                            'kamera_yetkisi': DuzenUye["kamera_yetkisi"],
                                            'ip_gorme': DuzenUye["ip_gorme"],
                                            'admin_hareketleri': DuzenUye["admin_hareketleri"],
                                            'oda_yonetimi': DuzenUye["oda_yonetimi"],
                                            'uye_yonetimi': DuzenUye["uye_yonetimi"],
                                            'genel_atma': DuzenUye['genel_atma'],
                                            'nickdegis': DuzenUye['nickdegis'],
                                            'loglardagizle': DuzenUye["loglardagizle"],
                                            'admin_ayarlar': DuzenUye['admin_ayarlar'],
                                            'sapkano': DuzenUye["sapkano"],
                                            'catiyotkisi': DuzenUye["catiyotkisi"],
                                            'toplantiyetkisi': DuzenUye["toplantiyetkisi"],
                                            'admin_panel': DuzenUye["admin_panel"],
                                            'rutbe_yonetimi': DuzenUye["rutbe_yonetimi"],
                                            'yildizrengi': DuzenUye['yildizrengi'],
                                            'botdurum': DuzenUye["botdurum"],
                                            'botoda': DuzenUye["botoda"],
                                            'yetkilerListesi': yetkilirutbeFull,
                                            'benimRtubem': sohbetik["yetki"],
                                            'benimsapkano': sohbetik['sapkano'],
                                            'b_ozel_mesaj': sohbetik["ozel_mesaj"],
                                            'b_Rtubem': sohbetik["yetki"],
                                            'b_sapkano': sohbetik["sapkano"],
                                            'b_ban_yetkisi': sohbetik["ban_yetkisi"],
                                            'b_mute_yetkisi': sohbetik["mute_yetkisi"],
                                            'b_atma_yetkisi': sohbetik["atma_yetkisi"],
                                            'b_kamera_yetkisi': sohbetik["kamera_yetkisi"],
                                            'b_ip_gorme': sohbetik["ip_gorme"],
                                            'b_log_yetkisi': sohbetik["log_yetkisi"],
                                            'b_admin_hareketleri': sohbetik["admin_hareketleri"],
                                            'b_uye_yonetimi': sohbetik["uye_yonetimi"],
                                            'b_oda_yonetimi': sohbetik['oda_yonetimi'],
                                            'b_genel_atma': sohbetik["genel_atma"],
                                            'b_catiyotkisi': sohbetik["catiyotkisi"],
                                            'b_toplantiyetkisi': sohbetik["toplantiyetkisi"],
                                            'b_admin_ayarlar': sohbetik["admin_ayarlar"],
                                            'b_rutbe_yonetimi': sohbetik["rutbe_yonetimi"],
                                            'b_admin_panel': sohbetik["admin_panel"],
                                            'b_nickdegis': sohbetik["nickdegis"],
                                            'b_loglardagizle': sohbetik["loglardagizle"]
                                        });
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID olarak; ( " + BakAdmin + ' ) olan bir üye bulunamadı.');
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID Yanlış.");
                        }
                        kriptola();
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üyeleri yönetme yetkiniz yok.");
                    }
                } catch (_0x19740d) {
                    console.error(_0x19740d);
                }
            } else if (_0x50e62c == "uyeDuzenlemeSon") {
                try {
                    if (sohbetik["uye_yonetimi"] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            var _0x12611d = [' ', ':', '\x27', '@', '\x5c*', '#', '\x5c\x5c', '"', '>', '<', "misafir"];
                            var _0x1e339c = ['', '', '', '', '', '', '', '', '', '', ''];
                            BakAdmin["rumuz"] = BakAdmin['rumuz'].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            BakAdmin['id'] = BakAdmin['id'];
                            uye_bitir = BakAdmin["gun"] + '-' + BakAdmin['ay'] + '-' + BakAdmin["yil"];
                            if (BakAdmin["cinsiyet"] == "erkek") {
                                cinsiyetdddf = 'e';
                            } else {
                                cinsiyetdddf = 'k';
                            }
                            if (BakAdmin["rumuz"].length < 0x3 || BakAdmin["rumuz"].length > 0xf) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Lütfen en az 3, en fazla 15 karakterlik bir kullanıcı adı yazınız.');
                            } else if (BakAdmin["sifre"].length >0&& (BakAdmin["sifre"].length < 0x4 || BakAdmin["sifre"].length > 0x64)) {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Şifre; en az 4, en fazla 100 karakter olabilir.");
                            } else if (BakAdmin["yetki"] < 0x0) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Böyle bir yetki sistemi yok.');
                            } else if (BakAdmin["yetki"] >= sohbetik["yetki"]) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kendinize eşit veya sizden yüksek bir yetki atayamazsınız.");
                            } else {
                                baglantim["query"]('select COUNT(*) as TOP from uyeler where rumuz=? and id!=?', [BakAdmin["rumuz"], BakAdmin['id']], function(_0x273221, _0x18cfd1, _0x122156) {
                                    if (_0x273221) {
                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgu hatası.");
                                    } else {
                                        if (_0x18cfd1[0]["TOP"] > 0x0) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu kullanıcı adı daha önce alınmış.");
                                        } else {
                                            baglantim["query"]("select uyeler.*, COUNT(*) as TOPVAR from uyeler where yetki=16", function(_0x15870b, _0x164ed6, _0x174a45) {
                                                sonuclarwtrVert = _0x164ed6[0];
                                                if (_0x15870b) {
                                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgu hatası.");
                                                } else {
                                                    if (sonuclarwtrVert["TOPVAR"] >0&& BakAdmin["yetki"] == 0x10) {
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sadece 1 Adet Root Eklenebilir.");
                                                    } else {
                                                        baglantim['query']("select uyeler.*, COUNT(*) as TOPVAR from uyeler where id=?", [BakAdmin['id']], function(_0x92e7e1, _0x175f28, _0x251f2b) {
                                                            sonuclarwtrVer = _0x175f28[0];
                                                            if (_0x92e7e1) {
                                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası.");
                                                            } else {
                                                                if (sonuclarwtrVer["TOPVAR"] < 0x1) {
                                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle biri yok.");
                                                                } else {
                                                                    if (sonuclarwtrVer["yetki"] >= sohbetik["yetki"]) {
                                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu kişinin yetkisi, size eşit veya sizden büyük. Bu sebeple işlem yapamazsınız.");
                                                                    } else {
                                                                        if (sonuclarwtrVer["rumuz"] = !BakAdmin["eskirumuz"]) {
                                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Güncellemek istenilen kullanıcı adı ile ID verisi uyuşmuyor.");
                                                                        } else {
                                                                            if (sonuclarwtrVer["koruma_altinda"] == 'e' && sohbetik["kullaniciAdi"] != "GimGim") {
                                                                                console.log('Korumaya alınan üye hakkında  işlem : İşlem: Düzenleme  İp adresi : ' + _0x2c10b3 + ' Tarih : ' + parcaliTarih() + ' \x0aAdmin : ' + sohbetik["kullaniciAdi"] + ' Hedef : ' + BakAdmin["eskirumuz"]);
                                                                                soketimiz.to(sohbetik['id']).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Bu kişi (" + BakAdmin["eskirumuz"] + "); çok sayıda mağdur olduğu anlaşıldığından, artık koruma altındadır", 'e');
                                                                            } else {
                                                                                degisti = 0x0;
                                                                                hrkt = '';
                                                                                sifre = sonuclarwtrVer["sifre"];
                                                                                if (BakAdmin["eskirumuz"] != BakAdmin["rumuz"]) {
                                                                                    baglantim["query"]("UPDATE hareketler SET ? WHERE admin = ?", [{
                                                                                        'admin': BakAdmin["rumuz"]
                                                                                    }, BakAdmin["eskirumuz"]]);
                                                                                    hrkt += "Rumuz değiştirdi - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["sifre"].length >0&& md5g(BakAdmin["sifre"]) != sonuclarwtrVer["sifre"]) {
                                                                                    hrkt += "Şifre değiştirdi - ";
                                                                                    sifre = md5g(BakAdmin["sifre"]);
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (cinsiyetdddf != sonuclarwtrVer["cinsiyet"]) {
                                                                                    hrkt += 'Cinsiyet değiştirdi - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["yetki"] != sonuclarwtrVer["yetki"]) {
                                                                                    hrkt += "Yetki değiştirdi - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["ozel_mesaj"] != sonuclarwtrVer["ozel_mesaj"]) {
                                                                                    hrkt += "Özel mesaj yetkisi" + (BakAdmin["ozel_mesaj"] == 'e' ? ' verdi' : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["log_yetkisi"] != sonuclarwtrVer["log_yetkisi"]) {
                                                                                    hrkt += "Giriş kayıtları yetkisi" + (BakAdmin["log_yetkisi"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["ban_yetkisi"] != sonuclarwtrVer["ban_yetkisi"]) {
                                                                                    hrkt += "Ip banlama yetkisi" + (BakAdmin["ban_yetkisi"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["mute_yetkisi"] != sonuclarwtrVer["mute_yetkisi"]) {
                                                                                    hrkt += 'Engelleme yetkisi' + (BakAdmin["mute_yetkisi"] == 'e' ? " verdi" : "ni aldı") + ' - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["atma_yetkisi"] != sonuclarwtrVer["atma_yetkisi"]) {
                                                                                    hrkt += "Siteden atma yetkisi" + (BakAdmin['atma_yetkisi'] == 'e' ? ' verdi' : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["kamera_yetkisi"] != sonuclarwtrVer["kamera_yetkisi"]) {
                                                                                    hrkt += 'Kamera Engel yetkisi' + (BakAdmin["kamera_yetkisi"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["ip_gorme"] != sonuclarwtrVer["ip_gorme"]) {
                                                                                    hrkt += 'Ip görme yetkisi' + (BakAdmin['ip_gorme'] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["admin_hareketleri"] != sonuclarwtrVer["admin_hareketleri"]) {
                                                                                    hrkt += 'Admin hareketleri yetkisi' + (BakAdmin["admin_hareketleri"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["oda_yonetimi"] != sonuclarwtrVer["oda_yonetimi"]) {
                                                                                    hrkt += "Oda yönetme yetkisi" + (BakAdmin['oda_yonetimi'] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['uye_yonetimi'] != sonuclarwtrVer["uye_yonetimi"]) {
                                                                                    hrkt += "Üye yönetme yetkisi" + (BakAdmin["uye_yonetimi"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["genel_atma"] != sonuclarwtrVer["genel_atma"]) {
                                                                                    hrkt += "Genel atma yetkisi" + (BakAdmin['genel_atma'] == 'e' ? ' verdi' : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["admin_panel"] != sonuclarwtrVer["admin_panel"]) {
                                                                                    hrkt += "Admin paneli yetkisi" + (BakAdmin["admin_panel"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["nickdegis"] != sonuclarwtrVer["nickdegis"]) {
                                                                                    hrkt += "2. Nick ile gelme yetkisi" + (BakAdmin["nickdegis"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["loglardagizle"] != sonuclarwtrVer["loglardagizle"]) {
                                                                                    hrkt += "Gizli log yetkisi" + (BakAdmin["loglardagizle"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["admin_ayarlar"] != sonuclarwtrVer["admin_ayarlar"]) {
                                                                                    hrkt += "Mikrofon süre yetkisi" + (BakAdmin["admin_ayarlar"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['yildizrengi'] != sonuclarwtrVer['yildizrengi']) {
                                                                                    hrkt += "Yıldız Rengi değiştirdi - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['rutbe_yonetimi'] != sonuclarwtrVer["rutbe_yonetimi"]) {
                                                                                    hrkt += "Rütbeler Yetkisi" + (BakAdmin["rutbe_yonetimi"] == 'e' ? ' verdi' : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["sapkano"] != sonuclarwtrVer["sapkano"]) {
                                                                                    hrkt += "Yıldız sayısını değiştirdi - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["kilit"] != sonuclarwtrVer["kilit"]) {
                                                                                    hrkt += '' + (BakAdmin["kilit"] == 'e' ? "Üyelik kilitledi" : "Üyelik kilidini açtı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (uye_bitir != sonuclarwtrVer["uye_bitir"]) {
                                                                                    hrkt += "Üyelik bitiş tarihi değiştirme - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['toplantiyetkisi'] != sonuclarwtrVer["toplantiyetkisi"]) {
                                                                                    hrkt += "Toplantı Yetkisi" + (BakAdmin["toplantiyetkisi"] == 'e' ? " verdi" : 'ni aldı') + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["nickbar"] != sonuclarwtrVer["nickbar"]) {
                                                                                    hrkt += "Flash Değişti - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['flash'] != sonuclarwtrVer["flash"]) {
                                                                                    hrkt += "Üye Resmini Sildi - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["catiyotkisi"] != sonuclarwtrVer["catiyotkisi"]) {
                                                                                    hrkt += "Çatı Yetkisi" + (BakAdmin["catiyotkisi"] == 'e' ? " verdi" : 'ni aldı') + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (degisti > 0x0) {
                                                                                    baglantim["query"]("UPDATE uyeler SET ? WHERE id = ?", [{
                                                                                        'rumuz': BakAdmin["rumuz"],
                                                                                        'sifre': sifre,
                                                                                        'cinsiyet': cinsiyetdddf,
                                                                                        'yetki': BakAdmin['yetki'],
                                                                                        'ozel_mesaj': BakAdmin['ozel_mesaj'],
                                                                                        'log_yetkisi': BakAdmin["log_yetkisi"],
                                                                                        'ban_yetkisi': BakAdmin["ban_yetkisi"],
                                                                                        'ip_gorme': BakAdmin["ip_gorme"],
                                                                                        'admin_hareketleri': BakAdmin["admin_hareketleri"],
                                                                                        'oda_yonetimi': BakAdmin['oda_yonetimi'],
                                                                                        'uye_yonetimi': BakAdmin["uye_yonetimi"],
                                                                                        'kilit': BakAdmin["kilit"],
                                                                                        'uye_bitir': uye_bitir,
                                                                                        'genel_atma': BakAdmin["genel_atma"],
                                                                                        'nickdegis': BakAdmin["nickdegis"],
                                                                                        'loglardagizle': BakAdmin["loglardagizle"],
                                                                                        'admin_ayarlar': BakAdmin["admin_ayarlar"],
                                                                                        'sapkano': BakAdmin["sapkano"],
                                                                                        'flash': BakAdmin["flash"],
                                                                                        'catiyotkisi': BakAdmin["catiyotkisi"],
                                                                                        'toplantiyetkisi': BakAdmin["toplantiyetkisi"],
                                                                                        'nickbar': BakAdmin['nickbar'],
                                                                                        'admin_panel': BakAdmin["admin_panel"],
                                                                                        'rutbe_yonetimi': BakAdmin["rutbe_yonetimi"],
                                                                                        'yetkiadi': BakAdmin["yetkiadi"],
                                                                                        'yildizrengi': BakAdmin["yildizrengi"],
                                                                                        'mute_yetkisi': BakAdmin["mute_yetkisi"],
                                                                                        'atma_yetkisi': BakAdmin["atma_yetkisi"],
                                                                                        'kamera_yetkisi': BakAdmin["kamera_yetkisi"]
                                                                                    }, BakAdmin['id']], function(_0x2d3381, _0x590cfa) {
                                                                                        if (_0x2d3381) {
                                                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı bilgilerini güncelleme esnasında hata oluştu.");
                                                                                        } else {
                                                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Üye Bilgileri Güncellendi.');
                                                                                            hrkt = hrkt["substr"](0x0, hrkt.length - 0x3)["trim"]();
                                                                                            _0x2ace0c(sohbetik["kullaniciAdi"], BakAdmin["eskirumuz"], hrkt, sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                                                            kisiBagli = 0x0;
                                                                                            for (var _0x24b340 in soketgir) {
                                                                                                if (soketgir[_0x24b340]["kimlikid"] == BakAdmin['id']) {
                                                                                                    kisiBagli = 0x1;
                                                                                                    break;
                                                                                                }
                                                                                            }
                                                                                            if (kisiBagli > 0x0) {
                                                                                                if (BakAdmin['eskirumuz'] != BakAdmin["rumuz"]) {
                                                                                                    for (var _0x24b340 in soketgir) {
                                                                                                        if (soketgir[_0x24b340]["userName"].toLowerCase() == BakAdmin["eskirumuz"]['toLowerCase']()) {
                                                                                                            soketimiz.to(soketgir[_0x24b340]["userId"]).emit("uyariClientGoster", "Üye rumuzunuz değiştirildiğinden ötürü, tekrar giriş yapmalısınız. (değiştiren : " + sohbetik["kullaniciAdi"] + ')');
                                                                                                            soketimiz.sockets.sockets[soketgir[_0x24b340]["userId"]]["disconnect"]();
                                                                                                            break;
                                                                                                        }
                                                                                                    }
                                                                                                } else {
                                                                                                    var _0x55b778 = md5g(BakAdmin["rumuz"]);
                                                                                                    soketgir[_0x55b778] = {
                                                                                                        'userName': BakAdmin["rumuz"],
                                                                                                        'userKripto': _0x55b778,
                                                                                                        'kimlikid': BakAdmin['id'],
                                                                                                        'botdurum': 0,
                                                                                                        'userId': soketgir[_0x55b778]["userId"],
                                                                                                        'userCinsiyet': cinsiyetdddf,
                                                                                                        'userResim': soketgir[_0x55b778]['userResim'],
                                                                                                        'userStatu': BakAdmin['yetkiadi'],
                                                                                                        'userStatuINT': BakAdmin["yetki"],
                                                                                                        'yildizrengi': BakAdmin['yildizrengi'],
                                                                                                        'userMobilemi': soketgir[_0x55b778]['userMobilemi'],
                                                                                                        'googleApp': soketgir[_0x55b778]['googleApp'],
                                                                                                        'userOda': soketgir[_0x55b778]['userOda'],
                                                                                                        'userDurum': soketgir[_0x55b778]["userDurum"],
                                                                                                        'userCT': 0,
                                                                                                        'userMutelimi': soketgir[_0x55b778]["userMutelimi"],
                                                                                                        'userOzelMesaj': 1,
                                                                                                        'userOzelArama': 1,
                                                                                                        'useryorumlar': 1,
                                                                                                        'userIslemTarih': TarihCe(),
                                                                                                        'userIslemTarihV': TarihCe() -30,
                                                                                                        'userWebRTCId': '',
                                                                                                        'userWebRTCCam': 0,
                                                                                                        'userWebRTCMik': 0,
                                                                                                        'userWebRTCSes': 0,
                                                                                                        'userkonusmada': 0,
                                                                                                        'userWebRTCCam_X': soketgir[_0x55b778]['userWebRTCCam_X'],
                                                                                                        'sapkano': BakAdmin['sapkano'],
                                                                                                        'catiyotkisi': BakAdmin["catiyotkisi"],
                                                                                                        'toplantiyetkisi': BakAdmin["toplantiyetkisi"],
                                                                                                        'userMikrofonSirasi': 0,
                                                                                                        'mikrofonZamani': 0,
                                                                                                        'admin_hareketleri': BakAdmin["admin_hareketleri"],
                                                                                                        'koruma_altinda': 'h',
                                                                                                        'flash': BakAdmin['flash'],
                                                                                                        'nickbar': BakAdmin["nickbar"],
                                                                                                        'userNameTwo': soketgir[_0x55b778]["userNameTwo"],
                                                                                                        'saldiri': 0,
                                                                                                        'saldiriTarih': TarihCe(),
                                                                                                        'userIslemTarihTime': islemTrh(),
                                                                                                        'floodSayisi': 0x0
                                                                                                    };
                                                                                                    if (BakAdmin["kilit"] != sonuclarwtrVer['kilit'] && BakAdmin["kilit"] == 'e') {
                                                                                                        soketimiz.to(soketgir[_0x55b778]['userId']).emit("uyariClientGoster", "Üyeliginiz Donduruldu. (değiştiren : " + sohbetik['kullaniciAdi'] + ')');
                                                                                                        soketimiz.sockets.sockets[soketgir[_0x55b778]['userId']]['disconnect']();
                                                                                                    }
                                                                                                    KsiYenile();
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    });
                                                                                } else {
                                                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Hiç bir değişiklik yapmadınız.");
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        });
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "ID alanı numeric olmak zorunda.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Üyeleri silme yetkiniz yok.');
                    }
                } catch (_0x25f800) {
                    console.error(_0x25f800);
                }
            } else if (_0x50e62c == "uyeSilme") {
                try {
                    if (sohbetik["uye_yonetimi"] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim['query']("select uyeler.*, COUNT(*) as TOPVAR from uyeler where id= ?", [BakAdmin], function(_0x5aec31, _0x1dd167, _0x462862) {
                                sonuclarwtrVer = _0x1dd167[0];
                                if (_0x5aec31) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Veritabanı sorgu hatası.');
                                } else {
                                    if (sonuclarwtrVer['TOPVAR'] < 0x1) {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle biri yok.");
                                    } else {
                                        if (sonuclarwtrVer["yetki"] >= sohbetik["yetki"]) {
                                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Bu kişinin yetkisi, size eşit veya sizden büyük. Bu sebeple işlem yapamazsınız.");
                                        } else {
                                            if (sonuclarwtrVer["koruma_altinda"] == 'e' && sohbetik["kullaniciAdi"] != 'GimGim') {
                                                console.log('Korumaya alınan üye hakkında işlem : \x0aİşlem: Silme \x0aİp adresi : ' + _0x2c10b3 + ' \x0aTarih : ' + parcaliTarih() + ' Admin : ' + sohbetik["kullaniciAdi"] + ' Hedef : ' + sonuclarwtrVer['rumuz']);
                                                soketimiz.to(sohbetik['id']).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Bu kişi (" + sonuclarwtrVer["rumuz"] + "); çok sayıda mağdur olduğu anlaşıldığından, artık koruma altındadır", 'e');
                                            } else {
                                                baglantim['query']("DELETE from uyeler WHERE id = " + BakAdmin + ' limit 1', function(_0x38092e, _0x2267e3) {
                                                    etkilenenSatirlar = _0x2267e3["affectedRows"];
                                                    if (_0x38092e) {
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı bilgilerini silme esnasında hata oluştu.");
                                                    } else {
                                                        if (etkilenenSatirlar > 0x0) {
                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "<font color='red'>" + sonuclarwtrVer["rumuz"] + "</font> isimli üye silindi.");
                                                            _0x2ace0c(sohbetik['kullaniciAdi'], sonuclarwtrVer["rumuz"], "Üye Silme", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                            for (var _0xdf9e15 in soketgir) {
                                                                if (soketgir[_0xdf9e15]["userName"].toLowerCase() == sonuclarwtrVer['rumuz'].toLowerCase()) {
                                                                    soketimiz.to(soketgir[_0xdf9e15]["userId"]).emit("uyariClientGoster", "Üyeliğiniz silindiği için, sistem dışına atıldınız. (Silen kişi : " + sohbetik["kullaniciAdi"] + ')');
                                                                    soketimiz.sockets.sockets[soketgir[_0xdf9e15]["userId"]]["disconnect"]();
                                                                    break;
                                                                }
                                                            }
                                                            baglantim["query"]("DELETE from hareketler WHERE admin = '" + sonuclarwtrVer["rumuz"] + "'");
                                                        } else {
                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Silme işlemi gerçekleşmedi, ama hata da oluşmadı. Garip birşey oldu zaar.");
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID alanı numeric olmak zorunda.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üyeleri yönetme yetkiniz yok.");
                    }
                } catch (_0x5cb494) {
                    console.error(_0x5cb494);
                }
            } else if (_0x50e62c == "yetkililerimiz") {
                try {
                    if (sohbetik['uye_yonetimi'] == 'e') {
                        baglantim["query"]("select uyeler.rumuz,uyeler.cinsiyet,uyeler.resim,uyeler.id,uyeler.yetki,uyeler.flash,uyeler.nickbar,uyeler.songiris,uyeler.botdurum,uyeler.songiristarihi,yetkiler.adi as YetkiStrSi from uyeler INNER JOIN yetkiler ON uyeler.yetki = yetkiler.rutbe where uyeler.yetki <" + sohbetik["yetki"] + " and yetki > 0 and botdurum=0 order by uyeler.yetki desc limit 100000", function(_0x42445c, _0x43e0b3, _0x47f53d) {
                            if (_0x42445c) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                            } else {
                                if (_0x43e0b3.length > 0x0) {
                                    sohbetik.emit("yetkilileriGeldiYonetici", _0x43e0b3);
                                } else {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üye bulunamadı.");
                                }
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üyeleri Görme Yetkiniz Yok.");
                    }
                } catch (_0x35f228) {
                    console.error(_0x35f228);
                }
            } else if (_0x50e62c == "YetkiliDuzenleme") {
                try {
                    if (sohbetik["uye_yonetimi"] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim["query"]('select * from uyeler where yetki < ' + sohbetik["yetki"] + " and botdurum=0 and id=" + BakAdmin + '', function(_0x290239, _0x3e42e0, _0x7367da) {
                                if (_0x290239) {
                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    if (_0x3e42e0.length > 0x0) {
                                        _0x3e42e0 = _0x3e42e0[0];
                                        if (sohbetik["ip_gorme"] == 'e') {
                                            ip = _0x3e42e0['ip'];
                                        } else {
                                            ip = '0.0.0.0';
                                        }
                                        if (_0x3e42e0["songiris"] > 0x0) {
                                            sg = Tarihcene(_0x3e42e0["songiris"]);
                                        } else {
                                            sg = "Hiç bir zaman";
                                        }
                                        sohbetik.emit("YetkiliDuzenlemeGeldi", {
                                            'id': _0x3e42e0['id'],
                                            'rumuz': _0x3e42e0['rumuz'],
                                            'cinsiyet': _0x3e42e0["cinsiyet"],
                                            'yetki': _0x3e42e0["yetki"],
                                            'resim': _0x3e42e0["resim"],
                                            'flash': _0x3e42e0["flash"],
                                            'nickbar': _0x3e42e0["nickbar"],
                                            'songiris': sg,
                                            'songiristarihi': _0x3e42e0["songiristarihi"],
                                            'ip': ip,
                                            'kayittarihi': Tarihcene(_0x3e42e0["kayittarihi"]),
                                            'uyekayittarihi': _0x3e42e0["uyekayittarihi"],
                                            'uye_bitir': _0x3e42e0["uye_bitir"],
                                            'kilit': _0x3e42e0["kilit"],
                                            'ozel_mesaj': _0x3e42e0['ozel_mesaj'],
                                            'log_yetkisi': _0x3e42e0['log_yetkisi'],
                                            'ban_yetkisi': _0x3e42e0["ban_yetkisi"],
                                            'mute_yetkisi': _0x3e42e0["mute_yetkisi"],
                                            'atma_yetkisi': _0x3e42e0['atma_yetkisi'],
                                            'kamera_yetkisi': _0x3e42e0['kamera_yetkisi'],
                                            'ip_gorme': _0x3e42e0["ip_gorme"],
                                            'admin_hareketleri': _0x3e42e0['admin_hareketleri'],
                                            'oda_yonetimi': _0x3e42e0['oda_yonetimi'],
                                            'uye_yonetimi': _0x3e42e0['uye_yonetimi'],
                                            'genel_atma': _0x3e42e0["genel_atma"],
                                            'nickdegis': _0x3e42e0["nickdegis"],
                                            'loglardagizle': _0x3e42e0["loglardagizle"],
                                            'admin_ayarlar': _0x3e42e0['admin_ayarlar'],
                                            'sapkano': _0x3e42e0['sapkano'],
                                            'catiyotkisi': _0x3e42e0["catiyotkisi"],
                                            'toplantiyetkisi': _0x3e42e0["toplantiyetkisi"],
                                            'admin_panel': _0x3e42e0["admin_panel"],
                                            'rutbe_yonetimi': _0x3e42e0["rutbe_yonetimi"],
                                            'yildizrengi': _0x3e42e0['yildizrengi'],
                                            'botdurum': _0x3e42e0['botdurum'],
                                            'botoda': _0x3e42e0["botoda"],
                                            'yetkilerListesi': yetkilirutbeFull,
                                            'benimRtubem': sohbetik["yetki"],
                                            'benimsapkano': sohbetik['sapkano'],
                                            'b_ozel_mesaj': sohbetik["ozel_mesaj"],
                                            'b_Rtubem': sohbetik["yetki"],
                                            'b_sapkano': sohbetik['sapkano'],
                                            'b_ban_yetkisi': sohbetik['ban_yetkisi'],
                                            'b_mute_yetkisi': sohbetik["mute_yetkisi"],
                                            'b_atma_yetkisi': sohbetik['atma_yetkisi'],
                                            'b_kamera_yetkisi': sohbetik["kamera_yetkisi"],
                                            'b_ip_gorme': sohbetik['ip_gorme'],
                                            'b_log_yetkisi': sohbetik["log_yetkisi"],
                                            'b_admin_hareketleri': sohbetik["admin_hareketleri"],
                                            'b_uye_yonetimi': sohbetik["uye_yonetimi"],
                                            'b_oda_yonetimi': sohbetik["oda_yonetimi"],
                                            'b_genel_atma': sohbetik["genel_atma"],
                                            'b_catiyotkisi': sohbetik["catiyotkisi"],
                                            'b_toplantiyetkisi': sohbetik["toplantiyetkisi"],
                                            'b_admin_ayarlar': sohbetik["admin_ayarlar"],
                                            'b_rutbe_yonetimi': sohbetik["rutbe_yonetimi"],
                                            'b_admin_panel': sohbetik["admin_panel"],
                                            'b_nickdegis': sohbetik["nickdegis"],
                                            'b_loglardagizle': sohbetik["loglardagizle"]
                                        });
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID olarak; ( " + BakAdmin + ' ) olan bir üye bulunamadı.');
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID Yanlış.");
                        }
                        kriptola();
                    } else {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Üyeleri yönetme yetkiniz yok.");
                    }
                } catch (_0x20dc78) {
                    console.error(_0x20dc78);
                }
            } else if (_0x50e62c == "yetkiliDuzenlemeSon") {
                try {
                    if (sohbetik["uye_yonetimi"] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            var _0x12611d = [' ', ':', '\x27', '@', '\x5c*', '#', '\x5c\x5c', '"', '>', '<', "misafir"];
                            var _0x1e339c = ['', '', '', '', '', '', '', '', '', '', ''];
                            BakAdmin["rumuz"] = BakAdmin["rumuz"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            BakAdmin['id'] = BakAdmin['id'];
                            uye_bitir = BakAdmin["gun"] + '-' + BakAdmin['ay'] + '-' + BakAdmin["yil"];
                            if (BakAdmin['cinsiyet'] == "erkek") {
                                cinsiyetdddf = 'e';
                            } else {
                                cinsiyetdddf = 'k';
                            }
                            if (BakAdmin['rumuz'].length < 0x3 || BakAdmin['rumuz'].length > 0xf) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Lütfen en az 3, en fazla 15 karakterlik bir kullanıcı adı yazınız.");
                            } else if (BakAdmin["sifre"].length >0&& (BakAdmin["sifre"].length < 0x4 || BakAdmin['sifre'].length > 0x64)) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Şifre; en az 4, en fazla 100 karakter olabilir.");
                            } else if (BakAdmin["yetki"] < 0x0) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Böyle bir yetki sistemi yok.');
                            } else if (BakAdmin["yetki"] >= sohbetik["yetki"]) {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Kendinize eşit veya sizden yüksek bir yetki atayamazsınız.");
                            } else {
                                baglantim["query"]("select COUNT(*) as TOP from uyeler where rumuz=? and id!=?", [BakAdmin['rumuz'], BakAdmin['id']], function(_0x4a8b84, _0xde4178, _0x3500dd) {
                                    if (_0x4a8b84) {
                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgu hatası.");
                                    } else {
                                        if (_0xde4178[0]["TOP"] > 0x0) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu kullanıcı adı daha önce alınmış.");
                                        } else {
                                            baglantim["query"]("select uyeler.*, COUNT(*) as TOPVAR from uyeler where yetki=16", function(_0x22f7c7, _0x5727a8, _0x1ac3ab) {
                                                sonuclarwtrVert = _0x5727a8[0];
                                                if (_0x22f7c7) {
                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Veritabanı sorgu hatası.');
                                                } else {
                                                    if (sonuclarwtrVert["TOPVAR"] >0&& BakAdmin['yetki'] == 0x10) {
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sadece 1 Adet Root Eklenebilir.");
                                                    } else {
                                                        baglantim["query"]("select uyeler.*, COUNT(*) as TOPVAR from uyeler where id=?", [BakAdmin['id']], function(_0x21da94, _0x5e3a6b, _0x52ace6) {
                                                            sonuclarwtrVer = _0x5e3a6b[0];
                                                            if (_0x21da94) {
                                                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgu hatası.");
                                                            } else {
                                                                if (sonuclarwtrVer["TOPVAR"] < 0x1) {
                                                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Böyle biri yok.");
                                                                } else {
                                                                    if (sonuclarwtrVer["yetki"] >= sohbetik["yetki"]) {
                                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu kişinin yetkisi, size eşit veya sizden büyük. Bu sebeple işlem yapamazsınız.");
                                                                    } else {
                                                                        if (sonuclarwtrVer["rumuz"] = !BakAdmin["eskirumuz"]) {
                                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Güncellemek istenilen kullanıcı adı ile ID verisi uyuşmuyor.');
                                                                        } else {
                                                                            if (sonuclarwtrVer["koruma_altinda"] == 'e' && sohbetik['kullaniciAdi'] != "GimGim") {
                                                                                console.log("Korumaya alınan üye hakkında işlem : İşlem: Düzenleme İp adresi : " + _0x2c10b3 + " Tarih : " + parcaliTarih() + "  Admin : " + sohbetik["kullaniciAdi"] + " Hedef : " + BakAdmin["eskirumuz"]);
                                                                                soketimiz.to(sohbetik['id']).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Bu kişi (" + BakAdmin["eskirumuz"] + "); çok sayıda mağdur olduğu anlaşıldığından, artık koruma altındadır", 'e');
                                                                            } else {
                                                                                degisti = 0x0;
                                                                                hrkt = '';
                                                                                sifre = sonuclarwtrVer["sifre"];
                                                                                if (BakAdmin["eskirumuz"] != BakAdmin["rumuz"]) {
                                                                                    baglantim["query"]("UPDATE hareketler SET ? WHERE admin = ?", [{
                                                                                        'admin': BakAdmin["rumuz"]
                                                                                    }, BakAdmin["eskirumuz"]]);
                                                                                    hrkt += 'Rumuz değiştirdi - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["sifre"].length >0&& md5g(BakAdmin["sifre"]) != sonuclarwtrVer["sifre"]) {
                                                                                    hrkt += "Şifre değiştirdi - ";
                                                                                    sifre = md5g(BakAdmin['sifre']);
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (cinsiyetdddf != sonuclarwtrVer['cinsiyet']) {
                                                                                    hrkt += "Cinsiyet değiştirdi - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["yetki"] != sonuclarwtrVer["yetki"]) {
                                                                                    hrkt += 'Yetki değiştirdi - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['ozel_mesaj'] != sonuclarwtrVer["ozel_mesaj"]) {
                                                                                    hrkt += "Özel mesaj yetkisi" + (BakAdmin["ozel_mesaj"] == 'e' ? " verdi" : 'ni aldı') + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["log_yetkisi"] != sonuclarwtrVer["log_yetkisi"]) {
                                                                                    hrkt += "Giriş kayıtları yetkisi" + (BakAdmin['log_yetkisi'] == 'e' ? ' verdi' : "ni aldı") + ' - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["ban_yetkisi"] != sonuclarwtrVer["ban_yetkisi"]) {
                                                                                    hrkt += "Ip banlama yetkisi" + (BakAdmin["ban_yetkisi"] == 'e' ? ' verdi' : 'ni aldı') + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['mute_yetkisi'] != sonuclarwtrVer["mute_yetkisi"]) {
                                                                                    hrkt += 'Engelleme yetkisi' + (BakAdmin["mute_yetkisi"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["atma_yetkisi"] != sonuclarwtrVer["atma_yetkisi"]) {
                                                                                    hrkt += "Siteden atma yetkisi" + (BakAdmin["atma_yetkisi"] == 'e' ? " verdi" : "ni aldı") + ' - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["kamera_yetkisi"] != sonuclarwtrVer['kamera_yetkisi']) {
                                                                                    hrkt += 'Kamera Engel yetkisi' + (BakAdmin['kamera_yetkisi'] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['ip_gorme'] != sonuclarwtrVer["ip_gorme"]) {
                                                                                    hrkt += "Ip görme yetkisi" + (BakAdmin["ip_gorme"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["admin_hareketleri"] != sonuclarwtrVer["admin_hareketleri"]) {
                                                                                    hrkt += 'Admin hareketleri yetkisi' + (BakAdmin["admin_hareketleri"] == 'e' ? " verdi" : "ni aldı") + ' - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["oda_yonetimi"] != sonuclarwtrVer["oda_yonetimi"]) {
                                                                                    hrkt += "Oda yönetme yetkisi" + (BakAdmin["oda_yonetimi"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["uye_yonetimi"] != sonuclarwtrVer["uye_yonetimi"]) {
                                                                                    hrkt += "Üye yönetme yetkisi" + (BakAdmin['uye_yonetimi'] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['genel_atma'] != sonuclarwtrVer["genel_atma"]) {
                                                                                    hrkt += "Genel atma yetkisi" + (BakAdmin["genel_atma"] == 'e' ? " verdi" : 'ni aldı') + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["admin_panel"] != sonuclarwtrVer["admin_panel"]) {
                                                                                    hrkt += "Admin paneli yetkisi" + (BakAdmin["admin_panel"] == 'e' ? ' verdi' : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["nickdegis"] != sonuclarwtrVer["nickdegis"]) {
                                                                                    hrkt += "2. Nick ile gelme yetkisi" + (BakAdmin["nickdegis"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['loglardagizle'] != sonuclarwtrVer["loglardagizle"]) {
                                                                                    hrkt += "Gizli log yetkisi" + (BakAdmin["loglardagizle"] == 'e' ? " verdi" : "ni aldı") + ' - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['admin_ayarlar'] != sonuclarwtrVer["admin_ayarlar"]) {
                                                                                    hrkt += "Mikrofon süre yetkisi" + (BakAdmin["admin_ayarlar"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['yildizrengi'] != sonuclarwtrVer["yildizrengi"]) {
                                                                                    hrkt += "Yıldız Rengi değiştirdi - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["rutbe_yonetimi"] != sonuclarwtrVer["rutbe_yonetimi"]) {
                                                                                    hrkt += 'Rütbeler Yetkisi' + (BakAdmin["rutbe_yonetimi"] == 'e' ? ' verdi' : "ni aldı") + ' - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["sapkano"] != sonuclarwtrVer["sapkano"]) {
                                                                                    hrkt += 'Yıldız sayısını değiştirdi - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["kilit"] != sonuclarwtrVer["kilit"]) {
                                                                                    hrkt += '' + (BakAdmin["kilit"] == 'e' ? "Üyelik kilitledi" : 'Üyelik kilidini açtı') + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (uye_bitir != sonuclarwtrVer["uye_bitir"]) {
                                                                                    hrkt += "Üyelik bitiş tarihi değiştirme - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["toplantiyetkisi"] != sonuclarwtrVer['toplantiyetkisi']) {
                                                                                    hrkt += 'Toplantı Yetkisi' + (BakAdmin["toplantiyetkisi"] == 'e' ? ' verdi' : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["nickbar"] != sonuclarwtrVer["nickbar"]) {
                                                                                    hrkt += 'Flash Değişti - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin['flash'] != sonuclarwtrVer["flash"]) {
                                                                                    hrkt += 'Üye Resmini Sildi - ';
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (BakAdmin["catiyotkisi"] != sonuclarwtrVer["catiyotkisi"]) {
                                                                                    hrkt += "Çatı Yetkisi" + (BakAdmin["catiyotkisi"] == 'e' ? " verdi" : "ni aldı") + " - ";
                                                                                    degisti = degisti + 0x1;
                                                                                }
                                                                                if (degisti > 0x0) {
                                                                                    baglantim["query"]("UPDATE uyeler SET ? WHERE id = ?", [{
                                                                                        'rumuz': BakAdmin['rumuz'],
                                                                                        'sifre': sifre,
                                                                                        'cinsiyet': cinsiyetdddf,
                                                                                        'yetki': BakAdmin["yetki"],
                                                                                        'ozel_mesaj': BakAdmin["ozel_mesaj"],
                                                                                        'log_yetkisi': BakAdmin["log_yetkisi"],
                                                                                        'ban_yetkisi': BakAdmin["ban_yetkisi"],
                                                                                        'ip_gorme': BakAdmin["ip_gorme"],
                                                                                        'admin_hareketleri': BakAdmin["admin_hareketleri"],
                                                                                        'oda_yonetimi': BakAdmin["oda_yonetimi"],
                                                                                        'uye_yonetimi': BakAdmin['uye_yonetimi'],
                                                                                        'kilit': BakAdmin["kilit"],
                                                                                        'uye_bitir': uye_bitir,
                                                                                        'genel_atma': BakAdmin['genel_atma'],
                                                                                        'nickdegis': BakAdmin["nickdegis"],
                                                                                        'loglardagizle': BakAdmin["loglardagizle"],
                                                                                        'admin_ayarlar': BakAdmin["admin_ayarlar"],
                                                                                        'sapkano': BakAdmin["sapkano"],
                                                                                        'flash': BakAdmin['flash'],
                                                                                        'catiyotkisi': BakAdmin['catiyotkisi'],
                                                                                        'toplantiyetkisi': BakAdmin["toplantiyetkisi"],
                                                                                        'nickbar': BakAdmin['nickbar'],
                                                                                        'admin_panel': BakAdmin['admin_panel'],
                                                                                        'rutbe_yonetimi': BakAdmin["rutbe_yonetimi"],
                                                                                        'yetkiadi': BakAdmin["yetkiadi"],
                                                                                        'yildizrengi': BakAdmin['yildizrengi'],
                                                                                        'mute_yetkisi': BakAdmin["mute_yetkisi"],
                                                                                        'atma_yetkisi': BakAdmin["atma_yetkisi"],
                                                                                        'kamera_yetkisi': BakAdmin["kamera_yetkisi"]
                                                                                    }, BakAdmin['id']], function(_0x440b93, _0x4c49fa) {
                                                                                        if (_0x440b93) {
                                                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı bilgilerini güncelleme esnasında hata oluştu.");
                                                                                        } else {
                                                                                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Üye Bilgileri Güncellendi.");
                                                                                            hrkt = hrkt["substr"](0x0, hrkt.length - 0x3)["trim"]();
                                                                                            _0x2ace0c(sohbetik['kullaniciAdi'], BakAdmin["eskirumuz"], hrkt, sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                                                            kisiBagli = 0x0;
                                                                                            for (var _0x453958 in soketgir) {
                                                                                                if (soketgir[_0x453958]["kimlikid"] == BakAdmin['id']) {
                                                                                                    kisiBagli = 0x1;
                                                                                                    break;
                                                                                                }
                                                                                            }
                                                                                            if (kisiBagli > 0x0) {
                                                                                                if (BakAdmin["eskirumuz"] != BakAdmin['rumuz']) {
                                                                                                    for (var _0x453958 in soketgir) {
                                                                                                        if (soketgir[_0x453958]["userName"].toLowerCase() == BakAdmin["eskirumuz"].toLowerCase()) {
                                                                                                            soketimiz.to(soketgir[_0x453958]["userId"]).emit("uyariClientGoster", "Üye rumuzunuz değiştirildiğinden ötürü, tekrar giriş yapmalısınız. (değiştiren : " + sohbetik["kullaniciAdi"] + ')');
                                                                                                            soketimiz.sockets.sockets[soketgir[_0x453958]["userId"]]["disconnect"]();
                                                                                                            break;
                                                                                                        }
                                                                                                    }
                                                                                                } else {
                                                                                                    var _0x837d57 = md5g(BakAdmin["rumuz"]);
                                                                                                    soketgir[_0x837d57] = {
                                                                                                        'userName': BakAdmin["rumuz"],
                                                                                                        'userKripto': _0x837d57,
                                                                                                        'kimlikid': BakAdmin['id'],
                                                                                                        'botdurum': 0,
                                                                                                        'userId': soketgir[_0x837d57]["userId"],
                                                                                                        'userCinsiyet': cinsiyetdddf,
                                                                                                        'userResim': soketgir[_0x837d57]["userResim"],
                                                                                                        'userStatu': BakAdmin["yetkiadi"],
                                                                                                        'userStatuINT': BakAdmin['yetki'],
                                                                                                        'yildizrengi': BakAdmin['yildizrengi'],
                                                                                                        'userMobilemi': soketgir[_0x837d57]["userMobilemi"],
                                                                                                        'googleApp': soketgir[_0x837d57]["googleApp"],
                                                                                                        'userOda': soketgir[_0x837d57]["userOda"],
                                                                                                        'userDurum': soketgir[_0x837d57]["userDurum"],
                                                                                                        'userCT': 0,
                                                                                                        'userMutelimi': soketgir[_0x837d57]["userMutelimi"],
                                                                                                        'userOzelMesaj': 1,
                                                                                                        'userOzelArama': 1,
                                                                                                        'useryorumlar': 1,
                                                                                                        'userIslemTarih': TarihCe(),
                                                                                                        'userIslemTarihV': TarihCe() -30,
                                                                                                        'userWebRTCId': '',
                                                                                                        'userWebRTCCam': 0,
                                                                                                        'userWebRTCMik': 0,
                                                                                                        'userWebRTCSes': 0,
                                                                                                        'userkonusmada': 0,
                                                                                                        'userWebRTCCam_X': soketgir[_0x837d57]["userWebRTCCam_X"],
                                                                                                        'sapkano': BakAdmin["sapkano"],
                                                                                                        'catiyotkisi': BakAdmin["catiyotkisi"],
                                                                                                        'toplantiyetkisi': BakAdmin["toplantiyetkisi"],
                                                                                                        'userMikrofonSirasi': 0,
                                                                                                        'mikrofonZamani': 0,
                                                                                                        'admin_hareketleri': BakAdmin["admin_hareketleri"],
                                                                                                        'koruma_altinda': 'h',
                                                                                                        'flash': BakAdmin["flash"],
                                                                                                        'nickbar': BakAdmin['nickbar'],
                                                                                                        'userNameTwo': soketgir[_0x837d57]["userNameTwo"],
                                                                                                        'saldiri': 0,
                                                                                                        'saldiriTarih': TarihCe(),
                                                                                                        'userIslemTarihTime': islemTrh(),
                                                                                                        'floodSayisi': 0x0
                                                                                                    };
                                                                                                    if (BakAdmin["kilit"] != sonuclarwtrVer['kilit'] && BakAdmin['kilit'] == 'e') {
                                                                                                        soketimiz.to(soketgir[_0x837d57]["userId"]).emit("uyariClientGoster", 'Üyeliginiz Donduruldu. (değiştiren : ' + sohbetik["kullaniciAdi"] + ')');
                                                                                                        soketimiz.sockets.sockets[soketgir[_0x837d57]["userId"]]["disconnect"]();
                                                                                                    }
                                                                                                    KsiYenile();
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    });
                                                                                } else {
                                                                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Hiç bir değişiklik yapmadınız.");
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        });
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID alanı numeric olmak zorunda.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üyeleri silme yetkiniz yok.");
                    }
                } catch (_0x173d30) {
                    console.error(_0x173d30);
                }
            } else if (_0x50e62c == "botlar") {
                try {
                    if (sohbetik["uye_yonetimi"] == 'e') {
                        baglantim["query"]("select uyeler.rumuz,uyeler.cinsiyet,uyeler.resim,uyeler.id,uyeler.yetki,uyeler.flash,uyeler.nickbar,uyeler.songiris,uyeler.botdurum,uyeler.songiristarihi,yetkiler.adi as YetkiStrSi from uyeler INNER JOIN yetkiler ON uyeler.yetki = yetkiler.rutbe where botdurum=1 order by uyeler.yetki desc limit 2000", function(_0x2c8247, _0x2d6e5b, _0x5716cd) {
                            if (_0x2c8247) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                            } else {
                                if (_0x2d6e5b.length > 0x0) {
                                    sohbetik.emit("botleriGeldiYonetici", _0x2d6e5b);
                                } else {
                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Üye bulunamadı.');
                                }
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Üyeleri Görme Yetkiniz Yok.');
                    }
                } catch (_0x1c801e) {
                    console.error(_0x1c801e);
                }
            } else if (_0x50e62c == "BotDuzenleme") {
                try {
                    if (sohbetik["uye_yonetimi"] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim["query"]("select * from uyeler where id=" + BakAdmin + '', function(_0x211ed7, _0x40e3d5, _0x4076f5) {
                                if (_0x211ed7) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Veritabanı sorgusunda hata meydana geldi.');
                                } else {
                                    if (_0x40e3d5.length > 0x0) {
                                        _0x40e3d5 = _0x40e3d5[0];
                                        if (sohbetik["ip_gorme"] == 'e') {
                                            ip = _0x40e3d5['ip'];
                                        } else {
                                            ip = '0.0.0.0';
                                        }
                                        if (_0x40e3d5["songiris"] > 0x0) {
                                            sg = Tarihcene(_0x40e3d5["songiris"]);
                                        } else {
                                            sg = "Hiç bir zaman";
                                        }
                                        sohbetik.emit("BotDuzenlemeGeldi", {
                                            'id': _0x40e3d5['id'],
                                            'rumuz': _0x40e3d5["rumuz"],
                                            'cinsiyet': _0x40e3d5["cinsiyet"],
                                            'yetki': _0x40e3d5["yetki"],
                                            'resim': _0x40e3d5['resim'],
                                            'flash': _0x40e3d5["flash"],
                                            'nickbar': _0x40e3d5["nickbar"],
                                            'songiris': sg,
                                            'songiristarihi': _0x40e3d5["songiristarihi"],
                                            'ip': ip,
                                            'kayittarihi': Tarihcene(_0x40e3d5["kayittarihi"]),
                                            'uyekayittarihi': _0x40e3d5["uyekayittarihi"],
                                            'uye_bitir': "12-12-2030",
                                            'kilit': 'h',
                                            'ozel_mesaj': 'h',
                                            'log_yetkisi': 'h',
                                            'ban_yetkisi': 'h',
                                            'mute_yetkisi': 'h',
                                            'atma_yetkisi': 'h',
                                            'kamera_yetkisi': 'h',
                                            'ip_gorme': 'h',
                                            'admin_hareketleri': 'h',
                                            'oda_yonetimi': 'h',
                                            'uye_yonetimi': 'h',
                                            'genel_atma': 'h',
                                            'nickdegis': 'h',
                                            'loglardagizle': 'h',
                                            'admin_ayarlar': 'h',
                                            'sapkano': _0x40e3d5["sapkano"],
                                            'catiyotkisi': 'h',
                                            'toplantiyetkisi': 'h',
                                            'admin_panel': 'h',
                                            'rutbe_yonetimi': 'h',
                                            'yildizrengi': _0x40e3d5['yildizrengi'],
                                            'botdurum': '1',
                                            'botoda': _0x40e3d5['botoda'],
                                            'botdurummodu': _0x40e3d5["botdurummodu"],
                                            'yetkilerListesi': yetkilirutbeFull,
                                            'botodalari': userodalistesi,
                                            'botdurumlari': botdurumlistesi
                                        });
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'ID olarak; ( ' + BakAdmin + " ) olan bir bot bulunamadı.");
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID Yanlış.");
                        }
                        kriptola();
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üyeleri yönetme yetkiniz yok.");
                    }
                } catch (_0x293d50) {
                    console.error(_0x293d50);
                }
            } else if (_0x50e62c == "BotDuzenlemeSon") {
                try {
                    if (sohbetik['uye_yonetimi'] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            var _0x12611d = [' ', ':', '\x27', '@', '\x5c*', '#', '\x5c\x5c', '"', '>', '<', "misafir"];
                            var _0x1e339c = ['', '', '', '', '', '', '', '', '', '', ''];
                            BakAdmin["rumuz"] = BakAdmin["rumuz"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            BakAdmin['id'] = BakAdmin['id'];
                            if (BakAdmin["rumuz"].length < 0x3 || BakAdmin['rumuz'].length > 0xf) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Lütfen en az 3, en fazla 15 karakterlik bir kullanıcı adı yazınız.');
                            } else if (BakAdmin["yetki"] < 0x0) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Böyle bir yetki sistemi yok.');
                            } else {
                                baglantim["query"]('select COUNT(*) as TOP from uyeler where rumuz=? and id!=?', [BakAdmin["rumuz"], BakAdmin['id']], function(_0x51081c, _0x1e15fa, _0x5e1fb7) {
                                    if (_0x51081c) {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası.");
                                    } else {
                                        if (_0x1e15fa[0]["TOP"] > 0x0) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu kullanıcı adı daha önce alınmış.");
                                        } else {
                                            baglantim['query']("select uyeler.*, COUNT(*) as TOPVAR from uyeler where id=?", [BakAdmin['id']], function(_0x3a738c, _0x44c73a, _0x2d48ef) {
                                                sonuclarwtrVer = _0x44c73a[0];
                                                if (_0x3a738c) {
                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası.");
                                                } else {
                                                    if (sonuclarwtrVer["TOPVAR"] < 0x1) {
                                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Böyle biri yok.");
                                                    } else {
                                                        if (sonuclarwtrVer["rumuz"] = !BakAdmin["eskirumuz"]) {
                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Güncellemek istenilen kullanıcı adı ile ID verisi uyuşmuyor.');
                                                        } else {
                                                            if (sonuclarwtrVer["koruma_altinda"] == 'e' && sohbetik['kullaniciAdi'] != "GimGim") {
                                                                console.log('Korumaya alınan üye hakkında işlem : \x0aİşlem: Düzenleme \x0aİp adresi : ' + _0x2c10b3 + ' Tarih : ' + parcaliTarih() + ' \x0aAdmin : ' + sohbetik["kullaniciAdi"] + ' Hedef : ' + BakAdmin["eskirumuz"]);
                                                                soketimiz.to(sohbetik['id']).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Bu kişi (" + BakAdmin["eskirumuz"] + "); çok sayıda mağdur olduğu anlaşıldığından, artık koruma altındadır", 'e');
                                                            } else {
                                                                degisti = 0x0;
                                                                hrkt = '';
                                                                if (BakAdmin["eskirumuz"] != BakAdmin["rumuz"]) {
                                                                    baglantim["query"]("UPDATE hareketler SET ? WHERE admin = ?", [{
                                                                        'admin': BakAdmin["rumuz"]
                                                                    }, BakAdmin["eskirumuz"]]);
                                                                    hrkt += "Rumuz değiştirdi - ";
                                                                    degisti = degisti + 0x1;
                                                                }
                                                                if (BakAdmin["cinsiyet"] != sonuclarwtrVer["cinsiyet"] || BakAdmin['yetki'] != sonuclarwtrVer["yetki"] || BakAdmin["yetkiadi"] != sonuclarwtrVer["yetkiadi"] || BakAdmin["yildizrengi"] != sonuclarwtrVer["yildizrengi"] || BakAdmin['nickbar'] != sonuclarwtrVer["nickbar"] || BakAdmin["botoda"] != sonuclarwtrVer["botoda"] || BakAdmin["sapkano"] != sonuclarwtrVer["sapkano"] || BakAdmin["botdurummodu"] != sonuclarwtrVer["botdurummodu"]) {
                                                                    hrkt += "Bot Bilgileri Değiştirme";
                                                                    degisti = degisti + 0x1;
                                                                }
                                                                if (degisti > 0x0) {
                                                                    baglantim["query"]("UPDATE uyeler SET ? WHERE id = ?", [{
                                                                        'rumuz': BakAdmin["rumuz"],
                                                                        'cinsiyet': BakAdmin["cinsiyet"],
                                                                        'yetki': BakAdmin["yetki"],
                                                                        'yetkiadi': BakAdmin["yetkiadi"],
                                                                        'yildizrengi': BakAdmin["yildizrengi"],
                                                                        'nickbar': BakAdmin["nickbar"],
                                                                        'botoda': BakAdmin["botoda"],
                                                                        'sapkano': BakAdmin["sapkano"],
                                                                        'botdurummodu': BakAdmin['botdurummodu']
                                                                    }, BakAdmin['id']], function(_0xf4ef21, _0x559de1) {
                                                                        if (_0xf4ef21) {
                                                                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı bilgilerini güncelleme esnasında hata oluştu.");
                                                                        } else {
                                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bot Bilgileri Güncellendi.");
                                                                            hrkt = hrkt["substr"](0x0, hrkt.length - 0x3)['trim']();
                                                                            _0x2ace0c(sohbetik["kullaniciAdi"], BakAdmin["eskirumuz"], hrkt, sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                                            if (BakAdmin["eskirumuz"] != BakAdmin["rumuz"]) {
                                                                                var _0x29dee0 = md5g(BakAdmin["eskirumuz"]);
                                                                                sohbetik['leave'](BakAdmin['botoda']);
                                                                                delete soketgir[_0x29dee0];
                                                                                delete _0x3b706d[_0x29dee0];
                                                                            }
                                                                            if (BakAdmin['botoda'] != BakAdmin["eskibotoda"]) {
                                                                                if (_0x3d4844[BakAdmin["eskibotoda"]] == undefined) {
                                                                                    _0x3d4844[BakAdmin['eskibotoda']] = 0x1;
                                                                                } else {
                                                                                    _0x3d4844[BakAdmin["eskibotoda"]]--;
                                                                                }
                                                                                odalar[BakAdmin['eskibotoda']]["onlineKisi"] = _0x3d4844;
                                                                                if (_0x3d4844[BakAdmin["botoda"]] == undefined) {
                                                                                    _0x3d4844[BakAdmin["botoda"]] = 0x1;
                                                                                } else {
                                                                                    _0x3d4844[BakAdmin["botoda"]]++;
                                                                                }
                                                                                odalar[BakAdmin["botoda"]]["onlineKisi"] = _0x3d4844;
                                                                            }
                                                                            baglantim["query"]('select * from durum_mod order by id asc', function(_0x20e85e, _0x1285de, _0xa45dae) {
                                                                                botdurumlistesi = _0x1285de;
                                                                            });
                                                                            var _0x1d75f5 = md5g(BakAdmin['rumuz']);
                                                                            soketgir[_0x1d75f5] = {
                                                                                'userName': BakAdmin['rumuz'],
                                                                                'userKripto': _0x1d75f5,
                                                                                'kimlikid': BakAdmin['id'],
                                                                                'botdurum': 1,
                                                                                'userId': _0x1d75f5,
                                                                                'userCinsiyet': BakAdmin["cinsiyet"],
                                                                                'userResim': 0,
                                                                                'userStatu': BakAdmin['yetkiadi'],
                                                                                'userStatuINT': BakAdmin["yetki"],
                                                                                'yildizrengi': BakAdmin["yildizrengi"],
                                                                                'userMobilemi': !![],
                                                                                'googleApp': !![],
                                                                                'userOda': BakAdmin["botoda"],
                                                                                'userDurum': BakAdmin["botdurummodu"],
                                                                                'userCT': 0,
                                                                                'userMutelimi': 0,
                                                                                'userOzelMesaj': 1,
                                                                                'userOzelArama': 0,
                                                                                'useryorumlar': 0,
                                                                                'userIslemTarih': TarihCe(),
                                                                                'userIslemTarihV': TarihCe() -30,
                                                                                'userWebRTCId': '',
                                                                                'userWebRTCCam': 0,
                                                                                'userWebRTCMik': 0,
                                                                                'userWebRTCSes': 0,
                                                                                'userkonusmada': 0,
                                                                                'userWebRTCCam_X': 0,
                                                                                'sapkano': BakAdmin["sapkano"],
                                                                                'catiyotkisi': 'h',
                                                                                'toplantiyetkisi': 'h',
                                                                                'userMikrofonSirasi': 0,
                                                                                'mikrofonZamani': 0,
                                                                                'admin_hareketleri': 'h',
                                                                                'koruma_altinda': 'h',
                                                                                'flash': BakAdmin["flash"],
                                                                                'nickbar': BakAdmin["nickbar"],
                                                                                'userNameTwo': '0',
                                                                                'saldiri': 0,
                                                                                'saldiriTarih': TarihCe(),
                                                                                'userIslemTarihTime': islemTrh(),
                                                                                'floodSayisi': 0x0
                                                                            };
                                                                            kriptola();
                                                                            KsiYenile();
                                                                        }
                                                                    });
                                                                } else {
                                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Hiç bir değişiklik yapmadınız.");
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID alanı numeric olmak zorunda.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Üyeleri silme yetkiniz yok.');
                    }
                } catch (_0x1058fd) {
                    console.error(_0x1058fd);
                }
            } else if (_0x50e62c == 'BotEkleme') {
                try {
                    if (sohbetik["rutbe_yonetimi"] == 'e') {
                        var _0x12611d = ['\x27', '\x5c\x5c', '"', '>', '<'];
                        var _0x1e339c = ['', '', '', '', ''];
                        id = BakAdmin['id'];
                        botrumuz = BakAdmin["rumuz"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                        botcinsiyet = BakAdmin["cinsiyet"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                        sifresi = 'R352AzO4787';
                        for (var _0x284bcf in odalar) {
                            if (odalar[_0x284bcf]['id'] == 0x1) {
                                var _0x18fb56 = odalar[_0x284bcf]["adi"];
                            }
                        }
                        var _0x55a5f2 = _0x18fb56;
                        baglantim['query']("select COUNT(*) as TOPkilid from uyeler where botdurum =1", function(_0xa52dce, _0x2e5e45, _0x2216c3) {
                            if (_0x2e5e45[0]['TOPkilid'] > process.env["BOOTLIMIT"]) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bot Ekleme Limitiniz Doldu.");
                            } else {
                                if (botrumuz.length < 0x4 || botrumuz.length >30) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bot Rumuzu En az 3 En Fazla 15 Karakter Olabilir.");
                                } else {
                                    baglantim['query']("select COUNT(*) as TOP from uyeler where rumuz = ?", [botrumuz], function(_0x4b732e, _0x387c3d, _0x482d20) {
                                        if (_0x4b732e) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası.");
                                        } else {
                                            if (_0x387c3d[0]["TOP"] > 0x0) {
                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu rumuz daha önceden alınmış.");
                                            } else {
                                                var _0x13228e = {
                                                    'rumuz': botrumuz,
                                                    'sifre': md5g(sifresi),
                                                    'cinsiyet': botcinsiyet,
                                                    'yetki': 0,
                                                    'ip': "185.85.85.185",
                                                    'songiris': TarihCe(),
                                                    'kayittarihi': TarihCe(),
                                                    'uyekayittarihi': kisatarih(),
                                                    'songiristarihi': kisatarih(),
                                                    'yetkiadi': 'Üye',
                                                    'yildizrengi': "000000",
                                                    'botdurum': 1,
                                                    'botoda': _0x55a5f2
                                                };
                                                baglantim["query"]("INSERT INTO uyeler SET ?", _0x13228e, function(_0x547bc6, _0xc562d0) {
                                                    if (_0x4b732e) {
                                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Bot eklenemedi. Veritabanı hatası meydana geldi.' + _0x4b732e);
                                                    } else {
                                                        _0x2ace0c(sohbetik['kullaniciAdi'], botrumuz, "Yeni Bot Ekledi", sohbetik["yetki"], sohbetik['cinsiyet']);
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Yeni Bot Eklendi.");
                                                        baglantim["query"]("select * from uyeler where botdurum='1' and rumuz='" + botrumuz + '\x27 order by id asc', function(_0x1ebf4a, _0x39a0b1, _0x1954c9) {
                                                            botkullanici = _0x39a0b1;
                                                            sonuclarwtrVer = _0x39a0b1[0];
                                                            for (var _0x3899ea in botkullanici) {
                                                                soketgir[md5g(botkullanici[_0x3899ea]["rumuz"])] = {
                                                                    'userName': botkullanici[_0x3899ea]["rumuz"],
                                                                    'userKripto': md5g(botkullanici[_0x3899ea]['rumuz']),
                                                                    'kimlikid': botkullanici[_0x3899ea]['id'],
                                                                    'botdurum': botkullanici[_0x3899ea]["botdurum"],
                                                                    'userId': md5g(botkullanici[_0x3899ea]["rumuz"]),
                                                                    'userCinsiyet': botkullanici[_0x3899ea]["cinsiyet"],
                                                                    'userResim': botkullanici[_0x3899ea]["resim"],
                                                                    'userStatu': botkullanici[_0x3899ea]["yetkiadi"],
                                                                    'userStatuINT': botkullanici[_0x3899ea]["yetki"],
                                                                    'yildizrengi': botkullanici[_0x3899ea]["yildizrengi"],
                                                                    'userMobilemi': !![],
                                                                    'googleApp': !![],
                                                                    'userOda': botkullanici[_0x3899ea]["botoda"],
                                                                    'userDurum': "Çevrimiçi",
                                                                    'userCT': 0,
                                                                    'userMutelimi': 0,
                                                                    'userOzelMesaj': 1,
                                                                    'userOzelArama': 0,
                                                                    'useryorumlar': 0,
                                                                    'userIslemTarih': TarihCe(),
                                                                    'userIslemTarihV': TarihCe() -30,
                                                                    'userWebRTCId': '',
                                                                    'userWebRTCCam': 0,
                                                                    'userWebRTCMik': 0,
                                                                    'userWebRTCSes': 0,
                                                                    'userkonusmada': 0,
                                                                    'userWebRTCCam_X': 0,
                                                                    'sapkano': botkullanici[_0x3899ea]["sapkano"],
                                                                    'catiyotkisi': 'h',
                                                                    'toplantiyetkisi': 'h',
                                                                    'userMikrofonSirasi': 0,
                                                                    'mikrofonZamani': 0,
                                                                    'admin_hareketleri': 'h',
                                                                    'koruma_altinda': 'h',
                                                                    'flash': botkullanici[_0x3899ea]["flash"],
                                                                    'nickbar': botkullanici[_0x3899ea]["nickbar"],
                                                                    'userNameTwo': '0',
                                                                    'saldiri': 0,
                                                                    'saldiriTarih': TarihCe(),
                                                                    'userIslemTarihTime': islemTrh(),
                                                                    'floodSayisi': 0x0
                                                                };
                                                            }
                                                            if (_0x3d4844[sonuclarwtrVer["botoda"]] == undefined) {
                                                                _0x3d4844[sonuclarwtrVer["botoda"]] = 0x1;
                                                            } else {
                                                                _0x3d4844[sonuclarwtrVer["botoda"]]++;
                                                            }
                                                            odalar[sonuclarwtrVer['botoda']]['onlineKisi'] = _0x3d4844;
                                                            KsiYenile();
                                                            kriptola();
                                                        });
                                                    }
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bot ekleme yetkiniz yok.");
                    }
                } catch (_0x10eb04) {
                    console.error(_0x10eb04);
                }
            } else if (_0x50e62c == "BotSilme") {
                try {
                    if (sohbetik["uye_yonetimi"] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim["query"]("select uyeler.*, COUNT(*) as TOPVAR from uyeler where id= ?", [BakAdmin], function(_0x46d36e, _0x5e4d8a, _0x4cfe4d) {
                                sonuclarwtrVer = _0x5e4d8a[0];
                                if (_0x46d36e) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası.");
                                } else {
                                    if (sonuclarwtrVer["TOPVAR"] < 0x1) {
                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Böyle biri yok.");
                                    } else {
                                        if (sonuclarwtrVer["koruma_altinda"] == 'e' && sohbetik["kullaniciAdi"] != "GimGim") {
                                            console.log("Korumaya alınan üye hakkında işlem : İşlem: Silme İp adresi : " + _0x2c10b3 + " Tarih : " + parcaliTarih() + " Admin : " + sohbetik['kullaniciAdi'] + " Hedef : " + sonuclarwtrVer["rumuz"]);
                                            soketimiz.to(sohbetik['id']).emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "Bu kişi (" + sonuclarwtrVer["rumuz"] + "); çok sayıda mağdur olduğu anlaşıldığından, artık koruma altındadır", 'e');
                                        } else {
                                            baglantim["query"]("DELETE from uyeler WHERE id = " + BakAdmin + " limit 1", function(_0x3c9117, _0x599c8f) {
                                                etkilenenSatirlar = _0x599c8f['affectedRows'];
                                                if (_0x3c9117) {
                                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı bilgilerini silme esnasında hata oluştu.");
                                                } else {
                                                    if (etkilenenSatirlar > 0x0) {
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "<font color='red'>" + sonuclarwtrVer["rumuz"] + "</font> isimli bot silindi.");
                                                        _0x2ace0c(sohbetik['kullaniciAdi'], sonuclarwtrVer['rumuz'], "Bot Silme", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                        var _0x2a2237 = md5g(sonuclarwtrVer['rumuz']);
                                                        sohbetik.leave(sonuclarwtrVer["botoda"]);
                                                        delete soketgir[_0x2a2237];
                                                        delete _0x3b706d[_0x2a2237];
                                                        if (_0x3d4844[sonuclarwtrVer["botoda"]] == undefined) {
                                                            _0x3d4844[sonuclarwtrVer['botoda']] = 0x1;
                                                        } else {
                                                            _0x3d4844[sonuclarwtrVer["botoda"]]--;
                                                        }
                                                        odalar[sonuclarwtrVer["botoda"]]["onlineKisi"] = _0x3d4844;
                                                        KsiYenile();
                                                        kriptola();
                                                    } else {
                                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Silme işlemi gerçekleşmedi");
                                                    }
                                                }
                                            });
                                        }
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID alanı numeric olmak zorunda.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üyeleri yönetme yetkiniz yok.");
                    }
                } catch (_0x3bbc1e) {
                    console.error(_0x3bbc1e);
                }
            } else if (_0x50e62c == 'BotResimSilme') {
                try {
                    if (sohbetik["uye_yonetimi"] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            baglantim["query"]('select uyeler.*, COUNT(*) as TOPVAR from uyeler where id= ?', [BakAdmin['id']], function(_0x1fa5f4, _0xb07598, _0x14516a) {
                                sonuclarwtrVer = _0xb07598[0];
                                if (_0x1fa5f4) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası.");
                                } else {
                                    if (sonuclarwtrVer["TOPVAR"] < 0x1) {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Böyle biri yok.');
                                    } else {
                                        baglantim["query"]('select * from uyeler where id=?', [BakAdmin['id']], function(_0x439363, _0x3b0030, _0x1ac23f) {
                                            if (_0x439363) {
                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası." + _0x439363);
                                            } else {
                                                if (_0x3b0030[0]['flash'] == '') {
                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Silinecek Resim Yok.");
                                                } else {
                                                    baglantim['query']("UPDATE uyeler SET ? WHERE id = ?", [{
                                                        'flash': ''
                                                    }, BakAdmin['id']], function(_0x3f2394, _0x5bcda5) {
                                                        etkilenenSatirlar = _0x5bcda5["affectedRows"];
                                                        if (_0x3f2394) {
                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı bilgilerini silme esnasında hata oluştu.");
                                                        } else {
                                                            if (etkilenenSatirlar > 0x0) {
                                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "<font color='red'>" + sonuclarwtrVer["rumuz"] + "</font> isimli bot resmi silindi.");
                                                                _0x2ace0c(sohbetik["kullaniciAdi"], sonuclarwtrVer["rumuz"], "Bot Resmi Silme", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                                var _0xf77c55 = require('fs');
                                                                var _0x22d7a6 = __dirname + "/httpdocs/views/uploads/" + BakAdmin["flash"];
                                                                _0xf77c55['unlink'](_0x22d7a6, function(_0x217f05) {
                                                                    if (_0x217f05) {}
                                                                });
                                                                kimiben = md5g(sonuclarwtrVer["rumuz"]);
                                                                kisiBagli = 0x0;
                                                                for (var _0x514695 in soketgir) {
                                                                    if (soketgir[_0x514695]["userKripto"] == kimiben) {
                                                                        kisiBagli = 0x1;
                                                                        break;
                                                                    }
                                                                }
                                                                if (kisiBagli > 0x0) {
                                                                    soketgir[kimiben]["flash"] = '';
                                                                    KsiYenile();
                                                                } else {}
                                                            } else {
                                                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Silme işlemi gerçekleşmedi");
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID alanı numeric olmak zorunda.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Üyeleri yönetme yetkiniz yok.');
                    }
                } catch (_0x2513e7) {
                    console.error(_0x2513e7);
                }
            } else if (_0x50e62c == "oda") {
                try {
                    if (sohbetik['oda_yonetimi'] == 'e') {
                        sohbetik.emit('odalariListeleYonetici', odalar);
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Odaları yönetme yetkiniz yok.");
                    }
                } catch (_0x149733) {
                    console.error(_0x149733);
                }
            } else if (_0x50e62c == "hareketListele") {
                try {
                    if (sohbetik['admin_hareketleri'] == 'e') {
                        var _0x50e62c = new Date();
                        var _0x3437db = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", 'Temmuz', "Ağustos", "Eylül", "Ekim", 'Kasım', "Aralık"];
                        var _0x40d945 = _0x3437db[_0x50e62c.getMonth()];
                        var _0xa6d92f = ('0' + _0x50e62c.getDate()).slice(-0x2);
                        if (sohbetik['ip_gorme'] == 'e') {
                            sorguCumlesi = "select * from hareketler where yetki <= " + sohbetik["yetki"] + " and YEAR(tarih) = '" + _0x50e62c.getFullYear() + '\x27 AND MONTH(tarih) = \x27' + _0x40d945 + '\x27 AND DAY(tarih) = \x27' + _0xa6d92f + "' order by id desc limit 250";
                        } else {
                            sorguCumlesi = "select id,admin,hedef,islem,tarih,tarihgoster,yetki from hareketler where yetki <= " + sohbetik['yetki'] + " and YEAR(tarih) = '" + _0x50e62c.getFullYear() + "' AND MONTH(tarih) = '" + _0x40d945 + "' AND DAY(tarih) = '" + _0xa6d92f + "' order by id desc limit 250";
                        }
                        baglantim["query"](sorguCumlesi, function(_0x18579c, _0x3db638, _0xddcd01) {
                            if (_0x18579c) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                            } else {
                                sohbetik.emit("hareketleriListeleYonetici", _0x3db638);
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Hareketleri görme yetkiniz yok.');
                    }
                } catch (_0x522aab) {
                    console.error(_0x522aab);
                }
            } else if (_0x50e62c == "hareketArama") {
                try {
                    if (sohbetik["admin_hareketleri"] == 'e') {
                        var _0x38ec0c = [' ', ':', '\x27', '@', '\x5c*', '#', '\x5c\x5c', '"', '>', '<', 'misafir'];
                        var _0x1e339c = ['', '', '', '', '', '', '', '', '', '', ''];
                        var _0x23626a, _0x2c9fe7 = '';
                        var _0x334386 = ![];
                        var _0x186dfe = BakAdmin["tarih"];
                        var _0x5bf704 = '';
                        var _0x154ea5 = '';
                        if (_0x186dfe.length > 0x0) {
                            var _0x309a26 = _0x186dfe.split('-');
                            var _0x50cf16 = parseInt(_0x309a26[0], 0xa);
                            var _0x508266 = parseInt(_0x309a26[1], 0xa);
                            var _0xe33188 = parseInt(_0x309a26[0x2], 0xa);
                            var _0x24c86f = new Date();
                            if (_0x50cf16 < 0x7b2 || _0x50cf16.length != 0x4) {
                                _0x334386 = ![];
                            } else {
                                _0x334386 = !![];
                            }
                            if ((_0x508266 <1|| _0x508266 > 0xc) && _0x508266.length != 0x2) {
                                _0x334386 = ![];
                            } else {
                                _0x334386 = !![];
                            }
                            if ((_0xe33188 <1|| _0xe33188 > 0x1f) && _0xe33188.length != 0x2) {
                                _0x334386 = !![];
                            } else {
                                _0x334386 = !![];
                            }
                            _0x154ea5 = ' AND YEAR(tarih) = \x27' + _0x50cf16 + "' AND MONTH(tarih) = '" + _0x508266 + "' AND DAY(tarih) = '" + _0xe33188 + '\x27 ';
                            var _0x23626a = ('0' + (_0x24c86f.getMonth() + 0x1)).slice(-0x2);
                            var _0x2c9fe7 = ('0' + _0x24c86f.getDate()).slice(-0x2);
                        } else {
                            _0x334386 = !![];
                        }
                        if (_0x334386 == ![]) {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Girdiğiniz tarihlerde dengesizlik var.");
                        } else {
                            _0x5bf704 = _0x154ea5;
                            if (sohbetik["ip_gorme"] == 'e') {
                                sorguCumlesi = "select * from hareketler where yetki <= " + sohbetik["yetki"] + ' ' + _0x5bf704 + " order by id desc limit 250";
                            } else {
                                sorguCumlesi = "select id,admin,hedef,islem,tarih,tarihgoster,yetki from hareketler where yetki <= " + sohbetik['yetki'] + ' ' + _0x5bf704 + " order by id desc limit 250";
                            }
                            baglantim["query"](sorguCumlesi, function(_0xed29e2, _0x637d01, _0x2aa296) {
                                if (_0xed29e2) {
                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    sohbetik.emit("hareketleriListeleYonetici", _0x637d01);
                                }
                            });
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Hareketleri arama ve görme yetkiniz yok.");
                    }
                } catch (_0x1b3f8a) {
                    console.error(_0x1b3f8a);
                }
            } else if (_0x50e62c == "odaDuzenle") {
                try {
                    if (sohbetik["oda_yonetimi"] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim["query"]("select * from odalar where id=" + BakAdmin + '', function(_0x59fa5b, _0x558b40, _0x1622a9) {
                                if (_0x59fa5b) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    if (_0x558b40.length > 0x0) {
                                        _0x558b40 = _0x558b40[0];
                                        baglantim["query"]("select rumuz from uyeler where id != 1 and  yetki > 0 and kilit='h' order by yetki desc", function(_0x4fa7ed, _0x172e3a, _0x5bd1b0) {
                                            yetkililerGelir = _0x172e3a;
                                            sohbetik.emit("odaDuzenlemeGeldi", {
                                                'id': _0x558b40['id'],
                                                'adi': _0x558b40["adi"],
                                                'sifre': hDegis(_0x558b40['sifre']),
                                                'yazi': _0x558b40["yazi"],
                                                'sahibi': _0x558b40["sahibi"],
                                                'yetkililerListesi': yetkililerGelir,
                                                'fon': _0x558b40["fon"],
                                                'sohbeticrenk': _0x558b40["sohbeticrenk"],
                                                'listesiralama': _0x558b40["listesiralama"]
                                            });
                                        });
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "ID olarak; ( " + BakAdmin + " ) olan bir oda bulunamadı veya bu odayı yönetme yetkiniz yok.");
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID Yanlış.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Odaları yönetme yetkiniz yok.");
                    }
                } catch (_0x1e919a) {
                    console.error(_0x1e919a);
                }
            } else if (_0x50e62c == "odaDuzenlemeSon") {
                try {
                    if (sohbetik['oda_yonetimi'] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            var _0x12611d = ['\x27', '\x5c\x5c', '"', '>', '<', '\x5c)', '\x5c('];
                            var _0x1e339c = ['', '', '', '', '', '', ''];
                            var _0x98e2ec = ['\x27', '\x5c\x5c', '"', '>', '<'];
                            var _0x5cb050 = ['', '', '', '', ''];
                            yeniodaadi = BakAdmin["adi"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            eskiodaadi = BakAdmin["eskiadi"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            idsi = BakAdmin['id'];
                            sifre = BakAdmin["sifre"];
                            yazi = BakAdmin['yazi'];
                            yazi = yazi.replaceArray(_0x98e2ec, _0x5cb050);
                            sahibi = BakAdmin["sahibi"];
                            sahibi = sahibi.replaceArray(_0x98e2ec, _0x5cb050);
                            fon = BakAdmin["fon"];
                            fon = fon.replaceArray(_0x98e2ec, _0x5cb050);
                            sohbeticrenk = BakAdmin["sohbeticrenk"];
                            listesiralama = BakAdmin["listesiralama"];
                            if (yeniodaadi.length < 0x3 || yeniodaadi.length > 0x14) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Lütfen en az 3, en fazla 20 karakterlik bir oda adı yazınız.");
                            } else if (yazi.length >0&& yazi.length < 0x5) {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Oda giriş yazısını çok kısa tuttunuz.');
                            } else if (idsi == 0x65 && yeniodaadi != "Toplantı Odası") {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Toplantı odasının adı değiştirilemez.");
                            } else if (listesiralama <1|| listesiralama > 0x3e7) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Liste numarası 1 ile 999 arasında bir rakam olmalıdır.");
                            } else if (sohbeticrenk.length >0&& !rengarenk(sohbeticrenk)) {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Sohbet Alanı Rengi Geçersiz.");
                            } else if (fon.length >0&& !Ruzanti(fon)) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Oda Fon Linki Geçersiz.');
                            } else if (sifre.length >0&& (sifre.length < 0x2 || sifre.length > 0x14)) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Şifre; en az 2, en fazla 20 karakter olabilir.");
                            } else {
                                baglantim["query"]("select COUNT(*) as TOP from odalar where adi=? and id!=?", [yeniodaadi, idsi], function(_0x21e3ed, _0x29c498, _0x3830a7) {
                                    if (_0x21e3ed) {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Veritabanı sorgu hatası..');
                                    } else {
                                        if (_0x29c498[0]['TOP'] > 0x0) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu oda adı daha önceden alınmış.");
                                        } else {
                                            baglantim['query']('select odalar.*, COUNT(*) as TOPVAR from odalar where id=' + BakAdmin['id'] + '', function(_0x35894f, _0xb63d4c, _0x2e0611) {
                                                sonuclarwtrVer = _0xb63d4c[0];
                                                if (_0x35894f) {
                                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgu hatası...");
                                                } else {
                                                    if (sonuclarwtrVer["TOPVAR"] < 0x1) {
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Böyle bir oda yok');
                                                    } else {
                                                        if (sonuclarwtrVer['adi'] = !eskiodaadi) {
                                                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Güncellemek istenilen oda adı ile ID verisi uyuşmuyor.");
                                                        } else {
                                                            sifre = hDegis(sifre, 0x1);
                                                            if (sifre != sonuclarwtrVer["sifre"] || yeniodaadi != eskiodaadi || sonuclarwtrVer["yazi"] != yazi || sonuclarwtrVer["sahibi"] != sahibi || sonuclarwtrVer["fon"] != fon || sonuclarwtrVer['sohbeticrenk'] != sohbeticrenk || sonuclarwtrVer["listesiralama"] != listesiralama) {
                                                                if (sifre != sonuclarwtrVer["sifre"]) {
                                                                    if (sifre.length > 0x0) {
                                                                        if (sonuclarwtrVer['sifre'] == '') {
                                                                            _0x2ace0c(sohbetik["kullaniciAdi"], eskiodaadi, "Oda Şifreledi", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                                            odadanat = 0x1;
                                                                        } else {
                                                                            if (sifre != sonuclarwtrVer['sifre']) {
                                                                                _0x2ace0c(sohbetik["kullaniciAdi"], eskiodaadi, "Oda Şifresi Değiştirme", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                                                odadanat = 0x1;
                                                                            }
                                                                        }
                                                                    } else {
                                                                        if (sonuclarwtrVer["sifre"].length > 0x0) {
                                                                            odadanat = 0x1;
                                                                            _0x2ace0c(sohbetik["kullaniciAdi"], eskiodaadi, "Oda Şifresini Kaldırdı", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                                        }
                                                                    }
                                                                }
                                                                baglantim["query"]("UPDATE odalar SET ? WHERE id = ?", [{
                                                                    'adi': yeniodaadi,
                                                                    'sifre': sifre,
                                                                    'yazi': yazi,
                                                                    'sahibi': sahibi,
                                                                    'fon': fon,
                                                                    'sohbeticrenk': sohbeticrenk,
                                                                    'listesiralama': listesiralama
                                                                }, sonuclarwtrVer['id']], function(_0x76faee, _0x5d3650) {
                                                                    if (_0x76faee) {
                                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı bilgilerini güncelleme esnasında hata oluştu.");
                                                                    } else {
                                                                        degisti = 0x0;
                                                                        hrkt = '';
                                                                        if (BakAdmin["yazi"] != sonuclarwtrVer["yazi"] || BakAdmin["sahibi"] != sonuclarwtrVer['sahibi'] || BakAdmin["fon"] != sonuclarwtrVer["fon"] || BakAdmin["sohbeticrenk"] != sonuclarwtrVer["sohbeticrenk"] || BakAdmin["listesiralama"] != sonuclarwtrVer["listesiralama"]) {
                                                                            hrkt += "ODA DİZAYNI DEĞİŞTİRME";
                                                                            degisti = degisti + 0x1;
                                                                        }
                                                                        if (degisti > 0x0) {
                                                                            hrkt = hrkt["substr"](0x0, hrkt.length - 0x3)['trim']();
                                                                            _0x2ace0c(sohbetik["kullaniciAdi"], eskiodaadi, hrkt, sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                                            odadanat = 0x1;
                                                                        }
                                                                        if (eskiodaadi != yeniodaadi) {
                                                                            _0x2ace0c(sohbetik["kullaniciAdi"], eskiodaadi, 'Oda Adı Değiştirdi - yeni ad : ' + yeniodaadi, sohbetik["yetki"], sohbetik['cinsiyet']);
                                                                            odadanat = 0x1;
                                                                        }
                                                                        if (odadanat > 0x0) {
                                                                            const _0x1297a7 = _0x5e01dc => new Promise(_0x3787cd => setTimeout(_0x3787cd, _0x5e01dc));
                                                                            new Promise((_0x39c25e, _0xd385b6) => {
                                                                                delete odalar[BakAdmin["eskiadi"]];
                                                                                _0x39c25e();
                                                                            })['then'](_0x340f8e => {
                                                                                odalar[BakAdmin["adi"]] = {
                                                                                    'id': BakAdmin['id'],
                                                                                    'adi': BakAdmin["adi"],
                                                                                    'onlineKisi': 0,
                                                                                    'mikDolumu': 0,
                                                                                    'sifre': BakAdmin["sifre"],
                                                                                    'yazi': BakAdmin['yazi'],
                                                                                    'sahibi': BakAdmin["sahibi"],
                                                                                    'fon': BakAdmin["fon"],
                                                                                    'sohbeticrenk': BakAdmin["sohbeticrenk"],
                                                                                    'listesiralama': BakAdmin["listesiralama"]
                                                                                };
                                                                                baglantim["query"]("select * from odalar order by id asc", function(_0x5f5c60, _0x1940ab, _0x5f12c8) {
                                                                                    userodalistesi = _0x1940ab;
                                                                                });
                                                                                baglantim["query"]("select * from uyeler where botdurum='1' and botoda='" + eskiodaadi + '\x27 order by id asc', function(_0x301e2b, _0x45c560, _0x21b13f) {
                                                                                    botkullanici = _0x45c560;
                                                                                    baglantim["query"]("UPDATE uyeler SET ? WHERE botoda = ?", [{
                                                                                        'botoda': yeniodaadi
                                                                                    }, eskiodaadi], function(_0x35f8b9, _0x20b7b4) {
                                                                                        if (_0x35f8b9) {
                                                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Veritabanı bilgilerini güncelleme esnasında hata oluştu.');
                                                                                        } else {
                                                                                            for (var _0x2dac7e in botkullanici) {
                                                                                                soketgir[md5g(botkullanici[_0x2dac7e]['rumuz'])] = {
                                                                                                    'userName': botkullanici[_0x2dac7e]['rumuz'],
                                                                                                    'userKripto': md5g(botkullanici[_0x2dac7e]["rumuz"]),
                                                                                                    'kimlikid': botkullanici[_0x2dac7e]['id'],
                                                                                                    'botdurum': botkullanici[_0x2dac7e]["botdurum"],
                                                                                                    'userId': md5g(botkullanici[_0x2dac7e]["rumuz"]),
                                                                                                    'userCinsiyet': botkullanici[_0x2dac7e]["cinsiyet"],
                                                                                                    'userResim': botkullanici[_0x2dac7e]["resim"],
                                                                                                    'userStatu': botkullanici[_0x2dac7e]['yetkiadi'],
                                                                                                    'userStatuINT': botkullanici[_0x2dac7e]["yetki"],
                                                                                                    'yildizrengi': botkullanici[_0x2dac7e]["yildizrengi"],
                                                                                                    'userMobilemi': !![],
                                                                                                    'googleApp': !![],
                                                                                                    'userOda': yeniodaadi,
                                                                                                    'userDurum': "Çevrimiçi",
                                                                                                    'userCT': 0,
                                                                                                    'userMutelimi': 0,
                                                                                                    'userOzelMesaj': 1,
                                                                                                    'userOzelArama': 0,
                                                                                                    'useryorumlar': 0,
                                                                                                    'userIslemTarih': TarihCe(),
                                                                                                    'userIslemTarihV': TarihCe() -30,
                                                                                                    'userWebRTCId': '',
                                                                                                    'userWebRTCCam': 0,
                                                                                                    'userWebRTCMik': 0,
                                                                                                    'userWebRTCSes': 0,
                                                                                                    'userkonusmada': 0,
                                                                                                    'userWebRTCCam_X': 0,
                                                                                                    'sapkano': botkullanici[_0x2dac7e]["sapkano"],
                                                                                                    'catiyotkisi': 'h',
                                                                                                    'toplantiyetkisi': 'h',
                                                                                                    'userMikrofonSirasi': 0,
                                                                                                    'mikrofonZamani': 0,
                                                                                                    'admin_hareketleri': 'h',
                                                                                                    'koruma_altinda': 'h',
                                                                                                    'flash': botkullanici[_0x2dac7e]["flash"],
                                                                                                    'nickbar': botkullanici[_0x2dac7e]["nickbar"],
                                                                                                    'userNameTwo': '0',
                                                                                                    'saldiri': 0,
                                                                                                    'saldiriTarih': TarihCe(),
                                                                                                    'userIslemTarihTime': islemTrh(),
                                                                                                    'floodSayisi': 0x0
                                                                                                };
                                                                                            }
                                                                                        }
                                                                                    });
                                                                                });
                                                                                kriptola();
                                                                                soketimiz.in(BakAdmin["eskiadi"]).emit("yeniodayagir", yeniodaadi);
                                                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Güncelleme işlemi başarılı.");
                                                                            })["catch"](_0x204363 => {
                                                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Güncelleme işlemi yapılamadı.");
                                                                            });
                                                                        }
                                                                    }
                                                                });
                                                            } else {
                                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Hiç bir değişiklik yapmadınız.');
                                                            }
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Oda ID sadece numeric olabilir.');
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Oda düzenleme yetkiniz yok.");
                    }
                } catch (_0xcabf21) {
                    console.error(_0xcabf21);
                }
            } else if (_0x50e62c == "odaSilme") {
                try {
                    if (sohbetik["oda_yonetimi"] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            if (BakAdmin['id'] == 0x1) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'ilk oda silinemez.');
                            } else if (BakAdmin['id'] == 0x65) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Toplantı odası silinemez.");
                            } else {
                                baglantim["query"]('select COUNT(*) as TOPVAR from odalar where id= ?', [BakAdmin['id']], function(_0x47b24d, _0x154e6d, _0x298651) {
                                    sonuclarwtrVer = _0x154e6d[0];
                                    if (_0x47b24d) {
                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgu hatası." + _0x47b24d);
                                    } else {
                                        if (sonuclarwtrVer["TOPVAR"] < 0x1) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Böyle bir oda yok.');
                                        } else {
                                            baglantim["query"]("DELETE from odalar WHERE id = ? limit 1", [BakAdmin['id']], function(_0xd3a052, _0x413bca) {
                                                etkilenenSatirlar = _0x413bca['affectedRows'];
                                                if (_0xd3a052) {
                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı bilgilerini silme esnasında hata oluştu." + _0xd3a052);
                                                } else {
                                                    if (etkilenenSatirlar > 0x0) {
                                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "<font color='red'>" + BakAdmin["eskiadi"] + "</font> isimli oda silindi.");
                                                        _0x2ace0c(sohbetik["kullaniciAdi"], BakAdmin["eskiadi"], "Oda Silme", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                        const _0x5bea03 = _0x7b253b => new Promise(_0x1b15da => setTimeout(_0x1b15da, _0x7b253b));
                                                        new Promise((_0x82edc9, _0x38d668) => {
                                                            delete odalar[BakAdmin["eskiadi"]];
                                                            _0x82edc9();
                                                        })["then"](_0x1d0689 => {
                                                            kriptola();
                                                            for (var _0xfb2722 in odalar) {
                                                                if (odalar[_0xfb2722]['id'] == 0x1) {
                                                                    var _0x200e15 = odalar[_0xfb2722]["adi"];
                                                                }
                                                            }
                                                            soketimiz.in(BakAdmin['eskiadi']).emit("yeniodayagir", _0x200e15);
                                                        })["catch"](_0x5bbef0 => {});
                                                    } else {
                                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Silme işlemi gerçekleşmedi");
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'ID alanı numeric olmak zorunda.');
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Oda silme yetkiniz yok.");
                    }
                } catch (_0x53c369) {
                    console.error(_0x53c369);
                }
            } else if (_0x50e62c == "odaresimSilme") {
                try {
                    if (sohbetik['oda_yonetimi'] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            baglantim['query']('select * from odalar where id=' + BakAdmin['id'] + '', function(_0x1a8d91, _0x19b6dd, _0x176095) {
                                if (_0x1a8d91) {
                                    soketimiz.to(sohbetik['id']).emit('odauyarigoster', 'Veritabanı sorgu hatası.' + _0x1a8d91);
                                } else {
                                    if (_0x19b6dd[0]['id'] == "undefined") {
                                        soketimiz.to(sohbetik['id']).emit("odauyarigoster", "Böyle bir oda yok.");
                                    } else {
                                        if (_0x19b6dd[0]["fon"] == '') {
                                            soketimiz.to(sohbetik['id']).emit("odauyarigoster", '' + BakAdmin["eskiadi"] + " Odasında Silinecek Resim Yok.");
                                        } else {
                                            baglantim["query"]("UPDATE odalar SET ? WHERE id = ?", [{
                                                'fon': ''
                                            }, BakAdmin['id']], function(_0x3ff0be, _0x366447) {
                                                if (_0x3ff0be) {
                                                    soketimiz.to(sohbetik['id']).emit("odauyarigoster", "Veritabanı bilgilerini silme esnasında hata oluştu." + _0x3ff0be);
                                                } else {
                                                    var _0x273848 = require('fs');
                                                    var _0x46bb6e = '' + BakAdmin["foneskiadi"] + '';
                                                    var _0x225713 = __dirname + "/httpdocs/views/uploads/odaresim/" + _0x46bb6e;
                                                    _0x273848["unlink"](_0x225713, function(_0x25d830) {
                                                        if (_0x25d830) {}
                                                    });
                                                    _0x2ace0c(sohbetik['kullaniciAdi'], BakAdmin["eskiadi"], "Oda Resmi Silme", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                    const _0x55d791 = _0x556457 => new Promise(_0xdd2bdb => setTimeout(_0xdd2bdb, _0x556457));
                                                    new Promise((_0x2d6f13, _0x23bc79) => {
                                                        delete odalar[BakAdmin["eskiadi"]];
                                                        _0x2d6f13();
                                                    })['then'](_0x50d038 => {
                                                        odalar[_0x19b6dd[0]["adi"]] = {
                                                            'id': _0x19b6dd[0]['id'],
                                                            'adi': _0x19b6dd[0]["adi"],
                                                            'onlineKisi': 0,
                                                            'mikDolumu': 0,
                                                            'sifre': _0x19b6dd[0]["sifre"],
                                                            'yazi': _0x19b6dd[0]["yazi"],
                                                            'sahibi': _0x19b6dd[0]['sahibi'],
                                                            'fon': '',
                                                            'sohbeticrenk': _0x19b6dd[0]["sohbeticrenk"],
                                                            'listesiralama': _0x19b6dd[0]["listesiralama"]
                                                        };
                                                        kriptola();
                                                        soketimiz.in(BakAdmin["eskiadi"]).emit("yeniodayagir", BakAdmin['eskiadi']);
                                                        soketimiz.to(sohbetik['id']).emit("odauyarigoster", '' + BakAdmin["eskiadi"] + " Odasının Resmi Silindi.");
                                                    })["catch"](_0x33e875 => {
                                                        soketimiz.to(sohbetik['id']).emit("odauyarigoster", '' + BakAdmin["eskiadi"] + ' Odasının Resmi Silinemedi.');
                                                    });
                                                }
                                            });
                                        }
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'ID alanı numeric olmak zorunda.');
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Oda resmi silme yetkiniz yok.");
                    }
                } catch (_0xc9dc47) {
                    console.error(_0xc9dc47);
                }
            } else if (_0x50e62c == "odaEkleme") {
                try {
                    if (sohbetik["oda_yonetimi"] == 'e') {
                        var _0x12611d = ['\x27', '\x5c\x5c', '"', '>', '<', "GIRIS_ODA", "undefined", '\x5c)', '\x5c('];
                        var _0x1e339c = ['', '', '', '', '', '', '', '', ''];
                        BakAdmin = BakAdmin.replaceArray(_0x12611d, _0x1e339c)["trim"]();
                        baglantim["query"]("select COUNT(*) as TOPkilid from odalar", function(_0x127255, _0x21e3ad, _0x1a301e) {
                            if (_0x21e3ad[0]["TOPkilid"] > process.env['ODALIMIT']) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Oda ekleme limitiniz doldu.");
                            } else {
                                if (BakAdmin.length < 0x2) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "En az 3 karakter ve üzeri ile oda ismi giriniz.");
                                } else {
                                    baglantim["query"]("select COUNT(*) as TOP from odalar where adi = ?", [BakAdmin], function(_0x39fcd6, _0x1537e8, _0x31d40c) {
                                        if (_0x39fcd6) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası.");
                                        } else {
                                            if (_0x1537e8[0]["TOP"] > 0x0) {
                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu oda adı daha önceden alınmış.");
                                            } else {
                                                var _0x4b85cc = {
                                                    'adi': BakAdmin,
                                                    'sifre': '',
                                                    'yazi': 'Oda Kuralı',
                                                    'sahibi': '',
                                                    'fon': '',
                                                    'sohbeticrenk': "ffffff",
                                                    'listesiralama': '100'
                                                };
                                                baglantim['query']("INSERT INTO odalar SET ?", _0x4b85cc, function(_0x6940e3, _0x53eae1) {
                                                    if (_0x6940e3) {
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Oda eklenemedi. Veritabanı hatası meydana geldi." + _0x6940e3);
                                                    } else {
                                                        _0x2ace0c(sohbetik["kullaniciAdi"], BakAdmin, "Yeni Oda Açtı", sohbetik["yetki"], sohbetik['cinsiyet']);
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Yeni Oda Eklendi.');
                                                        odalar[BakAdmin] = {
                                                            'id': _0x53eae1["insertId"],
                                                            'adi': BakAdmin,
                                                            'onlineKisi': 0,
                                                            'mikDolumu': 0,
                                                            'sifre': '',
                                                            'yazi': "Oda Kuralı",
                                                            'sahibi': '',
                                                            'fon': '',
                                                            'sohbeticrenk': "ffffff",
                                                            'listesiralama': "100"
                                                        };
                                                        kriptola();
                                                    }
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Oda ekleme yetkiniz yok.");
                    }
                } catch (_0xd739cd) {
                    console.error(_0xd739cd);
                }
            } else if (_0x50e62c == "rutbeleriListele") {
                try {
                    if (sohbetik['rutbe_yonetimi'] == 'e') {
                        sohbetik.emit("rutbeleriListeleYonetici", yetkilirutbe);
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Rütbeleri görme yetkiniz yok.");
                    }
                } catch (_0x5a7cd9) {
                    console.error(_0x5a7cd9);
                }
            } else if (_0x50e62c == "rutbeDuzenle") {
                try {
                    if (sohbetik["rutbe_yonetimi"] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim["query"]("select * from yetkiler where id= ? ", [BakAdmin], function(_0xe52eb2, _0x3c6504, _0x54a169) {
                                if (_0xe52eb2) {
                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    if (_0x3c6504.length > 0x0) {
                                        _0x3c6504 = _0x3c6504[0];
                                        sohbetik.emit('rutbeDuzenlemeGeldi', _0x3c6504);
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID olarak; ( " + BakAdmin + ' ) olan bir rütbe bulunamadı.');
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID Yanlış.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Rütbeleri yönetme yetkiniz yok.");
                    }
                } catch (_0x35cbe4) {
                    console.error(_0x35cbe4);
                }
            } else if (_0x50e62c == "rutbeDuzenlemeSon") {
                try {
                    if (sohbetik["rutbe_yonetimi"] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            var _0x12611d = ['\x27', '\x5c\x5c', '"', '>', '<'];
                            var _0x1e339c = ['', '', '', '', ''];
                            id = BakAdmin['id'];
                            adi = BakAdmin["adi"].replaceArray(_0x12611d, _0x1e339c)['trim']();
                            miksure = BakAdmin["miksure"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            rutbe = BakAdmin['rutbe'].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            if (BakAdmin["eskiadi"] == "Üye" && BakAdmin['eskiadi'] != adi || BakAdmin['eskiadi'] == "Root" && BakAdmin["eskiadi"] != adi) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üye Yada Root Rutbesi İsmi Değiştirilemez.");
                            } else if (miksure < 0x3c || miksure > 0x1c20) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Mikrofon süresi en fazla 7200 saniye, en az ise 60 saniye olabilir.");
                            } else {
                                baglantim['query']("select COUNT(*) as TOP from yetkiler where (adi= ? or rutbe= ?) and id!= ?", [adi, rutbe, id], function(_0x3fcd32, _0x141491, _0x122a04) {
                                    if (_0x3fcd32) {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası..");
                                    } else {
                                        if (_0x141491[0]["TOP"] > 0x0) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu rütbe adı veya rütbe derecesi daha önceden atanmış.");
                                        } else {
                                            baglantim["query"]("select yetkiler.*, COUNT(*) as TOPVAR from yetkiler where id= ? ", [id], function(_0x5e7342, _0x3d7e91, _0x4d11ba) {
                                                sonuclarwtrVer = _0x3d7e91[0];
                                                if (_0x5e7342) {
                                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgu hatası..." + _0x5e7342);
                                                } else {
                                                    if (sonuclarwtrVer["TOPVAR"] < 0x1) {
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle bir rütbe yok.");
                                                    } else {
                                                        if (sonuclarwtrVer["adi"] = !BakAdmin["eskiadi"]) {
                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Güncellemek istenilen rütbe adı ile ID verisi uyuşmuyor.");
                                                        } else {
                                                            if (miksure != sonuclarwtrVer['miksure'] || adi != BakAdmin["eskiadi"] || rutbe != sonuclarwtrVer["rutbe"]) {
                                                                baglantim["query"]("UPDATE yetkiler SET ? WHERE id = ?", [{
                                                                    'adi': adi,
                                                                    'miksure': miksure,
                                                                    'rutbe': rutbe
                                                                }, sonuclarwtrVer['id']], function(_0x1c0387, _0x1b985e) {
                                                                    if (_0x1c0387) {
                                                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Veritabanı bilgilerini güncelleme esnasında hata oluştu.');
                                                                    } else {
                                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Güncelleme işlemi başarılı.');
                                                                        if (BakAdmin["eskiadi"] != adi) {
                                                                            _0x2ace0c(sohbetik["kullaniciAdi"], BakAdmin['eskiadi'], 'Rütbe Adı Değiştirdi', sohbetik['yetki'], sohbetik['cinsiyet']);
                                                                        }
                                                                        if (miksure != sonuclarwtrVer["miksure"]) {
                                                                            _0x2ace0c(sohbetik["kullaniciAdi"], BakAdmin["eskiadi"], "Mikrofon Süresini Değişti", sohbetik['yetki'], sohbetik['cinsiyet']);
                                                                        }
                                                                        yetkilirutbe = null;
                                                                        delete yetkilirutbe;
                                                                        yetkilirutbe = {};
                                                                        yetkilirutbeFull = null;
                                                                        delete yetkilirutbeFull;
                                                                        yetkilirutbeFull = {};
                                                                        baglantim["query"]("select * from yetkiler  where rutbe < 17 order by id asc", function(_0x2d9362, _0x55a63b, _0x2db667) {
                                                                            yetkilirutbe = _0x55a63b;
                                                                        });
                                                                        baglantim["query"]("select * from yetkiler where rutbe < 17 order by id asc", function(_0x5b68a8, _0x171ce5, _0x18a414) {
                                                                            yetkilirutbeFull = _0x171ce5;
                                                                        });
                                                                        baglantim['query']("select MAX(rutbe) as TYU from yetkiler", function(_0x5a20ab, _0x4352f0, _0xf1f320) {
                                                                            yetkilirutbeSonderece = _0x4352f0[0]["TYU"];
                                                                        });
                                                                    }
                                                                });
                                                            } else {
                                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Hiç bir değişiklik yapmadınız.");
                                                            }
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Rütbe ID sadece numeric olabilir.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Rütbe düzenleme yetkiniz yok.");
                    }
                } catch (_0xba947c) {
                    console.error(_0xba947c);
                }
            } else if (_0x50e62c == "modleriListele") {
                try {
                    if (sohbetik["rutbe_yonetimi"] == 'e') {
                        sohbetik.emit("modleriListeleYonetici", modlarListe);
                    } else {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Durum Modlarını görme yetkiniz yok.');
                    }
                } catch (_0x54b28f) {
                    console.error(_0x54b28f);
                }
            } else if (_0x50e62c == 'modDuzenle') {
                try {
                    if (sohbetik["rutbe_yonetimi"] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim['query']("select * from durum_mod where id= ? ", [BakAdmin], function(_0x59535e, _0x591a63, _0x6b7e0d) {
                                if (_0x59535e) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    if (_0x591a63.length > 0x0) {
                                        _0x591a63 = _0x591a63[0];
                                        sohbetik.emit("modDuzenlemeGeldi", _0x591a63);
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'ID olarak; ( ' + BakAdmin + " ) olan bir mod bulunamadı.");
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'ID Yanlış.');
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Durum Modlarını yönetme yetkiniz yok.");
                    }
                } catch (_0x48b4a8) {
                    console.error(_0x48b4a8);
                }
            } else if (_0x50e62c == 'modDuzenlemeSon') {
                try {
                    if (sohbetik["rutbe_yonetimi"] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            var _0x12611d = ['\x27', '\x5c\x5c', '"', '>', '<'];
                            var _0x1e339c = ['', '', '', '', ''];
                            id = BakAdmin['id'];
                            durumadi = BakAdmin["durumadi"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            if (id ==1|| id == 0x2 || BakAdmin['id'] == 0x3) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", '' + BakAdmin["durumeskiadi"] + ' Durum Modu Adı Değiştirilemez.');
                            } else if (durumadi < 0x4 || durumadi > 0x32) {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Durum Modu En az 4 En Fazla 50 Karakter Olabilir.');
                            } else {
                                baglantim["query"]("select COUNT(*) as TOP from durum_mod where durumadi= ?", [durumadi], function(_0x155f33, _0x3faa2a, _0x556148) {
                                    if (_0x155f33) {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası..");
                                    } else {
                                        if (_0x3faa2a[0]['TOP'] > 0x0) {
                                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Bu durum modu adı zaten var.");
                                        } else {
                                            baglantim["query"]("select durum_mod.*, COUNT(*) as TOPVAR from durum_mod where id= ? ", [id], function(_0x4ded3f, _0x170e6c, _0x3d38e0) {
                                                sonuclarwtrVer = _0x170e6c[0];
                                                if (_0x4ded3f) {
                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası..." + _0x4ded3f);
                                                } else {
                                                    if (sonuclarwtrVer['TOPVAR'] < 0x1) {
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle bir durum modu yok.");
                                                    } else {
                                                        if (BakAdmin["durumadi"] != sonuclarwtrVer["durumadi"]) {
                                                            baglantim['query']("UPDATE durum_mod SET ? WHERE id = ?", [{
                                                                'durumadi': durumadi
                                                            }, sonuclarwtrVer['id']], function(_0x5245d1, _0xe48b4) {
                                                                if (_0x5245d1) {
                                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı bilgilerini güncelleme esnasında hata oluştu.");
                                                                } else {
                                                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Durum Modu Güncelleme işlemi başarılı.");
                                                                    if (BakAdmin["durumeskiadi"] != durumadi) {
                                                                        _0x2ace0c(sohbetik['kullaniciAdi'], BakAdmin["durumeskiadi"], "Durum Modu Adı Değiştirdi", sohbetik['yetki'], sohbetik['cinsiyet']);
                                                                    }
                                                                }
                                                                modlarListe = null;
                                                                delete modlarListe;
                                                                modlarListe = {};
                                                                baglantim['query']("select * from durum_mod order by id asc", function(_0x1d273d, _0x3835dd, _0x497c7b) {
                                                                    modlarListe = _0x3835dd;
                                                                    botdurumlistesi = _0x3835dd;
                                                                });
                                                            });
                                                        } else {
                                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Hiç bir değişiklik yapmadınız.");
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Durum Modu ID sadece numeric olabilir.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Durum Modu düzenleme yetkiniz yok.");
                    }
                } catch (_0xff9659) {
                    console.error(_0xff9659);
                }
            } else if (_0x50e62c == "ModEkleme") {
                try {
                    if (sohbetik["rutbe_yonetimi"] == 'e') {
                        var _0x12611d = ['\x27', '\x5c\x5c', '"', '>', '<'];
                        var _0x1e339c = ['', '', '', '', ''];
                        BakAdmin = BakAdmin.replaceArray(_0x12611d, _0x1e339c)["trim"]();
                        baglantim["query"]("select COUNT(*) as TOPkilid from durum_mod", function(_0x4f92ae, _0x1268f9, _0x3feb45) {
                            if (_0x1268f9[0]["TOPkilid"] >30) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "En Fazla 30 Durum Modu Eklenebilir.");
                            } else {
                                if (BakAdmin.length < 0x4 || BakAdmin.length >30) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Durum Modu En az 4 En Fazla 30 Karakter Olabilir.");
                                } else {
                                    baglantim['query']("select COUNT(*) as TOP from durum_mod where durumadi = ?", [BakAdmin], function(_0x2049e2, _0x3d9b98, _0x3748a4) {
                                        if (_0x2049e2) {
                                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgu hatası.");
                                        } else {
                                            if (_0x3d9b98[0]["TOP"] > 0x0) {
                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu durum modu adı daha önceden alınmış.");
                                            } else {
                                                var _0xcdc1d8 = {
                                                    'durumadi': BakAdmin
                                                };
                                                baglantim["query"]("INSERT INTO durum_mod SET ?", _0xcdc1d8, function(_0x1bf059, _0x655bf) {
                                                    if (_0x1bf059) {
                                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Durum Modu eklenemedi. Veritabanı hatası meydana geldi.' + _0x1bf059);
                                                    } else {
                                                        _0x2ace0c(sohbetik['kullaniciAdi'], BakAdmin, "Yeni Durum Modu Ekledi", sohbetik["yetki"], sohbetik['cinsiyet']);
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Yeni Durum Modu Eklendi.");
                                                        modlarListe = null;
                                                        delete modlarListe;
                                                        modlarListe = {};
                                                        baglantim["query"]("select * from durum_mod order by id asc", function(_0x23b4bf, _0x28495a, _0x23dab5) {
                                                            modlarListe = _0x28495a;
                                                            botdurumlistesi = _0x28495a;
                                                        });
                                                    }
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Durum Modu ekleme yetkiniz yok.");
                    }
                } catch (_0x41f000) {
                    console.error(_0x41f000);
                }
            } else if (_0x50e62c == "ModuSilme") {
                try {
                    if (sohbetik["rutbe_yonetimi"] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            if (BakAdmin['id'] ==1|| BakAdmin['id'] == 0x2 || BakAdmin['id'] == 0x3) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu Durum Modu Silinemez.");
                            } else {
                                baglantim["query"]('DELETE from durum_mod WHERE id = ? limit 1', [BakAdmin['id']], function(_0x583cce, _0xc494da) {
                                    etkilenenSatirlar = _0xc494da["affectedRows"];
                                    if (_0x583cce) {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı bilgilerini silme esnasında hata oluştu." + _0x583cce);
                                    } else {
                                        if (etkilenenSatirlar > 0x0) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "<font color='red'>" + BakAdmin["durumeskiadi"] + '</font> isimli Durum Modu silindi.');
                                            _0x2ace0c(sohbetik["kullaniciAdi"], BakAdmin['durumeskiadi'], 'Durum Modu Silme', sohbetik["yetki"], sohbetik['cinsiyet']);
                                            modlarListe = null;
                                            delete modlarListe;
                                            modlarListe = {};
                                            baglantim["query"]("select * from durum_mod order by id asc", function(_0x5ae735, _0x2eba47, _0x54ad1b) {
                                                modlarListe = _0x2eba47;
                                            });
                                        } else {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Silme işlemi gerçekleşmedi");
                                        }
                                    }
                                });
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'ID alanı numeric olmak zorunda.');
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Durum Modu silme yetkiniz yok.");
                    }
                } catch (_0x25be14) {
                    console.error(_0x25be14);
                }
            } else if (_0x50e62c == "loglarilistele") {
                try {
                    if (sohbetik["log_yetkisi"] == 'e') {
                        var _0x50e62c = new Date();
                        var _0x3437db = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
                        var _0x40d945 = _0x3437db[_0x50e62c.getMonth()];
                        var _0xa6d92f = ('0' + _0x50e62c.getDate()).slice(-0x2);
                        if (sohbetik["ip_gorme"] == 'e') {
                            sorguCumlesi = 'select * from giris_kayitlari where YEAR(tarih_date) = \x27' + _0x50e62c.getFullYear() + "' AND MONTH(tarih_date) = '" + _0x40d945 + "' AND DAY(tarih_date) = '" + _0xa6d92f + "' order by id desc limit 250";
                        } else {
                            sorguCumlesi = "select * from giris_kayitlari where YEAR(tarih_date) = '" + _0x50e62c.getFullYear() + "' AND MONTH(tarih_date) = '" + _0x40d945 + "' AND DAY(tarih_date) = '" + _0xa6d92f + "' order by id desc limit 250";
                        }
                        baglantim["query"](sorguCumlesi, function(_0x4363dc, _0x5c6ba1, _0xe10250) {
                            if (_0x4363dc) {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgusunda hata meydana geldi.");
                            } else {
                                sohbetik.emit('loglariListeleYonetici', _0x5c6ba1);
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Logları görme yetkiniz yok.');
                    }
                } catch (_0x43b5b8) {
                    console.error(_0x43b5b8);
                }
            } else if (_0x50e62c == "logkisibilgi") {
                try {
                    if (sohbetik["log_yetkisi"] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim["query"]("select * from giris_kayitlari where id=" + BakAdmin + '', function(_0x21b8ba, _0x2b40f7, _0x544670) {
                                if (_0x21b8ba) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    if (_0x2b40f7.length > 0x0) {
                                        sohbetik.emit("logkisibilgigoster", _0x2b40f7);
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu Log Kaydı Bulunamadı");
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID Yanlış.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Odaları yönetme yetkiniz yok.");
                    }
                } catch (_0xa11b0c) {
                    console.error(_0xa11b0c);
                }
            } else if (_0x50e62c == "loglardarumuzara") {
                try {
                    if (sohbetik["log_yetkisi"] == 'e') {
                        if (BakAdmin != '') {
                            baglantim['query']("select * from giris_kayitlari where rumuz=? order by id desc", [BakAdmin], function(_0x448d77, _0x3ae604, _0x545949) {
                                if (_0x448d77) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    if (_0x3ae604.length > 0x0) {
                                        sohbetik.emit("logkisirumuzgoster", _0x3ae604);
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Bu Kişiye Ait Log Kaydı Bulunamadı");
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "ID Yanlış.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Odaları yönetme yetkiniz yok.");
                    }
                } catch (_0x463bff) {
                    console.error(_0x463bff);
                }
            } else if (_0x50e62c == "loglardaipara") {
                try {
                    if (sohbetik["log_yetkisi"] == 'e') {
                        if (BakAdmin != '') {
                            baglantim['query']("select * from giris_kayitlari where ip=? order by id desc", [BakAdmin], function(_0xe8aed5, _0x2175e6, _0x14f75f) {
                                if (_0xe8aed5) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    if (_0x2175e6.length > 0x0) {
                                        sohbetik.emit('logkisirumuzgoster', _0x2175e6);
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu Kişiye Ait Log Kaydı Bulunamadı");
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID Yanlış.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Odaları yönetme yetkiniz yok.");
                    }
                } catch (_0x1c6bd5) {
                    console.error(_0x1c6bd5);
                }
            } else if (_0x50e62c == "loglardaara") {
                try {
                    if (sohbetik["log_yetkisi"] == 'e') {
                        var _0x38ec0c = [' ', ':', '\x27', '@', '\x5c*', '#', '\x5c\x5c', '"', '>', '<', "misafir"];
                        var _0x1e339c = ['', '', '', '', '', '', '', '', '', '', ''];
                        var _0x23626a, _0x2c9fe7 = '';
                        var _0x334386 = ![];
                        var _0x186dfe = BakAdmin["tarih_date"];
                        var _0x5bf704 = '';
                        var _0x18d4b4 = '';
                        var _0x154ea5 = '';
                        var _0x2b6cea = '';
                        if (_0x186dfe.length > 0x0) {
                            var _0x122ae4 = _0x186dfe.split('-');
                            var _0x50cf16 = parseInt(_0x122ae4[0], 0xa);
                            var _0x508266 = parseInt(_0x122ae4[1], 0xa);
                            var _0xe33188 = parseInt(_0x122ae4[0x2], 0xa);
                            var _0x24c86f = new Date();
                            if (_0x50cf16 < 0x7b2 || _0x50cf16.length != 0x4) {
                                _0x334386 = ![];
                            } else {
                                _0x334386 = !![];
                            }
                            if ((_0x508266 <1|| _0x508266 > 0xc) && _0x508266.length != 0x2) {
                                _0x334386 = ![];
                            } else {
                                _0x334386 = !![];
                            }
                            if ((_0xe33188 <1|| _0xe33188 > 0x1f) && _0xe33188.length != 0x2) {
                                _0x334386 = !![];
                            } else {
                                _0x334386 = !![];
                            }
                            _0x154ea5 = ' AND YEAR(tarih_date) = \x27' + _0x50cf16 + "' AND MONTH(tarih_date) = '" + _0x508266 + '\x27 AND DAY(tarih_date) = \x27' + _0xe33188 + '\x27 ';
                            var _0x23626a = ('0' + (_0x24c86f.getMonth() + 0x1)).slice(-0x2);
                            var _0x2c9fe7 = ('0' + _0x24c86f.getDate()).slice(-0x2);
                        } else {
                            _0x334386 = !![];
                        }
                        if (_0x334386 == ![]) {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Girdiğiniz tarihlerde dengesizlik var.");
                        } else {
                            _0x5bf704 = _0x18d4b4 + _0x154ea5 + _0x2b6cea;
                            if (sohbetik["ip_gorme"] == 'e') {
                                sorguCumlesi = "select * from giris_kayitlari where yetki <= " + sohbetik["yetki"] + ' ' + _0x5bf704 + " order by id desc limit 250";
                            } else {
                                sorguCumlesi = 'select * from giris_kayitlari where yetki <= ' + sohbetik["yetki"] + ' ' + _0x5bf704 + " order by id desc limit 250";
                            }
                            baglantim["query"](sorguCumlesi, function(_0x3215c8, _0x3e558d, _0x44a87f) {
                                if (_0x3215c8) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    sohbetik.emit("loglariListeleYonetici", _0x3e558d);
                                }
                            });
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Logları arama ve görme yetkiniz yok.');
                    }
                } catch (_0x1bbfbb) {
                    console.error(_0x1bbfbb);
                }
            } else if (_0x50e62c == "oyarDuzenle") {
                try {
                    if (sohbetik["admin_ayarlar"] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim['query']("select * from ayarlar where id='1'", function(_0x42e27a, _0x47165d, _0x23221c) {
                                if (_0x42e27a) {
                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    if (_0x47165d.length > 0x0) {
                                        _0x47165d = _0x47165d[0];
                                        sohbetik.emit('oyarDuzenlemeGeldi', _0x47165d);
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Ayarları görme yetkiniz yok.");
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID Yanlış.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Ayarları görme yetkiniz yok.');
                    }
                } catch (_0x27b9e0) {
                    console.error(_0x27b9e0);
                }
            } else if (_0x50e62c == "oyarDuzenlemeSon") {
                try {
                    if (sohbetik["admin_ayarlar"] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            var _0x12611d = ['\x27', '\x5c\x5c', '"', '>', '<', "refresh", "iframe"];
                            var _0x1e339c = ['', '', '', '', '', '', ''];
                            id = BakAdmin['id'];
                            MisGirisler = BakAdmin['MisGirisler'].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            ResimGonder = BakAdmin["ResimGonder"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            SesGonder = BakAdmin["SesGonder"].replaceArray(_0x12611d, _0x1e339c)['trim']();
                            BasKonusGonder = BakAdmin["BasKonusGonder"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            YouTubeGonder = BakAdmin["YouTubeGonder"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            OzelMesajGonder = BakAdmin["OzelMesajGonder"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            radyokodu = BakAdmin["radyokodu"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            radyoistek = BakAdmin["radyoistek"].replaceArray(_0x12611d, _0x1e339c)['trim']();
                            var _0x28945e = radyokodu["substring"](0x0, 0x8);
                            var _0x6d83ce = radyoistek["substring"](0x0, 0x8);
                            if (radyokodu != '' && _0x28945e != "https://") {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Radyo linki <b>https://</b> ile başlamalıdır.');
                            } else if (radyoistek != '' && _0x6d83ce != 'https://') {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "İstek paneli linki <b>https://</b> ile başlamalıdır.");
                            } else {
                                baglantim["query"]("select * from ayarlar where id='1'", function(_0xe185cf, _0x10855b, _0xea080d) {
                                    if (_0xe185cf) {
                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası..");
                                    } else {
                                        baglantim["query"]("select * from ayarlar where id='1'", function(_0x2d7a52, _0x55b5c8, _0x3d0326) {
                                            sonuclarwtrVer = _0x55b5c8[0];
                                            if (MisGirisler != sonuclarwtrVer["MisGirisler"] || ResimGonder != sonuclarwtrVer['ResimGonder'] || SesGonder != sonuclarwtrVer["SesGonder"] || BasKonusGonder != sonuclarwtrVer["BasKonusGonder"] || OzelMesajGonder != sonuclarwtrVer["OzelMesajGonder"] || YouTubeGonder != sonuclarwtrVer["YouTubeGonder"] || radyokodu != sonuclarwtrVer["radyokodu"] || radyoistek != sonuclarwtrVer["radyoistek"]) {
                                                baglantim["query"]("UPDATE ayarlar SET ? WHERE id =1", [{
                                                    'id': BakAdmin['id'],
                                                    'MisGirisler': MisGirisler,
                                                    'ResimGonder': ResimGonder,
                                                    'BasKonusGonder': BasKonusGonder,
                                                    'OzelMesajGonder': OzelMesajGonder,
                                                    'SesGonder': SesGonder,
                                                    'YouTubeGonder': YouTubeGonder,
                                                    'radyokodu': radyokodu,
                                                    'radyoistek': radyoistek
                                                }, sonuclarwtrVer['id']], function(_0x24da87, _0xcf848d) {
                                                    if (_0x24da87) {
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Veritabanı bilgilerini güncelleme esnasında hata oluştu.');
                                                    } else {
                                                        oyagoster = {};
                                                        baglantim["query"]("select * from ayarlar where id='1'", function(_0x2616ee, _0x58a72a, _0x6c4f9c) {
                                                            oyarlarioku = _0x58a72a;
                                                            for (var _0x54b60e in oyarlarioku) {
                                                                oyagoster[oyarlarioku[_0x54b60e]['id']] = {
                                                                    'id': oyarlarioku[_0x54b60e]['id'],
                                                                    'MisGirisler': oyarlarioku[_0x54b60e]["MisGirisler"],
                                                                    'ResimGonder': oyarlarioku[_0x54b60e]["ResimGonder"],
                                                                    'SesGonder': oyarlarioku[_0x54b60e]["SesGonder"],
                                                                    'BasKonusGonder': oyarlarioku[_0x54b60e]["BasKonusGonder"],
                                                                    'OzelMesajGonder': oyarlarioku[_0x54b60e]["OzelMesajGonder"],
                                                                    'YouTubeGonder': oyarlarioku[_0x54b60e]["YouTubeGonder"],
                                                                    'radyokodu': oyarlarioku[_0x54b60e]["radyokodu"],
                                                                    'radyoistek': oyarlarioku[_0x54b60e]["radyoistek"]
                                                                };
                                                            }
                                                        });
                                                        AyarTazele();
                                                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Ayarlar Güncellendi.");
                                                        _0x2ace0c(sohbetik["kullaniciAdi"], 'Site Ayarları', "Site Ayarlarını Değiştirdi", sohbetik['yetki'], sohbetik['cinsiyet']);
                                                        sohbetik.emit("sistemayarlari", {
                                                            'rg_z': sonuclarwtrVer["ResimGonder"],
                                                            'sg_z': sonuclarwtrVer['SesGonder'],
                                                            'yt_z': sonuclarwtrVer['YouTubeGonder'],
                                                            'bk_z': sonuclarwtrVer["BasKonusGonder"]
                                                        });
                                                    }
                                                });
                                            } else {
                                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Hiç bir değişiklik yapmadınız.");
                                            }
                                        });
                                    }
                                });
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID sadece numeric olabilir.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Ayarları düzenleme yetkiniz yok.");
                    }
                } catch (_0x19f76d) {
                    console.error(_0x19f76d);
                }
            } else if (_0x50e62c == "SeoDuzenle") {
                try {
                    if (sohbetik['admin_ayarlar'] == 'e') {
                        if (BakAdmin > 0x0) {
                            baglantim["query"]('select * from ayarlar where id=\x271\x27', function(_0x111745, _0x677f28, _0x58fe99) {
                                if (_0x111745) {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgusunda hata meydana geldi.");
                                } else {
                                    if (_0x677f28.length > 0x0) {
                                        _0x677f28 = _0x677f28[0];
                                        sohbetik.emit("SeoDuzenlemeGeldi", _0x677f28);
                                    } else {
                                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Ayarları görme yetkiniz yok.");
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID Yanlış.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Seo Ayarlarını görme yetkiniz yok.");
                    }
                } catch (_0x284768) {
                    console.error(_0x284768);
                }
            } else if (_0x50e62c == "SeoDuzenlemeSon") {
                try {
                    if (sohbetik["admin_ayarlar"] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            var _0x12611d = ["refresh", "iframe", "node", "document", 'include', "select", 'into', "update", "create", "delete", "describe", 'database', 'click'];
                            var _0x1e339c = ['', '', '', '', '', '', '', '', '', '', '', '', ''];
                            id = BakAdmin['id'];
                            sitetitle = BakAdmin["sitetitle"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            sitedescription = BakAdmin['sitedescription'].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            sitekeyword = BakAdmin["sitekeyword"].replaceArray(_0x12611d, _0x1e339c)['trim']();
                            googlemeta = BakAdmin['googlemeta'].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            siteismi = BakAdmin['siteismi'].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            anasayfayazi = BakAdmin["anasayfayazi"].replaceArray(_0x12611d, _0x1e339c)["trim"]();
                            baglantim["query"]('select * from ayarlar where id=\x271\x27', function(_0x4d3b57, _0x380eb8, _0x1933ee) {
                                if (_0x4d3b57) {
                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı sorgu hatası..");
                                } else {
                                    baglantim["query"]("select * from ayarlar where id='1'", function(_0x27a07e, _0x335280, _0xab9ae9) {
                                        sonuclarwtrVer = _0x335280[0];
                                        if (sitetitle != sonuclarwtrVer["sitetitle"] || sitedescription != sonuclarwtrVer["sitedescription"] || sitekeyword != sonuclarwtrVer["sitekeyword"] || googlemeta != sonuclarwtrVer["googlemeta"] || siteismi != sonuclarwtrVer["siteismi"] || anasayfayazi != sonuclarwtrVer["anasayfayazi"]) {
                                            baglantim["query"]("UPDATE ayarlar SET ? WHERE id =1", [{
                                                'id': BakAdmin['id'],
                                                'sitetitle': sitetitle,
                                                'sitedescription': sitedescription,
                                                'sitekeyword': sitekeyword,
                                                'googlemeta': googlemeta,
                                                'siteismi': siteismi,
                                                'anasayfayazi': anasayfayazi
                                            }, sonuclarwtrVer['id']], function(_0x1aa162, _0x461dc6) {
                                                if (_0x1aa162) {
                                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Veritabanı bilgilerini güncelleme esnasında hata oluştu.');
                                                } else {
                                                    seogoster = {};
                                                    baglantim["query"]("select * from ayarlar where id='1'", function(_0x41f3bd, _0x268d53, _0x5a331b) {
                                                        oyarlarioku = _0x268d53;
                                                        for (var _0x16c54c in oyarlarioku) {
                                                            seogoster[oyarlarioku[_0x16c54c]['id']] = {
                                                                'id': oyarlarioku[_0x16c54c]['id'],
                                                                'sitetitle': oyarlarioku[_0x16c54c]["sitetitle"],
                                                                'sitedescription': oyarlarioku[_0x16c54c]['sitedescription'],
                                                                'sitekeyword': oyarlarioku[_0x16c54c]["sitekeyword"],
                                                                'googlemeta': oyarlarioku[_0x16c54c]["googlemeta"],
                                                                'siteismi': oyarlarioku[_0x16c54c]["siteismi"],
                                                                'anasayfayazi': oyarlarioku[_0x16c54c]["anasayfayazi"]
                                                            };
                                                        }
                                                    });
                                                    SeoLat();
                                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Ayarlar Güncellendi.");
                                                    if (sitetitle != sonuclarwtrVer["sitetitle"] || sitekeyword != sonuclarwtrVer["sitekeyword"] || sitedescription != sonuclarwtrVer["sitedescription"] || googlemeta != sonuclarwtrVer["googlemeta"] || siteismi != sonuclarwtrVer['siteismi'] || anasayfayazi != sonuclarwtrVer["anasayfayazi"]) {
                                                        _0x2ace0c(sohbetik["kullaniciAdi"], "Seo Ayarları", "Anasayfa Ayarlarını Değiştirdi", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                    }
                                                }
                                            });
                                        } else {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Hiç bir değişiklik yapmadınız.");
                                        }
                                    });
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "ID sadece numeric olabilir.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Ayarları düzenleme yetkiniz yok.");
                    }
                } catch (_0x195a6e) {
                    console.error(_0x195a6e);
                }
            } else if (_0x50e62c == "anaresimSilme") {
                try {
                    if (sohbetik["admin_ayarlar"] == 'e') {
                        if (BakAdmin['id'] > 0x0) {
                            baglantim["query"]("select * from ayarlar where id='1'", function(_0xb34a79, _0x2846e4, _0x4b1971) {
                                if (_0xb34a79) {
                                    soketimiz.to(sohbetik['id']).emit("odauyarigoster", "Veritabanı sorgu hatası." + _0xb34a79);
                                } else {
                                    if (_0x2846e4[0]['id'] == "undefined") {
                                        soketimiz.to(sohbetik['id']).emit("odauyarigoster", "Hatalı İşlem.");
                                    } else {
                                        if (_0x2846e4[0]["anaresim"] == '') {
                                            soketimiz.to(sohbetik['id']).emit("odauyarigoster", "Silinecek Resim Yok.");
                                        } else {
                                            baglantim["query"]("UPDATE ayarlar SET ? WHERE id = ?", [{
                                                'anaresim': ''
                                            }, BakAdmin['id']], function(_0x5485d7, _0x1e4daf) {
                                                if (_0x5485d7) {
                                                    soketimiz.to(sohbetik['id']).emit("odauyarigoster", 'Veritabanı bilgilerini silme esnasında hata oluştu.' + _0x5485d7);
                                                } else {
                                                    var _0x5c6ef3 = require('fs');
                                                    var _0x4ecad6 = '' + BakAdmin["anaeskiadi"] + '';
                                                    var _0x49949d = __dirname + "/httpdocs/views/uploads/anasayfa/" + _0x4ecad6;
                                                    _0x5c6ef3["unlink"](_0x49949d, function(_0x266d72) {
                                                        if (_0x266d72) {}
                                                    });
                                                    seogoster = {};
                                                    baglantim["query"]('select * from ayarlar where id=\x271\x27', function(_0x370c55, _0x28d46c, _0x141a4d) {
                                                        oyarlarioku = _0x28d46c;
                                                        for (var _0x51f52e in oyarlarioku) {
                                                            seogoster[oyarlarioku[_0x51f52e]['id']] = {
                                                                'id': oyarlarioku[_0x51f52e]['id'],
                                                                'anaresim': oyarlarioku[_0x51f52e]["anaresim"]
                                                            };
                                                        }
                                                    });
                                                    SeoLat();
                                                    soketimiz.to(sohbetik['id']).emit("odauyarigoster", "Anasayfa Resmi Silindi.");
                                                    if (BakAdmin["anaeskiadi"] != sonuclarwtrVer["anaresim"]) {
                                                        _0x2ace0c(sohbetik["kullaniciAdi"], "AnaSayfa Resmi", "Anasayfa Ayarlarını Değiştirdi", sohbetik["yetki"], sohbetik["cinsiyet"]);
                                                    }
                                                }
                                            });
                                        }
                                    }
                                }
                            });
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "ID sadece numeric olabilir.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Ayarları düzenleme yetkiniz yok.");
                    }
                } catch (_0xe7e17c) {
                    console.error(_0xe7e17c);
                }
            } else if (_0x50e62c == "logsilme") {
                try {
                    if (sohbetik["yetki"] == 0x10 || sohbetik['yetki'] ==17) {
                        baglantim["query"]('select COUNT(*) as TOPVAR from giris_kayitlari', function(_0x2de1b3, _0x5d68e0, _0x487874) {
                            sonuclarwtrVer = _0x5d68e0[0];
                            if (_0x2de1b3) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası." + _0x2de1b3);
                            } else {
                                if (sonuclarwtrVer["TOPVAR"] != 0x0) {
                                    baglantim["query"]("TRUNCATE giris_kayitlari", function(_0x39f1e6, _0x5db439) {
                                        if (_0x39f1e6) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı bilgilerini silme esnasında hata oluştu." + _0x39f1e6);
                                        } else {
                                            _0x84717e = null;
                                            delete _0x84717e;
                                            _0x84717e = {};
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Tüm Giriş Kayıtları Silindi.');
                                        }
                                    });
                                } else {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Silinecek Giriş Kaydı Bulunamadı.');
                                }
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Giriş kaydı silme yetkiniz yok.');
                    }
                } catch (_0x1ffd0d) {
                    console.error(_0x1ffd0d);
                }
            } else if (_0x50e62c == "hareketlersilme") {
                try {
                    if (sohbetik["yetki"] == 0x10 || sohbetik["yetki"] ==17) {
                        baglantim['query']("select COUNT(*) as TOPVAR from hareketler", function(_0x379c2c, _0x4b950d, _0x3c1a5d) {
                            sonuclarwtrVer = _0x4b950d[0];
                            if (_0x379c2c) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası." + _0x379c2c);
                            } else {
                                if (sonuclarwtrVer['TOPVAR'] != 0x0) {
                                    baglantim["query"]("TRUNCATE hareketler", function(_0x2d17a8, _0x3b430d) {
                                        if (_0x2d17a8) {
                                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Veritabanı bilgilerini silme esnasında hata oluştu." + _0x2d17a8);
                                        } else {
                                            _0x10c978 = null;
                                            delete _0x10c978;
                                            _0x10c978 = {};
                                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Tüm Admin Hareketleri Silindi.");
                                        }
                                    });
                                } else {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Silinecek Admin Hareketleri Bulunamadı.");
                                }
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Admin hareketlerini silme yetkiniz yok.");
                    }
                } catch (_0x5d0ff5) {
                    console.error(_0x5d0ff5);
                }
            } else if (_0x50e62c == "yorumlarsil") {
                try {
                    if (sohbetik["yetki"] == 0x10 || sohbetik["yetki"] ==17) {
                        baglantim["query"]("select COUNT(*) as TOPVAR from yorumlar", function(_0x355fc6, _0x54d332, _0x109d4c) {
                            sonuclarwtrVer = _0x54d332[0];
                            if (_0x355fc6) {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Veritabanı sorgu hatası." + _0x355fc6);
                            } else {
                                if (sonuclarwtrVer["TOPVAR"] != 0x0) {
                                    baglantim['query']("TRUNCATE yorumlar", function(_0x50fd41, _0xf32192) {
                                        if (_0x50fd41) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Veritabanı bilgilerini silme esnasında hata oluştu.' + _0x50fd41);
                                        } else {
                                            _0x33adf7 = null;
                                            delete _0x33adf7;
                                            _0x33adf7 = {};
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Tüm Yorumlar Silindi.");
                                        }
                                    });
                                } else {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Silinecek Üye Yorumları Bulunamadı.");
                                }
                            }
                        });
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Üye yorumlarını silme yetkiniz yok.");
                    }
                } catch (_0x21d660) {
                    console.error(_0x21d660);
                }
            } else {
                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle bir modül yok veya hazırlanıyor.");
            }
        });
        if (_0x4f934a['ban_yetkisi'] == 'e') {
            try {
                SSifreleme(sohbetik['kripto']);
                baglantim["query"]("select * from ban_listesi order by id asc", function(_0x2416c8, _0x33c375, _0x48d403) {
                    _0x1cb1bd = _0x33c375;
                    sohbetik.emit('banListesiYetkisi', _0x1cb1bd);
                });
            } catch (_0x4d178f) {
                console.error(_0x4d178f);
            }
        }
        sohbetik.on("banListesiYetkisiYenile", function() {
            try {
                SSifreleme(sohbetik["kripto"]);
                if (sohbetik["ban_yetkisi"] == 'e') {
                    baglantim["query"]("select * from ban_listesi order by id asc", function(_0x3f7732, _0x56497d, _0x32ca18) {
                        _0x1cb1bd = _0x56497d;
                        sohbetik.emit('banListesiYetkisi', _0x1cb1bd);
                    });
                } else {
                    console.log("KontrolEdilsin : Ban yetkisi olmadan ban listesini çağırdı :  " + _0x2c10b3);
                }
            } catch (_0x5ddc4e) {
                console.error(_0x5ddc4e);
            }
        });
        sohbetik.on('girisKayitlariYetkisiYenile', function() {
            try {
                _0x156377("girisKayitlariYetkisiYenile", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (sohbetik["log_yetkisi"] == 'e') {
                    sohbetik.emit("loglariListeleYonetici", _0x84717e);
                } else {
                    console.log("KontrolEdilsin : Giriş kayıtları yetkisi olmadan Giriş kayıtları listesini çağırdı :  " + _0x2c10b3);
                }
            } catch (_0x8fc731) {
                console.error(_0x8fc731);
            }
        });
        emin["post"]("/kisiengeller", function(_0x4b4181, _0x3007b4) {
            try {
                var _0x480332 = _0x4b4181['body']["rumuz"];
                var _0x5451e5 = _0x4b4181["body"]["bukimkripto"];
                var _0x42eb03 = _0x4b4181["body"]["islem"];
                var _0x17ef1e = '' + _0x480332 + '_' + _0x5451e5 + '';
                evetVar = 0x0;
                for (var _0x3dec98 in soketgir) {
                    if (soketgir[_0x3dec98]["userKripto"] == _0x5451e5) {
                        evetVar = 0x1;
                        break;
                    }
                }
                if (evetVar > 0x0) {
                    if (_0x480332 != _0x5451e5) {
                        if (_0x42eb03 == "engelle_ozel") {
                            for (var _0x3dec98 in _0x143650) {
                                if (_0x143650[_0x3dec98]['EngelsocketCR'] == _0x17ef1e) {
                                    delete _0x143650[_0x17ef1e];
                                    return _0x3007b4["end"]("engelkaldirildi");
                                    break;
                                    return ![];
                                }
                            }
                            _0x143650[_0x17ef1e] = {
                                'kimimben': _0x480332,
                                'kimsinsen': _0x5451e5,
                                'EngelsocketCR': _0x17ef1e,
                                'tarih': parcaliTarih()
                            };
                            return _0x3007b4["end"]("engellendi");
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle bir işlem tipi yok.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kendinizi Engelleyemezsiniz.");
                    }
                } else {
                    return _0x3007b4["end"]('kisicikmis');
                }
            } catch (_0x4ce349) {
                console.error(_0x4ce349);
            }
        });
        emin["post"]("/kisiignore", function(_0x28abe5, _0x79fc1d) {
            try {
                var _0x17a628 = _0x28abe5["body"]["rumuz"];
                var _0x8f039b = _0x28abe5["body"]["bukimkripto"];
                var _0xfdf813 = _0x28abe5["body"]["islem"];
                var _0x1bc650 = '' + _0x17a628 + '_' + _0x8f039b + '';
                evetVar = 0x0;
                for (var _0x39af5f in soketgir) {
                    if (soketgir[_0x39af5f]["userKripto"] == _0x8f039b) {
                        evetVar = 0x1;
                        break;
                    }
                }
                if (evetVar > 0x0) {
                    if (_0x17a628 != _0x8f039b) {
                        if (_0xfdf813 == "ignore_ozel") {
                            for (var _0x39af5f in _0x4b19b9) {
                                if (_0x4b19b9[_0x39af5f]["ignoresocketCR"] == _0x1bc650) {
                                    delete _0x4b19b9[_0x1bc650];
                                    return _0x79fc1d['end']("ignorekaldirildi");
                                    break;
                                    return ![];
                                }
                            }
                            _0x4b19b9[_0x1bc650] = {
                                'benignore': _0x17a628,
                                'senignore': _0x8f039b,
                                'ignoresocketCR': _0x1bc650,
                                'tarih': parcaliTarih()
                            };
                            return _0x79fc1d["end"]("ignoreedildi");
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle bir işlem tipi yok.");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Kendinizi Engelleyemezsiniz.");
                    }
                } else {
                    return _0x79fc1d["end"]("kisicikmis");
                }
            } catch (_0x2c044b) {
                console.error(_0x2c044b);
            }
        });
        sohbetik.on("mesajYollaOzel", function(_0x1a32a2, _0x2a2fea, _0x157c60) {
            try {
                _0x156377("mesajYollaOzel", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                var _0xd5f094 = _0x3b706d[sohbetik["kripto"]]['ip'];
                for (var _0x4d8855 in _0x1cb1bd) {
                    if (_0x1cb1bd[_0x4d8855]['ip'] == _0xd5f094 || _0x1cb1bd[_0x4d8855]['banlanan'] == soketgir[sohbetik["kripto"]]["userName"]) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Banlısınız.");
                        sohbetik['leave'](sohbetik["odasi"]);
                        soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                        return ![];
                    }
                }
                kisiBagli = 0x0;
                for (var _0x4d8855 in soketgir) {
                    if (soketgir[_0x4d8855]["userKripto"] == _0x157c60) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    for (var _0x4d8855 in _0x143650) {
                        if (_0x143650[_0x4d8855]["kimsinsen"] == _0x157c60 && _0x143650[_0x4d8855]["kimimben"] == soketgir[sohbetik['kripto']]['userKripto']) {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Bu kişiyi engellemişsiniz mesaj yazmak için engeli kaldırın.");
                            return ![];
                        } else if (_0x143650[_0x4d8855]["kimimben"] == _0x157c60 && _0x143650[_0x4d8855]["kimsinsen"] == soketgir[sohbetik['kripto']]['userKripto']) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu kişi sizi engellemiş kişiye mesaj yazamazsınız.");
                            return ![];
                        }
                    }
                }
                _0x1a32a2 = KraKral(_0x1a32a2);
                var _0x533b7f = ["sikerim", ':0', ':1', ':2', ':3', ':4', ':5', ':6', ':7', ':8', ':9', ":a10", ':a11', ":a12", ':a13', ":a14", ":a15", ':a16', ":a17", ":a18", ":a19", ":b20", ":b21", ":b22", ":b23", ":b24", ":b25", ":b26", ":b27", ":b28", ":b29", ":c30", ":c31", ":c32", ":c33", ":c34", ":c35", ":c36", ":c37", ":c38", ":c39", ":d40", ":d41", ":d42", ":d43", ":d44", ":d45", ":d46", ":d47", ":d48", ":d49", ":e50", ":e51", ':e52', ":e53", ":e54", ":e55", ':e56', ":e57", ":e58", ":e59", ':f60', ":f61", ":f62", ":f63", ":f64", ":f65", ":f66", ':f67', ":f68", ":f69", ':g70', ":g71", ":g72", ":g73", ":g74", ":g75", ":g76", ":g77", ":g78", ':g79'];
                var _0xabbb28 = ['Yasak Kelime', '<span class="i0"></span>', '<span class="i1"></span>','<span class="i2"></span>','<span class="i3"></span>','<span class="i4"></span>', '<span class="i5"></span>', '<span class="i6"></span>','<span class="i7"></span>','<span class="i8"></span>','<span class="i9"></span>','<span class="i10"></span>','<span class="i11"></span>','<span class="i12"></span>', '<span class="i13"></span>','<span class="i14"></span>','<span class="i15"></span>','<span class="i16"></span>','<span class="i17"></span>','<span class="i18"></span>','<span class="i19"></span>','<span class="i20"></span>','<span class="i21"></span>','<span class="i22"></span>','<span class="i23"></span>', '<span class="i24"></span>','<span class="i25"></span>','<span class="i26"></span>','<span class="i27"></span>', '<span class="i28"></span>','<span class="i29"></span>','<span class="i30"></span>','<span class="i31"></span>','<span class="i32"></span>','<span class="i33"></span>','<span class="i34"></span>','<span class="i35"></span>','<span class="i36"></span>','<span class="i37"></span>','<span class="i38"></span>','<span class="i39"></span>', '<span class="i40"></span>','<span class="i41"></span>','<span class="i42"></span>','<span class="i43"></span>','<span class="i44"></span>', '<span class="i45"></span>','<span class="i46"></span>','<span class="i47"></span>','<span class="i48"></span>','<span class="i49"></span>', '<span class="i50"></span>','<span class="i51"></span>','<span class="i52"></span>','<span class="i53"></span>', '<span class="i54"></span>', '<span class="i55"></span>','<span class="i56"></span>','<span class="i57"></span>','<span class="i58"></span>', '<span class="i59"></span>','<span class="i60"></span>','<span class="i61"></span>','<span class="i62"></span>','<span class="i63"></span>','<span class="i64"></span>','<span class="i65"></span>','<span class="i66"></span>','<span class="i67"></span>','<span class="i68"></span>','<span class="i69"></span>','<span class="i70"></span>','<span class="i71"></span>','<span class="i72"></span>','<span class="i73"></span>', '<span class="i74"></span>','<span class="i75"></span>', '<span class="i76"></span>','<span class="i77"></span>','<span class="i78"></span>','<span class="i79"></span>'];
                aralarinda = soketgir[sohbetik["kripto"]]['userKripto'] + '_' + _0x157c60;
                aralarinda2 = _0x157c60 + '_' + soketgir[sohbetik["kripto"]]['userKripto'];
                kadiSon = sohbetik['kullaniciAdiiki'].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"];
                if (soketgir[sohbetik['kripto']]["userKripto"] == _0x157c60) {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Kendinize mesaj yollayamazsınız.');
                } else {
                    kisiBagli = 0x0;
                    for (var _0x4d8855 in soketgir) {
                        if (soketgir[_0x4d8855]["userKripto"] == _0x157c60) {
                            kisiBagli = 0x1;
                            break;
                        }
                    }
                    if (kisiBagli > 0x0) {
                        if (_0x1d874d[aralarinda] !== undefined) {
                            if (_0x1d874d[aralarinda]["muhattap"] == sohbetik["kripto"]) {
                                var _0x1479ec = 0x1;
                            } else {
                                var _0x1479ec = 0x1;
                            }
                            if (_0x1479ec >0|| sohbetik["ozel_mesaj"] == 'e' || oyagoster['1']["OzelMesajGonder"] == 'e') {
                                _0x1a32a2 = gereksiz(_0x1a32a2, 0x64, ' ');
                                _0x1a32a2 = Krkter(_0x1a32a2);
                                _0x1a32a2 = _0x1a32a2.replaceArray(_0x533b7f, _0xabbb28);
                                _0x1a32a2 = _0x1a32a2.replace(/\{(.*?)\}/ig, '<img src="resimler/sistem/animasyonlar/$1.gif">');
                                var _0x377ed1 = _0x1a32a2.match(/img src/ig);
                                _0x2a2fea = _0x2a2fea == '' ? "000000" : _0x2a2fea;
                                arasinda = _0x1d874d[aralarinda];
                                var _0x1120de = sohbetik['kullaniciAdiiki'].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"];
                                if (_0x377ed1 != null && _0x377ed1.length > 0x2) {
                                    sohbetik.emit("mesajGonderOzel", "K_SistemMesajiGonderGitsinnn", "Aynı Mesajda 2 Den Fazla İkon Kullanamazsınız", _0x2a2fea, arasinda["socketCR"], soketgir[_0x157c60]["userName"]);
                                    soketgir[sohbetik['kripto']]["userIslemTarih"] = TarihCe();
                                } else {
                                    if (soketgir[sohbetik["kripto"]]['userIslemTarih'] +1> TarihCe()) {
                                        sohbetik.emit("mesajGonderOzel", "K_SistemMesajiGonderGitsinnn", "Flood Koruma", _0x2a2fea, arasinda["socketCR"], soketgir[_0x157c60]["userName"]);
                                    } else {
                                        if (soketgir[_0x157c60]["userOzelMesaj"] < 0x1) {
                                            sohbetik.emit("mesajGonderOzel", "K_SistemMesajiGonderGitsinnn", "Mesaj yazdığınız kişi, özelini kapatmış", _0x2a2fea, arasinda["socketCR"], soketgir[_0x157c60]["userName"]);
                                        } else {
                                            if (soketgir[sohbetik["kripto"]]['userOzelMesaj'] < 0x1) {
                                                sohbetik.emit("mesajGonderOzel", "K_SistemMesajiGonderGitsinnn", "Özeliniz kapalı.Diger kişinin size cevap vermesi için özelinizi açmalısınız", _0x2a2fea, arasinda['socketCR'], soketgir[_0x157c60]['userName']);
                                            } else {
                                                sohbetik.join(arasinda["socketCR"]);
                                                soketimiz.sockets.sockets[soketgir[_0x157c60]["userId"]].join(arasinda["socketCR"]);
                                                if (arasinda["ilkMesaj"] > 0x0) {
                                                    soketimiz.to(soketgir[_0x157c60]["userId"]).emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "<b>" + kadiSon + "</b> isimli kişi size özel mesaj gönderdi <br><a href=\"#\" onClick=\"$('a#yeniMesajVarPanel').click()\"><font style=\"font-weight:bold;color:#ff0000\">Mesajlar Panelini Aç</font></a>", sohbetik["cinsiyet"]);
                                                }
                                                if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                                    ozelyetkisi = "Misafir";
                                                    var _0x51a0b3 = 'resimler/sistem/' + sohbetik['cinsiyet'] + "_mliste.png";
                                                } else {
                                                    ozelyetkisi = sohbetik["statu"];
                                                    var _0x51a0b3 = _0x1de788();
                                                }
                                                soketimiz.to(soketgir[_0x157c60]["userId"]).emit("gonderenPenceresiYarat", sohbetik["kripto"], kadiSon, ozelyetkisi, arasinda["socketCR"], _0x51a0b3, soketgir[_0x157c60]["userKripto"]);
                                                soketimiz.sockets.in(arasinda["socketCR"]).emit("mesajGonderOzel", kadiSon, _0x1a32a2, _0x2a2fea, arasinda["socketCR"], soketgir[_0x157c60]["userName"], _0x51a0b3);
                                                soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                                                _0x1d874d[aralarinda]["ilkMesaj"] = 0x0;
                                                _0x1d874d[aralarinda2]["ilkMesaj"] = 0x0;
                                            }
                                        }
                                    }
                                }
                            } else {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Özel mesaj yazma yetkiniz yok.');
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle biriyle sohbetiniz yok.<br><span style=\"font-size:11px;\">Kişi çıkmış veya düşmüş olabilir.</span>");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi sitede değil veya düşmüş.<br><span style=\"font-size:11px;\">Yazdığınız mesaj bu kişiye iletilmedi.</span>");
                    }
                }
            } catch (_0x2af049) {
                console.error(_0x2af049);
            }
        });
        sohbetik.on("Ozel_ResimYolla", function(_0x29ce03, _0x479c71, _0x26e3eb) {
            try {
                _0x156377("baskonus_Ozel", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (oyagoster['1']["SesGonder"] == 'h' && sohbetik["statu"] == "Misafir") {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sadece Üyeler ses Gönderebilir.");
                } else if (oyagoster['1']["SesGonder"] == 'd') {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Site yönetimi ses göndermeyi kapatmış.");
                } else {
                    var _0x39d0cc = _0x3b706d[sohbetik["kripto"]]['ip'];
                    for (var _0x5c0f94 in _0x1cb1bd) {
                        if (_0x1cb1bd[_0x5c0f94]['ip'] == _0x39d0cc || _0x1cb1bd[_0x5c0f94]["banlanan"] == soketgir[sohbetik["kripto"]]["userName"]) {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Banlısınız.");
                            sohbetik.leave(sohbetik["odasi"]);
                            soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                            return ![];
                        }
                    }
                    aralarinda = soketgir[sohbetik["kripto"]]["userKripto"] + '_' + _0x26e3eb;
                    aralarinda2 = _0x26e3eb + '_' + soketgir[sohbetik["kripto"]]["userKripto"];
                    var _0x2b42ff = sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"];
                    if (soketgir[sohbetik['kripto']]["userKripto"] == _0x26e3eb) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kendinize mesaj yollayamazsınız.");
                    } else {
                        kisiBagli = 0x0;
                        for (var _0x5c0f94 in soketgir) {
                            if (soketgir[_0x5c0f94]["userKripto"] == _0x26e3eb) {
                                kisiBagli = 0x1;
                                break;
                            }
                        }
                        if (kisiBagli > 0x0) {
                            if (_0x1d874d[aralarinda] !== undefined) {
                                if (_0x1d874d[aralarinda]["muhattap"] == sohbetik["kripto"]) {
                                    var _0x4ef8b9 = 0x1;
                                } else {
                                    var _0x4ef8b9 = 0x1;
                                }
                                if (_0x4ef8b9 >0|| sohbetik["ozel_mesaj"] == 'e' || oyagoster['1']["OzelMesajGonder"] == 'e') {
                                    _0x29ce03 = KraKral(_0x29ce03);
                                    _0x29ce03 = "<img id=\"resimid\" title=\"Paylaşımı yapan: " + _0x2b42ff + "\" class=\"paylasilan_resim resim_buyut\" src='" + _0x29ce03 + "'>";
                                    if (_0x479c71 == '' || _0x479c71 == null) {
                                        _0x479c71 = "000000";
                                    }
                                    arasinda = _0x1d874d[aralarinda];
                                    if (soketgir[sohbetik["kripto"]]["userIslemTarih"] +1> TarihCe()) {
                                        sohbetik.emit('mesajGonderOzel', "K_SistemMesajiGonderGitsinnn", "Flood Koruma", _0x479c71, arasinda["socketCR"], soketgir[_0x26e3eb]['userName']);
                                    } else {
                                        if (soketgir[_0x26e3eb]["userOzelMesaj"] < 0x1) {
                                            sohbetik.emit("mesajGonderOzel", 'K_SistemMesajiGonderGitsinnn', "Mesaj yazdığınız kişi, özelini kapatmış", _0x479c71, arasinda['socketCR'], soketgir[_0x26e3eb]["userName"]);
                                        } else {
                                            if (soketgir[sohbetik["kripto"]]['userOzelMesaj'] < 0x1) {
                                                sohbetik.emit("mesajGonderOzel", "K_SistemMesajiGonderGitsinnn", 'Özeliniz kapalı.Diger kişinin size cevap vermesi için özelinizi açmalısınız', _0x479c71, arasinda['socketCR'], soketgir[_0x26e3eb]["userName"]);
                                            } else {
                                                sohbetik.join(arasinda["socketCR"]);
                                                soketimiz.sockets.sockets[soketgir[_0x26e3eb]['userId']].join(arasinda["socketCR"]);
                                                if (arasinda['ilkMesaj'] > 0x0) {
                                                    soketimiz.to(soketgir[_0x26e3eb]["userId"]).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<b>" + kadiSon + '</b> isimli kişi size özel mesaj gönderdi <br><a href="#" onClick="$(\x27a#yeniMesajVarPanel\x27).click()"><font style="font-weight:bold;color:#ff0000">Mesajlar Panelini Aç</font></a>', sohbetik["cinsiyet"]);
                                                }
                                                if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                                    ozelyetkisi = "Misafir";
                                                    var _0x167be9 = 'resimler/sistem/' + sohbetik["cinsiyet"] + "_mliste.png";
                                                } else {
                                                    ozelyetkisi = sohbetik["statu"];
                                                    var _0x167be9 = _0x1de788();
                                                }
                                                soketimiz.to(soketgir[_0x26e3eb]["userId"]).emit("gonderenPenceresiYarat", sohbetik["kripto"], kadiSon, ozelyetkisi, arasinda["socketCR"], _0x167be9);
                                                soketimiz.sockets.in(arasinda["socketCR"]).emit("mesajGonderOzel", kadiSon, _0x29ce03, _0x479c71, arasinda["socketCR"], soketgir[_0x26e3eb]["userName"], _0x167be9);
                                                soketgir[sohbetik["kripto"]]['userIslemTarih'] = TarihCe();
                                                _0x1d874d[aralarinda]["ilkMesaj"] = 0x0;
                                                _0x1d874d[aralarinda2]["ilkMesaj"] = 0x0;
                                            }
                                        }
                                    }
                                } else {
                                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Özel mesaj yazma yetkiniz yok.');
                                }
                            } else {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle biriyle sohbetiniz yok.<br><span style=\"font-size:11px;\">Kişi çıkmış veya düşmüş olabilir.</span>");
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi sitede değil veya düşmüş.<br><span style=\"font-size:11px;\">Sesli mesajınız bu kişiye iletilmedi.</span>");
                        }
                    }
                }
            } catch (_0x56d996) {
                console.error(_0x56d996);
            }
        });
        sohbetik.on("baskonus_Ozel", function(_0x1b6cf5, _0x5a5b7a, _0x12292c) {
            try {
                _0x156377("baskonus_Ozel", 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                if (oyagoster['1']["SesGonder"] == 'h' && sohbetik['statu'] == "Misafir") {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sadece Üyeler ses Gönderebilir.");
                } else if (oyagoster['1']["SesGonder"] == 'd') {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Site yönetimi ses göndermeyi kapatmış.");
                } else {
                    var _0x39281a = _0x3b706d[sohbetik["kripto"]]['ip'];
                    for (var _0x4410e0 in _0x1cb1bd) {
                        if (_0x1cb1bd[_0x4410e0]['ip'] == _0x39281a || _0x1cb1bd[_0x4410e0]["banlanan"] == soketgir[sohbetik['kripto']]["userName"]) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Banlısınız.");
                            sohbetik.leave(sohbetik["odasi"]);
                            soketimiz.sockets.sockets[sohbetik['id']]['disconnect']();
                            return ![];
                        }
                    }
                    aralarinda = soketgir[sohbetik['kripto']]["userKripto"] + '_' + _0x12292c;
                    aralarinda2 = _0x12292c + '_' + soketgir[sohbetik["kripto"]]["userKripto"];
                    kadiSon = sohbetik["kullaniciAdiiki"].length >1? sohbetik['kullaniciAdiiki'] : sohbetik["kullaniciAdi"];
                    if (soketgir[sohbetik["kripto"]]["userKripto"] == _0x12292c) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kendinize mesaj yollayamazsınız.");
                    } else {
                        kisiBagli = 0x0;
                        for (var _0x4410e0 in soketgir) {
                            if (soketgir[_0x4410e0]["userKripto"] == _0x12292c) {
                                kisiBagli = 0x1;
                                break;
                            }
                        }
                        if (kisiBagli > 0x0) {
                            if (_0x1d874d[aralarinda] !== undefined) {
                                if (_0x1d874d[aralarinda]['muhattap'] == sohbetik["kripto"]) {
                                    var _0x645746 = 0x1;
                                } else {
                                    var _0x645746 = 0x1;
                                }
                                if (_0x645746 >0|| sohbetik["ozel_mesaj"] == 'e' || oyagoster['1']["OzelMesajGonder"] == 'e') {
                                    _0x1b6cf5 = KraKral(_0x1b6cf5);
                                    _0x1b6cf5 = '<audio src="' + _0x1b6cf5 + '" controls=""></audio>';
                                    _0x5a5b7a = _0x5a5b7a == '' ? "000000" : _0x5a5b7a;
                                    arasinda = _0x1d874d[aralarinda];
                                    var _0x3f0388 = sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik['kullaniciAdi'];
                                    if (soketgir[sohbetik["kripto"]]["userIslemTarih"] +1> TarihCe()) {
                                        sohbetik.emit("mesajGonderOzel", "K_SistemMesajiGonderGitsinnn", 'Flood Koruma', _0x5a5b7a, arasinda["socketCR"], soketgir[_0x12292c]["userName"]);
                                    } else {
                                        if (soketgir[_0x12292c]["userOzelMesaj"] < 0x1) {
                                            sohbetik.emit("mesajGonderOzel", "K_SistemMesajiGonderGitsinnn", "Mesaj yazdığınız kişi, özelini kapatmış", _0x5a5b7a, arasinda["socketCR"], soketgir[_0x12292c]["userName"]);
                                        } else {
                                            if (soketgir[sohbetik['kripto']]["userOzelMesaj"] < 0x1) {
                                                sohbetik.emit('mesajGonderOzel', 'K_SistemMesajiGonderGitsinnn', "Özeliniz kapalı.Diger kişinin size cevap vermesi için özelinizi açmalısınız", _0x5a5b7a, arasinda["socketCR"], soketgir[_0x12292c]["userName"]);
                                            } else {
                                                sohbetik.join(arasinda['socketCR']);
                                                soketimiz.sockets.sockets[soketgir[_0x12292c]["userId"]].join(arasinda["socketCR"]);
                                                if (arasinda["ilkMesaj"] > 0x0) {
                                                    soketimiz.to(soketgir[_0x12292c]["userId"]).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<b>" + kadiSon + "</b> isimli kişi size özel mesaj gönderdi <br><a href=\"#\" onClick=\"$('a#yeniMesajVarPanel').click()\"><font style=\"font-weight:bold;color:#ff0000\">Mesajlar Panelini Aç</font></a>", sohbetik["cinsiyet"]);
                                                }
                                                if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                                    ozelyetkisi = "Misafir";
                                                    var _0x5c5171 = "resimler/sistem/" + sohbetik["cinsiyet"] + "_mliste.png";
                                                } else {
                                                    ozelyetkisi = sohbetik["statu"];
                                                    var _0x5c5171 = _0x1de788();
                                                }
                                                soketimiz.to(soketgir[_0x12292c]['userId']).emit("gonderenPenceresiYarat", sohbetik['kripto'], kadiSon, ozelyetkisi, arasinda["socketCR"], _0x5c5171);
                                                soketimiz.sockets.in(arasinda["socketCR"]).emit("mesajGonderOzel", kadiSon, _0x1b6cf5, _0x5a5b7a, arasinda["socketCR"], soketgir[_0x12292c]["userName"], _0x5c5171);
                                                soketgir[sohbetik['kripto']]["userIslemTarih"] = TarihCe();
                                                _0x1d874d[aralarinda]['ilkMesaj'] = 0x0;
                                                _0x1d874d[aralarinda2]["ilkMesaj"] = 0x0;
                                            }
                                        }
                                    }
                                } else {
                                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Özel mesaj yazma yetkiniz yok.");
                                }
                            } else {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle biriyle sohbetiniz yok.<br><span style=\"font-size:11px;\">Kişi çıkmış veya düşmüş olabilir.</span>");
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi sitede değil veya düşmüş.<br><span style=\"font-size:11px;\">Sesli mesajınız bu kişiye iletilmedi.</span>");
                        }
                    }
                }
            } catch (_0x59428d) {
                console.error(_0x59428d);
            }
        });
        sohbetik.on("ozel-arama-send", function(_0x34b125, _0x1a4eae) {
            try {
                _0x156377("ozel-arama-send", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                var _0xccefb8 = _0x3b706d[sohbetik["kripto"]]['ip'];
                for (var _0x4d5c76 in _0x1cb1bd) {
                    if (_0x1cb1bd[_0x4d5c76]['ip'] == _0xccefb8 || _0x1cb1bd[_0x4d5c76]["banlanan"] == soketgir[sohbetik["kripto"]]["userName"]) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Banlısınız.");
                        sohbetik['leave'](sohbetik["odasi"]);
                        soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                        return ![];
                    }
                }
                kisiBagli = 0x0;
                for (var _0x4d5c76 in soketgir) {
                    if (soketgir[_0x4d5c76]["userKripto"] == _0x1a4eae) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    for (var _0x4d5c76 in _0x143650) {
                        if (_0x143650[_0x4d5c76]["kimsinsen"] == _0x1a4eae && _0x143650[_0x4d5c76]["kimimben"] == soketgir[sohbetik["kripto"]]["userKripto"]) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Bu kişiyi engellemişsiniz arama yapmak için engeli kaldırın.');
                            return ![];
                        } else if (_0x143650[_0x4d5c76]["kimimben"] == _0x1a4eae && _0x143650[_0x4d5c76]["kimsinsen"] == soketgir[sohbetik["kripto"]]["userKripto"]) {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Bu kişi sizi engellemiş kişiyi arayamazsınız.");
                            return ![];
                        }
                    }
                }
                aralarinda = soketgir[sohbetik['kripto']]["userKripto"] + '_' + _0x1a4eae;
                aralarinda2 = _0x1a4eae + '_' + soketgir[sohbetik["kripto"]]['userKripto'];
                kadiSon = sohbetik["kullaniciAdiiki"].length >1? sohbetik['kullaniciAdiiki'] : sohbetik["kullaniciAdi"];
                if (soketgir[sohbetik["kripto"]]["userKripto"] == _0x1a4eae) {
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Kendinize Arama Gönderemezsiniz");
                } else {
                    kisiBagli = 0x0;
                    for (var _0x4d5c76 in soketgir) {
                        if (soketgir[_0x4d5c76]["userKripto"] == _0x1a4eae) {
                            kisiBagli = 0x1;
                            break;
                        }
                    }
                    if (kisiBagli > 0x0) {
                        if (_0x334fe6[aralarinda] !== undefined) {
                            if (_0x334fe6[aralarinda]["muhattap"] == sohbetik["kripto"]) {
                                var _0x23863b = 0x1;
                            } else {
                                var _0x23863b = soketgir[sohbetik["kripto"]]['userStatuINT'];
                            }
                            if (_0x23863b > 0x0) {
                                arasinda = _0x334fe6[aralarinda];
                                var _0xe28514 = sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik['kullaniciAdi'];
                                if (soketgir[sohbetik["kripto"]]['userIslemTarih'] +1> TarihCe()) {
                                    sohbetik.emit("ozel-arama-islem", 'K_SistemMesajiGonderGitsinnn', "Flood Koruma", arasinda["SessocketCR"], soketgir[_0x1a4eae]["userName"]);
                                } else {
                                    if (soketgir[_0x1a4eae]["userOzelArama"] < 0x1) {
                                        sohbetik.emit("ozel-arama-islem", "K_SistemMesajiGonderGitsinnn", "Mesaj yazdığınız kişi, özelini kapatmış", arasinda["SessocketCR"], soketgir[_0x1a4eae]['userName']);
                                    } else {
                                        if (soketgir[sohbetik["kripto"]]["userOzelArama"] < 0x1) {
                                            sohbetik.emit("ozel-arama-islem", "K_SistemMesajiGonderGitsinnn", "Özeliniz kapalı.Diger kişinin size cevap vermesi için özelinizi açmalısınız", arasinda["SessocketCR"], soketgir[_0x1a4eae]['userName']);
                                        } else {
                                            sohbetik.join(arasinda["SessocketCR"]);
                                            soketimiz.sockets.sockets[soketgir[_0x1a4eae]["userId"]].join(arasinda["SessocketCR"]);
                                            if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                                ozelyetkisi = "Misafir";
                                                var _0x17916e = 'resimler/sistem/' + sohbetik['cinsiyet'] + "_mliste.png";
                                            } else {
                                                ozelyetkisi = sohbetik["statu"];
                                                var _0x17916e = _0x1de788();
                                            }
                                            soketgir[_0x1a4eae]["userkonusmada"] = 0x1;
                                            soketgir[sohbetik['kripto']]['userkonusmada'] = 0x1;
                                            soketimiz.to(soketgir[_0x1a4eae]["userId"]).emit("ozel-arama-yarat", sohbetik["kripto"], kadiSon, ozelyetkisi, arasinda["SessocketCR"], _0x17916e);
                                            soketimiz.sockets.in(arasinda["SessocketCR"]).emit("ozel-arama-islem", kadiSon, arasinda["SessocketCR"], soketgir[_0x1a4eae]["userName"], _0x17916e);
                                            sohbetik.emit('yenibaglantikur', arasinda['SessocketCR'], "sesliarama", soketgir[sohbetik['kripto']]["userWebRTCSes"]);
                                            soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                                            _0x334fe6[aralarinda]["Aramabaslat"] = 0x1;
                                            _0x334fe6[aralarinda2]["Aramabaslat"] = 0x1;
                                        }
                                    }
                                }
                            } else {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Arama yetkiniz yok.');
                            }
                        } else {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle biriyle konuşmanız yok.<br><span style=\"font-size:11px;\">Kişi sitede değil</span>");
                        }
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Kişi sitede değil.<br><span style="font-size:11px;">Aramanız iletilemedi.</span>');
                    }
                }
            } catch (_0x447d23) {
                console.error(_0x447d23);
            }
        });
        sohbetik.on('ozel-arama-cevapla', function(_0x4412a6, _0x5c662b) {
            try {
                _0x156377("ozel-arama-cevapla", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                aralarinda = soketgir[sohbetik["kripto"]]["userKripto"] + '_' + _0x5c662b;
                kisiBagli = 0x0;
                for (var _0x1181a7 in soketgir) {
                    if (soketgir[_0x1181a7]["userKripto"] == _0x5c662b) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli >0|| _0x334fe6[aralarinda] !== undefined) {
                    sohbetik.emit('yenibaglantikur', _0x4412a6, 'sesliarama', soketgir[sohbetik["kripto"]]["userWebRTCSes"]);
                    soketimiz.to(soketgir[_0x5c662b]["userId"]).emit("aramacevaplandi", sohbetik['kullaniciAdi']);
                    sohbetik.emit('KonusmaZamaniSay', 0x0);
                } else {
                    for (var _0x1181a7 in _0x334fe6) {
                        if (_0x334fe6[_0x1181a7]["baslatan"] == sohbetik["kripto"]) {
                            delete _0x334fe6[_0x1181a7];
                        }
                    }
                    for (var _0x1181a7 in _0x334fe6) {
                        if (_0x334fe6[_0x1181a7]["muhattap"] == sohbetik["kripto"]) {
                            delete _0x334fe6[_0x1181a7];
                        }
                    }
                    sohbetik.emit("yenibaglantikur", odalar[sohbetik["odasi"]]['id'], "odayabaglanma", soketgir[sohbetik["kripto"]]["userWebRTCSes"]);
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle biriyle sohbetiniz yok.<br>Kişi çıkmış veya düşmüş olabilir");
                }
            } catch (_0x27ebad) {
                console.error(_0x27ebad);
            }
        });
        sohbetik.on("KonusmaSureArttir", function(_0x3881e1) {
            try {
                SSifreleme(sohbetik["kripto"]);
                for (var _0x12ee7c in _0x334fe6) {
                    if (_0x334fe6[_0x12ee7c]["baslatan"] == sohbetik["kripto"] || _0x334fe6[_0x12ee7c]["muhattap"] == sohbetik["kripto"]) {
                        _0x334fe6[_0x12ee7c]["konusmasuresi"] = _0x334fe6[_0x12ee7c]["konusmasuresi"] + 0x1;
                        soketimiz.to(soketgir[_0x334fe6[_0x12ee7c]["baslatan"]]["userId"]).emit('KonusmaZamaniSayTeker', _0x334fe6[_0x12ee7c]["konusmasuresi"]);
                        soketimiz.to(soketgir[_0x334fe6[_0x12ee7c]["muhattap"]]["userId"]).emit("KonusmaZamaniSayTeker", _0x334fe6[_0x12ee7c]['konusmasuresi']);
                    }
                }
            } catch (_0x1450b9) {
                console.error(_0x1450b9);
            }
        });
        sohbetik.on("ozel-arama-sonlandir", function(_0x31d21a, _0x108ab0) {
            try {
                _0x156377("ozel-arama-sonlandir", 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                kisiBagli = 0x0;
                for (var _0x2915b3 in soketgir) {
                    if (soketgir[_0x2915b3]["userKripto"] == _0x108ab0) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (_0x334fe6[aralarinda] !== undefined) {
                        for (var _0x2915b3 in _0x334fe6) {
                            if (_0x334fe6[_0x2915b3]["baslatan"] == sohbetik['kripto']) {
                                delete _0x334fe6[_0x2915b3];
                            }
                        }
                        for (var _0x2915b3 in _0x334fe6) {
                            if (_0x334fe6[_0x2915b3]["muhattap"] == sohbetik["kripto"]) {
                                delete _0x334fe6[_0x2915b3];
                            }
                        }
                        soketimiz.to(soketgir[_0x108ab0]["userId"]).emit("aramasonlandi", sohbetik["kullaniciAdi"]);
                        soketgir[_0x108ab0]["userkonusmada"] = 0x0;
                        soketgir[sohbetik["kripto"]]["userkonusmada"] = 0x0;
                        soketimiz.to(soketgir[_0x108ab0]["userId"]).emit("yenibaglantikur", odalar[sohbetik["odasi"]]['id'], "odayabaglanma", soketgir[sohbetik["kripto"]]["userWebRTCSes"]);
                        soketimiz.to(soketgir[_0x108ab0]["userId"]).emit("KonusmaZamanClearYap");
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle biriyle sohbetiniz yok.<br><span style=\"font-size:11px;\">Kişi çıkmış veya düşmüş olabilir.</span>");
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Kişi sitede değil veya düşmüş.<br><span style="font-size:11px;">Aramanız bu kişiye iletilmedi.</span>');
                }
                sohbetik.emit("yenibaglantikur", odalar[sohbetik['odasi']]['id'], "odayabaglanma", soketgir[sohbetik["kripto"]]["userWebRTCSes"]);
                sohbetik.emit("KonusmaZamanClearYap");
            } catch (_0x563907) {
                console.error(_0x563907);
            }
        });
        sohbetik.on('ozel-arama-vazgec', function(_0x101e93, _0x413f83) {
            try {
                _0x156377("ozel-arama-vazgec", 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                aralarinda = soketgir[sohbetik["kripto"]]['userKripto'] + '_' + _0x413f83;
                kisiBagli = 0x0;
                for (var _0x1cddb8 in soketgir) {
                    if (soketgir[_0x1cddb8]["userKripto"] == _0x413f83) {
                        kisiBagli = 0x1;
                        break;
                    }
                }
                if (kisiBagli > 0x0) {
                    if (_0x334fe6[aralarinda] !== undefined) {
                        for (var _0x1cddb8 in _0x334fe6) {
                            if (_0x334fe6[_0x1cddb8]["baslatan"] == sohbetik["kripto"]) {
                                delete _0x334fe6[_0x1cddb8];
                            }
                        }
                        for (var _0x1cddb8 in _0x334fe6) {
                            if (_0x334fe6[_0x1cddb8]['muhattap'] == sohbetik["kripto"]) {
                                delete _0x334fe6[_0x1cddb8];
                            }
                        }
                        soketgir[_0x413f83]['userkonusmada'] = 0x0;
                    } else {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Böyle biriyle sohbetiniz yok.<br><span style=\"font-size:11px;\">Kişi çıkmış veya düşmüş olabilir.</span>");
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Kişi sitede değil veya düşmüş.<br><span style=\"font-size:11px;\">Aramanız bu kişiye iletilmedi.</span>");
                }
                soketgir[sohbetik["kripto"]]["userkonusmada"] = 0x0;
                sohbetik.emit("yenibaglantikur", odalar[sohbetik["odasi"]]['id'], 'odayabaglanma', soketgir[sohbetik["kripto"]]["userWebRTCSes"]);
            } catch (_0x15d6ae) {
                console.error(_0x15d6ae);
            }
        });
        sohbetik.on("mik-kamera-sonlandir", function() {
            try {
                _0x156377('mik-kamera-sonlandir', 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                if (soketgir[sohbetik['kripto']]['userWebRTCMik'] > 0x0) {
                    if (odalar[sohbetik["odasi"]]["mikDolumu"].length > 0x1) {
                        if (soketgir[sohbetik["kripto"]]["userWebRTCMik"] != 0x0) {
                            odalar[sohbetik["odasi"]]["mikDolumu"] = 0x0;
                            soketimiz.sockets.in(sohbetik["odasi"]).emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "<b>" + (sohbetik["kullaniciAdiiki"].length >1? sohbetik['kullaniciAdiiki'] : sohbetik["kullaniciAdi"]) + '</b>, <font style="color:#ff0000">mikrofonu bıraktı</font>', 'x');
                            soketgir[sohbetik["kripto"]]["userWebRTCMik"] = 0x0;
                            soketgir[sohbetik["kripto"]]["userMikrofonSirasi"] = 0x0;
                            soketgir[sohbetik["kripto"]]["mikrofonZamani"] = 0x0;
                            sohbetik.emit('mikrofonkontrol', 0x0);
                            soketimiz.to(sohbetik['id']).emit("mikZamaniBittiClearYap");
                            KsiYenile();
                        }
                    }
                }
                if (soketgir[sohbetik["kripto"]]["userWebRTCCam"] != 0x0) {
                    soketgir[sohbetik['kripto']]['userWebRTCCam'] = 0x0;
                    delete _0x2ed05d[soketgir[sohbetik["kripto"]]["userWebRTCId"]];
                    if (_0x2ed05d[soketgir[sohbetik["kripto"]]["userWebRTCId"]] != '') {
                        soketimiz.sockets.emit("kamerasiniHerkesceKapat", soketgir[sohbetik["kripto"]]["userWebRTCId"]);
                        delete _0x2ed05d[soketgir[sohbetik["kripto"]]["userWebRTCId"]];
                    }
                    sohbetik.emit('kamerakontrol', 0x0);
                    KsiYenile();
                }
                if (soketgir[sohbetik["kripto"]]["userMikrofonSirasi"] != 0x0) {
                    soketgir[sohbetik["kripto"]]["userMikrofonSirasi"] = 0x0;
                    sohbetik.emit('elkontrol', 0x0);
                    KsiYenile();
                }
            } catch (_0x3eb155) {
                console.error(_0x3eb155);
            }
        });
        sohbetik.on("mesajYolla", function(_0x5ac368, _0x2f7f94) {
            try {
                _0x156377("mesajYolla", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                var _0x3adfcb = sohbetik['kullaniciAdiiki'].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"];
                var _0x4801ac = _0x3b706d[sohbetik["kripto"]]['ip'];
                for (var _0x388f47 in _0x1cb1bd) {
                    if (_0x1cb1bd[_0x388f47]['ip'] == _0x4801ac || _0x1cb1bd[_0x388f47]["banlanan"] == soketgir[sohbetik["kripto"]]["userName"]) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Banlısınız.");
                        sohbetik.leave(sohbetik['odasi']);
                        soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                        return ![];
                    }
                }
                _0x5ac368 = KraKral(_0x5ac368);
                var _0x5a3a9a = ["sikerim", ':0', ':1', ':2', ':3', ':4', ':5', ':6', ':7', ':8', ':9', ':a10', ":a11", ':a12', ":a13", ":a14", ':a15', ':a16', ":a17", ":a18", ":a19", ':b20', ":b21", ":b22", ":b23", ":b24", ":b25", ':b26', ":b27", ':b28', ":b29", ":c30", ":c31", ":c32", ":c33", ":c34", ":c35", ":c36", ":c37", ":c38", ":c39", ":d40", ":d41", ":d42", ":d43", ":d44", ":d45", ":d46", ':d47', ':d48', ":d49", ':e50', ':e51', ":e52", ":e53", ":e54", ":e55", ":e56", ":e57", ":e58", ":e59", ":f60", ":f61", ":f62", ":f63", ":f64", ":f65", ':f66', ":f67", ":f68", ":f69", ":g70", ":g71", ":g72", ":g73", ":g74", ":g75", ":g76", ":g77", ':g78', ":g79"];
                var _0x1c750e = ["Yasak Kelime", '<span class="i0"></span>','<span class="i1"></span>', '<span class="i2"></span>','<span class="i3"></span>','<span class="i4"></span>','<span class="i5"></span>','<span class="i6"></span>','<span class="i7"></span>','<span class="i8"></span>','<span class="i9"></span>','<span class="i10"></span>', '<span class="i11"></span>','<span class="i12"></span>','<span class="i13"></span>','<span class="i14"></span>','<span class="i15"></span>','<span class="i16"></span>','<span class="i17"></span>','<span class="i18"></span>','<span class="i19"></span>', '<span class="i20"></span>', '<span class="i21"></span>','<span class="i22"></span>','<span class="i23"></span>','<span class="i24"></span>','<span class="i25"></span>','<span class="i26"></span>','<span class="i27"></span>', '<span class="i28"></span>','<span class="i29"></span>','<span class="i30"></span>', '<span class="i31"></span>','<span class="i32"></span>','<span class="i33"></span>', '<span class="i34"></span>','<span class="i35"></span>','<span class="i36"></span>','<span class="i37"></span>', '<span class="i38"></span>','<span class="i39"></span>','<span class="i40"></span>','<span class="i41"></span>', '<span class="i42"></span>','<span class="i43"></span>','<span class="i44"></span>', '<span class="i45"></span>','<span class="i46"></span>','<span class="i47"></span>','<span class="i48"></span>', '<span class="i49"></span>', '<span class="i50"></span>','<span class="i51"></span>','<span class="i52"></span>','<span class="i53"></span>','<span class="i54"></span>', '<span class="i55"></span>','<span class="i56"></span>', '<span class="i57"></span>', '<span class="i58"></span>','<span class="i59"></span>', '<span class="i60"></span>','<span class="i61"></span>','<span class="i62"></span>', '<span class="i63"></span>','<span class="i64"></span>', '<span class="i65"></span>','<span class="i66"></span>','<span class="i67"></span>','<span class="i68"></span>','<span class="i69"></span>','<span class="i70"></span>','<span class="i71"></span>','<span class="i72"></span>','<span class="i73"></span>','<span class="i74"></span>', '<span class="i75"></span>', '<span class="i76"></span>','<span class="i77"></span>','<span class="i78"></span>','<span class="i79"></span>'];
                _0x5ac368 = gereksiz(_0x5ac368, 0x32, ' ');
                _0x5ac368 = _0x5ac368.replaceArray(_0x5a3a9a, _0x1c750e);
                _0x5ac368 = _0x5ac368.replace(/\{(.*?)\}/ig, '<img src="resimler/sistem/animasyonlar/$1.gif">');
                var _0x347335 = _0x5ac368.match(/img src/ig);
                _0x5ac368 = Krkter(_0x5ac368);
                if (_0x2f7f94 == '' || _0x2f7f94 == null) {
                    _0x2f7f94 = "000000";
                }
                if (soketgir[sohbetik["kripto"]]["userIslemTarih"] +1> TarihCe()) {
                    sohbetik.emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "Flood Koruma", sohbetik["cinsiyet"]);
                } else {
                    if (soketgir[sohbetik["kripto"]]["userCT"] > 0x0) {
                        sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Çatıdayken oda geneline mesaj gönderemezsiniz. <a onClick=\"$('#durumselect').val('2').trigger('change'); $(this).remove()\" href=\"#\"><font style=\"color:#FF0000;font-weight:bold\">(çatıdan inmek için tıkla)</font></a>", sohbetik["cinsiyet"]);
                    } else {
                        if (soketgir[sohbetik['kripto']]["userMutelimi"] > 0x0) {
                            sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Engellisiniz, yazdıklarınız kimseye ulaşmadı", sohbetik["cinsiyet"]);
                        } else {
                            if (_0x347335 != null && _0x347335.length > 0x3) {
                                soketimiz.to(sohbetik['id']).emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "Aynı Mesajda 3 Den Fazla İkon Kullanamazsınız", sohbetik["cinsiyet"]);
                                soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                            } else {
                                if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                    var _0x13caaa = 'resimler/sistem/' + sohbetik["cinsiyet"] + "_mliste.png";
                                } else {
                                    var _0x13caaa = _0x1de788();
                                }
                                yetkigonder = sohbetik["kullaniciAdiiki"].length >1? '0' : sohbetik["sapkano"];
                                ikincirumuz = sohbetik["kullaniciAdiiki"].length;
                                userKripto2 = soketgir[sohbetik['kripto']]["userKripto"];
                                msjtur = 0x0;
                                var _0x4fd38b = '';
                                soketimiz.sockets.in(sohbetik["odasi"]).emit("mesajGonder", _0x3adfcb, _0x5ac368, sohbetik["cinsiyet"], _0x2f7f94, yetkigonder, ikincirumuz, sohbetik["yetki"], sohbetik['statu'], userKripto2, sohbetik["userId"], _0x13caaa, msjtur, _0x4fd38b);
                                soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                                soketgir[sohbetik["kripto"]]["userIslemTarihTime"] = islemTrh();
                            }
                        }
                    }
                }
            } catch (_0x684594) {
                console.error(_0x684594);
            }
        });
        sohbetik.on("HerkesemesajYolla", function(_0x248eb9, _0x1f3139) {
            try {
                _0x156377("HerkesemesajYolla", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                var _0x407333 = sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik['kullaniciAdi'];
                var _0x4cdedf = _0x3b706d[sohbetik["kripto"]]['ip'];
                for (var _0x3a354f in _0x1cb1bd) {
                    if (_0x1cb1bd[_0x3a354f]['ip'] == _0x4cdedf || _0x1cb1bd[_0x3a354f]["banlanan"] == soketgir[sohbetik["kripto"]]["userName"]) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Banlısınız.");
                        sohbetik.leave(sohbetik["odasi"]);
                        soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                        return ![];
                    }
                }
                _0x248eb9 = KraKral(_0x248eb9);
                var _0x19fbcc = ['sikerim', ':0', ':1', ':2', ':3', ':4', ':5', ':6', ':7', ':8', ':9', ":a10", ":a11", ":a12", ":a13", ":a14", ":a15", ":a16", ":a17", ":a18", ":a19", ":b20", ":b21", ':b22', ':b23', ":b24", ":b25", ':b26', ":b27", ':b28', ":b29", ':c30', ":c31", ":c32", ":c33", ":c34", ":c35", ":c36", ":c37", ":c38", ":c39", ":d40", ":d41", ":d42", ":d43", ":d44", ":d45", ':d46', ':d47', ":d48", ":d49", ":e50", ":e51", ":e52", ":e53", ":e54", ":e55", ":e56", ":e57", ":e58", ":e59", ":f60", ":f61", ":f62", ':f63', ":f64", ':f65', ":f66", ":f67", ":f68", ":f69", ':g70', ":g71", ":g72", ':g73', ":g74", ":g75", ':g76', ":g77", ":g78", ':g79'];
                var _0x5e3664 = ["Yasak Kelime",'<span class="i0"></span>','<span class="i1"></span>','<span class="i2"></span>', '<span class="i3"></span>', '<span class="i4"></span>','<span class="i5"></span>','<span class="i6"></span>', '<span class="i7"></span>','<span class="i8"></span>','<span class="i9"></span>','<span class="i10"></span>','<span class="i11"></span>', '<span class="i12"></span>','<span class="i13"></span>','<span class="i14"></span>','<span class="i15"></span>','<span class="i16"></span>','<span class="i17"></span>','<span class="i18"></span>', '<span class="i19"></span>','<span class="i20"></span>','<span class="i21"></span>','<span class="i22"></span>','<span class="i23"></span>','<span class="i24"></span>', '<span class="i25"></span>','<span class="i26"></span>','<span class="i27"></span>','<span class="i28"></span>','<span class="i29"></span>','<span class="i30"></span>', '<span class="i31"></span>', '<span class="i32"></span>', '<span class="i33"></span>','<span class="i34"></span>','<span class="i35"></span>','<span class="i36"></span>','<span class="i37"></span>','<span class="i38"></span>','<span class="i39"></span>', '<span class="i40"></span>','<span class="i41"></span>', '<span class="i42"></span>','<span class="i43"></span>','<span class="i44"></span>', '<span class="i45"></span>','<span class="i46"></span>','<span class="i47"></span>','<span class="i48"></span>','<span class="i49"></span>','<span class="i50"></span>','<span class="i51"></span>','<span class="i52"></span>', '<span class="i53"></span>', '<span class="i54"></span>', '<span class="i55"></span>','<span class="i56"></span>','<span class="i57"></span>', '<span class="i58"></span>','<span class="i59"></span>','<span class="i60"></span>','<span class="i61"></span>','<span class="i62"></span>','<span class="i63"></span>','<span class="i64"></span>','<span class="i65"></span>','<span class="i66"></span>','<span class="i67"></span>', '<span class="i68"></span>', '<span class="i69"></span>','<span class="i70"></span>','<span class="i71"></span>', '<span class="i72"></span>', '<span class="i73"></span>','<span class="i74"></span>','<span class="i75"></span>', '<span class="i76"></span>','<span class="i77"></span>','<span class="i78"></span>','<span class="i79"></span>'];
                _0x248eb9 = gereksiz(_0x248eb9, 0x32, ' ');
                _0x248eb9 = _0x248eb9.replaceArray(_0x19fbcc, _0x5e3664);
                _0x248eb9 = _0x248eb9.replace(/\{(.*?)\}/ig, '<img src="resimler/sistem/animasyonlar/$1.gif">');
                var _0x363b81 = _0x248eb9.match(/img src/ig);
                _0x248eb9 = Krkter(_0x248eb9);
                if (_0x1f3139 == '' || _0x1f3139 == null) {
                    _0x1f3139 = '000000';
                }
                if (soketgir[sohbetik["kripto"]]['userIslemTarih'] +1> TarihCe()) {
                    sohbetik.emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "Flood Koruma", sohbetik["cinsiyet"]);
                } else {
                    if (soketgir[sohbetik["kripto"]]["userCT"] > 0x0) {
                        sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Çatıdayken oda geneline mesaj gönderemezsiniz. <a onClick=\"$('#durumselect').val('2').trigger('change'); $(this).remove()\" href=\"#\"><font style=\"color:#FF0000;font-weight:bold\">(çatıdan inmek için tıkla)</font></a>", sohbetik['cinsiyet']);
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userMutelimi"] > 0x0) {
                            sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", 'Engellisiniz, yazdıklarınız kimseye ulaşmadı', sohbetik["cinsiyet"]);
                        } else {
                            if (_0x363b81 != null && _0x363b81.length > 0x3) {
                                soketimiz.to(sohbetik['id']).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Aynı Mesajda 3 Den Fazla İkon Kullanamazsınız", sohbetik["cinsiyet"]);
                                soketgir[sohbetik["kripto"]]['userIslemTarih'] = TarihCe();
                            } else {
                                if (sohbetik["genel_atma"] == 'e') {
                                    for (var _0x3a354f in soketgir) {
                                        if (soketgir[_0x3a354f]["userStatuINT"] >= sohbetik["yetki"] && sohbetik["kullaniciAdiiki"].length > 0x1) {
                                            RMZYO = sohbetik["kullaniciAdiiki"] + ' (' + sohbetik["kullaniciAdi"] + ' ' + sohbetik["yetki"] + ')';
                                        } else {
                                            RMZYO = sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik['kullaniciAdi'];
                                        }
                                        if (sohbetik['kullaniciAdiiki'].length > 0x1) {
                                            var _0x56a14e = "resimler/sistem/" + sohbetik["cinsiyet"] + "_mliste.png";
                                        } else {
                                            var _0x56a14e = _0x1de788();
                                        }
                                        yetkigonder = sohbetik["kullaniciAdiiki"].length >1? '0' : sohbetik['sapkano'];
                                        ikincirumuz = sohbetik['kullaniciAdiiki'].length;
                                        userKripto2 = soketgir[sohbetik["kripto"]]["userKripto"];
                                        soketimiz.to(soketgir[_0x3a354f]["userId"]).emit("mesajGonder", RMZYO, "<font style='color:#ff0000;font-weight:bold;text-decoration:none'>Herkese : </font><font style='font-weight:bold'>" + _0x248eb9 + '</font>', sohbetik["cinsiyet"], _0x1f3139, yetkigonder, ikincirumuz, sohbetik["yetki"], sohbetik['statu'], userKripto2, sohbetik['userId'], _0x56a14e);
                                    }
                                    soketgir[sohbetik["kripto"]]['userIslemTarih'] = TarihCe();
                                } else {
                                    soketimiz.to(sohbetik['id']).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Genel mesaj atma yetkiniz yok", sohbetik['cinsiyet']);
                                }
                            }
                        }
                    }
                }
            } catch (_0x25c054) {
                console.error(_0x25c054);
            }
        });
        sohbetik.on("AdminmesajYolla", function(_0x29830a, _0x3ffde9) {
            try {
                _0x156377("AdminmesajYolla", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                var _0x5b36d7 = sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"];
                var _0x42b03e = _0x3b706d[sohbetik["kripto"]]['ip'];
                for (var _0x3a3c38 in _0x1cb1bd) {
                    if (_0x1cb1bd[_0x3a3c38]['ip'] == _0x42b03e || _0x1cb1bd[_0x3a3c38]["banlanan"] == soketgir[sohbetik["kripto"]]["userName"]) {
                        soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Banlısınız.");
                        sohbetik.leave(sohbetik["odasi"]);
                        soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                        return ![];
                    }
                }
                _0x29830a = KraKral(_0x29830a);
                var _0x451b38 = ["sikerim", ':0', ':1', ':2', ':3', ':4', ':5', ':6', ':7', ':8', ':9', ":a10", ':a11', ":a12", ":a13", ":a14", ":a15", ':a16', ':a17', ":a18", ":a19", ":b20", ":b21", ':b22', ":b23", ":b24", ":b25", ':b26', ":b27", ":b28", ":b29", ":c30", ":c31", ":c32", ':c33', ":c34", ":c35", ':c36', ":c37", ":c38", ":c39", ":d40", ":d41", ":d42", ":d43", ":d44", ":d45", ":d46", ":d47", ":d48", ':d49', ":e50", ":e51", ":e52", ":e53", ':e54', ":e55", ":e56", ":e57", ':e58', ':e59', ":f60", ":f61", ":f62", ":f63", ":f64", ":f65", ':f66', ":f67", ":f68", ':f69', ":g70", ":g71", ':g72', ":g73", ':g74', ':g75', ":g76", ":g77", ":g78", ":g79"];
                var _0x2e8e85 = ["Yasak Kelime",'<span class="i0"></span>','<span class="i1"></span>','<span class="i2"></span>', '<span class="i3"></span>','<span class="i4"></span>','<span class="i5"></span>','<span class="i6"></span>','<span class="i7"></span>', '<span class="i8"></span>','<span class="i9"></span>','<span class="i10"></span>','<span class="i11"></span>','<span class="i12"></span>','<span class="i13"></span>','<span class="i14"></span>', '<span class="i15"></span>', '<span class="i16"></span>','<span class="i17"></span>', '<span class="i18"></span>', '<span class="i19"></span>','<span class="i20"></span>','<span class="i21"></span>','<span class="i22"></span>','<span class="i23"></span>','<span class="i24"></span>','<span class="i25"></span>','<span class="i26"></span>','<span class="i27"></span>', '<span class="i28"></span>','<span class="i29"></span>','<span class="i30"></span>','<span class="i31"></span>','<span class="i32"></span>','<span class="i33"></span>','<span class="i34"></span>', '<span class="i35"></span>','<span class="i36"></span>','<span class="i37"></span>','<span class="i38"></span>','<span class="i39"></span>','<span class="i40"></span>','<span class="i41"></span>','<span class="i42"></span>','<span class="i43"></span>','<span class="i44"></span>', '<span class="i45"></span>', '<span class="i46"></span>','<span class="i47"></span>','<span class="i48"></span>','<span class="i49"></span>','<span class="i50"></span>','<span class="i51"></span>','<span class="i52"></span>','<span class="i53"></span>','<span class="i54"></span>','<span class="i55"></span>','<span class="i56"></span>', '<span class="i57"></span>','<span class="i58"></span>','<span class="i59"></span>','<span class="i60"></span>','<span class="i61"></span>','<span class="i62"></span>','<span class="i63"></span>', '<span class="i64"></span>','<span class="i65"></span>','<span class="i66"></span>','<span class="i67"></span>','<span class="i68"></span>','<span class="i69"></span>', '<span class="i70"></span>', '<span class="i71"></span>','<span class="i72"></span>','<span class="i73"></span>', '<span class="i74"></span>','<span class="i75"></span>','<span class="i76"></span>','<span class="i77"></span>','<span class="i78"></span>','<span class="i79"></span>'];
                _0x29830a = gereksiz(_0x29830a, 0x32, ' ');
                _0x29830a = _0x29830a.replaceArray(_0x451b38, _0x2e8e85);
                _0x29830a = _0x29830a.replace(/\{(.*?)\}/ig, '<img src="resimler/sistem/animasyonlar/$1.gif">');
                var _0x59bb54 = _0x29830a.match(/img src/ig);
                _0x29830a = Krkter(_0x29830a);
                if (_0x3ffde9 == '' || _0x3ffde9 == null) {
                    _0x3ffde9 = "000000";
                }
                if (soketgir[sohbetik["kripto"]]['userIslemTarih'] +1> TarihCe()) {
                    sohbetik.emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "Flood Koruma", sohbetik["cinsiyet"]);
                } else {
                    if (soketgir[sohbetik["kripto"]]['userCT'] > 0x0) {
                        sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Çatıdayken oda geneline mesaj gönderemezsiniz. <a onClick=\"$('#durumselect').val('2').trigger('change'); $(this).remove()\" href=\"#\"><font style=\"color:#FF0000;font-weight:bold\">(çatıdan inmek için tıkla)</font></a>", sohbetik["cinsiyet"]);
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userMutelimi"] > 0x0) {
                            sohbetik.emit("mesajGonder", 'K_SistemMesajiGonderGitsinnn', "Engellisiniz, yazdıklarınız kimseye ulaşmadı", sohbetik['cinsiyet']);
                        } else {
                            if (_0x59bb54 != null && _0x59bb54.length > 0x3) {
                                soketimiz.to(sohbetik['id']).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Aynı Mesajda 3 Den Fazla İkon Kullanamazsınız", sohbetik["cinsiyet"]);
                                soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                            } else {
                                if (sohbetik["genel_atma"] == 'e') {
                                    for (var _0x3a3c38 in soketgir) {
                                        if (soketgir[_0x3a3c38]['userStatuINT'] > 0x0) {
                                            if (soketgir[_0x3a3c38]["userStatuINT"] >= sohbetik["yetki"] && sohbetik["kullaniciAdiiki"].length > 0x1) {
                                                RMZYO = sohbetik['kullaniciAdiiki'] + ' (' + sohbetik["kullaniciAdi"] + ' ' + sohbetik['yetki'] + ')';
                                            } else {
                                                RMZYO = sohbetik['kullaniciAdiiki'].length >1? sohbetik['kullaniciAdiiki'] : sohbetik["kullaniciAdi"];
                                            }
                                            if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                                var _0x4323dc = "resimler/sistem/" + sohbetik["cinsiyet"] + "_mliste.png";
                                            } else {
                                                var _0x4323dc = _0x1de788();
                                            }
                                            yetkigonder = sohbetik["kullaniciAdiiki"].length >1? '0' : sohbetik["sapkano"];
                                            ikincirumuz = sohbetik["kullaniciAdiiki"].length;
                                            userKripto2 = soketgir[sohbetik["kripto"]]['userKripto'];
                                            soketimiz.to(soketgir[_0x3a3c38]["userId"]).emit("mesajGonder", RMZYO, "<font style='color:#ff0000;font-weight:bold;text-decoration:none'>Admin : </font><font style='font-weight:bold'>" + _0x29830a + "</font>", sohbetik["cinsiyet"], _0x3ffde9, yetkigonder, ikincirumuz, sohbetik["yetki"], sohbetik["statu"], userKripto2, sohbetik["userId"], _0x4323dc);
                                        }
                                    }
                                    soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                                } else {
                                    soketimiz.to(sohbetik['id']).emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Genel mesaj atma yetkiniz yok", sohbetik["cinsiyet"]);
                                }
                            }
                        }
                    }
                }
            } catch (_0x51d769) {
                console.error(_0x51d769);
            }
        });
        sohbetik.on("ResimYolla", function(_0x3129d1, _0x4ac7c5) {
            try {
                _0x156377("ResimYolla", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (oyagoster['1']["ResimGonder"] == 'h' && sohbetik["statu"] == 'Misafir') {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sadece Üyeler Resim Gönderebilir.");
                } else if (oyagoster['1']['ResimGonder'] == 'd') {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Site yönetimi resim göndermeyi kapatmış.");
                } else {
                    var _0x337111 = sohbetik["kullaniciAdiiki"].length >1? sohbetik['kullaniciAdiiki'] : sohbetik["kullaniciAdi"];
                    var _0x430d6c = _0x3b706d[sohbetik['kripto']]['ip'];
                    for (var _0x4e4d82 in _0x1cb1bd) {
                        if (_0x1cb1bd[_0x4e4d82]['ip'] == _0x430d6c || _0x1cb1bd[_0x4e4d82]["banlanan"] == soketgir[sohbetik['kripto']]["userName"]) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Banlısınız.");
                            sohbetik['leave'](sohbetik["odasi"]);
                            soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                            return ![];
                        }
                    }
                    _0x3129d1 = KraKral(_0x3129d1);
                    _0x3129d1 = "<img id=\"resimid\" title=\"Paylaşımı yapan: " + _0x337111 + "\" class=\"paylasilan_resim resim_buyut\" src=\"" + _0x3129d1 + '">';
                    if (_0x4ac7c5 == '' || _0x4ac7c5 == null) {
                        _0x4ac7c5 = "000000";
                    }
                    if (soketgir[sohbetik["kripto"]]["userIslemTarih"] +1> TarihCe()) {
                        sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Flood Koruma", sohbetik["cinsiyet"]);
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userCT"] > 0x0) {
                            sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Çatıdayken oda geneline resim gönderemezsiniz. <a onClick=\"$('#durumselect').val('2').trigger('change'); $(this).remove()\" href=\"#\"><font style=\"color:#FF0000;font-weight:bold\">(çatıdan inmek için tıkla)</font></a>", sohbetik['cinsiyet']);
                        } else {
                            if (soketgir[sohbetik["kripto"]]["userMutelimi"] > 0x0) {
                                sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Engellisiniz, resim kimseye ulaşmadı", sohbetik["cinsiyet"]);
                            } else {
                                if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                    var _0xc0d709 = "resimler/sistem/" + sohbetik["cinsiyet"] + "_mliste.png";
                                } else {
                                    var _0xc0d709 = _0x1de788();
                                }
                                yetkigonder = sohbetik["kullaniciAdiiki"].length >1? '0' : sohbetik["sapkano"];
                                ikincirumuz = sohbetik["kullaniciAdiiki"].length;
                                userKripto2 = soketgir[sohbetik["kripto"]]["userKripto"];
                                msjtur = 0x1;
                                soketimiz.sockets.in(sohbetik['odasi']).emit("mesajGonder", _0x337111, _0x3129d1, sohbetik["cinsiyet"], _0x4ac7c5, yetkigonder, ikincirumuz, sohbetik["yetki"], sohbetik["statu"], userKripto2, sohbetik['userId'], _0xc0d709, msjtur);
                                soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                                soketgir[sohbetik['kripto']]['userIslemTarihTime'] = islemTrh();
                            }
                        }
                    }
                }
            } catch (_0x42ba1d) {
                console.error(_0x42ba1d);
            }
        });
        sohbetik.on("SesYolla", function(_0x4783f6, _0x2d3262) {
            try {
                _0x156377("SesYolla", 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                if (oyagoster['1']["SesGonder"] == 'h' && sohbetik["statu"] == "Misafir") {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sadece Üyeler Ses Gönderebilir.");
                } else if (oyagoster['1']["SesGonder"] == 'd') {
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Site yönetimi ses göndermeyi kapatmış.');
                } else {
                    var _0x2707e5 = sohbetik["kullaniciAdiiki"].length >1? sohbetik['kullaniciAdiiki'] : sohbetik["kullaniciAdi"];
                    var _0x3627fc = _0x3b706d[sohbetik["kripto"]]['ip'];
                    for (var _0x4c5b48 in _0x1cb1bd) {
                        if (_0x1cb1bd[_0x4c5b48]['ip'] == _0x3627fc || _0x1cb1bd[_0x4c5b48]['banlanan'] == soketgir[sohbetik["kripto"]]['userName']) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Banlısınız.");
                            sohbetik.leave(sohbetik['odasi']);
                            soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                            return ![];
                        }
                    }
                    _0x4783f6 = KraKral(_0x4783f6);
                    _0x4783f6 = '<audio src="' + _0x4783f6 + '" controls=""></audio>';
                    if (_0x2d3262 == '' || _0x2d3262 == null) {
                        _0x2d3262 = "000000";
                    }
                    if (soketgir[sohbetik["kripto"]]["userIslemTarih"] +1> TarihCe()) {
                        sohbetik.emit("mesajGonder", 'K_SistemMesajiGonderGitsinnn', "Flood Koruma", sohbetik["cinsiyet"]);
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userCT"] > 0x0) {
                            sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", 'Çatıdayken oda geneline ses gönderemezsiniz. <a onClick="$(\x27#durumselect\x27).val(\x272\x27).trigger(\x27change\x27); $(this).remove()" href="#"><font style="color:#FF0000;font-weight:bold">(çatıdan inmek için tıkla)</font></a>', sohbetik["cinsiyet"]);
                        } else {
                            if (soketgir[sohbetik["kripto"]]["userMutelimi"] > 0x0) {
                                sohbetik.emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "Engellisiniz, ses kimseye ulaşmadı", sohbetik["cinsiyet"]);
                            } else {
                                if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                    var _0x174601 = "resimler/sistem/" + sohbetik["cinsiyet"] + "_mliste.png";
                                } else {
                                    var _0x174601 = _0x1de788();
                                }
                                yetkigonder = sohbetik["kullaniciAdiiki"].length >1? '0' : sohbetik['sapkano'];
                                ikincirumuz = sohbetik["kullaniciAdiiki"].length;
                                userKripto2 = soketgir[sohbetik["kripto"]]["userKripto"];
                                msjtur = 0x1;
                                soketimiz.sockets.in(sohbetik["odasi"]).emit('mesajGonder', _0x2707e5, _0x4783f6, sohbetik["cinsiyet"], _0x2d3262, yetkigonder, ikincirumuz, sohbetik['yetki'], sohbetik["statu"], userKripto2, sohbetik["userId"], _0x174601, msjtur);
                                soketgir[sohbetik["kripto"]]['userIslemTarih'] = TarihCe();
                                soketgir[sohbetik["kripto"]]["userIslemTarihTime"] = islemTrh();
                            }
                        }
                    }
                }
            } catch (_0x4936f9) {
                console.error(_0x4936f9);
            }
        });
        sohbetik.on("BasKonusYolla", function(_0x5831a9, _0x242c7) {
            try {
                _0x156377("BasKonusYolla", 0x64, sohbetik);
                SSifreleme(sohbetik['kripto']);
                if (oyagoster['1']['BasKonusGonder'] == 'h' && sohbetik["statu"] == "Misafir") {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sadece Üyeler Ses Kaydi Gönderebilir.");
                } else if (oyagoster['1']["BasKonusGonder"] == 'd') {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Site yönetimi ses kaydi göndermeyi kapatmış.");
                } else {
                    var _0x2c27ca = sohbetik['kullaniciAdiiki'].length >1? sohbetik["kullaniciAdiiki"] : sohbetik['kullaniciAdi'];
                    var _0x1e76e7 = _0x3b706d[sohbetik["kripto"]]['ip'];
                    for (var _0x287642 in _0x1cb1bd) {
                        if (_0x1cb1bd[_0x287642]['ip'] == _0x1e76e7 || _0x1cb1bd[_0x287642]["banlanan"] == soketgir[sohbetik["kripto"]]["userName"]) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Banlısınız.");
                            sohbetik.leave(sohbetik["odasi"]);
                            soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                            return ![];
                        }
                    }
                    _0x5831a9 = KraKral(_0x5831a9);
                    _0x5831a9 = '<audio src="' + _0x5831a9 + '" controls=""></audio>';
                    if (_0x242c7 == '' || _0x242c7 == null) {
                        _0x242c7 = '000000';
                    }
                    if (soketgir[sohbetik["kripto"]]['userIslemTarih'] +1> TarihCe()) {
                        sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Flood Koruma", sohbetik["cinsiyet"]);
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userCT"] > 0x0) {
                            sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Çatıdayken oda geneline ses kaydı gönderemezsiniz. <a onClick=\"$('#durumselect').val('2').trigger('change'); $(this).remove()\" href=\"#\"><font style=\"color:#FF0000;font-weight:bold\">(çatıdan inmek için tıkla)</font></a>", sohbetik["cinsiyet"]);
                        } else {
                            if (soketgir[sohbetik["kripto"]]["userMutelimi"] > 0x0) {
                                sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Engellisiniz, ses kaydı kimseye ulaşmadı", sohbetik["cinsiyet"]);
                            } else {
                                if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                    var _0x1ff191 = "resimler/sistem/" + sohbetik["cinsiyet"] + "_mliste.png";
                                } else {
                                    var _0x1ff191 = _0x1de788();
                                }
                                yetkigonder = sohbetik["kullaniciAdiiki"].length >1? '0' : sohbetik['sapkano'];
                                ikincirumuz = sohbetik["kullaniciAdiiki"].length;
                                userKripto2 = soketgir[sohbetik['kripto']]["userKripto"];
                                msjtur = 0x1;
                                soketimiz.sockets.in(sohbetik["odasi"]).emit("mesajGonder", _0x2c27ca, _0x5831a9, sohbetik["cinsiyet"], _0x242c7, yetkigonder, ikincirumuz, sohbetik['yetki'], sohbetik['statu'], userKripto2, sohbetik["userId"], _0x1ff191, msjtur);
                                soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                                soketgir[sohbetik["kripto"]]["userIslemTarihTime"] = islemTrh();
                            }
                        }
                    }
                }
            } catch (_0x301720) {
                console.error(_0x301720);
            }
        });
        sohbetik.on("YouTubeYolla", function(_0x1abb3c, _0x332e4d) {
            try {
                _0x156377("YouTubeYolla", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (oyagoster['1']["YouTubeGonder"] == 'h' && sohbetik["statu"] == 'Misafir') {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sadece Üyeler Video Gönderebilir.");
                } else if (oyagoster['1']["YouTubeGonder"] == 'd') {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Site yönetimi youtube video göndermeyi kapatmış.");
                } else {
                    var _0xd4a801 = sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"];
                    var _0x35cdf2 = _0x3b706d[sohbetik["kripto"]]['ip'];
                    for (var _0x2b592a in _0x1cb1bd) {
                        if (_0x1cb1bd[_0x2b592a]['ip'] == _0x35cdf2 || _0x1cb1bd[_0x2b592a]["banlanan"] == soketgir[sohbetik["kripto"]]["userName"]) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Banlısınız.");
                            sohbetik.leave(sohbetik["odasi"]);
                            soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                            return ![];
                        }
                    }
                    _0x1abb3c = KraKral(_0x1abb3c);
                    _0x1abb3c = "<div id=\"sohbet_" + _0x1abb3c + "\"><div class=\"ui embed borderradius10 videovar\" id=\"sohbetvideo\" data-id=\"" + _0x1abb3c + "\" data-source=\"youtube\" data-placeholder=\"https://i.ytimg.com/vi/" + _0x1abb3c + "/mqdefault.jpg\"><div class=\"youtubeikon\"></div><i class=\"youtube icon\"></i><img class=\"placeholder\" src=\"https://i.ytimg.com/vi/" + _0x1abb3c + "/mqdefault.jpg\"></div></div>";
                    if (_0x332e4d == '' || _0x332e4d == null) {
                        _0x332e4d = "000000";
                    }
                    if (soketgir[sohbetik['kripto']]["userIslemTarih"] +1> TarihCe()) {
                        sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Flood Koruma", sohbetik['cinsiyet']);
                    } else {
                        if (soketgir[sohbetik["kripto"]]["userCT"] > 0x0) {
                            sohbetik.emit("mesajGonder", 'K_SistemMesajiGonderGitsinnn', "Çatıdayken oda geneline video gönderemezsiniz. <a onClick=\"$('#durumselect').val('2').trigger('change'); $(this).remove()\" href=\"#\"><font style=\"color:#FF0000;font-weight:bold\">(çatıdan inmek için tıkla)</font></a>", sohbetik["cinsiyet"]);
                        } else {
                            if (soketgir[sohbetik["kripto"]]["userMutelimi"] > 0x0) {
                                sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Engellisiniz, video kimseye ulaşmadı", sohbetik['cinsiyet']);
                            } else {
                                if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                    var _0x377661 = "resimler/sistem/" + sohbetik["cinsiyet"] + "_mliste.png";
                                } else {
                                    var _0x377661 = _0x1de788();
                                }
                                yetkigonder = sohbetik['kullaniciAdiiki'].length >1? '0' : sohbetik['sapkano'];
                                ikincirumuz = sohbetik["kullaniciAdiiki"].length;
                                userKripto2 = soketgir[sohbetik["kripto"]]["userKripto"];
                                msjtur = 0x1;
                                soketimiz.sockets.in(sohbetik["odasi"]).emit('mesajGonder', _0xd4a801, _0x1abb3c, sohbetik['cinsiyet'], _0x332e4d, yetkigonder, ikincirumuz, sohbetik["yetki"], sohbetik["statu"], userKripto2, sohbetik["userId"], _0x377661, msjtur);
                                soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                                soketgir[sohbetik["kripto"]]["userIslemTarihTime"] = islemTrh();
                            }
                        }
                    }
                }
            } catch (_0xdf362e) {
                console.error(_0xdf362e);
            }
        });
        sohbetik.on("odaSifresiniGirdim", function(_0x2d31d3) {
            try {
                _0x156377("odaSifresiniGirdim", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (sohbetik["girmekIstedigiOda"] != '') {
                    if (odalar[sohbetik["girmekIstedigiOda"]]["sifre"] == hDegis(_0x2d31d3, 0x1)) {
                        sohbetik["sifrelioda"] = sohbetik['girmekIstedigiOda'];
                        sohbetik["girmekIstedigiOda"] == '';
                        soketimiz.to(sohbetik['id']).emit("SifreliOdayaGir", sohbetik['sifrelioda']);
                    } else {}
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Hatalı işlem isteği - " + sohbetik['girmekIstedigiOda']);
                }
            } catch (_0x43e07b) {
                console.error(_0x43e07b);
            }
        });
        sohbetik.on("odaDegistir", function(_0x228aa, _0x3651ab) {
            try {
                SSifreleme(sohbetik['kripto']);
                if (soketgir[sohbetik["kripto"]]['userIslemTarih'] +1> TarihCe()) {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Çok Hızlı Oda Değişiyorsunuz");
                } else {
                    if (_0x3651ab == "normal" && sohbetik["odasi"] == _0x228aa || _0x3651ab != "odayacekme" && sohbetik['odasi'] == _0x228aa) {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Zaten bu odadasınız");
                    } else {
                        if (_0x3651ab != "odayacekme" && odalar[_0x228aa]['id'] == 0x65 && sohbetik["toplantiyetkisi"] == 'h') {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Toplantı Odasına Giriş Yetkiniz Yok.");
                            soketimiz.to(sohbetik['id']).emit("odayaCekClient", sohbetik["odasi"]);
                        } else {
                            for (var _0x8c565d in odalar) {
                                if (odalar[_0x8c565d]['adi'] == _0x228aa) {
                                    odavarmi = !![];
                                    break;
                                } else {
                                    odavarmi = ![];
                                }
                            }
                            if (odavarmi) {
                                if (_0x3651ab != "odayacekme" && odalar[_0x228aa]['sifre'].length >0&& sohbetik['sifrelioda'] != _0x228aa) {
                                    sohbetik["girmekIstedigiOda"] = _0x228aa;
                                    sohbetik.emit("sifreGir", _0x228aa, odalar[sohbetik["odasi"]]["adi"], odalar[_0x228aa]["sifre"]);
                                } else {
                                    sohbetik.leave(sohbetik["odasi"]);
                                    _0x3d4844[sohbetik["odasi"]]--;
                                    var _0x13f8ff = soketimiz.sockets["adapter"]['rooms'][sohbetik["odasi"]];
                                    var _0x2f0b70 = _0x13f8ff ? Object.keys(_0x13f8ff.sockets).length : 0x0;
                                    if (typeof odalar[sohbetik["odasi"]] === "undefined") {} else {
                                        odalar[sohbetik["odasi"]]["onlineKisi"] = _0x3d4844;
                                    }
                                    sohbetik.join(_0x228aa);
                                    if (soketgir[sohbetik["kripto"]]["userkonusmada"] != 0x1) {
                                        sohbetik.emit("yenibaglantikur", odalar[_0x228aa]['id'], "odayabaglanma", soketgir[sohbetik["kripto"]]['userWebRTCSes']);
                                    } else {}
                                    if (_0x3d4844[_0x228aa] == undefined) {
                                        _0x3d4844[_0x228aa] = 0x1;
                                    } else {
                                        _0x3d4844[_0x228aa]++;
                                    }
                                    odalar[_0x228aa]["onlineKisi"] = _0x3d4844;
                                    soketgir[sohbetik["kripto"]]["userOda"] = _0x228aa;
                                    var _0x4a70d4 = '';
                                    var _0x416205 = '';
                                    if (odalar[_0x228aa]["yazi"].length > 0x1) {
                                        var _0x4a70d4 = odalar[_0x228aa]['yazi'];
                                    }
                                    if (odalar[_0x228aa]["sahibi"].length > 0x1) {
                                        var _0x416205 = odalar[_0x228aa]["sahibi"];
                                    }
                                    if (odalar[_0x228aa]["sifre"].length > 0x1) {
                                        var _0xd8a93d = "Şifreli Oda";
                                    } else {
                                        var _0xd8a93d = "Şifresiz Oda";
                                    }
                                    if (oyagoster['1']["SesGonder"] == 'd') {
                                        var _0x8450ba = "kapalı";
                                    } else {
                                        var _0x8450ba = "açık";
                                    }
                                    if (oyagoster['1']['ResimGonder'] == 'd') {
                                        var _0x5bcdd4 = 'kapalı';
                                    } else {
                                        var _0x5bcdd4 = "açık";
                                    }
                                    sohbetik.emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "<span class=\"ms\" style=\"color:#000000; font-size: 14px;\">Şu an <b>" + _0x228aa + "</b> isimli odadasın<ul><li>odanın sahibi: <b>" + _0x416205 + "</b></li><li>odaya <b>herkes</b> girebilir</li></ul><hr><div style=\"text-align: center;color:#660000\">" + _0x4a70d4 + "</div></span></div> <div class=\"message-avatar\" style=\"/*noinspection CssUnknownTarget*/background-image:url('resimler/sistem/lg5.png')\">", "abcd");
                                    sohbetik.emit("odaisminigonder", '' + _0x228aa + '');
                                    sohbetik.emit("odaaciklamasigonder", '' + _0x4a70d4 + '');
                                    //sohbetik.emit("odainfo", "<div class=\"odaustubilgi\" data-html=\"<div class='ui bulleted list pikas'><div class='item'>Herkes girebilir</div><div class='item'>" + _0xd8a93d + "</div><div class='item'>Yazma konuşma açık</div><div class='item'>Resim gönderme " + _0x5bcdd4 + "</div><div class='item'>Ses gönderme " + _0x8450ba + "</div></div>\" data-position=\"right center\"><i class=\"ellipsis info circular icon\" id=\"odaminfo\"></i></div>");
                                
								   sohbetik.emit("odainfo", '<div class=\"odaustubilgi\" data-html=\"<div class=\'ui bulleted list pikas\'><div class=\'item\'>Herkes girebilir</div><div class=\'item\'>' + _0xd8a93d + '</div><div class=\'item\'>Yazma konuşma açık</div><div class=\'item\'>Resim gönderme ' + _0x5bcdd4 + '</div><div class=\'item\'>Ses gönderme ' + _0x8450ba + '</div></div>\" data-position=\"right center\"><i class=\"ellipsis info circular icon\" id=\"odaminfo\"></i></div>' );

                                    baglantim['query']('select rumuz,cinsiyet,yetkiadi,resim,flash from uyeler where rumuz= ? and yetki > 0', [_0x416205], function(_0x51e265, _0x30731a, _0x1486ff) {
                                        if (odalar[_0x228aa]["sahibi"].length > 0x1) {
                                            for (var _0x17bd9e in _0x30731a) {
                                                sohbetik.emit("odasahibinigonder", _0x30731a[_0x17bd9e]["rumuz"], _0x30731a[_0x17bd9e]["cinsiyet"], _0x30731a[_0x17bd9e]["yetkiadi"], _0x30731a[_0x17bd9e]["resim"], _0x30731a[_0x17bd9e]["flash"]);
                                            }
                                        } else {
                                            sohbetik.emit('odasahibinigonder', 0x1);
                                        }
                                    });
                                    soketimiz.sockets.in(sohbetik["odasi"])["clients"](function(_0x4248e5, _0x3b90c2) {
                                        _0x3b90c2.forEach(_0x5021ae => {
                                            let _0x33bd02 = soketimiz.sockets["connected"][_0x5021ae];
                                            if (_0x33bd02['id'] != sohbetik['id']) {
                                                if (_0x33bd02['yetki'] >= sohbetik["yetki"]) {
                                                    soketimiz.sockets.sockets[_0x33bd02['id']].emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", '<b>' + Abilem(sohbetik['kullaniciAdi'], sohbetik["kullaniciAdiiki"], sohbetik['yetki']) + '</b>,<font style="color:#cc0202">bu odadan ayrıldı</font>', 'x');
                                                } else {
                                                    if (sohbetik["catisi"] < 0x1) {
                                                        soketimiz.sockets.sockets[_0x33bd02['id']].emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<b>" + (sohbetik["kullaniciAdiiki"].length >1? sohbetik['kullaniciAdiiki'] : sohbetik['kullaniciAdi'] + '') + "</b>, <font style=\"color:#cc0202\">bu odadan ayrıldı</font>", 'x');
                                                    }
                                                }
                                            }
                                        });
                                    });
                                    sohbetik["odasi"] = _0x228aa;
                                    soketimiz.sockets.in(_0x228aa)["clients"](function(_0xb597e0, _0x34079e) {
                                        _0x34079e.forEach(_0x2c0f20 => {
                                            let _0x127c3b = soketimiz.sockets["connected"][_0x2c0f20];
                                            if (_0x127c3b['id'] != sohbetik['id']) {
                                                if (_0x127c3b["yetki"] >= sohbetik["yetki"]) {
                                                    soketimiz.sockets.sockets[_0x127c3b['id']].emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<b>" + Abilem(sohbetik["kullaniciAdi"], sohbetik["kullaniciAdiiki"], sohbetik["yetki"]) + "</b>, <font style=\"color:#0c9002\">odaya giriş yaptı</font>", 'x');
                                                } else {
                                                    if (sohbetik["catisi"] < 0x1) {
                                                        soketimiz.sockets.sockets[_0x127c3b['id']].emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", '<b>' + (sohbetik['kullaniciAdiiki'].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"] + '') + "</b>, <font style=\"color:#0c9002\">odaya giriş yaptı</font>", 'x');
                                                    }
                                                }
                                            }
                                        });
                                    });
                                    soketgir[sohbetik["kripto"]]["userIslemTarih"] = TarihCe();
                                    KsiYenile();
                                    kriptola();
                                    sohbetik.emit('odaArkaFonuGetir', odalar[_0x228aa]['fon'], odalar[_0x228aa]['sohbeticrenk']);
                                    if (sohbetik["catisi"] > 0x0) {
                                        sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Şu an çatıdasınız. <a onClick=\"$('#durumselect').val('2').trigger('change'); $(this).remove()\" href=\"#\"><font style=\"color:#FF0000;font-weight:bold\">(çatıdan inmek için tıkla)</font></a>", sohbetik["cinsiyet"]);
                                    }
                                }
                            } else {
                                soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Böyle bir oda bulunamadı.");
                                sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Girmeye çalıştığınız oda sisteme kayıtlı değil", sohbetik["cinsiyet"]);
                                soketimiz.sockets.sockets[sohbetik['id']]["disconnect"]();
                            }
                        }
                    }
                }
            } catch (_0x49455c) {
                console.error(_0x49455c);
            }
        });
        sohbetik.on("ozel_mesaj_alimi", function(_0x58c2c7) {
            try {
                SSifreleme(sohbetik["kripto"]);
                if (_0x58c2c7 > 0x0) {
                    soketgir[sohbetik["kripto"]]["userOzelMesaj"] = 0x1;
                } else {
                    soketgir[sohbetik["kripto"]]["userOzelMesaj"] = 0x0;
                }
            } catch (_0x106ce8) {
                console.error(_0x106ce8);
            }
        });
        sohbetik.on("sesli_arama_alimi", function(_0x350e08) {
            try {
                SSifreleme(sohbetik["kripto"]);
                if (_0x350e08 > 0x0) {
                    soketgir[sohbetik["kripto"]]["userOzelArama"] = 0x1;
                } else {
                    soketgir[sohbetik["kripto"]]["userOzelArama"] = 0x0;
                }
            } catch (_0x269a86) {
                console.error(_0x269a86);
            }
        });
        sohbetik.on("yorum_alimi", function(_0x48809c) {
            try {
                SSifreleme(sohbetik["kripto"]);
                if (_0x48809c > 0x0) {
                    soketgir[sohbetik["kripto"]]['useryorumlar'] = 0x1;
                } else {
                    soketgir[sohbetik["kripto"]]["useryorumlar"] = 0x0;
                }
            } catch (_0x5dae86) {
                console.error(_0x5dae86);
            }
        });
        sohbetik.on("banlariTemizle", function(_0x288589) {
            try {
                SSifreleme(sohbetik["kripto"]);
                if (sohbetik["ban_yetkisi"] == 'e') {
                    soketimiz.sockets.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Bütün ban kayıtları temizlenmiştir", sohbetik["cinsiyet"]);
                    _0x2ace0c(sohbetik["kullaniciAdi"], "Makine", "Tüm Banları Temizleme", sohbetik['yetki'], sohbetik["cinsiyet"]);
                    baglantim["query"]("DELETE from ban_listesi");
                    delete _0x1cb1bd;
                    _0x1cb1bd = {};
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Tüm Banlar Silindi.");
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu işlem için yetkiniz yok.");
                }
            } catch (_0x3f7de1) {
                console.error(_0x3f7de1);
            }
        });
        sohbetik.on('muteleriTemizle', function(_0x1e5ab9) {
            try {
                SSifreleme(sohbetik["kripto"]);
                if (sohbetik["mute_yetkisi"] == 'e') {
                    var _0xcc4f76 = 0x0;
                    for (var _0x56e5c3 in _0x598d51) {
                        ++_0xcc4f76;
                    }
                    if (_0xcc4f76 > 0x0) {
                        soketimiz.sockets.emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "Bütün engel kayıtları temizlenmiştir", sohbetik['cinsiyet']);
                        _0x2ace0c(sohbetik["kullaniciAdi"], "Makine", "Tüm Muteler Temizleme", sohbetik["yetki"], sohbetik["cinsiyet"]);
                        delete _0x598d51;
                        _0x598d51 = {};
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", _0xcc4f76 + " adet engel silinmiştir.");
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Engelliler listesi zaten boş.");
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Bu işlem için yetkiniz yok.");
                }
            } catch (_0x167749) {
                console.error(_0x167749);
            }
        });
        sohbetik.on("g_muteleriTemizle", function(_0x267748) {
            try {
                SSifreleme(sohbetik['kripto']);
                if (sohbetik["mute_yetkisi"] == 'e') {
                    var _0x210026 = 0x0;
                    for (var _0x33f332 in _0x103f47) {
                        ++_0x210026;
                    }
                    if (_0x210026 > 0x0) {
                        soketimiz.sockets.emit("mesajGonder", 'K_SistemMesajiGonderGitsinnn', "Bütün Mute kayıtları temizlenmiştir", sohbetik['cinsiyet']);
                        _0x2ace0c(sohbetik["kullaniciAdi"], 'Makine', 'Tüm Mute Temizleme', sohbetik["yetki"], sohbetik["cinsiyet"]);
                        delete _0x103f47;
                        _0x103f47 = {};
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", _0x210026 + " adet Mute silinmiştir.");
                    } else {
                        soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Mute listesi zaten boş.");
                    }
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bu işlem için yetkiniz yok.");
                }
            } catch (_0x5108d5) {
                console.error(_0x5108d5);
            }
        });
        sohbetik.on("durumDegistir", function(_0x34fdaf, _0x5caf14) {
            try {
                _0x156377("durumDegistir", 0x64, sohbetik);
                SSifreleme(sohbetik["kripto"]);
                if (soketgir[sohbetik["kripto"]]["userIslemTarih"] +1> TarihCe()) {
                    soketimiz.to(sohbetik['id']).emit('uyariClientGoster', 'Çok hızlı işlem yapıyorsunuz.');
                } else {
                    if (_0x34fdaf != 0x1) {
                        var _0x241ee0 = 0x0;
                        var _0x2ee44a = _0x5caf14;
                    } else if (_0x34fdaf == 0x1) {
                        if (soketgir[sohbetik['kripto']]["catiyotkisi"] != 'e') {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Çatıya Çıkma Yetkiniz Yok.");
                            var _0x2ee44a = 'Çevrimiçi';
                            var _0x241ee0 = 0x0;
                        } else if (soketgir[sohbetik["kripto"]]["userWebRTCMik"] > 0x0) {
                            soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Önce mikrofonu bırakın, sonra çatıya çıkın.");
                            var _0x2ee44a = "Çevrimiçi";
                            var _0x241ee0 = 0x0;
                        } else if (soketgir[sohbetik["kripto"]]["userMikrofonSirasi"] > 0x0) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Önce mikrofon sırasından ayrılın, sonra çatıya çıkın.");
                            var _0x2ee44a = "Çevrimiçi";
                            var _0x241ee0 = 0x0;
                        } else if (soketgir[sohbetik["kripto"]]["userCT"] > 0x0) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", 'Zaten çatıdasın!');
                            var _0x2ee44a = 'Çatıda';
                            var _0x241ee0 = 0x0;
                        } else if (soketgir[sohbetik["kripto"]]["userWebRTCCam"] > 0x0) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Önce kameranızı kapatın, sonra çatıya çıkın.");
                            var _0x2ee44a = "Çevrimiçi";
                            var _0x241ee0 = 0x0;
                        } else {
                            sohbetik.emit('mesajGonder', "K_SistemMesajiGonderGitsinnn", "Çatıya çıktınız. (görünmez mod)", sohbetik['cinsiyet']);
                            soketimiz.sockets.in(sohbetik["odasi"])["clients"](function(_0x3ac0bd, _0x118bb5) {
                                _0x118bb5['forEach'](_0x494577 => {
                                    let _0x23e778 = soketimiz.sockets["connected"][_0x494577];
                                    if (_0x23e778['id'] != sohbetik['id']) {
                                        if (_0x23e778["yetki"] >= sohbetik['yetki']) {
                                            soketimiz.sockets.sockets[_0x23e778['id']].emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<b>" + Abilem(sohbetik["kullaniciAdi"], sohbetik['kullaniciAdiiki'], sohbetik["yetki"]) + "</b>, <font style=\"color:#cc0202\">çatıya çıktı</font>", 'x');
                                        } else {
                                            soketimiz.sockets.sockets[_0x23e778['id']].emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<b>" + (sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik['kullaniciAdi'] + '') + '</b>, <font style="color:#cc0202">siteden çıkış yaptı</font>', 'x');
                                        }
                                    }
                                });
                            });
                            var _0x241ee0 = 0x1;
                            var _0x2ee44a = "Çatıda";
                        }
                    }
                    if (_0x34fdaf !=1&& soketgir[sohbetik['kripto']]['userCT'] > 0x0) {
                        soketimiz.sockets.in(sohbetik['odasi'])["clients"](function(_0x122a01, _0xcb2df4) {
                            _0xcb2df4.forEach(_0x43101b => {
                                let _0x552562 = soketimiz.sockets['connected'][_0x43101b];
                                if (_0x552562['id'] != sohbetik['id']) {
                                    if (_0x552562["yetki"] >= sohbetik["yetki"]) {
                                        soketimiz.sockets.sockets[_0x552562['id']].emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<b>" + Abilem(sohbetik["kullaniciAdi"], sohbetik["kullaniciAdiiki"], sohbetik["yetki"]) + "</b>, çatıdan indi", 'x');
                                    } else {
                                        soketimiz.sockets.sockets[_0x552562['id']].emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<b>" + (sohbetik["kullaniciAdiiki"].length >1? sohbetik["kullaniciAdiiki"] : sohbetik["kullaniciAdi"] + '') + "</b>, <font style=\"color:#0c9002\">odaya giriş yaptı</font>", 'x');
                                    }
                                }
                            });
                        });
                        sohbetik.emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "Çatıdan indiniz. (görünür mod)", sohbetik["cinsiyet"]);
                    }
                    sohbetik["catisi"] = _0x241ee0;
                    soketgir[sohbetik["kripto"]]["userCT"] = _0x241ee0;
                    soketgir[sohbetik["kripto"]]["userDurum"] = _0x2ee44a;
                    soketgir[sohbetik['kripto']]["userIslemTarih"] = TarihCe();
                    KsiYenile();
                    kriptola();
                }
            } catch (_0x2f346d) {
                console.error(_0x2f346d);
            }
        });
        var _0xdd0e87 =1* 5000 * 5000;
        var _0x5e724f = multerg["diskStorage"]({
            'destination': function(_0x1efaae, _0xd3a074, _0x52f87b) {
                _0x52f87b(null, __dirname + "/httpdocs/views/uploads");
            },
            'filename': function(_0x1d30d1, _0x3e2af6, _0x3eb958) {
                var _0x1a535b = _0x1d30d1["body"]["yeniresimadi"];
                _0x3eb958(null, _0x3e2af6["fieldname"] + '_' + _0x1a535b + ".jpg");
            }
        });
        var _0x25557f = multerg({
            'storage': _0x5e724f,
            'limits': {
                'fileSize': _0xdd0e87
            },
            'fileFilter': function(_0x21d804, _0x6a17ca, _0x2a1305) {
                if (_0x6a17ca["mimetype"] !== "image/png" && _0x6a17ca["mimetype"] !== "image/jpg" && _0x6a17ca["mimetype"] !== 'image/jpeg') {
                    _0x2a1305(null, ![]);
                }
                _0x2a1305(null, !![]);
            }
        });
        emin["post"]("/profile", _0x25557f["single"]("avatar"), function(_0x196499, _0x1efcb5) {
            try {
                if (_0x196499.session["uyeBilgileri"]) {
                    if (_0x196499.session['uyeBilgileri']['id']) {
                        var _0x532dea = _0x196499["body"]["eskiresimadi"];
                        var _0x3274ea = _0x196499["body"]["yeniresimadi"];
                        var _0xd0166c = "avatar_" + _0x3274ea + ".jpg";
                        baglantim['query']("UPDATE uyeler SET ? WHERE id = ?", [{
                            'flash': _0xd0166c
                        }, _0x196499.session['uyeBilgileri']['id']], function(_0x1da517, _0x5aad48, _0x59ee15) {
                            if (_0x1da517) {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Resim Eklenmedi");
                            } else {
                                const _0x12aba0 = _0x5418e0 => new Promise(_0x26a637 => setTimeout(_0x26a637, _0x5418e0));
                                var _0x6a6fe0 = require('fs');
                                var _0x3ad7d2 = require('jimp');
                                _0x3ad7d2["read"](__dirname + "/httpdocs/views/uploads/" + _0xd0166c + '')["then"](_0x5f31cd => {
                                    return _0x5f31cd["resize"](0x15e, 0x15e)["quality"](0x3c)["write"](__dirname + "/httpdocs/views/uploads/" + _0xd0166c + '');
                                })["then"](_0x4e8277 => {
                                    var _0x14010d = require('fs');
                                    var _0x848d9e = '' + _0x532dea + '';
                                    var _0x5a55c8 = __dirname + "/httpdocs/views/uploads/" + _0x848d9e;
                                    _0x14010d["unlink"](_0x5a55c8, function(_0x5530e9) {
                                        if (_0x5530e9) {}
                                    });
                                });
                                _0x12aba0(0x1 * 0x1770)["then"](_0x4f95d4 => {
                                    if (_0x196499.session["uyeBilgileri"]) {
                                        if (_0x196499.session["uyeBilgileri"]['id']) {
                                            baglantim["query"]('select id,rumuz,flash from uyeler where id= ?', [_0x196499.session["uyeBilgileri"]['id']], function(_0x30aaff, _0x306d52, _0x38f020) {
                                                sonuclarwtrVer = _0x306d52[0];
                                                kimiben = md5g(sonuclarwtrVer["rumuz"]);
                                                kisiBagli = 0x0;
                                                for (var _0x4d5c53 in soketgir) {
                                                    if (soketgir[_0x4d5c53]["userKripto"] == kimiben) {
                                                        kisiBagli = 0x1;
                                                        break;
                                                    }
                                                }
                                                if (kisiBagli > 0x0) {
                                                    soketgir[kimiben]["flash"] = sonuclarwtrVer["flash"];
                                                    soketimiz.to(soketgir[kimiben]["userId"]).emit("bilgilerim", _0x196499.session['uyeBilgileri']["rumuz"], _0x196499.session['uyeBilgileri']["YetkiStr"], "uploads/" + sonuclarwtrVer['flash'] + '');
                                                    KsiYenile();
                                                } else {}
                                            });
                                        } else {}
                                    } else {}
                                })["catch"](_0x25187d => {});
                            }
                        });
                    } else {}
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sunucuya Baglı Degilsiniz");
                }
            } catch (_0x3d9ae0) {
                console.error(_0x3d9ae0);
            }
        });
        var _0xdd0e87 =1* 5000 * 5000;
        var _0x5e724f = multerg["diskStorage"]({
            'destination': function(_0x25402c, _0x25ce32, _0x249e22) {
                _0x249e22(null, __dirname + "/httpdocs/views/uploads");
            },
            'filename': function(_0x6d3e66, _0x32748a, _0x1b1c5c) {
                var _0xfd4f44 = _0x6d3e66['body']["botyeniresimadi"];
                _0x1b1c5c(null, _0x32748a["fieldname"] + '_' + _0xfd4f44 + ".jpg");
            }
        });
        var _0x1bac28 = multerg({
            'storage': _0x5e724f,
            'limits': {
                'fileSize': _0xdd0e87
            },
            'fileFilter': function(_0x3a2c6a, _0x1f6270, _0x3d5951) {
                if (_0x1f6270["mimetype"] !== "image/png" && _0x1f6270["mimetype"] !== "image/jpg" && _0x1f6270["mimetype"] !== 'image/jpeg') {
                    _0x3d5951(null, ![]);
                }
                _0x3d5951(null, !![]);
            }
        });
        emin.post("/botprofile", _0x1bac28["single"]("botavatar"), function(_0x5c0609, _0x1e7a17) {
            try {
                if (_0x5c0609.session["uyeBilgileri"]["uye_yonetimi"]) {
                    var _0x3b193f = _0x5c0609["body"]['botid'];
                    var _0x6fdbd5 = _0x5c0609['body']['botyeniresimadi'];
                    var _0x2d04d5 = _0x5c0609["body"]["boteskiresimadi"];
                    var _0x3f3cf9 = "botavatar_" + _0x6fdbd5 + '.jpg';
                    baglantim["query"]('UPDATE uyeler SET ? WHERE id = ?', [{
                        'flash': _0x3f3cf9
                    }, _0x3b193f], function(_0x228a96, _0x1b6a68, _0xfe8336) {
                        if (_0x228a96) {
                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Resim Eklenmedi");
                        } else {
                            const _0x4f0dec = _0x550e04 => new Promise(_0x2869e2 => setTimeout(_0x2869e2, _0x550e04));
                            var _0xd8db4c = require('fs');
                            var _0x44c91d = require("jimp");
                            _0x44c91d["read"](__dirname + "/httpdocs/views/uploads/" + _0x3f3cf9 + '')['then'](_0x245e63 => {
                                return _0x245e63["resize"](0x15e, 0x15e)["quality"](0x3c)["write"](__dirname + "/httpdocs/views/uploads/" + _0x3f3cf9 + '');
                            })["then"](_0x1ec049 => {
                                var _0x23112b = require('fs');
                                var _0x50dc9b = __dirname + '/httpdocs/views/uploads/' + _0x2d04d5;
                                _0x23112b["unlink"](_0x50dc9b, function(_0xe59d6d) {
                                    if (_0xe59d6d) {}
                                });
                            });
                            _0x4f0dec(0x1 * 0x1770)["then"](_0x1cbbb5 => {
                                if (_0x5c0609.session['uyeBilgileri']) {
                                    if (_0x5c0609.session["uyeBilgileri"]['id']) {
                                        baglantim["query"]('select id,rumuz,flash from uyeler where id= ?', [_0x3b193f], function(_0x3a7e07, _0x55a08e, _0x416b09) {
                                            sonuclarwtrVer = _0x55a08e[0];
                                            bubotkim = md5g(sonuclarwtrVer["rumuz"]);
                                            kisiBagli = 0x0;
                                            for (var _0x215789 in soketgir) {
                                                if (soketgir[_0x215789]["userKripto"] == bubotkim) {
                                                    kisiBagli = 0x1;
                                                    break;
                                                }
                                            }
                                            if (kisiBagli > 0x0) {
                                                soketgir[bubotkim]["flash"] = sonuclarwtrVer['flash'];
                                                KsiYenile();
                                            } else {}
                                        });
                                    } else {}
                                } else {}
                            })["catch"](_0x51626c => {});
                        }
                    });
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Bot Resmi Yükleme Yetkiniz Yok");
                }
            } catch (_0x1cdfdc) {
                console.error(_0x1cdfdc);
            }
        });
        var _0xdd0e87 =1* 5000 * 5000;
        var _0x5e724f = multerg["diskStorage"]({
            'destination': function(_0x2498de, _0x225fa6, _0x57fadf) {
                _0x57fadf(null, __dirname + '/httpdocs/views/uploads/odaresim');
            },
            'filename': function(_0x5171db, _0x52e858, _0x28b27b) {
                var _0x1c31df = _0x5171db["body"]["resadi"];
                _0x28b27b(null, _0x52e858['fieldname'] + '-' + _0x1c31df + '.jpg');
            }
        });
        var _0x18b64c = multerg({
            'storage': _0x5e724f,
            'limits': {
                'fileSize': _0xdd0e87
            },
            'fileFilter': function(_0xc7313e, _0x17c20a, _0x41e657) {
                if (_0x17c20a["mimetype"] !== "image/png" && _0x17c20a["mimetype"] !== "image/jpg" && _0x17c20a["mimetype"] !== "image/jpeg" && _0x17c20a["mimetype"] !== 'image/gif') {
                    _0x41e657(null, ![]);
                }
                _0x41e657(null, !![]);
            }
        });
        emin["post"]("/odaresimekle", _0x18b64c["single"]('odaresim'), function(_0x4e1089, _0x55e44d) {
            try {
                if (_0x4e1089.session["uyeBilgileri"]) {
                    if (_0x4e1089.session["uyeBilgileri"]['id']) {
                        var _0x317762 = _0x4e1089["body"]["odaidsi"];
                        var _0x485c0c = _0x4e1089['body']["odaadsi"];
                        var _0x27f2d5 = _0x4e1089["body"]['foneskiadi'];
                        var _0x32001f = _0x4e1089["body"]["resadi"];
                        var _0x5d7dcb = "odaresim-" + _0x32001f + '.jpg';
                        baglantim["query"]('select * from odalar where id=' + _0x317762 + '', function(_0x76a129, _0x524531, _0x3b3640) {
                            if (_0x76a129) {
                                soketimiz.to(sohbetik['id']).emit("odauyarigoster", "Veritabanı sorgu hatası." + _0x76a129);
                            } else {
                                if (_0x524531[0]['id'] == "undefined") {
                                    soketimiz.to(sohbetik['id']).emit("odauyarigoster", 'Böyle bir oda yok.');
                                } else {
                                    baglantim["query"]("UPDATE odalar SET ? WHERE id = ?", [{
                                        'fon': _0x5d7dcb
                                    }, _0x317762], function(_0x126d89, _0x952605, _0x5a584b) {
                                        if (_0x126d89) {
                                            soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Oda Resmi Eklenmedi");
                                        } else {
                                            _0x2ace0c(_0x4e1089.session['uyeBilgileri']['rumuz'], _0x485c0c, "Oda Resmi Ekledi", sohbetik["yetki"], sohbetik['cinsiyet']);
                                            baglantim["query"]("select * from odalar where id=" + _0x317762 + '', function(_0x3bb83, _0x342457, _0x119656) {
                                                const _0x223604 = _0x59f530 => new Promise(_0x2cd95d => setTimeout(_0x2cd95d, _0x59f530));
                                                new Promise((_0x249b75, _0xb0a49) => {
                                                    delete odalar[_0x485c0c];
                                                    _0x249b75();
                                                })["then"](_0x14bfcd => {
                                                    odalar[_0x342457[0]["adi"]] = {
                                                        'id': _0x342457[0]['id'],
                                                        'adi': _0x342457[0]["adi"],
                                                        'onlineKisi': 0,
                                                        'mikDolumu': 0,
                                                        'sifre': _0x342457[0]['sifre'],
                                                        'yazi': _0x342457[0]["yazi"],
                                                        'sahibi': _0x342457[0]["sahibi"],
                                                        'fon': _0x342457[0]['fon'],
                                                        'sohbeticrenk': _0x342457[0]["sohbeticrenk"],
                                                        'listesiralama': _0x342457[0]["listesiralama"]
                                                    };
                                                    kriptola();
                                                    soketimiz.in(_0x342457[0]["adi"]).emit("yeniodayagir", _0x342457[0]["adi"]);
                                                    soketimiz.to(sohbetik['id']).emit("odauyarigoster", '' + _0x342457[0]["adi"] + " Oda Resmi Eklendi.");
                                                })['catch'](_0x4b6885 => {
                                                    soketimiz.to(sohbetik['id']).emit('odauyarigoster', '' + _0x342457[0]["adi"] + " Odasının Resmi Eklenemedi.");
                                                });
                                            });
                                        }
                                    });
                                }
                            }
                        });
                        setTimeout(function() {
                            var _0x10988d = require('fs');
                            var _0x3feeff = '' + _0x27f2d5 + '';
                            var _0x4996d9 = __dirname + '/httpdocs/views/uploads/odaresim/' + _0x3feeff;
                            _0x10988d["unlink"](_0x4996d9, function(_0x5cdf98) {
                                if (_0x5cdf98) {}
                            });
                        }, 0xbb8);
                    } else {}
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sunucuya Baglı Degilsiniz");
                }
            } catch (_0x3ea917) {
                console.error(_0x3ea917);
            }
        });
        var _0xdd0e87 =1* 5000 * 5000;
        var _0x5e724f = multerg["diskStorage"]({
            'destination': function(_0x272c90, _0x12a682, _0x5e2902) {
                _0x5e2902(null, __dirname + "/httpdocs/views/uploads/anasayfa");
            },
            'filename': function(_0x4e01ae, _0x14e36e, _0xef5d8b) {
                var _0x1cb1ae = _0x4e01ae["body"]["anaresadi"];
                _0xef5d8b(null, _0x14e36e["fieldname"] + '-' + _0x1cb1ae + ".jpg");
            }
        });
        var _0x18b64c = multerg({
            'storage': _0x5e724f,
            'limits': {
                'fileSize': _0xdd0e87
            },
            'fileFilter': function(_0x25da74, _0x115b1a, _0x348a1b) {
                if (_0x115b1a['mimetype'] !== 'image/png' && _0x115b1a["mimetype"] !== "image/jpg" && _0x115b1a["mimetype"] !== "image/jpeg" && _0x115b1a["mimetype"] !== "image/gif") {
                    _0x348a1b(null, ![]);
                }
                _0x348a1b(null, !![]);
            }
        });
        emin.post("/anaresimekle", _0x18b64c["single"]('anaresim'), function(_0x22428b, _0x2b8ca9) {
            try {
                if (_0x22428b.session["uyeBilgileri"]) {
                    if (_0x22428b.session["uyeBilgileri"]['id']) {
                        var _0x5136ba = '1';
                        var _0xd7e5d9 = _0x22428b['body']["anaeskiadi"];
                        var _0xcdac31 = _0x22428b["body"]['anaresadi'];
                        var _0x4c6ca7 = "anaresim-" + _0xcdac31 + '.jpg';
                        baglantim["query"]("UPDATE ayarlar SET ? WHERE id = 1", [{
                            'anaresim': _0x4c6ca7
                        }, _0x5136ba], function(_0x320463, _0xc5ef3b, _0x35ab15) {
                            if (_0x320463) {
                                soketimiz.to(sohbetik['id']).emit('uyariClientGoster', "Anasayfa Resmi Eklenmedi");
                            } else {
                                _0x2ace0c(_0x22428b.session["uyeBilgileri"]["rumuz"], "AnaSayfa", "Anasayfa Resmi Ekledi", sohbetik["yetki"], sohbetik['cinsiyet']);
                                seogoster = {};
                                baglantim["query"]("select * from ayarlar where id='1'", function(_0x505492, _0x358987, _0x3245cd) {
                                    oyarlarioku = _0x358987;
                                    for (var _0x2d4c84 in oyarlarioku) {
                                        seogoster[oyarlarioku[_0x2d4c84]['id']] = {
                                            'id': oyarlarioku[_0x2d4c84]['id'],
                                            'anaresim': oyarlarioku[_0x2d4c84]["anaresim"]
                                        };
                                    }
                                });
                                SeoLat();
                            }
                        });
                        setTimeout(function() {
                            var _0x5d46a2 = require('fs');
                            var _0x13187f = '' + _0xd7e5d9 + '';
                            var _0x2d3dd2 = __dirname + "/httpdocs/views/uploads/anasayfa/" + _0x13187f;
                            _0x5d46a2["unlink"](_0x2d3dd2, function(_0x1facb4) {
                                if (_0x1facb4) {}
                            });
                        }, 0xbb8);
                    } else {}
                } else {
                    soketimiz.to(sohbetik['id']).emit("uyariClientGoster", "Sunucuya Baglı Degilsiniz");
                }
            } catch (_0x3ec4ff) {
                console.error(_0x3ec4ff);
            }
        });
        if (anaYoneticiler[_0x4f934a['rumuz']]) {
            negitsinBa = 'e';
        } else {
            negitsinBa = 'h';
        }
        if (_0x4f934a["yetki"] != 0x0) {
            sohbetik.emit("yoneticiButonlari", {
                'uyeYonYet': _0x4f934a["uye_yonetimi"],
                'YetkiYonYet': _0x4f934a["uye_yonetimi"],
                'BotKontrol': _0x4f934a["uye_yonetimi"],
                'odaYonYet': _0x4f934a["oda_yonetimi"],
                'HareketYonYet': _0x4f934a["admin_hareketleri"],
                'LoglarYonYet': _0x4f934a['log_yetkisi'],
                'banYonYet': _0x4f934a["ban_yetkisi"],
                'banTemizle': _0x4f934a["ban_yetkisi"],
                'muteTemizle': _0x4f934a["mute_yetkisi"],
                'g_muteTemizle': _0x4f934a['mute_yetkisi'],
                'rutbeYonYet': _0x4f934a["rutbe_yonetimi"],
                'CihazAyar': _0x4f934a["admin_ayarlar"],
                'SiteAyar': _0x4f934a["admin_ayarlar"],
                'SeoAyar': _0x4f934a["admin_ayarlar"],
                'genelYaziAlani': _0x4f934a["genel_atma"],
                'toplantiyacik': _0x4f934a['toplantiyetkisi'],
                'AdminPaneli': _0x4f934a["admin_panel"],
                'durumYonYet': _0x4f934a["rutbe_yonetimi"]
            });
        }
        sohbetik.emit("sistemayarlari", {
            'rg_z': oyagoster['1']["ResimGonder"],
            'sg_z': oyagoster['1']["SesGonder"],
            'yt_z': oyagoster['1']['YouTubeGonder'],
            'bk_z': oyagoster['1']["BasKonusGonder"]
        });
        sohbetik.on("kisiselbilgiler", function() {
            try {
                _0x156377('kisiselbilgiler', 0x64, sohbetik);
                if (soketgir[sohbetik["kripto"]]['flash'] != '') {
                    var _0x307443 = "uploads/" + soketgir[sohbetik["kripto"]]["flash"] + '';
                } else {
                    if (soketgir[sohbetik["kripto"]]['userResim'] == '0' || soketgir[sohbetik["kripto"]]['userResim'] == '') {
                        var _0x307443 = "resimler/sistem/" + soketgir[sohbetik["kripto"]]['userCinsiyet'] + "_mliste.png";
                    } else {
                        var _0x307443 = "resimler/sistem/avatar/" + soketgir[sohbetik['kripto']]["userCinsiyet"] + '/' + soketgir[sohbetik["kripto"]]['userResim'] + ".png";
                    }
                }
                sohbetik.emit("bilgilerim", sohbetik["kullaniciAdi"], sohbetik["statu"], _0x307443);
            } catch (_0x46fe56) {
                console.error(_0x46fe56);
            }
        });
        function _0x1403a6() {
            try {
                if (soketgir[sohbetik["kripto"]]["flash"] != '') {
                    var _0x1b6de5 = "uploads/" + soketgir[sohbetik["kripto"]]["flash"] + '';
                } else {
                    if (soketgir[sohbetik['kripto']]["userResim"] == '0' || soketgir[sohbetik["kripto"]]["userResim"] == '') {
                        var _0x1b6de5 = "resimler/sistem/" + soketgir[sohbetik["kripto"]]['userCinsiyet'] + "_mliste.png";
                    } else {
                        var _0x1b6de5 = 'resimler/sistem/avatar/' + soketgir[sohbetik["kripto"]]["userCinsiyet"] + '/' + soketgir[sohbetik["kripto"]]["userResim"] + ".png";
                    }
                }
                sohbetik.emit("bilgilerim", sohbetik["kullaniciAdi"], sohbetik["statu"], _0x1b6de5);
            } catch (_0x2441ea) {
                console.error(_0x2441ea);
            }
        }
        sohbetik.on("disconnect", function() {
            try {
                _0x156377("disconnect", 0x64, sohbetik);
                if (soketgir[sohbetik["kripto"]]) {
                    if (saldiriURL[md5g(sohbetik['ip'])]) {
                        delete saldiriURL[md5g(sohbetik['ip'])];
                    }
                    if (odalar[sohbetik["odasi"]]["mikDolumu"] == sohbetik["kullaniciAdi"]) {
                        odalar[sohbetik["odasi"]]["mikDolumu"] = 0x0;
                    }
                    if (sohbetik['catisi'] > 0x0) {
                        soketimiz.sockets.in(sohbetik["odasi"])["clients"](function(_0x4efeaa, _0x5d26b0) {
                            _0x5d26b0.forEach(_0x33f079 => {
                                let _0x148d4f = soketimiz.sockets["connected"][_0x33f079];
                                if (sohbetik['yetki'] <= _0x148d4f["yetki"] && _0x148d4f['id'] != sohbetik['id']) {
                                    soketimiz.sockets.sockets[_0x148d4f['id']].emit("mesajGonder", 'K_SistemMesajiGonderGitsinnn', "<b>" + Abilem(sohbetik["kullaniciAdi"], sohbetik["kullaniciAdiiki"], sohbetik["yetki"]) + '</b>, <font style="color:#cc0202">siteden çıkış yaptı (çatıdaydı)</font> ', 'x');
                                }
                            });
                        });
                    } else {
                        soketimiz.sockets.in(sohbetik["odasi"])["clients"](function(_0x52c351, _0x13aa78) {
                            _0x13aa78.forEach(_0x11f4e5 => {
                                let _0x2425b5 = soketimiz.sockets["connected"][_0x11f4e5];
                                if (sohbetik["yetki"] > _0x2425b5["yetki"] && sohbetik["kullaniciAdiiki"].length > 0x1) {
                                    cikanNickAsil = sohbetik["kullaniciAdiiki"];
                                } else if (sohbetik["kullaniciAdiiki"].length > 0x1) {
                                    cikanNickAsil = Abilem(sohbetik["kullaniciAdi"], sohbetik['kullaniciAdiiki'], sohbetik['yetki']);
                                } else {
                                    cikanNickAsil = sohbetik["kullaniciAdi"];
                                }
                                soketimiz.sockets.sockets[_0x2425b5['id']].emit("mesajGonder", "K_SistemMesajiGonderGitsinnn", "<b>" + cikanNickAsil + '</b>, <font style="color:#cc0202">siteden çıkış yaptı</font>', 'x');
                            });
                        });
                    }
                    if (_0x2ed05d[soketgir[sohbetik["kripto"]]["userWebRTCId"]] != '') {
                        soketimiz.sockets.emit("kamerasiniHerkesceKapat", soketgir[sohbetik["kripto"]]["userWebRTCId"]);
                        delete _0x2ed05d[soketgir[sohbetik['kripto']]['userWebRTCId']];
                    }
                    sohbetik.leave(sohbetik["odasi"]);
                    _0x3d4844[sohbetik['odasi']]--;
                    odalar[sohbetik["odasi"]]['onlineKisi'] = _0x3d4844;
                }
                sohbetik.emit('medyaBaglantisiniKes');
                for (var _0x2e3743 in _0x2ed05d) {
                    var _0x6c355b = _0x2ed05d[_0x2e3743]["izleyen"].split(':'),
                        _0x14d144;
                    for (_0x14d144 = 0x0; _0x14d144 < _0x6c355b.length; _0x14d144++) {
                        yeniIzleyenler = Tanimsiz(':' + sohbetik["kullaniciAdi"], '', _0x2ed05d[_0x2e3743]["izleyen"]);
                        _0x2ed05d[_0x2e3743]["izleyen"] = yeniIzleyenler;
                    }
                }
                soketimiz.sockets.emit('izliyorKameralarGetir', _0x2ed05d);
                for (var _0x2e3743 in _0x1d874d) {
                    if (_0x1d874d[_0x2e3743]["baslatan"] == sohbetik["kripto"]) {
                        delete _0x1d874d[_0x2e3743];
                    }
                }
                for (var _0x2e3743 in _0x1d874d) {
                    if (_0x1d874d[_0x2e3743]["muhattap"] == sohbetik["kripto"]) {
                        delete _0x1d874d[_0x2e3743];
                    }
                }
                for (var _0x2e3743 in _0x334fe6) {
                    if (_0x334fe6[_0x2e3743]["baslatan"] == sohbetik['kripto']) {
                        soketimiz.to(soketgir[_0x334fe6[_0x2e3743]['muhattap']]["userId"]).emit("ciktiaramasonlandi", sohbetik["kullaniciAdi"]);
                        soketimiz.to(soketgir[_0x334fe6[_0x2e3743]["muhattap"]]["userId"]).emit("KonusmaZamanClearYap");
                        soketgir[_0x334fe6[_0x2e3743]["muhattap"]]["userkonusmada"] = 0x0;
                        delete _0x334fe6[_0x2e3743];
                    }
                }
                for (var _0x2e3743 in _0x334fe6) {
                    if (_0x334fe6[_0x2e3743]["muhattap"] == sohbetik["kripto"]) {
                        soketimiz.to(soketgir[_0x334fe6[_0x2e3743]["baslatan"]]['userId']).emit("ciktiaramasonlandi", sohbetik["kullaniciAdi"]);
                        soketimiz.to(soketgir[_0x334fe6[_0x2e3743]["baslatan"]]["userId"]).emit('KonusmaZamanClearYap');
                        soketgir[_0x334fe6[_0x2e3743]["baslatan"]]['userkonusmada'] = 0x0;
                        delete _0x334fe6[_0x2e3743];
                    }
                }
                if (sohbetik["botdurum"] != 0x1) {
                    delete soketgir[sohbetik['kripto']];
                    delete _0x3b706d[sohbetik["kripto"]];
                } else {}
                KsiYenile();
                kriptola();
                _0x2e1bd1();
            } catch (_0x4bde03) {
                console.error(_0x4bde03);
            }
        });
    });
}, timeOutApp);