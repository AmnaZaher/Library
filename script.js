//login java
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // منع الإرسال الافتراضي للنموذج
    
    // إعادة توجيه المستخدم إلى الصفحة المطلوبة
    window.location.href = "search.html"; 
});

//index java

function navigateToLogin(userType) {
    window.location.href = "login.html?type=" + userType;
}
