import $ from 'jquery'
import React from 'react'


$(document).ready(function () {
    
    $('.nav-item').on('click', function (event) {
      $('.nav-item').removeClass('nav-item--active');
      $(this).addClass('nav-item--active');
      var eId= $(this).attr("id");
      $('.appmainwindow').removeClass('appmainwindow--active');
      $('.appmainwindow-container').removeClass('appmainwindow-container--active');

     if (eId == "ni_backup") {
        $('.backup-window').addClass('appmainwindow--active');
        $('.backup-container').addClass('appmainwindow-container--active');
     }

     if (eId == "ni_home") {
        $('.home-window').addClass('appmainwindow--active');
        $('.home-container').addClass('appmainwindow-container--active');
     }

     if (eId == "ni_restore") {
      $('.restore-window').addClass('appmainwindow--active');
      $('.restore-container').addClass('appmainwindow-container--active');
     }

     if (eId == "ni_options") {
      $('.options-window').addClass('appmainwindow--active');
      $('.options-container').addClass('appmainwindow-container--active');
     }

     if (eId == "ni_config") {
      $('.config-window').addClass('appmainwindow--active');
      $('.config-container').addClass('appmainwindow-container--active');
     }

    })
  })

