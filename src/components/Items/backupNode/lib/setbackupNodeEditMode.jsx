import $ from 'jquery'

$(document).ready(function () {
    
    $('.checkbox').on('change',function (event) {
    //  var classes = $("input[type='checkbox']:checked").map(function() {
    //    return this.className;
    //}).get().join(",");
    // returns classes of the different checkboxes alert(classes);
    if($(".checkbox").hasClass("checkbox-checked_js")) {
      console.log('check');
    }else{
      console.log('NOTcheck');
    }
    })
  })