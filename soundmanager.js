/**
 * @constructor
 */
var SoundManager = function(){};

/**
 * @param {*} config
 */
SoundManager.prototype.setup = function( config ){}

SoundManager.prototype.beginDelayedInit = function(){}

SoundManager.prototype.stopAll = function(){};

/**
 * @param {*} options
 */
SoundManager.prototype.createSound = function( options ){}


var soundManager = 
{
    "setupOptions": {
        "url": function () {},
        "flashVersion": {},
        "debugMode": {},
        "debugFlash": {},
        "useConsole": {},
        "consoleOnly": {},
        "waitForWindowLoad": {},
        "bgColor": {},
        "useHighPerformance": {},
        "flashPollingInterval": function () {},
        "html5PollingInterval": function () {},
        "flashLoadTimeout": {},
        "wmode": function () {},
        "allowScriptAccess": {},
        "useFlashBlock": {},
        "useHTML5Audio": {},
        "html5Test": function () {},
        "preferFlash": {},
        "noSWFCache": {}
    },
    "defaultOptions": {
        "autoLoad": {},
        "autoPlay": {},
        "from": function () {},
        "loops": {},
        "onid3": function () {},
        "onload": function () {},
        "whileloading": function () {},
        "onplay": function () {},
        "onpause": function () {},
        "onresume": function () {},
        "whileplaying": function () {},
        "onposition": function () {},
        "onstop": function () {},
        "onfailure": function () {},
        "onfinish": function () {},
        "multiShot": {},
        "multiShotEvents": {},
        "position": function () {},
        "pan": {},
        "stream": {},
        "to": function () {},
        "type": function () {},
        "usePolicyFile": {},
        "volume": {}
    },
    "flash9Options": {
        "isMovieStar": function () {},
        "usePeakData": {},
        "useWaveformData": {},
        "useEQData": {},
        "onbufferchange": function () {},
        "ondataerror": function () {}
    },
    "movieStarOptions": {
        "bufferTime": {},
        "serverURL": function () {},
        "onconnect": function () {},
        "duration": function () {}
    },
    "audioFormats": {
        "mp3": {
            "type": {
                "0": {},
                "1": {},
                "2": {},
                "3": {},
                "4": {}
            },
            "required": {}
        },
        "mp4": {
            "related": {
                "0": {},
                "1": {},
                "2": {}
            },
            "type": {
                "0": {},
                "1": {},
                "2": {},
                "3": {},
                "4": {}
            },
            "required": {}
        },
        "ogg": {
            "type": {
                "0": {}
            },
            "required": {}
        },
        "wav": {
            "type": {
                "0": {},
                "1": {},
                "2": {},
                "3": {}
            },
            "required": {}
        }
    },
    "movieID": {},
    "id": {},
    "debugID": {},
    "debugURLParam": function () {},
    "versionNumber": {},
    "version": function () {},
    "movieURL": function () {},
    "altURL": function () {},
    "swfLoaded": {},
    "enabled": {},
    "oMC": function () {},
    "sounds": function () {},
    "soundIDs": function () {},
    "muted": {},
    "didFlashBlock": {},
    "filePattern": function () {},
    "filePatterns": {
        "flash8": function () {},
        "flash9": function () {}
    },
    "features": {
        "buffering": {},
        "peakData": {},
        "waveformData": {},
        "eqData": {},
        "movieStar": {}
    },
    "sandbox": {
        "type": function () {},
        "types": {
            "remote": {},
            "localWithFile": {},
            "localWithNetwork": {},
            "localTrusted": {}
        },
        "description": function () {},
        "noRemote": function () {},
        "noLocal": function () {}
    },
    "html5": {
        "usingFlash": function () {}
    },
    "flash": function () {},
    "html5Only": {},
    "ignoreFlash": {},
    "mimePattern": function () {},
    "useAltURL": {},
    "hasHTML5": {},
    "setup": function () {},
    "ok": function () {},
    "supported": function () {},
    "getMovie": function () {},
    "createSound": function () {},
    "destroySound": function () {},
    "load": function () {},
    "unload": function () {},
    "onPosition": function () {},
    "onposition": function () {},
    "clearOnPosition": function () {},
    "play": function () {},
    "start": function () {},
    "setPosition": function () {},
    "stop": function () {},
    "stopAll": function () {},
    "pause": function () {},
    "pauseAll": function () {},
    "resume": function () {},
    "resumeAll": function () {},
    "togglePause": function () {},
    "setPan": function () {},
    "setVolume": function () {},
    "mute": function () {},
    "muteAll": function () {},
    "unmute": function () {},
    "unmuteAll": function () {},
    "toggleMute": function () {},
    "getMemoryUse": function () {},
    "disable": function () {},
    "canPlayMIME": function () {},
    "canPlayURL": function () {},
    "canPlayLink": function () {},
    "getSoundById": function () {},
    "onready": function () {},
    "ontimeout": function () {},
    "_writeDebug": function () {},
    "_wD": function () {},
    "_debug": function () {},
    "reboot": function () {},
    "reset": function () {},
    "getMoviePercent": function () {},
    "beginDelayedInit": function () {},
    "destruct": function () {},
    "_setSandboxType": function () {},
    "_externalInterfaceOK": function () {}
}