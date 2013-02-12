/*
 *  Projeto:
 *  Descrição:
 *  Autor:
 *  Licença:
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.

// O ponto-e-vírgula antes da invocação da função é uma segurança contra scripts
// concatenados e/ou outros plugins que possam não estar devidamente fechados.
;(function ($, window, document, undefined) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // undefined é usado aqui pois a variável global undefined no ECMAScript 3 é
    // mutável (isto é, pode ser alterada por outro script). Esta variável não está
    // realmente sendo passada assim podemos garantir que seu valor é realmente
    // indefinido. No ES5, a variável undefined não pode mais ser modificada.

    // window e document são passadas através de variável local em vez de global,
    // isso melhora o processo de resolução e pode ser mais eficiente quando o
    // código é minificado (especialmente quando são muito utilizdas no seu plugin).

    // Cria os defaults somente uma vez
    var pluginName = "defaultPluginName";
    var defaults = {
        propertyName: "value"
    };

    // O construtor do plugin
    function Plugin(element, options) {
        this.element = element;
        // O jQuery tem um método chamado extend que junta os conteúdos de dois ou
        // mais objetos, guardando o resultado no primeiro objeto. O primeiro objeto
        // geralmente é vazio pois não queremos alterar as opções default para as
        // futuras instâncias do plugin.
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            // Coloque sua lógica de inicialização aqui.
            // Você já deve ter acesso ao elemento do DOM e
            // às opções da instância, e.g. this.element
            // e this.options
            // você pode adicionar mais funções como esta abaixo e
            // chamá-las como: this.suaOutraFuncao(this.element, this.options).
        },
        suaOutraFuncao: function () {
            // Alguma outra lógica
        }
    };

    // Um encapsulamento muito leve entorno do construtor,
    // prevenindo contra múltiplas instanciações.
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
