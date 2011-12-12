/**
 * Projet:
 * Description:
 * Auteur:
 * Licence:
 */

/**
 * Le point-virgule avant l'invocation de la fonction est un filet de sécurité
 * si le plugin est concaténé avec d'autre scripts et/ou d'autres plugin qui
 * pourraient ne pas avoir été convenablement fermés.
 */
;(function ( $, window, document, undefined ) {
    
    /**
     * "undefined" est utilisé ici car sa variable globale est mutable en
     * ECMAScript 3, c'est-à-dire qu'elle peut être redéfinie par quelqu'un
     * d'autre. De plus, "undefined" n'est pas réélement passé à la
     * fonction, ainsi nous sommes certains que sa valeure est bien "undefined"
     * comme un "void 0". D'autre part en ES5, "undefined" n'est plus mutable.
     */
    
    /**
     * "window" et "document" sont passé par des variables locales plutôt que
     * par les globales, cela accélère (relativement) le processus de résolution
     * et permet de mieux tirer avantage de la "minification" (tout
     * particulièrement quand les deux sont régulièrement référencés dans votre
     * plugin).
     */

    // Créons celui par défaut
    var pluginName = 'defaultPluginName',
        defaults = {
            propertyName: "value"
        };

    // Voici le constructeur du plugin
    function Plugin( element, options ) {
        this.element = element;

        /**
         * jQuery a une méthode "extend" qui fusionne les contenus d'au moins
         * deux objets, sauvegardant le résultat dans le premier. Le premier
         * objet est généralement vide, vu que nous ne souhaitons pas altérer
         * les options par défaut des futures instances du plugin.
         */
        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
      /**
       * Mettez votrre logique d'initialisation ici
       * Vous avez déjà accès à l'élément DOM et les options via l'instance,
       * par ex. : this.element et this.options
       */
    };

    /**
     * Un très léger décorateur autour du constructeur, pour en éviter de
     * multiples instanciations.
     */
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    }

})(jQuery, window, document);
