#  Projeto:
#  Descrição:
#  Autor:
#  Licença:

# Note que quando compilado com CoffeeScript, o plugin é envolto em outra
# função anônima. Não precisamos passar undefined também, graças
# ao CoffeeScript usar (void 0) no lugar.

(($, window, document) ->

  # window e document são passadas através de variável local em vez de global,
  # isso melhora o processo de resolução e pode ser mais eficiente quando o
  # código é minificado (especialmente quando são muito utilizdas no seu plugin).

  # Cria os defaults somente uma vez
  pluginName = "defaultPluginName"
  defaults =
    property: "value"

  # O construtor do plugin
  class Plugin
    constructor: (@element, options) ->
      # O jQuery tem um método chamado extend que junta os conteúdos de dois ou
      # mais objetos, guardando o resultado no primeiro objeto. O primeiro objeto
      # geralmente é vazio pois não queremos alterar as opções default para as
      # futuras instâncias do plugin.
      @options = $.extend {}, defaults, options
      @_defaults = defaults
      @_name = pluginName
      @init()

    init: ->
      # Coloque sua lógica de inicialização aqui.
      # Você já possui acesso ao elemento do DOM e às opções da instância,
      # e.g., @element e @options

    suaOutraFuncao: ->
      # Alguma lógica

  # Um encapsulamento muito leve entorno do construtor,
  # prevenindo contra múltiplas instanciações.
  $.fn[pluginName] = (options) ->
    @each ->
      if !$.data(@, "plugin_#{pluginName}")
        $.data(@, "plugin_#{pluginName}", new Plugin(@, options))

)(jQuery, window, document)