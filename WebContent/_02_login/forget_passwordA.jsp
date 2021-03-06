<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>忘記密碼-Grab &amp; Go</title>
        <meta name="keywords" content="Grab &amp; Go, 訂餐, 帶著就走, 上班族" />
        <meta name="description" content="短短的午休時間您受夠了在水深火熱中跟人家相爭排隊買午餐嗎? Grab &amp; Go 預約訂餐系統讓您輕鬆帶著走。" />
        <meta name="author" content="Grab &amp; Go">
        <meta name="copyright" content="Grab &amp; Go">
        <meta name="robots" content="index, follow">
        <meta name="GOOGLEBOT" content="index, follow">
        <meta name="distribution" content="GLOBAL">
        <meta property="og:title" content="Grab &amp; Go " />
        <meta property="og:description" content="短短的午休時間您受夠了在水深火熱中跟人家相爭排隊買午餐嗎? Grab &amp; Go 預約訂餐系統讓您輕鬆帶著走。" />
        <meta property="og:site_name" content="Grab &amp; Go" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.chewchew.com.tw" />
        <meta property="og:image" content="http://lovegreenfood.com/gg/fb.jpg" />
        <link rel="image_src" href="http://lovegreenfood.com/gg/fb.jpg" />
        <link rel="SHORTCUT ICON" href="../images/favicon.ico" />
        <link rel="icon" href="../images/favicon.ico" type="image/ico" />
        <!--main css-->
        <link href="../css_web/default.css" rel="stylesheet" type="text/css" />
        <link href="../css_web/styles.css" rel="stylesheet">
        <link href="../css_web/animate.css" rel="stylesheet" type="text/css" />
    </head>

    <body>
        <div class="loginLogo">
            <a href="../indexA.jsp"><img src="../images/share/logo.svg" alt="Grab &amp; Go" title="Grab &amp; Go"></a>
        </div>
        <main class="login wow zoomIn">
            <h2>忘記密碼</h2>
            <p>請填寫以下欄位，我們將發送一封新密碼至您註冊的信箱，收到密碼後請重新登入修改您的密碼，謝謝。</p>
            <form action="ForgetPassword.do" method="post" class="formcontent">
                <div class="loginList">
                    <input type="text" name="eMail" id="eMail" placeholder="請輸入您的E-mail" class="validate[required, custom[email]] text-input"> <span style="margin: 4px 0 0 0;" id="checkMail"></span>
                </div>
                <div class="loginBtn">
                    <input name="reset" type="reset" id="reset" value="重填"> <input name="submit" type="submit" id="sub" value="送出">
                </div>
            </form>
        </main>
        <div id="ttt" class="loading">
            <div class="loadDotted"></div>
            <div class="loadDotted"></div>
            <div class="loadDotted"></div>
        </div>
        <div id="validMsg">
            <br> <a href="#" onclick="closePanel()">確定</a>
        </div>
        <footer>
            <p>Copyright © Garb and Go All rights reserved.</p>
            <a href="#" class="backToTop">TOP</a></footer>
        <!--main js-->
        <!--[if lt IE 8]><script type="text/javascript" src="../javascript/html5.js"></script><![endif]-->
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <!-- form check-->
        <link rel="stylesheet" href="../javascript/validation/validationEngine.jquery.css">
        <script type="text/javascript" charset="utf-8" src="../javascript/validation/languages/jquery.validationEngine-zh_TW.js"></script>
        <script type="text/javascript" charset="utf-8" src="../javascript/validation/jquery.validationEngine.js"></script>
        <!-- form check end-->
        <!--animation js-->
        <script type="text/javascript" src="../javascript/wow.js"></script>
        <!--share js-->
        <script src="../javascript/share.js"></script>
        <script src="../js/forgetPW.js"></script>
    </body>

    </html>
