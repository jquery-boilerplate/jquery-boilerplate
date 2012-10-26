/**
 * @name : Plugin Name
 * @description : Plugin description
 * @author : Author Name
 * @licence : http://localhost/plugin/licence
 * @version : 1 beta
 * @required : jQuery 1.4+
 */
;(function($, window) {

	var
		// Adota document como variável local para melhor desempenho
		document = window.document,

		// Define um objeto contendo os padrões dos métodos do plugin
		defaults = {
			methodName : {
				propertyName : 'value'
			}
		},

		fnExtend = {

			// Cria um método do plugin
			methodName : function(options) {

				options = $.isPlainObject(options) && !$.isEmptyObject(options) ? $.extend(defaults.methodName, options) : defaults.methodName;

				return $(this).each(function() {

					//
				});
			}
		},

		extend = {

			// Cria um método para alterar os valores padrões do plugin
			methodNameSetup : function(options) {

				return defaults.methodName = $.isPlainObject(options) && !$.isEmptyObject(options) ? $.extend(defaults.methodName, options) : defaults.methodName;
			},

			// Cria um objeto para guardar informações sobre o plugin (Neste caso a versão atual)
			methodNameInfo : {
				version : '1b'
			}
		};

	$.extend(extend).fn.extend(fnExtend);
})(jQuery, window);
