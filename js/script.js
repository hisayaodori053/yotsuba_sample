jQuery(function($){

    /*　ページ表示時にFVテキストをアニメーション表示
    *-----------------------------------*/
    jQuery(".fv__ttl, .fv__txt").addClass("_show");

    /* スクロール位置がFVより下にの時、追従メニューを表示する
    *-----------------------------------*/
    //fv高さを取得
    var fvHeight = jQuery("#fv").height();

    //スクロール位置格納用変数
    var scrPos;

    //スクロールの度に判定
    jQuery(window).on("scroll",function(){

        //現在のスクロール位置を取得
        scrPos = jQuery(window).scrollTop();

        //現在のスクロール位置がFVの高さより大きい場合
        if(scrPos >= fvHeight){
            jQuery(".header__nav-btn, .header__linebtn").addClass("_show")
        }else {
            jQuery(".header__nav-btn, .header__linebtn").removeClass("_show");
        }

    });



    /* ハンバーガーメニュー
    *-----------------------------------*/
    //メニュー開閉チェック変数
    var openStatus = false;

    //現在のスクロール位置を保持する変数
    var scrollPosition;

    //開閉チェック関数
    function openCheck() {

        //閉じている場合
        if(openStatus == false){

            //現在のスクロール位置の取得
            scrollPosition = jQuery(window).scrollTop();

            //クラスの付与
            jQuery('body').addClass('_fixed').css('top',-scrollPosition);
            jQuery('#hamburger-btn').addClass('_open');
            jQuery('#hamburger-overlay').addClass('_open');
            jQuery('#hamburger-cont').addClass('_open');

            //変数を「開」状態に変更
            openStatus = true;


        //開いている場合
        }else{

            //クラスの除去
            jQuery('body').removeClass('_fixed').css('top','0');
            jQuery('#hamburger-btn').removeClass('_open');
            jQuery('#hamburger-overlay').removeClass('_open');
            jQuery('#hamburger-cont').removeClass('_open');

            //今の高さへ移動
            window.scrollTo(0,scrollPosition);

            //変数を「閉」状態に変更
            openStatus = false;
        }
    }

    //メニューボタンがクリックされた時の処理
    jQuery('#hamburger-btn, #hamburger-overlay, .header__nav-overlay-nav li a').click(function(){
        openCheck();
    });

    // #humberger-overlayをクリックしたときに、contの方にイベントを伝播させない
    jQuery('#hamburger-cont').on('click',function(e){
        e.stopPropagation();
    });

    /* 診療内容のトグルメニュー
    *-----------------------------------*/
   jQuery(".treatment__item-ttl01").click(function(){

        //クラスの付け外し
        jQuery(this).toggleClass("_open");

        //隣接要素をスライドトグル
        jQuery(this).next(".treatment__item-cont").slideToggle();

   });




    /*　スクロール位置がコンテンツまできた時、
    /*　コンテンツをアニメーション表示する
    *-----------------------------------*/
   //スクロールのたびに処理を実行
    jQuery(window).on("scroll",function(){
        scrollViewContents(".slide-right, .slide-left, .slide-up, .fade",);
    });

    //コンテンツが表示されたらクラスを付与
   function scrollViewContents(target) {

        var scr = jQuery(window).scrollTop() + jQuery(window).height();

        jQuery(target).each(function(){
            if(scr >= jQuery(this).offset().top){

                jQuery(this).addClass("_view");

            }
        });
   }

});