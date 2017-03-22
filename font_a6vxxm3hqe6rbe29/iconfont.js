;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-qianjin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M945.741499 486.904439c8.733253 5.631254 14.484469 15.44783 14.484469 26.620287-0.029677 11.141758-5.842294 20.958334-14.605224 26.559912L522.750784 810.322409c-9.396383 5.991458-21.713401 6.835685-32.192485 1.084705-10.480108-5.752004-16.412457-16.563234-16.412457-27.735691L474.145841 622.837364 110.240177 816.646442c-9.455737 5.028527-21.261081 5.119601-31.138437-0.813528-9.847679-5.90243-15.328732-16.35141-15.328732-27.071565L63.773009 235.246839c0-10.750855 5.51073-21.230534 15.389109-27.131941 9.908057-5.90243 21.743078-5.78168 31.198814-0.692778l363.784909 195.736986L474.145841 240.396115c0-11.202133 5.96305-22.043039 16.472835-27.764344 10.510809-5.721305 22.857504-4.878101 32.252863 1.204431L945.741499 486.904439z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-houtui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M78.240081 537.116027c-8.73223-5.646604-14.488563-15.494902-14.466049-26.656103 0.032747-11.161201 5.832061-20.922519 14.586804-26.524097l422.893497-270.281773c9.410709-5.996574 21.711354-6.828522 32.194532-1.050935 10.483178 5.734608 16.414504 16.544815 16.414504 27.707039l0 160.855548 363.900547-193.815217c9.476204-5.033643 21.272338-5.120624 31.12104 0.787946 9.871216 5.90857 15.342035 16.369829 15.342035 27.094078l0 553.519626c0 10.767228-5.493333 21.228487-15.385016 27.13808-9.892706 5.90857-21.711354 5.777587-31.188581 0.700965l-363.790026-195.74108 0 162.78141c0 11.205203-5.974306 22.017456-16.479998 27.751041-10.505692 5.733585-22.849317 4.857635-32.260026-1.225921L78.240081 537.116027z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfonttoend" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M711.574896 495.727385l-559.052642-436.849416c-11.420097-9.138124-20.547988-5.136997-20.547988 9.138124l0 887.973954c0 14.275121 9.127891 18.266016 20.547988 9.127891l559.052642-436.839183C722.99397 519.713682 722.99397 504.864486 711.574896 495.727385L711.574896 495.727385zM721.859124 131.97273c0-6.2831 5.710049-11.420097 11.982916-11.420097l146.189524 0c6.855128 0 11.993149 4.001127 11.993149 10.847046l0 763.488755c0 6.844895-5.13802 11.982916-11.993149 11.982916l-146.189524 0c-6.272867 0-11.982916-5.13802-11.982916-11.982916L721.859124 131.97273z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-houtui1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M788.764 118.287c-133.872 78.019-377.177 219.808-525.247 306.106v-299.821c0-34.309-27.812-62.122-62.117-62.122-34.297 0-62.103 27.815-62.103 62.122v372.212c-0.581 0.339-0.895 0.523-0.895 0.523s0.311 0.182 0.895 0.523v372.058c0 34.309 27.809 62.103 62.103 62.103 34.304 0 62.117-27.795 62.117-62.103v-299.662c133.553 77.836 344.571 200.825 482.895 281.437 53.855 32.571 138.079 71.646 138.079-65.991 0-176.682 0-469.007 0-622.287-1.949-78.23-59.317-63.202-95.726-45.097z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qianjin1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M223.098 875.612c134.023-77.755 377.6-219.074 525.845-305.081l-0.583 299.821c-0.066 34.309 27.692 62.175 61.997 62.242 34.297 0.066 62.161-27.692 62.223-62.002l0.727-372.212c0.582-0.336 0.895-0.522 0.895-0.522s-0.311-0.182-0.893-0.523l0.726-372.058c0.066-34.309-27.687-62.161-61.982-62.223-34.304-0.069-62.171 27.673-62.238 61.982l-0.583 299.659c-133.401-78.098-344.179-201.494-482.342-282.378-53.793-32.677-137.937-71.914-138.207 65.724-0.347 176.687-0.914 469.007-1.213 622.287 1.795 78.23 59.193 63.321 95.636 45.281z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M278.324 892.429c0 3.463-1.309 6.906-3.963 9.541-2.635 2.635-6.079 3.963-9.541 3.963h-133.266c-3.463 0-6.925-1.328-9.561-3.963s-3.943-6.098-3.944-9.541v-760.86c0-3.463 1.308-6.906 3.943-9.54 2.654-2.635 6.098-3.963 9.561-3.963h133.266c3.463 0 6.906 1.309 9.541 3.963 2.654 2.635 3.963 6.079 3.963 9.54v760.86z"  ></path>' +
    '' +
    '<path d="M905.95 142.437c0-4.75-2.52-9.349-6.964-11.811s-9.675-2.155-13.716 0.365l-591.366 369.62c-3.829 2.385-6.349 6.616-6.349 11.445s2.519 9.079 6.348 11.465l591.366 369.639c4.040 2.5 9.272 2.808 13.716 0.346s6.964-7.059 6.964-11.81v-739.259z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)