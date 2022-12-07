MicroModal.init();

    window.Components = {
      customSelect(options) {
        return {
          init() {
            this.$refs.listbox.focus();
            this.optionCount = this.$refs.listbox.children.length;
            this.$watch("selected", (value) => {
              if (!this.open) return;

              if (this.selected === null) {
                this.activeDescendant = "";
                return;
              }

              this.activeDescendant =
                this.$refs.listbox.children[this.selected - 1].id;
            });
          },
          activeDescendant: null,
          optionCount: null,
          open: false,
          selected: null,
          value: 1,
          choose(option) {
            this.value = option;
            this.open = false;
          },
          onButtonClick() {
            if (this.open) return;
            this.selected = this.value;
            this.open = true;
            this.$nextTick(() => {
              this.$refs.listbox.focus();
              this.$refs.listbox.children[this.selected - 1].scrollIntoView({
                block: "nearest",
              });
            });
          },
          onOptionSelect() {
            if (this.selected !== null) {
              this.value = this.selected;
            }
            this.open = false;
            this.$refs.button.focus();
          },
          onEscape() {
            this.open = false;
            this.$refs.button.focus();
          },
          onChoise(){
            if(this.value == 1){
              const co = document.querySelector('#inputCorreo');
              const ce = document.querySelector('#inputCelular');
              co.classList.add("hidden");
              ce.classList.add("hidden");
            }
            if(this.value == 2 || this.value == 4){
              const co = document.querySelector('#inputCorreo');
              const ce = document.querySelector('#inputCelular');
              co.classList.add("hidden");
              ce.classList.remove("hidden");
            }
            if(this.value == 3){
              const ce = document.querySelector('#inputCelular');
              const el = document.querySelector('#inputCorreo');
              ce.classList.add("hidden");
              el.classList.remove("hidden");
            }
          },
          onArrowUp() {
            this.selected =
              this.selected - 1 < 1 ? this.optionCount : this.selected - 1;
            this.$refs.listbox.children[this.selected - 1].scrollIntoView({
              block: "nearest",
            });
          },
          onArrowDown() {
            this.selected =
              this.selected + 1 > this.optionCount ? 1 : this.selected + 1;
            this.$refs.listbox.children[this.selected - 1].scrollIntoView({
              block: "nearest",
            });
          },
          ...options,
        };
      },
    };

(function() {
    //formulario
    var tagSelect = document.querySelector(".pseudo-select");
    var cont = document.querySelector(".contenido-select");
    var valo = document.querySelector(".valores");
  $(window).click(function() {
    $('.contenido-select').removeClass("active");
    outSelect();
  });
  $('.cont-select-tab').click(function(event){
     event.stopPropagation();
  });
  if(tagSelect){
    tagSelect.addEventListener("click", function(){
        cont.classList.toggle("active");
        if( !cont.classList.contains("active") ){
          outSelect();
        }
    })
  }
  
  const servicios = [
    {
      nombre: 'Digital Transformation Services',
      select: false,
    },
    {
      nombre: 'Desarrollo de canales digitales',
      select: false,
    },
    {
      nombre: 'Diseño de experiencia digital',
      select: false,
    },
    {
      nombre: 'Automatización',
      select: false,
    },
    {
      nombre: 'IT Staff Augmentation',
      select: false
    },
    {
      nombre: 'Consultoría y modernización tecnológica',
      select: false
    },
    {
      nombre: 'Cloud Solution',
      select: false
    },
    {
      nombre: 'Agile organization',
      select: false
    },
    {
      nombre: 'Gestión de proyectos',
      select: false
    },
    {
      nombre: 'Desarrollo de Software',
      select: false
    }
  ]
  function outSelect(){
    var cn = 0
    var res = 0
    for(let i = 0; i < servicios.length; i++ ){
      if( servicios[i].select ){
        cn++
      }
    }
    valo.innerHTML = "<span class='demspan fs-16 lh-21 text-[#838799]'>Selecciona uno o más servicios</span>";
    //console.log(cn);
    if(cn > 0){
      for(let i = 0; i < servicios.length; i++){
        if( servicios[i].select ){
          document.querySelector(".demspan").style.display = 'none';
          if( cn > 1 ){
            res = cn - 1
            valo.insertAdjacentHTML("beforeend", "<span class='tagS active bg-[#fff] fs-12 lh-[16px] rounded-full p-[8px] border-solid border border-[#006099] mb-[16px] mr-[8px] cursor-pointer'>"+servicios[i].nombre+"</span>");
            valo.insertAdjacentHTML("beforeend", "<span class='tagS active bg-[#fff] fs-12 lh-[16px] rounded-full p-[8px] border-solid border border-[#006099] mb-[16px] mr-[8px] cursor-pointer'>+"+ res +"</span>");
            return
          }else{
            valo.insertAdjacentHTML("beforeend", "<span class='tagS active bg-[#fff] fs-12 lh-[16px] rounded-full p-[8px] border-solid border border-[#006099] mb-[16px] mr-[8px] cursor-pointer'>"+servicios[i].nombre+"</span>");
          }
        }
      }
    }else{
      valo.innerHTML = "<span class='demspan fs-16 lh-21 text-[#838799]'>Selecciona uno o más servicios</span>";
      cn = 0;
    }
  }
    function insertData(p){
      for (let i = 0; i < servicios.length; i++){
        if(p[i].select){
          cont.insertAdjacentHTML("beforeend", "<span class='tagS active bg-[#fff] fs-12 lh-[16px] rounded-full p-[8px] border-solid border border-[#006099] mb-[16px] mr-[8px] cursor-pointer'>"+p[i].nombre+"</span>");
        }else{
          cont.insertAdjacentHTML("beforeend", "<span class='tagS bg-[#fff] fs-12 lh-[16px] rounded-full p-[8px] border-solid border border-[#006099] mb-[16px] mr-[8px] cursor-pointer'>"+p[i].nombre+"</span>");
        }
      }
    }
    insertData(servicios)

    $(".tagS").click(function(){
      $(this).toggleClass("active")
      if( $(this).hasClass("active") ){
        for (let i = 0; i < servicios.length; i++){
          if( servicios[i].nombre == $(this).text()){
            servicios[i].select = true
          }
        }
      }else{
        for (let i = 0; i < servicios.length; i++){
          if( servicios[i].nombre == $(this).text()){
            servicios[i].select = false
          }
        }
      }
      
    })
    //fin formulario
})();