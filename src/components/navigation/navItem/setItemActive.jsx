import $ from 'jquery'
import React from 'react'


$(document).ready(function () {
    
    $('.nav-item').on('click', function (event) {
      $('.nav-item').removeClass('nav-item--active');
      $(this).addClass('nav-item--active');
      var eId= $(this).attr("id");
      $('.appmainwindow').removeClass('appmainwindow--active');

     if (eId == "ni_backup") {
        $('.backup-window').addClass('appmainwindow--active');
     }

     if (eId == "ni_home") {
        $('.home-window').addClass('appmainwindow--active');
     }

     if (eId == "ni_restore") {
        $('.restore-window').addClass('appmainwindow--active');
     }

    })
  })

