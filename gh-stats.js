/*global $*/

var ghStats = (function () {
  var secrets = (function () {
    var theSecrets = null;

    return {
      set: function (newSecrets) {
        theSecrets = newSecrets;
      },
      get: function (secret) {
        return theSecrets[secret];
      }
    };
  })();


  var authData = {
    isLoaded: false,
    loadAuthData: function (done) {
      var that = this;

      $.getJSON('auth.json', function (data) {
        secrets.set(data);
        that.isLoaded = true;
        done();
      });
    },
    ghapiurl: function () {
      if (!this.isLoaded) {
        throw new Error('Authentication data must be loaded');
      }
      return 'https://' +
             secrets.get('username') +
             ':' +
             secrets.get('token') +
             '@api.github.com/';
    }
  };


  function getLanguages(user, success) {
    var languages = {},
      call = function () {
        $.getJSON(
          authData.ghapiurl() + 'users/' + user + '/repos',
          function (data) {
            data.forEach(function (repo, i) {
              $.getJSON(
                authData.ghapiurl() +
                'repos/' +
                repo.full_name +
                '/languages',
                function (repoLangs) {
                  Object.keys(repoLangs).forEach(function (lang) {
                    if (languages[lang] == null) {
                      languages[lang] = 0;
                    }
                    languages[lang] += repoLangs[lang];
                  });
                  if (i === data.length - 1) {
                    success && success(languages);
                  }
                }
              );
            });
          }
        );
      };

    if (!$ || !$.getJSON) {
      throw new Error('Requires JQuery');
    }
    if (authData.isLoaded !== true) {
      authData.loadAuthData(call);
    } else {
      call();
    }
  }


  var ghColors = {};

  $.getJSON('gh-colors.json', function (data) {
    ghColors = data;
  });

  function languageToDataArray(languages) {
    var dataArray = Object.keys(languages).map(function (lang) {
      return [lang, languages[lang], ghColors[lang] || null];
    });

    dataArray.unshift(['Programming Language', 'Proficiency', {role: 'style'}]);
    return dataArray;
  }

  return {
    getLanguages: getLanguages,
    languageToDataArray: languageToDataArray
  };
})();

