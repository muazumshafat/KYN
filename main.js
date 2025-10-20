// Consolidated scripts extracted from HTML files
/* from about/index.html */
tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0f83bd",
                        "background-light": "#f6f7f8",
                        "background-dark": "#101c22",
                        "text-light": "#111618",
                        "text-dark": "#f6f7f8",
                        "muted-light": "#617c89",
                        "muted-dark": "#a0b1b9",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }

/* from contact/index.html */
tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#001f3f",
              accent: "#4682B4",
              "background-light": "#F5F5F5",
              "background-dark": "#101c22",
              "text-light": "#001f3f",
              "text-dark": "#F5F5F5",
              "text-muted-light": "#808080",
              "text-muted-dark": "#a0aec0",
            },
            fontFamily: {
              display: ["Inter", "sans-serif"],
            },
            borderRadius: {
              DEFAULT: "0.25rem",
              lg: "0.5rem",
              xl: "0.75rem",
              full: "9999px",
            },
          },
        },
      };

/* from departments_section/index.html */
tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#001f3f",
                        "secondary": "#4682B4",
                        "background-light": "#F5F5F5",
                        "background-dark": "#101c22",
                        "card-background-light": "#E0E0E0",
                        "card-background-dark": "#1a2a33",
                        "text-light": "#333333",
                        "text-dark": "#e5e7eb"
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "full": "9999px"
                    },
                },
            },
        }

/* from events/index.html */
tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0f83bd",
                        "background-light": "#f6f7f8",
                        "background-dark": "#101c22",
                        "navy": "#101c22", 
                        "teal": "#0f83bd", 
                        "soft-grey": "#dbe2e6",
                        "off-white": "#f6f7f8",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }

/* from index.html */
tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#39CCCC",
            "background-light": "#F5F5F5",
            "background-dark": "#001F3F",
            "navy": "#001F3F",
            "off-white": "#FFFFFF"
          },
          fontFamily: {
            "display": ["Montserrat", "sans-serif"]
          },
          borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
        },
      },
    };

/* from join/index.html */
tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0D5C63",
                        "background-light": "#F8F9FA",
                        "background-dark": "#101c22",
                        "text-light": "#343A40",
                        "text-dark": "#E9ECEF",
                        "accent": "#5C9EAD",
                        "border-light": "#E9ECEF",
                        "border-dark": "#343A40",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "full": "9999px"
                    },
                },
            },
        }



// ===== UI Polish JS Enhancements =====
// Mobile nav toggle (will create a simple toggle if nav exists)
document.addEventListener('DOMContentLoaded', function(){
  try{
    // Add smooth scroll for internal anchors
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        var target = document.querySelector(this.getAttribute('href'));
        if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
      });
    });
    // Mobile toggle: look for .nav-toggle and .nav-menu classes; if not found add minimal behavior
    var toggles = document.querySelectorAll('.nav-toggle');
    toggles.forEach(t => {
      t.addEventListener('click', function(){
        var menu = document.querySelector(this.dataset.target || '.nav-menu');
        if(menu) menu.classList.toggle('open');
      });
    });
    // Progressive enhancement: if no toggle exists, try to add a floating top "Menu" button on mobile
    if(window.matchMedia('(max-width:720px)').matches && document.querySelectorAll('nav .nav-menu').length==0){
      var nav = document.querySelector('nav') || document.querySelector('header');
      if(nav){
        var badge = document.createElement('button');
        badge.className='btn secondary nav-toggle';
        badge.textContent='Menu';
        badge.dataset.target='.site-nav-auto';
        // create menu wrapper
        var menuDiv = document.createElement('div');
        menuDiv.className='site-nav-auto card nav-menu';
        menuDiv.style.display='none';
        // collect links to clone
        var links = nav.querySelectorAll('a');
        links.forEach(l=> menuDiv.appendChild(l.cloneNode(true)));
        nav.appendChild(badge);
        nav.appendChild(menuDiv);
        badge.addEventListener('click', function(){ 
          if(menuDiv.style.display=='none'){ menuDiv.style.display='block'; menuDiv.classList.add('open'); }
          else{ menuDiv.style.display='none'; menuDiv.classList.remove('open'); }
        });
      }
    }
    // Improve forms: prevent empty submit and show simple confirmation
    document.querySelectorAll('form').forEach(f => {
      f.addEventListener('submit', function(e){
        var hasAction = (f.getAttribute('action')||'').trim() !== '';
        if(!hasAction){
          e.preventDefault();
          alert('This form does not have a submission endpoint. Use Formspree or Netlify Forms, or provide an action URL.');
        }
      });
    });
  }catch(err){ console.warn('UI polish script error', err); }
});
