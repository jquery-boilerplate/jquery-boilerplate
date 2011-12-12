#  Projet:
#  Description:
#  Auteur:
#  Licence:

# Le point-virgule avant l'invocation de la fonction est un filet de sécurité
# si le plugin est concaténé avec d'autre scripts et/ou d'autres plugin qui
# pourraient ne pas avoir été convenablement fermés.
``
# À noter que compilé avec Coffeescript, le plugin est automatiquement enclos
# dans une fonction anonyme. Nous n'avons pas non plus besoin de lui passer
# "undefined", puisque Coffeescript utilise "void 0" à la place.
(($, window, document) ->
  # "window" et "document" sont passé par des variables locales plutôt que par
  # les globales, cela accélère (relativement) le processus de résolution et
  # permet de mieux tirer avantage de la "minification" (tout particulièrement
  # quand les deux sont régulièrement référencés dans votre plugin).

  # Créons celui par défaut
  pluginName = 'defaultPluginName'
  defaults =
    property: 'value'

  # Voici le constructeur du plugin
  class Plugin
    constructor: (@element, options) ->
      # jQuery a une méthode "extend" qui fusionne les contenus d'au moins
      # deux objets, sauvegardant le résultat dans le premier. Le premier objet
      # est généralement vide, vu que nous ne souhaitons pas altérer les options
      # par défaut des futures instances du plugin.
      @options = $.extend {}, defaults, options

      @_defaults = defaults
      @_name = pluginName

      @init()

    init: ->
      # Mettez votrre logique d'initialisation ici
      # Vous avez déjà accès à l'élément DOM et les options via l'instance,
      # par ex. : this.element et this.options

  # Un très léger décorateur autour du constructeur, pour en éviter de multiples
  # instanciations.
  $.fn[pluginName] = (options) ->
    @each ->
      if !$.data(this, "plugin_#{pluginName}")
        $.data(@, "plugin_#{pluginName}", new Plugin(@, options))
)(jQuery, window, document)
