(function($) {
  $(function() {
    var $win = $(window),
        posY;
    
	  
	// 약관동의 전체체크
	$('.agree_area').each(function() {
		// 체크박스 전체 선택
		$(this).on('click', '#ck0', function() {
			$(this).parents('.agree_area').find('input').prop('checked', $(this).is(':checked'));
		});
		// 체크박스 개별 해제시 전체해제, 개별선택 전부했을 때 전체선택 체크
		$(this).on('click', '.normal', function() {
		    var is_checked = true;

			$('.agree_area .normal').each(function(){
				is_checked = is_checked && $(this).is(':checked');
			});

			$('#ck0').prop('checked', is_checked);
		});
	});
	  
	  
	  
	//요청작성하기에서 사진
	var swiper = new Swiper('.wrt_thumb', {
	    slidesPerView: 3.4,
	    spaceBetween: 10,
	    freeMode: true,
	});
    
	
	//리스트에서 삭제버튼(사진삭제,옵션 선택한 상품삭제)
	$('.btn_del').on('click', function() {
		$(this).parents('li').remove();
	});
	
	
	//combobox
	$('.combobox').each(function(){
		var $ul = $(this).find('ul'),
			$li = $(this).find('li'),
			$title = $(this).find('.select_tit'),
			$value; 
		// Hide <ul> initially
		$ul.hide();  
		// Toggle functionality
		$title.click(function(){
			$ul.slideToggle();
		}); 
		// <li> selection functionality
		$li.click(function(){
			$value = $(this).text();
			$title.text($value);
			$ul.slideToggle();
		});
	});
	  
	  
	/*팝업창 - 베이직*/
    $(".js-popbasic-open").on('click', function() {
        $(".js-popbasic").show();
    });
    $(".js-popbasic-close").on('click', function() {
        $(".js-popbasic").hide();
    });
	$(".js-popbasic .dimBg").on('click', function() {
        $(".js-popbasic").hide();
    });
	  
	// 토글 스위치
	$(".js-toggle").on('click', function() {
        $(this).toggleClass('on');
    });
	  
	//가입부분 경고문
	$('.js-warning').on('click', function() {
		$(this).siblings('.warning').css({display: 'block'});
	});
	  
	  
	//date
	/* DateSelector jQuery plugin, replaces date input with select boxes
	 *
	 * In this example generates date and time selectors as Bootstrap 3 button groups.
	 * Selectors order set with 'date-value' attribute on the input element.
	 */

	var selectClass = 'btn btn-default';	// class of select elements
	var dateOptions = {
		alertIncorrectDay: 'Select a correct day!',	// alert message when bad date is selected (such a month day that doesn't exist)
		alertIncomplete: 'Date incomplete!',		// alert message when incomplete date is selected
		checkIncomplete: false,						// check if date is completed (if true and it's incomplete, alerts before message)

		// date and time group. In this example creates date and time selectors as Bootstrap 3 button groups
		dateContainerTag: 'div',					// container for date selectors
		dateContainerClass: 'btn-group date-group',	// date container class
		dateContainerSeparator: false,				// removes date separators
		timeContainerTag: 'div',					// container for
		timeContainerClass: 'btn-group time-group', // time container class
		timeContainerSeparator: false,				// removes time separators

		// each selector
		yearAttr: {									// year selector attributes
			class:    selectClass,					// applies the same class from the selected input to the year selector
			blankTxt: '년'						// select blank text
		},
		monthAttr: {								// month selector attributes
			class:    selectClass,					// applies the same class from the selected input to the month selector
			blankTxt: '월',					// select blank text
			names: {								// options values and names (please note that begins at month 1 )
				1: '01',
				2: '02',
				3: '03',
				4: '04',
				5: '05',
				6: '06',
				7: '07',
				8: '08',
				9: '09',
				10: '10',
				11: '11',
				12: '12'
			}
		},
		dayAttr: {									// day selector attributes
			class:    selectClass,					// applies the same class from the selected input to the day selector
			blankTxt: '일'						// select blank text
		},
		hourAttr: {									// hour selector attributes
			class:    selectClass,					// applies the same class from the selected input to the hour selector
			blankTxt: '시'						// select blank text
		},
		minAttr: {									// minutes selector attributes
			class:    selectClass,					// applies the same class from the selected input to the minute selector
			blankTxt: '분',					// select blank text
			factor:   'fourth' 						// shows only fourth (00, 15, 30, 45) minutes (str options: [halb|fourth|pair|odd])
		},
		secAttr: {									// second selector attributes
			class:    selectClass,					// applies the same class from the selected input to the seconds selector
			blankTxt: '초',					// select blank text
			factor:   '' 							// show al seconds (str options:[halb|fourth|pair|odd])
		}
	};

	// apply dateSelector when document is ready
	// checking if element exists, prevents issues
	if( $('#date_time_input').length > 0)
	{
		$('#date_time_input').dateSelector(dateOptions);
	}
	//년과 일 부분 자리 바꾸기
	$("#dateselector_day").insertAfter("#dateselector_month");
	$("#dateselector_year").insertBefore("#dateselector_month");
	//라벨 넣기
	$('#dateselector_day').after('<label for="dateselector_day">일</label>');
	$('#dateselector_month').after('<label for="dateselector_month">월</label>');
	$('#dateselector_year').after('<label for="dateselector_year">년</label>');
	$('#dateselector_hour').after('<label for="dateselector_hour">:</label>');
    
  });
})(jQuery);