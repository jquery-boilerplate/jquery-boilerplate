/**
 * @name : Plugin Name
 * @description : Plugin description
 * @author : Author Name
 * @licence : http://localhost/plugin/licence
 * @version : 1 beta
 * @required : jQuery 1.4+
 */
(function($, window) {

	// A váriavel local $ recebe jQuery para evitar conflitos com outras bibliotecas
	// window passa a ser variável local para melhor desempenho

	var
		// Adota document como variável local para melhor desempenho
		document = window.document,

		// Define um objeto contendo os padrões dos métodos do plugin
		defaults = {
			methodName : {
				propertyName : 'value'
			}
		},

		// Métodos a extender jQuery.fn
		fnExtend = {

			// Cria um método do plugin
			methodName : function(options) {

				// Recebe os parâmetros passados pelo usuário em um objeto sobrepondo as propriedades padrões caso redeclaradas
				options = $.isPlainObject(options) && !$.isEmptyObject(options) ? $.extend(defaults.methodName, options) : defaults.methodName;

				// Retorna o próprio elemento encapsulado para proporcionar encadeamento
				return $(this).each(function() {

					// Corpo do plugin
					// O contexto atual (this) é o próprio elemento encapsulado percorrido atualmente
					// Sintaxe de uso: jQuery(fn).methodName(options);
				});
			}
		},

		// Métodos a extender jQuery
		extend = {

			// Cria um método para alterar os valores padrões do plugin
			// Sintaxe de uso: jQuery.methodName(options);
			methodNameSetup : function(options) {

				// Retorna o próprio objeto modificado
				return defaults.methodName = $.isPlainObject(options) && !$.isEmptyObject(options) ? $.extend(defaults.methodName, options) : defaults.methodName;
			},

			// Cria um objeto para guardar informações sobre o plugin (Neste caso a versão atual)
			methodNameInfo : {
				version : '1b'
			}
		};

	// Extende a biblioteca jQuery
	$.extend(extend).fn.extend(fnExtend);
})(jQuery, window);