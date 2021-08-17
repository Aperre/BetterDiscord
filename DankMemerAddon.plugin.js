//META{"name":"DankMemerHelper"}*//

class DankMemerHelper {
    getName() {return "DankMemerHelper";}
    getDescription() {return "Adds Features That will help you with Dank Memer";}
    getVersion() {return "1B";}
    getAuthor() {return "Ape";}

    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "LINK_TO_RAW_CODE");
    }

    stop() {

	}
}
