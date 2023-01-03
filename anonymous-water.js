const axios = require('axios');
const fs = require('fs');

const AC_JS =  'https://games.shopee.vn/farm/api/tool/ac.js?arg=';
const REFERER =  'https://games.shopee.vn/farm/share.html?schannel=copyLink&skey=';
const ANONYMOUS_WATER_URL = 'https://games.shopee.vn/farm/api/friend/anonymous/help';

const getS = async (skey) => {
    var _spky; // shopee key?
    var _sptk; // shopee token?
    var _spsn; // i have no idea - a hash function, could be MD5, SHA1, SHA256...
    var _spen; // shopee encrypt? - an encrypt function, could be AES, Triple DES...

    Object.defineProperty(String.prototype, 'oeDp', {
        get: function() {
            return oeDp;
        },
        set: function (value) {
            oeDp = value;
            _sptk = value;
        }
    });

    Object.defineProperty(String.prototype, 'xkwm', {
        get: function() {
            return xkwm;
        },
        set: function (value) {
            xkwm = value;
            _spky = value;
        }
    });

    Object.defineProperty(String.prototype, 'iGky', {
        get: function() {
            return iGky;
        },
        set: function (value) {
            iGky = value;
            _spen = value; 
        }
    });

    Object.defineProperty(String.prototype, 'bWkr', {
        get: function() {
            return bWkr;
        },
        set: function (value) {
            bWkr = value;
            _spsn = value;
        }
    });
    const timestamp = Date.now();
    const time = +timestamp.toString().substr(-7);
    const _spil = time % 2 ? time + 1 : time;
    const arg = time % 2 ? time : time + 1;
    const scriptUrl = AC_JS + arg;
    // Referer needed. I guess they're using referer to map skey with _spen, _spsn, _sptk, _spky
    const res = await axios.get(scriptUrl, {headers: {'Referer': REFERER + skey}});
    try {
        eval(res.data);
    }
    catch (error) {
        console.log('[WARN] eval error: ' + error);
    }
    if (!_sptk || !_spky || !_spen || !_spsn) throw 'Cannot get required params from ac.js';
    const sppm = `load=${_spil}&schannel=copyLink&skey=${skey}&timestamp=${Date.now()}&v=1`;
    const _cc = _spen(sppm, _spky);
    const sppmHash = btoa(_spsn(sppm, _sptk));
    return _cc + _sptk + sppmHash + (sppmHash.length).toString(16)
}

const giveAnonymousWater = async (skey) => {
    const _ss = await getS(skey);
    const res = await axios.post(ANONYMOUS_WATER_URL, {
        'shareKey': skey,
        'channel': 'copyLink',
        's': _ss
    });
    console.log(res.data);
}

module.exports = {
    giveAnonymousWater
}
