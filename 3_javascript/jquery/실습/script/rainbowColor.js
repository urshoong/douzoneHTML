$(document).ready(function(){
    // 전체를 선택했을 때 모든 색상이 전체 색상으로 변경되도록,
    // 각각 다른 색을 선택하거나 선택하지 않았을 때 전체 색상이
    // 선택 해제 되도록, reset을 눌렀을 때 모든 색상이 초기화 되도록
    // 소스코드를 작성하신 후 js 폴더를 만들어 rainbowColor.js라는 이름으로
    // 소스 코드를 적용하고 script를 불러와 실행하세요.
    let resetBtn = $("#resetFrm");
    let allBtns = $("#row0").find("[id$=All]");
    let eachBtns = $("td:not(#row0) input[type=checkbox]");

    resetBtn.on('click', () => $("input[type=checkbox]").prop('checked', false));
    allBtns.on('click', (e) => $("td:not(#row0) input[id^=" + e.target.value + "]").prop('checked', e.target.checked));
    eachBtns.on('click', (e) => {
        $("#"+e.target.value+"All").prop('checked', false);
        let btns = [].filter.call($("td:not(#row0) input[id^=" + e.target.value + "]"), cur => $(cur).is(':checked'));
        if(btns.length == $("td:not(#row0) input[id^=" + e.target.value + "]").length) $("#"+e.target.value+"All").prop('checked', true);
    });
});