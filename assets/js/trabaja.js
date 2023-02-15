$("input[type='file']").on("change", function(e){
  let self = $(this);
  let filename = e.target.files[0].name; 
  if(filename){
    if(filename.length > 30){
      filename = filename.substring(0,30) + "...";
    }
    self.parent('.flex').find('p:first').text(filename);
  }
});